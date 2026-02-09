import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  index: number;
}

export function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary text-sm font-medium transition-colors cursor-default"
    >
      {name}
    </motion.div>
  );
}
