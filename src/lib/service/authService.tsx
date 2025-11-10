import supabase from "../config/db"

export const emailAuth=async(email:string,password:string)=>{
    const { data, error } = await supabase.auth.signUp({
  email: email,
  password: password,
})

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, user: data.user };
}