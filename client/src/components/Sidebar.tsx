import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link, useLocation } from "wouter";

export function Sidebar() {
  const [location] = useLocation();

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PUBLICATIONS", href: "#publications" },
    { name: "PATENTS", href: "#patents" },
    { name: "AWARDS", href: "#awards" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="w-full lg:w-80 lg:fixed lg:h-screen border-r border-border bg-background p-8 flex flex-col justify-between overflow-y-auto z-10">
      <div>
        <div className="mb-12">
          <h1 className="font-mono text-3xl font-bold tracking-tighter uppercase mb-2">
            {personalInfo.name}
          </h1>
          <p className="text-muted-foreground font-mono text-sm mb-6">
            {personalInfo.title}
          </p>
          
          <div className="space-y-2 text-sm font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        <nav className="space-y-1 hidden lg:block">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block py-2 font-mono text-sm hover:text-primary hover:translate-x-2 transition-all duration-200"
            >
              [{item.name}]
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-12 lg:mt-0">
        <div className="flex gap-4 font-mono text-xs">
          <a href={personalInfo.social.linkedin} className="hover:text-primary underline decoration-primary/30 underline-offset-4">
            LINKEDIN
          </a>
          <a href={personalInfo.social.scholar} className="hover:text-primary underline decoration-primary/30 underline-offset-4">
            SCHOLAR
          </a>
          <a href={personalInfo.social.github} className="hover:text-primary underline decoration-primary/30 underline-offset-4">
            GITHUB
          </a>
        </div>
        <p className="mt-8 text-[10px] text-muted-foreground font-mono">
          © {new Date().getFullYear()} {personalInfo.name.toUpperCase()}
          <br />
          ACADEMIC BRUTALISM
        </p>
      </div>
    </aside>
  );
}
