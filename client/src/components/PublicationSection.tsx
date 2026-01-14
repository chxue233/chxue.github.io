import { publications } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PublicationSection() {
  return (
    <section id="publications" className="py-16 border-b border-border">
      <h2 className="font-mono text-xl font-bold mb-12 flex items-center gap-4">
        <span className="text-primary">03.</span> PUBLICATIONS
      </h2>

      <div className="space-y-8">
        {publications.map((pub, index) => (
          <div 
            key={index} 
            className="group border border-transparent hover:border-border p-6 -mx-6 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-4 md:items-baseline mb-2">
              <span className="font-mono text-xs text-primary shrink-0">
                [{pub.id}]
              </span>
              <h3 className="text-lg font-medium leading-tight group-hover:text-primary transition-colors">
                {pub.title}
              </h3>
            </div>
            
            <div className="pl-0 md:pl-[3.25rem]">
              <p className="text-sm text-muted-foreground mb-2 font-mono">
                {pub.authors}
              </p>
              <div className="flex flex-wrap gap-3 items-center text-xs font-mono">
                <span className="bg-foreground text-background px-2 py-0.5">
                  {pub.venue}
                </span>
                {pub.tags.map(tag => (
                  <span key={tag} className="text-muted-foreground border border-border px-2 py-0.5">
                    {tag}
                  </span>
                ))}
                <span className="text-muted-foreground ml-auto">
                  {pub.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
