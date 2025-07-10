import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @Prop({ required: true, unique: true })
  name: string; // e.g., 'Admin', 'Staff', 'Advocate'
}

export const RoleSchema = SchemaFactory.createForClass(Role);