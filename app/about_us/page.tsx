import Image from "next/image";
import React from "react";
import { MoveRight, Target, Users, Zap } from "lucide-react"; // npm i lucide-react
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";

const AboutUs = async () => {
  return (
    <section className="bg-accent-foreground/10">
      {/* 1. Hero Header */}
      <div className="border-b border-border bg-muted/50 px-6 py-20 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-green font-semibold tracking-widest uppercase text-sm">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mt-4 mb-6">
            Architecting the future of <br />
            <span className="text-brand-green italic">Women-led Ventures</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground">
            We don't just provide tools; we build the technical infrastructure
            that allows modern entrepreneurs to scale without limits.
          </p>
        </div>
      </div>

      {/* 2. Stats / Impact Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Entrepreneurs", value: "500+" },
            { label: "Technical Hurdles Solved", value: "12k" },
            { label: "Community Hubs", value: "24" },
            { label: "Success Rate", value: "98%" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-brand-brown">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The Founder - High-End Layout */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-green/10 rounded-full -z-10" />

            <CloudinaryImage
              src="founder"
              width="600"
              height="600"
              className="rounded-3xl object-cover shadow-2xl border-8 border-white"
              alt="Image with blur placeholder"
            />
            <div className="absolute bottom-2 right-3  bg-black/50 text-white p-0 rounded-2xl rounded-tr-none rounded-bl-none hidden md:block max-w-xs">
              <p className="text-sm italic p-2 pl-8 text-white ">
                "Technology should be a bridge, not a barrier. We've built that
                bridge."
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              The Visionary Behind the Platform
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                R N founded this platform with a singular focus: to democratize
                access to enterprise-level systems. With over a decade of
                experience in building scalable solutions, she saw the gap
                between creative passion and technical execution.
              </p>
              <p>
                Today, she leads a team dedicated to ensuring that no woman's
                business dream is sidelined by a lack of technical support.
              </p>
              <div className="pt-4">
                <p className="text-2xl font-bold text-brand-brown">R N</p>
                <p className="text-brand-green font-medium">
                  Founder & Chief Architect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Core Pillars with Icons */}
      <div className="bg-brand-brown py-24 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="mb-4 text-4xl font-bold text-primary-foreground">
                What We Stand For
              </h2>
              <p className="text-primary-foreground/80">
                Our governance and engineering principles are built into every
                tool we ship.
              </p>
            </div>
            <MoveRight className="w-12 h-12 text-brand-green hidden md:block" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Equity through Access",
                desc: "We bring high-end engineering to the home-kitchen and small studio.",
                icon: <Zap className="w-8 h-8 text-brand-orange" />,
              },
              {
                title: "Community-Centric",
                desc: "Collaborative networks that turn individual efforts into collective power.",
                icon: <Users className="w-8 h-8 text-brand-orange" />,
              },
              {
                title: "Sustainable Scalability",
                desc: "Our architecture grows with you. From 1 order to 10,000.",
                icon: <Target className="w-8 h-8 text-brand-orange" />,
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition group"
              >
                <div className="mb-6">{pillar.icon}</div>
                <h4 className="text-xl font-bold mb-3">{pillar.title}</h4>
                <p className="leading-relaxed text-primary-foreground/70">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Final Call to Action */}
      <div className="max-w-3xl mx-auto py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Build Your Legacy?</h2>
        <button className="btn-primary-figma">Join Our Community</button>
        <p className="mt-6 text-sm italic text-muted-foreground">
          Zero-fluff. Just tools, growth, and community.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
