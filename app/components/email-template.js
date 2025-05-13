import * as React from "react";

export const EmailTemplate = ({ contactName, email, message }) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>You received a new message from your website contact form.</p>

    <div
      style={{
        margin: "20px 0",
        padding: "15px",
        borderLeft: "4px solid #d0d0d0"
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <strong>Name:</strong> {contactName}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Message:</strong>
        <p style={{ marginTop: "5px", whiteSpace: "pre-wrap" }}>{message}</p>
      </div>
    </div>

    <p>You can reply directly to this email to respond to {contactName}.</p>
  </div>
);

export default EmailTemplate;
