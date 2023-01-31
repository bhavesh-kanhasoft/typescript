import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
    email: string;
    first_name: string;
    last_name: string;
    created_at?: Date;
    updated_at?: Date;
  }

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  });
  
  export default mongoose.model<User>('User', UserSchema);