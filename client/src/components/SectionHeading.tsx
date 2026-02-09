import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, subtitle, alignment = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${alignment === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          {title}
          <span className="block w-20 h-1.5 bg-primary mt-4 rounded-full mx-auto md:mx-0 opacity-80" 
                style={{ marginLeft: alignment === 'center' ? 'auto' : '0', marginRight: alignment === 'center' ? 'auto' : '0' }}/>
        </h2>
        {subtitle && (
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
