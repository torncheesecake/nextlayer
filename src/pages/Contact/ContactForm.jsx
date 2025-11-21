import { useState } from "react";
import { Mail, Send, User, Building2, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    website: "", // honeypot anti-spam
  });
  const [status, setStatus] = useState("idle");
  const [emailError, setEmailError] = useState("");
  const [touched, setTouched] = useState({ email: false });

  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("idle");

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    setStatus("sending");

    const formData = new URLSearchParams(form).toString();

    try {
      const response = await fetch("send-contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: formData,
      });
      const result = await response.json();

      if (result.status === "success") {
        setStatus("success");
        setForm({ name: "", company: "", email: "", message: "", website: "" });
        setTouched({ email: false });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="w-full">
      <form
        className="p-8 md:p-10 space-y-6 shadow-xl bg-white dark:bg-graphite rounded-2xl border-4 border-bittersweet dark:border-bittersweet-dark2 hover:shadow-2xl transition-shadow duration-500"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Intro hint */}
        <div className="pb-4 border-b-2 border-bittersweet/20 dark:border-bittersweet-dark2/20">
          <h2 className="text-2xl font-bold text-graphite dark:text-seasalt mb-2">
            Send us a message
          </h2>
          <p className="text-base text-graphite/80 dark:text-seasalt/80">
            Share a few details so our consultant can respond quickly. Fields
            with a star (<span className="text-bittersweet">*</span>) are
            required.
          </p>
        </div>

        {/* Live region for async status (SR only) */}
        <p className="sr-only" role="status" aria-live="polite">
          {status === "sending"
            ? "Sending"
            : status === "success"
              ? "Message sent"
              : status === "error"
                ? "There was an error"
                : ""}
        </p>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="flex items-center gap-2 mb-3 font-semibold text-graphite dark:text-seasalt"
          >
            <User className="h-5 w-5 text-bittersweet dark:text-bittersweet-dark2" />
            Your Name{" "}
            <span
              aria-hidden="true"
              className="text-bittersweet dark:text-bittersweet-dark2"
            >
              *
            </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            inputMode="text"
            className="w-full px-4 py-3 transition rounded-lg text-graphite bg-seasalt dark:bg-techblack dark:text-seasalt border-2 border-gray-200 dark:border-gray-700 focus:border-bittersweet dark:focus:border-bittersweet-dark2 focus:ring-2 focus:ring-bittersweet/30 dark:focus:ring-bittersweet-dark2/30 hover:border-gray-300 dark:hover:border-gray-600 outline-none"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* Company (optional) */}
        <div>
          <label
            htmlFor="company"
            className="flex items-center gap-2 mb-3 font-semibold text-graphite dark:text-seasalt"
          >
            <Building2 className="h-5 w-5 text-bittersweet dark:text-bittersweet-dark2" />
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            inputMode="text"
            className="w-full px-4 py-3 transition rounded-lg text-graphite bg-seasalt dark:bg-techblack dark:text-seasalt border-2 border-gray-200 dark:border-gray-700 focus:border-bittersweet dark:focus:border-bittersweet-dark2 focus:ring-2 focus:ring-bittersweet/30 dark:focus:ring-bittersweet-dark2/30 hover:border-gray-300 dark:hover:border-gray-600 outline-none"
            placeholder="Your company (optional)"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        {/* Email with inline validation */}
        <div>
          <label
            htmlFor="email"
            className="flex items-center gap-2 mb-3 font-semibold text-graphite dark:text-seasalt"
          >
            <Mail className="h-5 w-5 text-bittersweet dark:text-bittersweet-dark2" />
            Your Email{" "}
            <span
              aria-hidden="true"
              className="text-bittersweet dark:text-bittersweet-dark2"
            >
              *
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            required
            autoComplete="email"
            className={`w-full px-4 py-3 transition rounded-lg text-graphite dark:text-seasalt bg-seasalt dark:bg-techblack border-2 focus:ring-2 outline-none ${
              emailError && touched.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-300"
                : "border-gray-200 dark:border-gray-700 focus:border-bittersweet dark:focus:border-bittersweet-dark2 focus:ring-bittersweet/30 dark:focus:ring-bittersweet-dark2/30 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            onBlur={onBlur}
            aria-invalid={!!emailError && touched.email}
            aria-describedby={
              emailError && touched.email ? "email-error" : undefined
            }
          />
          {emailError && touched.email && (
            <div
              id="email-error"
              className="mt-2 text-sm font-semibold text-red-600 dark:text-red-400"
            >
              {emailError}
            </div>
          )}
        </div>

        {/* Honeypot (hidden) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={handleChange}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="flex items-center gap-2 mb-3 font-semibold text-graphite dark:text-seasalt"
          >
            <MessageSquare className="h-5 w-5 text-bittersweet dark:text-bittersweet-dark2" />
            Your Message{" "}
            <span
              aria-hidden="true"
              className="text-bittersweet dark:text-bittersweet-dark2"
            >
              *
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full px-4 py-3 transition rounded-lg text-graphite bg-seasalt dark:bg-techblack dark:text-seasalt border-2 border-gray-200 dark:border-gray-700 focus:border-bittersweet dark:focus:border-bittersweet-dark2 focus:ring-2 focus:ring-bittersweet/30 dark:focus:ring-bittersweet-dark2/30 hover:border-gray-300 dark:hover:border-gray-600 outline-none resize-none"
            placeholder="How can we help?"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Privacy note */}
        <div className="pt-4 border-t-2 border-bittersweet/20 dark:border-bittersweet-dark2/20">
          <p className="text-sm text-graphite/70 dark:text-seasalt/70">
            🔒 By sending this form, your details are used only to respond to
            your enquiry. No marketing without consent.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="group flex items-center justify-center w-full gap-3 py-4 text-lg font-bold transition-all duration-300 rounded-full shadow-lg bg-bittersweet text-seasalt hover:bg-bittersweet-dark1 dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          disabled={status === "sending"}
        >
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* Visual status feedback */}
        {status === "success" && (
          <div className="mt-4 p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border-2 border-green-400 dark:border-green-500 font-semibold text-green-700 dark:text-green-100 text-center animate-fade-in-up">
            ✓ Thank you! Your message has been sent successfully.
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 p-4 rounded-lg bg-red-100 dark:bg-red-900/30 border-2 border-red-400 dark:border-red-500 font-semibold text-red-700 dark:text-red-100 text-center animate-fade-in-up">
            ✗ Sorry, there was an error. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
}
