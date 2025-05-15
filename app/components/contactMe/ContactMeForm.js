"use client";

import { useState } from "react";

export default function ContactMeForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    contactName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("Submitting form data:", formData);

      const response = await fetch("/api/data/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        // If not JSON, get the text and log it
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server returned non-JSON response");
      }

      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      // Clear form on success
      setFormData({ contactName: "", email: "", message: "" });
      setSubmitStatus({
        success: true,
        message: "Message sent successfully!"
      });

      // Call the onSuccess callback if provided
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
    <form onSubmit={handleSubmit} className='mx-auto w-full pt-10 sm:w-3/4'>
      {/* Status message */}
      {submitStatus && (
        <div
          className={`mb-4 p-3 rounded ${submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className='flex flex-col md:flex-row'>
        <input
          id='contactName'
          name='contactName'
          value={formData.contactName}
          onChange={handleChange}
          className='mr-3 w-full rounded border-secondary-slate px-4 py-3 font-body text-black md:w-1/2 lg:mr-5'
          placeholder='Name'
          type='text'
          required
        />
        <input
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='mt-6 w-full rounded border-secondary-slate px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5'
          placeholder='Email'
          type='email'
          required
        />
      </div>
      <textarea
        id='message'
        name='message'
        value={formData.message}
        onChange={handleChange}
        className='mt-6 w-full rounded border-secondary-slate px-4 py-3 font-body text-black md:mt-8'
        placeholder='Message'
        cols='30'
        rows='10'
        required
      ></textarea>
      <div className="flex flex-col items-center">
      <button
        type='submit'
        disabled={isSubmitting}
        className='mt-6 flex items-center justify-center rounded bg-primary-green px-8 py-3 text-lg font-bold uppercase text-zinc-font hover:bg-primary-slate disabled:opacity-50'
        >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
        </div>
    </form>
  );
}
