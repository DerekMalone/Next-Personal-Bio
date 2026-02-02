"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactMeForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    contactName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/data/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server returned non-JSON response");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setFormData({ contactName: "", email: "", message: "" });
      setSubmitStatus({ success: true, message: "Message sent successfully!" });

      if (onSuccess && typeof onSuccess === "function") {
        onSuccess();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: error.message || "Failed to send message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full pt-10 sm:w-3/4">
      {submitStatus && (
        <div
          className={`mb-4 p-3 rounded ${
            submitStatus.success
              ? "bg-brand-teal/20 text-brand-forest dark:text-brand-light"
              : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="flex flex-col gap-6 md:flex-row md:gap-4 lg:gap-6">
        <div className="w-full md:w-1/2 space-y-2">
          <Label htmlFor="contactName">Name</Label>
          <Input
            id="contactName"
            name="contactName"
            type="text"
            value={formData.contactName}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="w-full md:w-1/2 space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={10}
          required
        />
      </div>

      <div className="flex justify-center mt-6">
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="bg-brand-forest hover:bg-brand-teal text-brand-light uppercase font-bold px-8"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </div>
    </form>
  );
}
