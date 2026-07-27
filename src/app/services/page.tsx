import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services | NourishWell",
  description:
    "Explore our comprehensive nutrition services — from personalized meal planning to corporate wellness programs.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Science-backed nutrition solutions tailored to your unique needs.
            Whether you&apos;re managing a condition or optimizing performance,
            we have a plan for you.
          </p>
          <div className="gradient-divider mx-auto mt-8 w-24" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group glass-card flex flex-col overflow-hidden"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full shrink-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Icon Circle */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="h-5 w-5 text-primary"
                  />
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-1.5">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="mt-0.5 h-3 w-3 shrink-0 text-primary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent">
                  Learn More
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
