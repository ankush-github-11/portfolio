"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      // You can replace this with API or EmailJS logic
      console.log("Form submitted:", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="max-w-md mx-auto my-10 p-6 rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-bordercolor outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-900"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-bordercolor outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-900"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-bordercolor focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-900 outline-none"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-sm text-emerald-600 dark:text-emerald-400">
          {status}
        </p>
      )}
    </section>
  );
};

export default ContactForm;
