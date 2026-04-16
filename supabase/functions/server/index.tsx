import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-6d585635/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-6d585635/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { firstName, lastName, email, company, jobTitle, callVolume, telephonyStack, notes } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get("EMAIL_API_KEY");
    if (!resendApiKey) {
      console.log("Authorization error: EMAIL_API_KEY not configured in Supabase settings");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Build email HTML
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Job Title:</strong> ${jobTitle || 'Not specified'}</p>
      <p><strong>Daily Call Volume:</strong> ${callVolume || 'Not specified'}</p>
      <p><strong>Current Telephony Stack:</strong> ${telephonyStack || 'Not specified'}</p>
      <p><strong>Additional Notes:</strong></p>
      <p>${notes || 'None'}</p>
    `;

    // Send email via Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Relay Contact Form <onboarding@resend.dev>",
        to: "michael@getrelay.now",
        subject: `Contact Form: ${firstName} ${lastName} - ${company}`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.log(`Resend API error while sending contact form email: ${errorData}`);
      return c.json({ error: "Failed to send email" }, 500);
    }

    const resendData = await resendResponse.json();
    console.log("Email sent successfully:", resendData);

    return c.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.log(`Server error while processing contact form: ${error}`);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);