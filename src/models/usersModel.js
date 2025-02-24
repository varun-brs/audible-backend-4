// import { verify } from "jsonwebtoken";
import mongoose from "mongoose";

// const userSchema = mongoose.Schema(
//   {
//     first_name: { type: String, default: null },
//     last_name: { type: String, default: null },
//     email: { type: String, unique: true },
//     password: { type: String },
//     languages: { type: Array },
//     categories: { type: Array },
//     saved_stories: { type: Array },
//     token: { type: String },
//     verified: { type: Boolean, default: false },
//     verify_token: { type: String },
//     verify_token_expires: Date,
//     reset_password_token: { type: String },
//     reset_password_expires: Date,
//     status: { type: Boolean, default: true },
//   },
//   {
//     timestamps: {
//       createAt: "created_at",
//       updateAt: "updated_at",
//     },
//   }
// );
const userSchema = mongoose.Schema(
  {
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String },
    languages: { type: Array, default: [] }, // Add default value for languages
    categories: { type: Array },
    saved_stories: { type: Array },
    token: { type: String },
    verified: { type: Boolean, default: false },
    verify_token: { type: String },
    verify_token_expires: Date,
    reset_password_token: { type: String },
    reset_password_expires: Date,
    status: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: {
      createdAt: "created_at", // Fix typo: `createAt` -> `createdAt`
      updatedAt: "updated_at", // Fix typo: `updateAt` -> `updatedAt`
    },
  }
);
const User = mongoose.model("User", userSchema);

export default User;