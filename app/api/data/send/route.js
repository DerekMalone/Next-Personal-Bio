import { ContactMeEmail } from "@/app/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Proper Next.js API route handler
export async function POST(request) {
  try {
    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY); // Remove NEXT_PUBLIC_ prefix

    // Parse the request body from the form submission
    const body = await request.json();
    const { contactName, email, message } = body;

    // Validate inputs
    if (!contactName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("Sending email with:", { contactName, email, message });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      // from: "Website.Contact.Form@derekmalone.dev", // Use a verified domain or the Resend default sender
      from: "DMWebsiteContact@derekmalone.dev",
      to: "laxmalone@gmail.com",
      subject: "Contact Form Submission",
      react: ContactMeEmail({
        contactName,
        email,
        message
      })
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
