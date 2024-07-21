import Joi from "joi";
import { joiSchema } from "./schema";

const signUp = Joi.object({
  name: joiSchema.stringSchame.required().min(3).max(50).label("Name"),
  email: joiSchema.emailSchema.required().label("E-mail"),
  password: joiSchema.stringSchame.required().min(8).label("Password"),
});

const verifyAccount = Joi.object({
  email: joiSchema.emailSchema.required().label("E-mail"),
  verificationCode: joiSchema.numberSchema
    .required()
    .label("Verification code"),
});

const resendVerificationCode = Joi.object({
  email: joiSchema.emailSchema.required().label("E-mail"),
});

const login = Joi.object({
  email: joiSchema.emailSchema.required().label("E-mail"),
  password: joiSchema.stringSchame.required().min(8).label("Password"),
});

export { signUp, verifyAccount, resendVerificationCode, login };
