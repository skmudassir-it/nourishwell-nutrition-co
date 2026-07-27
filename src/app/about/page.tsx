import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBrain, faUsers, faComments, faStar, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { COMPANY, TEAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | NourishWell",
  description:
    "Learn about NourishWell Nutrition Co. — our mission, our team of registered dietitians, and our commitment to science-backed nutrition.",
};

const stats = [
  { value: "3,200+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "8", label: "Specialized Programs" },
];

const values = [
  {
    icon: faStar,
    title: "Science First",
    description:
      "Every recommendation is grounded in peer-reviewed research and clinical evidence — not trends or fads.",
  },
  {
    icon: faHeart,
    title: "Compassionate Care",
    description:
      "We meet you where you are, without judgment, and build a partnership based on trust and empathy.",
  },
  {
    icon: faBrain,
    title: "Personalized Approach",
    description:
      "Your biology, preferences, and lifestyle are unique — your nutrition plan should be too.",
  },
  {
    icon: faUsers,
    title: "Community Impact",
    description:
      "We believe good nutrition should be accessible to everyone, so we actively partner with local organizations.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About NourishWell
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {COMPANY.description}
          </p>
          <div className="gradient-divider mx-auto mt-8 w-24" />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-muted/20 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Our Mission &amp; Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {COMPANY.tagline}
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <FontAwesomeIcon
                    icon={value.icon}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every practitioner at NourishWell is a registered dietitian with
              advanced training — because your health deserves nothing less.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="glass-card overflow-hidden text-center"
              >
                <div className="relative mx-auto mt-6 h-32 w-32 overflow-hidden rounded-full ring-4 ring-primary/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to start your journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Let&apos;s work together to create a nutrition plan that fits your
            life — not the other way around.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
