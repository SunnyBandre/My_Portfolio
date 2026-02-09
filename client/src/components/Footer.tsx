import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 mt-20">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-display font-bold text-xl">
            Sunny<span className="text-primary">.dev</span>
          </span>
          <p className="text-sm text-muted-foreground">
            Building digital experiences that matter.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:sunny@example.com"
            className="p-2 bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sunny Bandre. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
