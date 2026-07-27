"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/data";

const CATEGORIES = [
  "All",
  "Medical Nutrition",
  "Sports Nutrition",
  "Corporate Wellness",
  "Pediatric Nutrition",
  "Behavioral Nutrition",
  "Community Outreach",
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Tabs
          value={activeCategory}
          onValueChange={(v) => setActiveCategory(v as string)}
        >
          <TabsList className="mx-auto mb-12 flex-wrap">
            {CATEGORIES.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 },
                  },
                  exit: { opacity: 0 },
                }}
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.slug}
                    variants={cardVariants}
                    transition={{ duration: 0.4, ease: "easeOut" as const }}
                    className="glass-card overflow-hidden"
                  >
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/80 text-foreground backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
