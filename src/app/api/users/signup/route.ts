import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import UserProfile from "@/app/profile/[id]/page"


connect()

export  async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        // check if user already exists
        const user = await User.findOne({email})
        if(user) {
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        // hash password
        const salt = await bcrypt.genSalt(10)

    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status: 500})
    }
}