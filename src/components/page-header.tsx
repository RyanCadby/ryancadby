export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-16 md:mb-24">
      <h1 className="animate-fade-in-blur font-display text-4xl font-normal uppercase leading-[0.85] tracking-tight text-text sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="animate-fade-in-blur-delay-1 mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {subtitle}
      </p>
    </div>
  );
}
