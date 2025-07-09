import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from './schemas/profile.schema';

@Injectable()
export class ProfileService {
  constructor(@InjectModel(Profile.name) private profileModel: Model<ProfileDocument>) {}

  async create(profile: Profile): Promise<Profile> {
    const newProfile = new this.profileModel(profile);
    return newProfile.save();
  }

  async findAll(): Promise<Profile[]> {
    return this.profileModel.find().exec();
  }

  async findOne(id: string): Promise<Profile | null> {
    return this.profileModel.findById(id).exec();
  }

  async update(id: string, profile: Profile): Promise<Profile | null> {
    return this.profileModel.findByIdAndUpdate(id, profile, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.profileModel.findByIdAndDelete(id).exec();
  }
}