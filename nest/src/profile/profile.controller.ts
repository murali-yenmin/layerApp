import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './schemas/profile.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post()
  async create(@Body() profile: Profile) {
    return this.profileService.create(profile);
  }

  @Get()
  async findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() profile: Profile) {
    return this.profileService.update(id, profile);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.profileService.delete(id);
  }
}
