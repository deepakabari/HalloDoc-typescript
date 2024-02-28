import JoiBase from "joi";
import JoiDate from '@joi/date';
const Joi = JoiBase.extend(JoiDate);

const passRegex =
    "(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!#.])[A-Za-zd$@$!%*?&.]{8,20}";

const userSchema = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required().regex(RegExp(passRegex)),
    firstName: Joi.string().required(),
    lastName: Joi.string().optional(),
    email: Joi.string().email(),
    phoneNumber: Joi.string().min(10).max(10).required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.string().required(),
    dob: Joi.date().format("YYYY-MM-DD").raw().required(),
    status: Joi.number().optional(),
});

export default userSchema;
