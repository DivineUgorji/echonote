"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight, Play, Mic, FileText, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

/* Shared easing  */
const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease, delay },
  } as const;
}

function fadeIn(delay: number) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  } as const;
}

/* Floating stat pill */
function FloatingPill({
  icon,
  label,
  value,
  className,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay }}
      className={`absolute flex items-center gap-2.5 bg-white/90 backdrop-blur-sm
        border border-teal-mist rounded-2xl px-4 py-2.5
        shadow-[0_4px_24px_rgba(13,148,136,0.10)] ${className}`}
    >
      <div className="size-7 rounded-lg bg-teal-surface flex items-center justify-center text-teal shrink-0">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-[10px] text-muted-foreground leading-none mb-0.5">
          {label}
        </p>
        <p className="text-[13px] font-semibold text-abyss leading-none">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

/*  Animated waveform  */
function Waveform({ className }: { className?: string }) {
  const bars = [10, 20, 32, 18, 28, 40, 22, 36, 14, 30, 42, 24, 16, 34, 26];
  return (
    <div className={`flex items-center gap-0.75 ${className}`}>
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="block w-0.75 rounded-full bg-teal"
          style={{ height: h }}
          animate={{ scaleY: [1, 1.5, 0.7, 1.3, 1] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Banner() {
  return (
    <section className="relative w-full flex flex-col items-center text-center px-6 py-14 md:py-18 pb-0 overflow-hidden">
      {/* ── Background embellishments */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full bg-teal/5 blur-[80px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#C8E6E4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute -top-24 -left-24 size-100 rounded-full border border-teal/15" />
      <div className="pointer-events-none absolute -top-12 -left-12 size-65 rounded-full border border-teal/15" />
      <div className="pointer-events-none absolute -top-24 -right-24 size-100 rounded-full border border-teal/15" />
      <div className="pointer-events-none absolute -top-12 -right-12 size-65 rounded-full border border-teal/15" />

      {/*  Badge  */}
      <motion.div {...fadeUp(0)}>
        <Badge
          variant="outline"
          className="mb-8 gap-2 px-4 py-3 rounded-full text-[11px] font-medium text-teal border-teal-mist bg-teal-surface"
        >
          {/* Bage pulse */}
          <span className="size-2 rounded-full bg-teal inline-block animate-pulse" />
          AI-powered transcription — now live
        </Badge>
      </motion.div>

      <motion.h1
        {...fadeUp(0.1)}
        className="font-plusJakarta font-semibold text-4xl md:text-5xl xl:text-6xl leading-[1.1] tracking-[-0.04em] text-foreground mb-5"
      >
        Speak. Transcribe.
        <br />
        <span className="relative inline-block text-teal">
          Publish.
          <motion.span
            className="absolute -bottom-1 left-0 h-0.75 w-full rounded-full bg-teal/25"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            style={{ originX: 0 }}
          />
        </span>
      </motion.h1>

      {/* Subheading  */}
      <motion.p
        {...fadeUp(0.2)}
        className="text-lg leading-[1.7] text-muted-foreground max-w-120 mb-9"
      >
        Upload any video or audio file. EchoNote transcribes it instantly and
        turns it into clean, publish-ready text or a full blog post.
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fadeUp(0.3)}
        className="flex flex-col sm:flex-row items-center gap-3 mb-4"
      >
        <Button
          size="lg"
          className="bg-teal hover:bg-teal/90 text-white font-medium rounded-xl px-7 text-[15px] gap-2 shadow-[0_4px_20px_rgba(13,148,136,0.28)] hover:shadow-[0_6px_28px_rgba(13,148,136,0.38)] transition-shadow duration-300"
        >
          Start for free
          <MoveRight className="size-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-xl px-7 text-[15px] font-medium border-border text-foreground hover:bg-teal-surface hover:border-teal-mist transition-colors duration-200 gap-2"
        >
          <Play className="size-3.5 fill-current" />
          See how it works
        </Button>
      </motion.div>

      <motion.p
        {...fadeIn(0.4)}
        className="text-[13px] text-muted-foreground mb-10"
      >
        No credit card required · Free 60-minute trial
      </motion.p>

      <motion.div
        {...fadeIn(0.45)}
        className="flex flex-col sm:flex-row items-center gap-3 mb-16"
      >
        <div className="flex -space-x-2">
          {["AK", "JM", "SL", "TR", "MW"].map((initials, i) => (
            <div
              key={i}
              className="size-7 rounded-full bg-teal-mist border-2 border-white flex items-center justify-center text-[9px] font-semibold text-teal"
            >
              {initials}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-1.5">
          <div className="flex gap-px">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-teal text-[11px]">
                ★
              </span>
            ))}
          </div>
          <span className="text-[12px] text-muted-foreground">
            Loved by{" "}
            <span className="text-foreground font-medium">12,000+</span>{" "}
            creators
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.5 }}
        className="relative w-full max-w-5xl mx-auto"
      >
        {/* Floating pills */}
        <FloatingPill
          icon={<Mic className="size-3.5" />}
          label="Processing"
          value="68% complete"
          className="-left-4 top-16 md:-left-14"
          delay={0.9}
        />
        <FloatingPill
          icon={<FileText className="size-3.5" />}
          label="Words transcribed"
          value="2,314 words"
          className="-right-4 top-28 md:-right-14"
          delay={1.0}
        />
        <FloatingPill
          icon={<Sparkles className="size-3.5" />}
          label="Accuracy rate"
          value="99.2%"
          className="-left-4 bottom-24 md:-left-14"
          delay={1.1}
        />

        {/* Waveform */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mb-5"
        >
          <Waveform className="opacity-50" />
        </motion.div>

        {/* Image frame */}
        <div className="rounded-2xl border border-teal-mist overflow-hidden shadow-[0_8px_60px_rgba(13,148,136,0.12),0_2px_12px_rgba(0,0,0,0.04)]">
          {/* Browser bar */}
          <div className="bg-teal-surface border-b border-teal-mist px-4 py-3 flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-yellow-400" />
            <span className="size-2.5 rounded-full bg-green-400" />
            <span className="ml-3 text-[11px] font-mono text-muted-foreground">
              echonote.app — workspace
            </span>
          </div>
          <Image
            src="/echonote-hero-1.png"
            alt="EchoNote app interface showing transcription workspace"
            width={800}
            height={600}
            className="w-full h-auto object-cover object-top"
            priority
            draggable={false}
          />
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-background to-transparent" />
      </motion.div>
    </section>
  );
}
