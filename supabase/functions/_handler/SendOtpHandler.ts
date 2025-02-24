import { sendOtpToPhone } from "../_repository/SendOtpRepo.ts";

export async function sendOtp(req: Request) : Promise<Response> {
    const { phoneNo } = await req.json();

    console.log("Received a request to send OTP to: ", phoneNo);

    if(!phoneNo) {
        console.log("Phone number is required");
        return new Response(JSON.stringify({ message: "Phone number is required" }), { status: 400 });
    }

    console.log("Sending OTP to ", phoneNo);
    const{data,error}=await sendOtpToPhone(phoneNo);

    if(error) { 
        console.log("Error occurred while sending OTP: ", error.message);
        return new Response(JSON.stringify({ message: error.message }), { status: 400 });
    }

    console.log("OTP sent successfully");
    return new Response(JSON.stringify({ message: "OTP sent successfully" }), { status: 200 });
}