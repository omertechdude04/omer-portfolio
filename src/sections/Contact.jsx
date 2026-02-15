import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";
import { LINKS } from "../data/content";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mreaqkld";

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const canSubmit = useMemo(() => status.state !== "submitting", [status.state]);

  useEffect(() => {
    if (status.state === "success" || status.state === "error") {
      const timer = setTimeout(() => {
        setStatus({ state: "idle", message: "" });
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [status.state]);

  async function onSubmit(e) {
    e.preventDefault();

    // ✅ only block if it's empty or still a placeholder
    if (
      !FORMSPREE_ENDPOINT ||
      FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID") ||
      FORMSPREE_ENDPOINT === "#"
    ) {
      setStatus({ state: "error", message: "Form endpoint is missing." });
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus({ state: "submitting", message: "" });

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setStatus({ state: "success", message: "Message sent successfully!" });
      } else {
        let msg = "Something went wrong. Please try again.";
        try {
          const json = await res.json();
          if (json?.errors?.[0]?.message) msg = json.errors[0].message;
        } catch {}
        setStatus({ state: "error", message: msg });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please check your connection.",
      });
    }
  }

  const isToast = status.state === "success" || status.state === "error";
  const toastIsSuccess = status.state === "success";

  return (
    <>
      {/* ✅ CENTER SUCCESS/ERROR MESSAGE */}
      {isToast && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[200] pointer-events-none"
          aria-live="polite"
          aria-atomic="true"
        >
          <div
            className={[
              "px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-md shadow-2xl animate-fadeIn",
              toastIsSuccess
                ? "bg-emerald-500/15 border border-emerald-400/40 text-emerald-300"
                : "bg-rose-500/15 border border-rose-400/40 text-rose-300",
            ].join(" ")}
          >
            {status.message}
          </div>
        </div>
      )}

      <Section id="contact" eyebrow="Get in touch" title="Contact">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-white/70 leading-relaxed">
              Want to build something clean and modern? Send a message and I’ll reply.
            </p>

            <div className="mt-6 text-white/70">
              <a className="hover:text-white transition" href={LINKS.email}>
                {LINKS.email.replace("mailto:", "")}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-5">
              {/* Formspree helpers */}
              <input type="hidden" name="_subject" value="New message from portfolio site" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/60">Name</label>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[#7dd3fc] outline-none py-3 text-white/85"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm text-white/60">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[#7dd3fc] outline-none py-3 text-white/85"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-white/60">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[#ff7a18] outline-none py-3 text-white/85 resize-none"
                  placeholder="Tell me what you need…"
                />
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="rounded-full px-6 py-3 font-semibold
                bg-gradient-to-r from-[#ff7a18]/20 to-[#7dd3fc]/20
                border border-white/10 hover:scale-[1.02] transition disabled:opacity-60 disabled:hover:scale-100"
              >
                {status.state === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
