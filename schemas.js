import Joi from "joi";
import regaxs from "./src/regax";

export const createUserValues = {
    name: {
      first: "",
      last: "",
    },
    email: "",
    phone: "",
    password: "",
  }

export const createUserValidateSchema = Joi.object({
    name: Joi.object({
      first: Joi.string().min(2).max(255).required().label("First Name"),
      last: Joi.string().min(2).max(255).required().label("Last Name"),
    }).required(),
    email: Joi.string().min(6).max(255).required().label("Email"),
    phone: Joi.string().min(9).max(11).required().label("Phone"),
    password: Joi.string()
      .min(7)
      .max(20)
      .required()
      .pattern(regaxs.passwordRegexSignUp)
      .message(
        "must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*- "
      ),
    picture: Joi.string().allow("").label("Picture"),
  })

  export const createTaskValues = {
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
    category: "Other",
  }

  export const createTaskScehma = Joi.object({
          title: Joi.string().min(2).max(255).required().label("Task Title"),
          description: Joi.string().min(10).max(1024).required(),
          priority: Joi.string().valid("Low", "Medium", "High").required(),
          category: Joi.string()
            .valid("Cleaning", "Recovery", "Printing", "Assembly", "Other")
            .default("Other")
            .required(),
          dueDate: Joi.string().required().label("Due Date"),
        });

export const editTaskValues ={
  title: "",
  description: "",
  dueDate: "",
  priority: "Medium",
  category: "Other",
  assignedTo: {
    user_id: "",
    name: "",
  },
}

export const editTaskSchema = Joi.object({
        title: Joi.string().min(2).max(255).required().label("Task Title"),
        description: Joi.string().min(10).max(1024).required(),
        priority: Joi.string().valid("Low", "Medium", "High").required(),
        category: Joi.string()
          .valid("Cleaning", "Recovery", "Printing", "Assembly", "Other")
          .default("Other")
          .required(),
        dueDate: Joi.string().required().label("Due Date"),
        assignedTo: Joi.object({
          user_id: Joi.string().allow(null,""),
          name: Joi.string().allow(null,""),
        }).label("Assigned To"),
      });