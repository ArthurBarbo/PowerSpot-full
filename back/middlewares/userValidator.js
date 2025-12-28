import Joi from 'joi';

export const registerSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const updateNameSchema = Joi.object({
  name: Joi.string().trim().min(2).max(20)
    .required()
    .messages({
      'string.empty': 'O nome não pode estar vazio',
      'string.max': 'O nome não pode exceder 20 caracteres',
      'any.required': 'O nome é obrigatório',
    }),
});
