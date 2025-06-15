interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: data.name,         // 🧩 Matches: {{from_name}}
          from_email: data.email,       // 🧩 Matches: {{from_email}} (used in Reply-To)
          subject: data.subject,        // 🧩 Matches: {{subject}}
          message: data.message,        // 🧩 Matches: {{message}}
          to_name: "Peregrine",         // (optional) Matches: {{to_name}}, for style
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS Response Error:", errorText);
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
}
