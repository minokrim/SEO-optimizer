import { emailAuth } from "../service/authService";
import { NextResponse,NextRequest } from "next/server";
export const emailauth=async(req:NextRequest)=>{
    const {email,pass}=await req.json();

    try {
        const response=await emailAuth(email,pass);
        return NextResponse.json({message:"signed up successfully",response},{status:200})
    } catch (error) {
        return NextResponse.json({message:error},{status:400})
    }
}