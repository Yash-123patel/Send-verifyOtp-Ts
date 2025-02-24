import { verifyOtpForPhone } from "../_repository/SendOtpRepo.ts";
export async function verifyOtp(req:Request) {
    
    const {phoneNo,Otp}=await req.json();

    if(!phoneNo){
        console.log("Phone number is required");
        return new Response(JSON.stringify({ message: "Phone number is required" }), { status: 400 });
    }
    if(!Otp){
        console.log("otp is required");
        return new Response(JSON.stringify({ message: "otp is required" }), { status: 400 });
    }

    const{data,error}=await verifyOtpForPhone(phoneNo,Otp);

     if(error) { 
        console.log("Error occurred while sending OTP: ", error.message);
        return new Response(JSON.stringify({ message: error.message }), { status: 400 });
    }

    console.log("OTP sent successfully");
    return new Response(JSON.stringify({ message: "OTP verify successfully" }), { status: 200 });
}