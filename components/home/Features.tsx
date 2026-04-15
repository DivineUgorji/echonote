"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { features } from "@/lib/content";
/*  Shared easing */
const ease = [0.22, 1, 0.36, 1] as const;

function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
  inView,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay }}
      className="group relative bg-white border border-teal-mist rounded-2xl p-7 flex flex-col gap-5 overflow-hidden
        hover:border-teal/30 hover:shadow-[0_8px_32px_rgba(13,148,136,0.08)] transition-all duration-300"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,rgba(13,148,136,0.04),transparent_70%)]" />

      {/* Subtle corner accent */}
      <motion.div className="absolute top-0 left-0 w-12 h-12 rounded-br-[40px] bg-teal/5 group-hover:bg-teal/10 transition-colors duration-300" />

      {/* Icon */}
      <div
        className="relative size-11 rounded-xl bg-teal-surface border border-teal-mist flex items-center justify-center text-teal
        group-hover:bg-teal group-hover:text-white group-hover:border-teal transition-all duration-300"
      >
        <Icon className="size-4.5" strokeWidth={1.8} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[15px] font-semibold text-foreground font-plusJakarta tracking-[-0.01em]">
          {title}
        </h3>
        <p className="text-[13px] text-muted-foreground leading-[1.7] m-0">
          {description}
        </p>
      </div>

      {/* Bottom teal line — reveals on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
    </motion.div>
  );
}

/*  Main component */
export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full py-24 px-6 overflow-hidden">
      {/*  Background embellishments */}
      <div className="pointer-events-none absolute top-0 right-0 w-125 h-125 rounded-full bg-teal/4 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-100 h-100 rounded-full bg-teal/3 blur-[80px]" />

      <div className="relative max-w-5xl mx-auto">
        {/*  Section header */}
        <div className="mb-14">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-medium text-teal bg-teal-surface border border-teal-mist px-3 py-1.5 rounded-full tracking-[0.06em] uppercase">
              <span className="size-1.5 rounded-full bg-teal" />
              Features
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.08 }}
            className="text-3xl md:text-4xl font-semibold leading-[1.2] tracking-[-0.03em] text-foreground max-w-lg mb-4"
          >
            Everything you need to go from{" "}
            <span className="text-teal">audio to article</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.14 }}
            className="text-[15px] text-muted-foreground max-w-md leading-[1.7] m-0"
          >
            EchoNote is built for creators, journalists, podcasters, and teams
            who think out loud and write with precision.
          </motion.p>
        </div>

        {/*  Feature grid  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.18 + i * 0.08}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
