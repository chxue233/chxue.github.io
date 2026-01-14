import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 border-b border-border">
      <h2 className="font-mono text-xl font-bold mb-12 flex items-center gap-4">
        <span className="text-primary">02.</span> EXPERIENCE
      </h2>

      <div className="space-y-16">
        {experience.map((job, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 font-mono text-sm text-muted-foreground">
              <div className="sticky top-8">
                <p className="mb-1">{job.period}</p>
                <p>{job.location}</p>
              </div>
            </div>
            
            <div className="md:col-span-8">
              <h3 className="text-xl font-bold mb-1">{job.company}</h3>
              <p className="font-mono text-primary mb-6">{job.role}</p>
              
              <div className="space-y-6">
                {job.highlights.map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="font-mono text-xs font-bold uppercase mb-2 text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.category}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
