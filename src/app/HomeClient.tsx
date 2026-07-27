"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faStar,
  faHeart,
  faUsers,
  faArrowRight,
  faCheck,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { COMPANY, SERVICES, TESTIMONIALS } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5,000+", label: "Clients Served" },
  { value: "95%", label: "Goal Achievement Rate" },
  { value: "8", label: "Specialized Dietitians" },
];

function TestimonialCarousel() {
  const autoplayPlugin = Autoplay({ delay: 5000, stopOnInteraction: true });

  return (
    <Carousel
      opts={{ loop: true, align: "center" }}
      plugins={[autoplayPlugin]}
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent>
        {TESTIMONIALS.map((t, i) => (
          <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/3">
            <div className="glass-card p-6 mx-2 h-full flex flex-col gap-4">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FontAwesomeIcon key={j} icon={faStar} className="size-4" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default function HomeClient() {
  const previewServices = SERVICES.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* ───── Hero Section ───── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-500 to-amber-400 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32 lg:py-40 flex flex-col items-center text-center gap-8">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Nourish Your Life,
            <br />
            One Meal at a Time
          </motion.h1>

          <motion.p
            className="max-w-2xl text-lg sm:text-xl text-white/90"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
          >
            Science-backed, personalized nutrition plans designed around your
            unique biology, lifestyle, and goals — because you deserve more than
            a one-size-fits-all approach.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact" className="inline-flex">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-white/90 font-semibold px-8 py-3 text-base rounded-full"
              >
                Get Started
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
              </Button>
            </Link>
            <Link href="/services" className="inline-flex">
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-3 text-base rounded-full"
              >
                Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───── Services Preview ───── */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Personalized Nutrition Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewServices.map((service, i) => (
              <motion.div
                key={service.slug}
                className="glass-card p-6 flex flex-col gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FontAwesomeIcon icon={service.icon} className="size-5" />
                </div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline mt-auto"
                >
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Stats Bar ───── */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-700 to-emerald-600 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <span className="text-4xl sm:text-5xl font-bold">
                {stat.value}
              </span>
              <span className="text-sm text-white/80 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Our Clients Say
            </h2>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* ───── CTA Section ───── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-500 to-amber-400 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-3xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-6">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            Ready to Transform Your Health?
          </motion.h2>

          <motion.p
            className="text-lg text-white/90 max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            Take the first step toward a healthier, more vibrant you. Schedule
            your consultation today and discover what personalized nutrition
            can do.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact" className="inline-flex">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-white/90 font-semibold px-8 py-3 text-base rounded-full"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 size-4" />
                Book Your Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
