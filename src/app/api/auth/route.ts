import { NextRequest,NextResponse } from "next/server";
import { emailauth } from "@/lib/controller/authController";

export async function POST(req:NextRequest) {
    return emailauth(req);
}