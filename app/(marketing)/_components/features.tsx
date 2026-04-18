"use client";

import { FolderTree, Zap, Eye, Image } from "lucide-react";

const features = [
  {
    icon: FolderTree,
    title: "Nested Structure",
    description:
      "Organize notes in folders within folders. Build your own knowledge tree with unlimited nesting.",
  },
  {
    icon: Zap,
    title: "Instant Sync",
    description:
      "Changes save automatically. Your notes are always up to date across all your devices.",
  },
  {
    icon: Eye,
    title: "Publish Optionally",
    description:
      "Keep notes private by default, or share them publicly with a link when you want to.",
  },
  {
    icon: Image,
    title: "Cover Images",
    description:
      "Add custom cover images and emoji icons to make each note distinct and easy to spot.",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="py-20 px-4 relative overflow-hidden min-h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              think clearer
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A personal note-taking app that adapts to how you think. Capture,
            organize, and retrieve knowledge effortlessly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-enter-up p-6 rounded-xl border bg-card dark:bg-card/50 hover:bg-card/80 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground mb-4">
            Built with modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Next.js",
              "Convex",
              "Clerk",
              "Tailwind CSS",
              "Radix UI",
              "TypeScript",
              "Lucide",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-muted/50 dark:bg-muted/30 border border-border/50 text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
