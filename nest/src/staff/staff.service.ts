import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff, StaffDocument } from './schemas/staff.schema';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Injectable()
export class StaffService {
  constructor(@InjectModel(Staff.name) private staffModel: Model<StaffDocument>) {}

  async create(createStaffDto: CreateStaffDto): Promise<Staff> {
    const createdStaff = new this.staffModel(createStaffDto);
    return createdStaff.save();
  }

  async findAll(): Promise<Staff[]> {
    return this.staffModel.find().exec();
  }

  async findOne(id: string): Promise<Staff> {
    return this.staffModel.findById(id).exec();
  }

  async update(id: string, updateStaffDto: UpdateStaffDto): Promise<Staff> {
    return this.staffModel.findByIdAndUpdate(id, updateStaffDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.staffModel.findByIdAndDelete(id).exec();
  }
}
