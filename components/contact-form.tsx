"use client";

import { MouseEvent, useRef, useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const CONTACT_EMAIL = "enquiry@ruutlevelsolutions.com";

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function buildMailtoLink(form: FormState) {
  const subject = encodeURIComponent(form.subject.trim());
  const body = encodeURIComponent(
    [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n")
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const fieldClassName =
    "min-h-11 w-full rounded-2xl border border-border/70 bg-background/90 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-2 focus:ring-primary/20";
  const mailtoLink = buildMailtoLink(form);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setStatus({
        type: "success",
        message: `Email address copied. You can send your message to ${CONTACT_EMAIL}.`,
      });
    } catch {
      setStatus({
        type: "error",
        message: `Copy failed. Please email us directly at ${CONTACT_EMAIL}.`,
      });
    }
  }

  function handleOpenEmail(event: MouseEvent<HTMLAnchorElement>) {
    const isValid = formRef.current?.reportValidity() ?? false;

    if (!isValid) {
      event.preventDefault();
      setStatus({
        type: "error",
        message: "Please fill in all fields before opening your email app.",
      });
      return;
    }

    setStatus({
      type: "success",
      message: `If your mail app does not open, email us directly at ${CONTACT_EMAIL}.`,
    });
  }

  return (
    <form
      ref={formRef}
      className="space-y-5 rounded-[2rem] border border-border/70 bg-card/85 p-5 shadow-sm backdrop-blur sm:p-6"
    >
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
        <p className="text-sm leading-6 text-muted-foreground">
          Fill in the form and we&apos;ll prepare a ready-to-send email for you.
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
            className={fieldClassName}
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
            className={fieldClassName}
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
          className={fieldClassName}
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
          className={`${fieldClassName} min-h-36 resize-y leading-6`}
          placeholder="A short note about your requirements"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <a
          href={mailtoLink}
          onClick={handleOpenEmail}
          className="w-full sm:w-auto sm:min-w-40"
        >
          <span className="inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold leading-none text-primary-foreground shadow-[0_18px_40px_-18px_hsl(var(--primary)/0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 sm:w-auto">
            Open Email
          </span>
        </a>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="text-sm font-medium text-primary transition hover:text-primary/80"
        >
          Copy email address
        </button>
      </div>

      <p className="text-sm leading-6 text-muted-foreground">
        Prefer direct email? Write to{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-medium text-foreground transition hover:text-primary"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>

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
    </form>
  );
}
