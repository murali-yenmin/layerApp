import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role, RoleDocument } from './schemas/role.schema';

@Injectable()
export class RoleService implements OnModuleInit {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  async onModuleInit() {
    await this.ensureDefaultRolesExist();
  }

  private async ensureDefaultRolesExist() {
    const defaultRoles = ['Admin', 'Staff', 'Advocate', 'Manager'];

    for (const roleName of defaultRoles) {
      const role = await this.roleModel.findOne({ name: roleName });
      if (!role) {
        await this.roleModel.create({ name: roleName });
        console.log(`Role '${roleName}' created.`);
      }
    }
  }

  async findByName(name: string): Promise<Role | null> {
    return this.roleModel.findOne({ name }).exec();
  }

  async findAll(): Promise<Role[]> {
    return this.roleModel.find().exec();
  }

  async create(name: string): Promise<Role> {
    const newRole = new this.roleModel({ name });
    return newRole.save();
  }
}