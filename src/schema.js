import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required("Name is a required field.").min(4,"Name must be at least 4 characters."),
  email: yup.string().email("Must be a valid email address").required("Email is a required field."),
  password: yup.string().required("Password is a required field.").min(6,"Password must be at least 6 characters."),
  terms: yup.boolean().oneOf([true], "You must accept the terms and conditions."),
})

export default schema