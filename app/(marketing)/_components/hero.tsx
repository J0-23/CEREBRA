"use client";

import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, FolderTree, Lock } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";
import { HeroBackground } from "./hero-background";

const features = [
  { icon: Brain, label: "Your second brain" },
  { icon: FolderTree, label: "Organized notes" },
  { icon: Lock, label: "Private by default" },
];

export const Hero = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="animate-fade-in-ups" style={{ animationDelay: "0ms" }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Your second brain,
            </span>
            <br />
            <span className="text-foreground">digitized.</span>
          </h1>
        </div>

        <div
          className="animate-fade-in-ups"
          style={{ animationDelay: "150ms" }}
        >
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Capture ideas, organize knowledge, and keep track of everything in
            one place. Your personal wiki for notes, docs, and thoughts.
          </p>
        </div>

        <div
          className="animate-fade-in-ups flex flex-wrap justify-center gap-3"
          style={{ animationDelay: "300ms" }}
        >
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 dark:bg-muted/30 border border-border/50 text-sm text-muted-foreground"
            >
              <feature.icon className="w-4 h-4 text-blue-500" />
              {feature.label}
            </div>
          ))}
        </div>

        <div
          className="animate-fade-in-ups flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "450ms" }}
        >
          {isLoading && (
            <div className="w-full flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {!isLoading && (
            <>
              {isAuthenticated ? (
                <Button asChild size="lg" className="min-w-[180px]">
                  <Link href="/documents">
                    Enter Cerebra
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              ) : (
                <SignInButton mode="modal">
                  <Button size="lg" className="min-w-[180px]">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </SignInButton>
              )}
              <Button
                variant="ghost"
                size="lg"
                onClick={scrollToFeatures}
                className="group"
              >
                <span className="flex items-center gap-2 cursor-pointer">
                  Learn more
                  <span className="transition-transform duration-200 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </span>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
