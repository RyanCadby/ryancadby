import { PageHeader } from "@/components/page-header";

const projects = [
  {
    year: "2025",
    title: "Whalar",
    role: "Development & Interaction Design",
    industry: "Creator Economy",
    href: "https://www.whalar.com",
  },
  {
    year: "2025",
    title: "Callahan Capital Partners",
    role: "Development",
    industry: "Private Equity",
    href: "https://www.callahancp.com",
  },
  {
    year: "2025",
    title: "Acadia Realty Trust",
    role: "Development",
    industry: "Real Estate",
    href: "https://acadiarealty.com",
  },
  {
    year: "2025",
    title: "Linq Promenade",
    role: "Development",
    industry: "Hospitality",
    href: "https://linqpromenade.com",
  },
  {
    year: "2025",
    title: "Quantum Shore",
    role: "Development",
    industry: "Technology",
    href: "https://quantumshore.com",
  },
  {
    year: "2024",
    title: "HiDays",
    role: "Development & Interaction Design",
    industry: "Food & Beverage",
    href: "https://eathidays.com",
  },
  {
    year: "2024",
    title: "The Lighthouse",
    role: "Development & Interaction Design",
    industry: "Hospitality",
    href: "https://thelighthouse.com",
  },
  {
    year: "2024",
    title: "Scholars Village",
    role: "Development & Interaction Design",
    industry: "Real Estate",
    href: "https://scholarsvillagenj.com",
  },
  {
    year: "2024",
    title: "Bergen Lafayette Collection",
    role: "Development",
    industry: "Real Estate",
    href: "https://bergenlafayettecollection.com",
  },
  {
    year: "2024",
    title: "HOM Film Co",
    role: "Development",
    industry: "Film Production",
    href: "https://homfilmco.com",
  },
  {
    year: "2024",
    title: "Shredstats",
    role: "Design & Development",
    industry: "Sports Analytics",
    href: "https://shredstats.co",
  },
  {
    year: "2023",
    title: "Careers In Music",
    role: "Development",
    industry: "Music Education",
    href: "https://careersinmusic.com",
  },
  {
    year: "2023",
    title: "Colorado Respite Coalition",
    role: "Design & Development",
    industry: "Healthcare",
    href: "https://coloradorespitecoalition.org",
  },
  {
    year: "2022",
    title: "The Bonneville Shop",
    role: "Development",
    industry: "E-Commerce",
    href: "https://www.thebonnevilleshop.com",
  },
  {
    year: "2022",
    title: "Test My Speed",
    role: "Development",
    industry: "Telecommunications",
    href: "https://www.testmyspeed.com/",
  },
  {
    year: "2022",
    title: "High Speed Options",
    role: "Development",
    industry: "Telecommunications",
    href: "https://www.highspeedoptions.com/",
  },
  {
    year: "2020",
    title: "Austin College Campaign",
    role: "Development",
    industry: "Higher Education",
    href: "https://goaustincollege.com",
  },
  {
    year: "2020",
    title: "Ask The Medicare Guys",
    role: "Development",
    industry: "Healthcare",
    href: "https://askthemedicareguys.com",
  },
  {
    year: "2020",
    title: "Young Enterprises",
    role: "Development",
    industry: "Construction",
    href: "https://youngenterpriseslp.com",
  },
  {
    year: "2019",
    title: "Hydrosystems KDI",
    role: "Development",
    industry: "Irrigation",
    href: "http://hydrosystemskdi.com",
  },
];

export default function Archive() {
  return (
    <main className="min-h-screen px-8 pt-32 pb-20 md:px-16 lg:px-20">
      <PageHeader title="Archive" subtitle="Selected work & experiments" />

      {/* Table header */}
      <div className="animate-slide-up hidden border-b border-text/10 pb-3 font-mono text-[0.6rem] uppercase tracking-[2px] text-accent md:grid md:grid-cols-[80px_1fr_1fr_1fr]">
        <span>Year</span>
        <span>Project</span>
        <span>Role</span>
        <span>Industry</span>
      </div>

      {/* Rows */}
      <div>
        {projects.map((project, i) => (
          <a
            key={`${project.title}-${project.year}-${i}`}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slide-up group grid grid-cols-1 gap-1 border-b border-text/10 py-5 transition-colors duration-300 hover:border-accent/40 md:grid-cols-[80px_1fr_1fr_1fr] md:items-center md:gap-0"
            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
          >
            <span className="font-mono text-xs text-text-muted">
              {project.year}
            </span>
            <span className="font-display text-lg uppercase tracking-tight text-text transition-colors duration-300 group-hover:text-accent">
              {project.title}
            </span>
            <span className="font-mono text-xs text-text-muted">
              {project.role}
            </span>
            <span className="font-mono text-xs text-text-muted">
              {project.industry}
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
