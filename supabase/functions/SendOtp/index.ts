import { sendOtp } from "../_handler/SendOtpHandler.ts";
import { verifyOtp } from "../_handler/VerifyOtp.ts";

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const pathParts = url.pathname.split("/").filter(Boolean); // Remove empty strings
  const lastPath = pathParts[pathParts.length - 1]; // Get the last part of the path

  // Only allow POST method for specific routes
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  if (lastPath === "send-otp") {
    return await sendOtp(req);
  } else if (lastPath === "verify-otp") {
    return await verifyOtp(req);
  } else {
    return new Response(JSON.stringify({ error: "Route not found" }), { status: 404 });
  }
});
