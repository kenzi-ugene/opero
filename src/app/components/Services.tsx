import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { heroContainer, heroItem, staggerContainer, staggerItem, VIEWPORT_DEFAULT } from "../motion/siteMotion";
import { Seo } from "./Seo";
import React from "react";

export function Services() {
  const services = [
    {
      title: "Website Development",
      description:
        "Websites and web apps—from marketing sites to complex product experiences—with performance, accessibility, and SEO in mind.",
      capabilities: [
        "Custom Web Applications",
        "E-commerce & Portals",
        "Progressive Web Apps",
        "CMS & Content Strategy",
      ],
    },
    {
      title: "System Development",
      description:
        "Line-of-business systems, internal tools, and platforms built for clarity, security, and long-term maintainability.",
      capabilities: [
        "Enterprise & Workflow Apps",
        "SaaS & Product Backends",
        "APIs & Microservices",
        "Legacy Modernization",
      ],
    },
    {
      title: "App Development",
      description:
        "Mobile and desktop-class experiences with thoughtful UX—whether native, hybrid, or cross-platform.",
      capabilities: [
        "iOS & Android",
        "Cross-Platform (e.g. Flutter, React Native)",
        "App Store Delivery",
        "Offline & Sync Patterns",
      ],
    },
    {
      title: "Web Design",
      description:
        "Brand-aligned UI, UX, and design systems so your product looks credible and feels effortless to use.",
      capabilities: [
        "UX Research & Flows",
        "Visual & Interface Design",
        "Design Systems",
        "Prototyping & Handoff",
      ],
    },
    {
      title: "IT Consulting",
      description:
        "Practical guidance on architecture, stacks, and delivery—aligned to your budget, timeline, and risk profile.",
      capabilities: [
        "Technology Strategy",
        "Solution & Cloud Architecture",
        "Vendor & Tooling Selection",
        "Performance & Security Reviews",
      ],
    },
    {
      title: "System Integration",
      description:
        "Connect CRMs, ERPs, payments, and custom software so data moves reliably between teams and tools.",
      capabilities: [
        "API & Event Integration",
        "Workflow Automation",
        "Data Pipelines",
        "Monitoring & Alerts",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Resilient hosting, CI/CD, and observability so releases are boring—in the best way.",
      capabilities: [
        "Cloud Design & Migration",
        "DevOps & IaC",
        "Scaling & Cost Optimization",
        "Security Baselines",
      ],
    },
    {
      title: "Data & Analytics",
      description:
        "Structured data models, reporting, and analytics foundations that support better decisions.",
      capabilities: [
        "Database Design",
        "BI & Dashboards",
        "ETL & Warehousing",
        "Privacy-Aware Analytics",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <Seo
        title="Software & IT Services | Opero Malaysia"
        description="Website and system development, apps, integration, cloud, data, and IT consulting. Opero tech and software services for businesses in Malaysia."
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div className="max-w-4xl" initial="hidden" animate="visible" variants={heroContainer}>
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-black mb-8 leading-[1.1]"
              variants={heroItem}
            >
              Services
            </motion.h1>
            <motion.p className="text-xl text-gray-600 leading-relaxed" variants={heroItem}>
              Opero delivers IT solutions across development, design, integration, and consulting—and more as your needs grow.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="space-y-px bg-gray-200">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-12 transition-colors duration-300 hover:bg-gray-50 group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_DEFAULT}
                transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.4), ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6 }}
              >
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-1">
                    <span className="text-sm text-gray-400">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-3xl font-light mb-4 transition-colors duration-300 group-hover:text-black">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="text-sm text-gray-500">
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">Our Approach</h2>
          </div>

          <motion.div
            className="grid md:grid-cols-4 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
            variants={staggerContainer}
          >
            {[
              { title: "Discovery", desc: "Understanding your vision and objectives" },
              { title: "Strategy", desc: "Crafting the optimal technical approach" },
              { title: "Execution", desc: "Building with precision and care" },
              { title: "Evolution", desc: "Continuous refinement and support" },
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="border-l border-gray-800 pl-6 transition-colors duration-300 hover:border-gray-500"
                variants={staggerItem}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
              >
                <div className="text-sm text-gray-500 mb-4">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="text-2xl font-light mb-3">{phase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black mb-8">Ready to Begin?</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let's discuss how we can bring your vision to life
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-sm tracking-wider border-b-2 border-black pb-1 hover:border-gray-400 transition-colors duration-300 group active:scale-[0.98]"
            >
              START A CONVERSATION
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
