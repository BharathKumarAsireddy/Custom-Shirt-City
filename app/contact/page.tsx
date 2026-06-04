"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "4500 Belvedere Rd, Suite G\nWest Palm Beach, FL 33415",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "561-718-9193",
      href: "tel:5617189193",
    },
    {
      icon: Mail,
      label: "Email",
      value: "printablelogos@gmail.com",
      href: "mailto:printablelogos@gmail.com",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon–Fri: 9am – 6pm\nSat: 10am – 3pm",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <StarsBackground className="py-16 px-4 w-full">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Have a question or ready to place an order? We'd love to hear from you.
          </p>
        </div>
      </StarsBackground>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#1a2744] mb-2">Contact Information</h2>
              <p className="text-gray-500 text-sm">
                Reach out directly or visit us at our West Palm Beach facility.
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#1a2744] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#f59e0b]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-[#1a2744] font-medium hover:text-[#f59e0b] transition-colors whitespace-pre-line text-sm"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#1a2744] font-medium whitespace-pre-line text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden bg-gray-200 h-48 flex items-center justify-center mt-4">
              <iframe
                title="Custom Shirt City Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.7!2d-80.1!3d26.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQyJzAwLjAiTiA4MMKwMDYnMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="192"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-[#1a2744] mb-2">Message Sent!</h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 1 business day.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-[#1a2744] mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a2744] focus:outline-none text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a2744] focus:outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(561) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a2744] focus:outline-none text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a2744] focus:outline-none text-sm transition-colors bg-white"
                      >
                        <option value="">Select subject</option>
                        <option>Custom Order Inquiry</option>
                        <option>Bulk / Corporate Order</option>
                        <option>Rush Order</option>
                        <option>Design Help</option>
                        <option>Existing Order</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project — quantity, style, timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a2744] focus:outline-none text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#1a2744] text-white font-bold py-4 rounded-xl hover:bg-[#f59e0b] hover:text-[#1a2744] transition-colors disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <Send size={16} />
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
