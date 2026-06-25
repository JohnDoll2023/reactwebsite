"use client";

import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mwkaonel";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex-1 bg-[radial-gradient(circle_at_top,#1f3a2a_0%,#0c1110_42%,#050707_100%)] px-4 py-12 text-white md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-950/85 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur md:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Contact</p>
          <h1 className="mt-3 text-4xl font-black italic tracking-tight text-white md:text-6xl">
            Say hi or ask a question.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Use the form below and I’ll get back to you as soon as I can.
          </p>
        </div>

        {status === "success" ? (
          <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-100">
            <p className="text-lg font-semibold">Message sent.</p>
            <p className="mt-2 leading-7 text-emerald-50/90">
              Thanks for reaching out. I received your message and will reply soon.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-5 rounded-full border border-emerald-300/40 px-4 py-2 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-300/10"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                placeholder="John Doe"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-300 focus:bg-white/10"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-300 focus:bg-white/10"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="What’s on your mind?"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-300 focus:bg-white/10"
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </div>

            {status === "error" ? (
              <p className="rounded-2xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100" aria-live="polite">
                Something went wrong sending the message. Please try again.
              </p>
            ) : null}
          </form>
        )}
      </div>
    </div>
  );
}
