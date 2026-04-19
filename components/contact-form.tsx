"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    try {
      setIsSubmitting(true);

      const subject = encodeURIComponent(form.subject);
      const body = encodeURIComponent(
        [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          "",
          "Message:",
          form.message,
        ].join("\n")
      );

      window.location.href = `mailto:enquiry@ruutlevelsolutions.com?subject=${subject}&body=${body}`;

      setStatus({
        type: "success",
        message: "Your mail app has been opened with this message.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to open your mail app right now.";

      setStatus({
        type: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-[2rem] border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
        <p className="text-sm leading-6 text-muted-foreground">
          Fill in the form and we&apos;ll open your mail app with a ready-to-send
          message.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-foreground/90">
          <span>Name</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className="min-h-11 w-full rounded-2xl border border-border/70 bg-background/85 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-foreground/90">
          <span>Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="min-h-11 w-full rounded-2xl border border-border/70 bg-background/85 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-foreground/90">
        <span>Subject</span>
        <input
          required
          type="text"
          value={form.subject}
          onChange={(event) =>
            setForm((current) => ({ ...current, subject: event.target.value }))
          }
          className="min-h-11 w-full rounded-2xl border border-border/70 bg-background/85 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
          placeholder="Project enquiry"
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-foreground/90">
        <span>Message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          className="w-full rounded-3xl border border-border/70 bg-background/85 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
          placeholder="A short note about your requirements"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isSubmitting} className="sm:min-w-40">
          {isSubmitting ? "Opening..." : "Open Email"}
        </Button>
        {status.type !== "idle" ? (
          <p
            className={
              status.type === "success"
                ? "text-sm text-emerald-600 dark:text-emerald-400"
                : "text-sm text-rose-600 dark:text-rose-400"
            }
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
