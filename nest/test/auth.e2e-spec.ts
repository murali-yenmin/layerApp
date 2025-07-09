import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let mongod: MongoMemoryServer;

  beforeEach(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forRoot(uri),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
    await mongod.stop();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/auth/register (POST) - successful registration', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body.username).toBe('testuser');
        expect(res.body.email).toBe('test@example.com');
        expect(res.body.password).toBeUndefined(); // Password should not be returned
      });
  });

  it('/auth/login (POST) - successful login', async () => {
    // First, register a user
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        username: 'loginuser',
        email: 'login@example.com',
        password: 'password123',
      })
      .expect(201);

    // Then, attempt to log in
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'loginuser',
        password: 'password123',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('access_token');
      });
  });

  it('/auth/login (POST) - failed login (wrong password)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'nonexistentuser',
        password: 'wrongpassword',
      })
      .expect(401); // Unauthorized
  });

  it('/auth/login (POST) - failed login (user not found)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'definitelynotfounduser',
        password: 'anypassword',
      })
      .expect(401); // Unauthorized
  });

  it('/profile/me (GET) - access with valid token', async () => {
    // Register and login a user to get a valid token
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        username: 'protecteduser',
        email: 'protected@example.com',
        password: 'password123',
      })
      .expect(201);

    const loginRes = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'protecteduser',
        password: 'password123',
      })
      .expect(201);

    const accessToken = loginRes.body.access_token;

    return request(app.getHttpServer())
      .get('/profile/me')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.username).toBe('protecteduser');
      });
  });

  it('/profile/me (GET) - access without token', () => {
    return request(app.getHttpServer())
      .get('/profile/me')
      .expect(401); // Unauthorized
  });

  it('/profile/me (GET) - access with invalid token', () => {
    return request(app.getHttpServer())
      .get('/profile/me')
      .set('Authorization', 'Bearer invalidtoken')
      .expect(401); // Unauthorized
  });
});
