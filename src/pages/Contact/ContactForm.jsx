import { useState } from "react";
import { Mail, Send } from "lucide-react";

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
    <div className="lg:col-span-2">
      <form
        className="p-8 space-y-6  shadow-sm bg-biscay dark:bg-techblack rounded-2xl"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Intro hint */}
        <p className="text-lg text-seasalt dark:text-seasalt">
          Please share a few details so a consultant can respond quickly. Fields
          with a star are required.
        </p>

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
            className="block mb-2 font-semibold text-seasalt"
          >
            Your Name{" "}
            <span aria-hidden="true" className="text-bittersweet">
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
            className="w-full p-4 transition  rounded-lg text-techblack bg-seasalt dark:bg-transparent -zinc-300 dark:text-seasalt focus:-2 focus:-red-500 hover:-zinc-600 dark:hover:-zinc-50 dark:focus:-bittersweet"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* Company (optional) */}
        <div>
          <label
            htmlFor="company"
            className="block mb-2 font-semibold text-seasalt dark:text-blue-100"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            inputMode="text"
            className="w-full p-4 transition  rounded-lg text-techblack bg-seasalt -zinc-300 dark:bg-techblack dark:text-seasalt"
            placeholder="Your company (optional)"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        {/* Email with inline validation */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="mb-2 font-semibold text-seasalt dark:text-blue-100"
            >
              Your Email{" "}
              <span aria-hidden="true" className="text-bittersweet">
                *
              </span>
            </label>
            <span className="inline-flex items-center gap-2 text-sm text-seasalt">
              <Mail className="w-4 h-4" /> Work or personal email
            </span>
          </div>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            required
            autoComplete="email"
            className={`w-full p-4 text-seasalt transition bg-seasalt  rounded-lg dark:bg-techblack dark:text-seasalt focus:ring-2 ${
              emailError && touched.email
                ? "-red-500 focus:-red-500 focus:ring-red-300"
                : "-zinc-300 focus:-bittersweet focus:ring-bittersweet"
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
              className="mt-1 text-sm font-semibold text-red-600"
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
            className="block mb-2 font-semibold text-seasalt dark:text-blue-100"
          >
            Your Message{" "}
            <span aria-hidden="true" className="text-bittersweet">
              *
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full p-4 transition  rounded-lg text-techblack bg-seasalt -zinc-300 focus:-bittersweet focus:ring-2 focus:ring-bittersweet/30 dark:bg-techblack dark:text-seasalt"
            placeholder="How can we help?"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Privacy note */}
        <p className="text-sm text-seasalt dark:text-blue-100/80">
          By sending this form, details are used only to respond to the enquiry.
          No marketing without consent.
        </p>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center justify-center w-full gap-2 py-4 text-lg transition -2 rounded-full shadow bg-bittersweet text-seasalt bg-none hover:bg-bittersweet-dark1 hover:text-seasalt dark:text-seasalt"
          disabled={status === "sending"}
        >
          <Send className="w-5 h-5" />
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* Visual status feedback */}
        {status === "success" && (
          <div className="mt-4 font-semibold text-green-600">
            Thank you, your message has been sent.
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 font-semibold text-red-600">
            Sorry, there was an error. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
}
