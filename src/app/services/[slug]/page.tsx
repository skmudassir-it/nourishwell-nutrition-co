import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { SERVICES } from "@/lib/data";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found | NourishWell" };
  }

  return {
    title: `${service.title} | NourishWell`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center py-32 text-center">
        <h1 className="text-2xl font-bold text-foreground">Service not found</h1>
        <p className="mt-2 text-muted-foreground">
          The service you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/services"
          className="mt-6 text-sm font-medium text-primary hover:text-accent"
        >
          ← Back to Services
        </Link>
      </div>
    );
  }

  // Related services (3-4 others, excluding current)
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <FontAwesomeIcon icon={faHome} className="h-3.5 w-3.5" />
              Home
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
            <Link href="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
            <span className="text-foreground font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-96">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="h-7 w-7 text-white"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white sm:text-4xl">
                  {service.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-foreground">
              About This Service
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            {/* Features Checklist */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-foreground">
                What&apos;s Included
              </h3>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-xl border bg-muted/30 p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Ready to get started?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Schedule a consultation to discuss how {service.title.toLowerCase()} can help you reach your health goals.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* Related Services Sidebar */}
          <aside>
            <h3 className="text-lg font-semibold text-foreground">
              Related Services
            </h3>
            <div className="mt-4 space-y-4">
              {related.map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="glass-card block overflow-hidden p-0"
                >
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={relatedService.image}
                      alt={relatedService.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-foreground">
                      {relatedService.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                      {relatedService.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
