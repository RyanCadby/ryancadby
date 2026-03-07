import { PageHeader } from "@/components/page-header";

export default function About() {
  return (
    <main className="min-h-screen px-8 pt-32 pb-20 md:px-16 lg:px-20">
      <PageHeader title="About" subtitle="Background & capabilities" />

      <div className="max-w-2xl">
        <p className="animate-slide-up font-mono text-sm leading-relaxed text-text-muted">
          I&apos;m a developer focused on crafting thoughtful digital
          experiences. I work across the full stack with a particular love for
          frontend interfaces, interaction design, and performance.
        </p>

        <div
          className="animate-slide-up mt-16"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="font-display text-2xl font-normal uppercase tracking-tight text-text">
            Capabilities
          </h2>
          <ul className="mt-6 space-y-3">
            {[
              "Frontend Development",
              "UI / UX Design",
              "Full Stack Applications",
              "Performance Optimization",
              "Creative Development",
            ].map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-text-muted"
              >
                <span className="h-px w-6 bg-accent" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="animate-slide-up mt-16"
          style={{ animationDelay: "0.5s" }}
        >
          <h2 className="font-display text-2xl font-normal uppercase tracking-tight text-text">
            Tools
          </h2>
          <p className="mt-4 font-mono text-xs leading-relaxed text-text-muted">
            TypeScript, React, Next.js, Node.js, Tailwind CSS, PostgreSQL,
            Figma, Git
          </p>
        </div>
      </div>
    </main>
  );
}
