"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        "service_94pq7lo",
        "template_ph289bp",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Nc_hirJQUryI5wEad"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="max-w-md mx-auto my-10 p-6 rounded-2xl shadow-lg bg-bgcolorless">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border-2 border-gray/50 dark:border-bordercolor outline-none focus:border-emerald-300 dark:focus:border-emerald-700"
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
            className="w-full px-4 py-2 rounded-lg border-2 border-gray/50 dark:border-bordercolor outline-none focus:border-emerald-300 dark:focus:border-emerald-700"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border-2 border-gray/50 dark:border-bordercolor focus:border-emerald-300 dark:focus:border-emerald-700 outline-none"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors cursor-pointer"
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
