import { PageHeader } from "@/components/page-header";

export default function Contact() {
  return (
    <main className="min-h-screen px-8 pt-32 pb-20 md:px-16 lg:px-20">
      <PageHeader title="Contact" subtitle="Let&apos;s connect" />

      <div className="max-w-xl">
        <p className="animate-slide-up font-mono text-sm leading-relaxed text-text-muted">
          Interested in working together or just want to say hello? Reach out
          through any of the channels below.
        </p>

        <div
          className="animate-slide-up mt-12 space-y-6"
          style={{ animationDelay: "0.3s" }}
        >
          {[
            { label: "Email", value: "ryan@ryancadby.com", href: "mailto:ryan@ryancadby.com" },
            { label: "GitHub", value: "github.com/ryancadby", href: "https://github.com/ryancadby" },
            { label: "LinkedIn", value: "linkedin.com/in/ryan-cadby", href: "https://www.linkedin.com/in/ryan-cadby/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between border-b border-text/10 pb-4 transition-colors duration-300 hover:border-accent/40"
            >
              <span className="font-mono text-[0.6rem] uppercase tracking-[2px] text-accent">
                {link.label}
              </span>
              <span className="font-mono text-xs text-text-muted transition-colors duration-300 group-hover:text-text">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
