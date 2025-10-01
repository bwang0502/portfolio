// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ContactForm = { name: string; email: string; message: string };
type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  // Don't force non-null here; we'll guard at submit time
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (!endpoint) {
      setStatus("error");
      setErrorMsg("Contact endpoint is not configured.");
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setErrorMsg(message);
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-gray-900 text-gray-100 py-16"
    >
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-lg mx-auto bg-gray-800 text-gray-100 rounded-xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-white">Contact Me</h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-200">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-600 rounded-md bg-gray-700 text-gray-100 p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-200">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-600 rounded-md bg-gray-700 text-gray-100 p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              />
            </div>

            {/* Message spans full width */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-1 text-gray-200">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full border border-gray-600 rounded-md bg-gray-700 text-gray-100 p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit button spans full width */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:col-span-2 bg-indigo-600 text-white px-4 py-3 rounded-md hover:bg-indigo-700 transition disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-green-500">Thank you! Your message has been sent.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-500">Error: {errorMsg}</p>
          )}
        </div>
      </div>
    </motion.section>
  );
}

