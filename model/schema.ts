import mongoose, { Schema, model } from "mongoose";

const loginPassportSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true, versionKey: false }
);
loginPassportSchema.set("toJSON", {
  virtuals: true,
});
const users = model("user", loginPassportSchema);
export default users;
