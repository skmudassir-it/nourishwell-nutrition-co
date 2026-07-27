import type { Metadata } from "next";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects | NourishWell",
  description:
    "Explore our nutrition research projects, community initiatives, and clinical programs that are making a difference.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Real-world nutrition initiatives that drive measurable health outcomes
            — from clinical trials to community programs.
          </p>
          <div className="gradient-divider mx-auto mt-8 w-24" />
        </div>
      </section>

      {/* Projects Client Component */}
      <ProjectsClient />
    </div>
  );
}
