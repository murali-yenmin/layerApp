import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../user/entities/user.entity';

@Schema({ timestamps: true })
export class Profile extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true, unique: true })
  user: Types.ObjectId;

  @Prop({ required: false })
  firstName: string;

  @Prop({ required: false })
  lastName: string;

  @Prop({ required: false })
  bio: string;

  @Prop({ required: false })
  profilePictureUrl: string;

  @Prop({ required: false })
  phoneNumber: string;

  @Prop({ required: false })
  address: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
