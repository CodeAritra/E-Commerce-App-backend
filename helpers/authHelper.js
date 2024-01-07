import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltround = 10;
    const hasedpassword = await bcrypt.hash(password, saltround);
    return hasedpassword;
  } catch (error) {
    console.log(error);
  }
};



export const comparepassword = async (password, hasedpassword) => {
  return bcrypt.compare(password, hasedpassword);
};
