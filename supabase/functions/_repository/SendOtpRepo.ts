import supabase from "../_shared/DbConfig.ts";

export async function sendOtpToPhone(phoneNo: string) {
    console.log("Initiating OTP send process for phone number:", phoneNo);

    let { data, error } = await supabase.auth.signInWithOtp({
        phone: phoneNo
    });

    if (error) {
        console.log("Error occurred while sending OTP:", error.message);
    } else {
        console.log("OTP sent successfully, data received:", data);
    }

    return { data, error };
}



export async function verifyOtpForPhone(phoneNo:string,otp:string) {  
let { data, error } = await supabase.auth.verifyOtp({
    phone: phoneNo,
    token: otp,
    type: 'sms'
  })

  return {data,error};
  
    
}