"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Award,
  Users,
  FileCheck,
  Bell,
  TrendingUp,
  UserCheck,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Shield,
    title: "AI Risk Assessment",
    description: "Advanced AI analyzes your profile against thousands of successful cases to predict approval chances with high accuracy."
  },
  {
    icon: Zap,
    title: "48-Hour Processing",
    description: "Once we receive your documents, we'll submit your application online within just 48 hours, significantly cutting wait times."
  },
  {
    icon: UserCheck,
    title: "Simple Onboarding",
    description: "Guided process that takes you step-by-step through requirements. No confusing forms or legal jargon."
  },
  {
    icon: FileCheck,
    title: "Smart Application",
    description: "Auto-fills forms, validates documents in real-time, and ensures 100% accuracy before submission."
  },
  {
    icon: Bell,
    title: "Real-Time Updates",
    description: "Instant notifications on status changes, document requests, and important deadlines directly to your phone."
  },
  {
    icon: Award,
    title: "Expert Review",
    description: "Licensed RCCIC professionals and immigration lawyers review every application to ensure compliance."
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal case manager guides you through every step of your journey, available 24/7 for your questions."
  },
  {
    icon: TrendingUp,
    title: "98% Success Rate",
    description: "Industry-leading approval rates through AI technology and expert support, maximizing your chances."
  }
];

export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="features">
      {/* Decorative Background Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent-50 text-accent-600 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3 sm:mb-4 border border-accent-100">
            Why Choose MigraHub
          </span>
          <h2 className="text-heading-2 text-primary-900 mb-4 sm:mb-6">
            Technology Meets Expertise
          </h2>
          <p className="text-body-base sm:text-body-lg text-primary-600 max-w-2xl mx-auto px-2">
            We combine cutting-edge AI technology with human expertise to provide the most reliable, efficient, and successful immigration services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="p-5 sm:p-8 h-full bg-white rounded-xl sm:rounded-card border border-primary-100 hover:border-accent-200 hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-1">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-50 text-primary-900 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary-900 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-heading-6 font-semibold text-primary-900 mb-2 sm:mb-3 group-hover:text-accent-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-body-sm text-primary-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 sm:mt-20"
        >
          <Link href="/assessment">
            <button className="btn-primary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 shadow-glow flex items-center gap-2 mx-auto w-full sm:w-auto justify-center">
              Start Your Free Assessment
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </Link>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-primary-500">
            No credit card required • Takes less than 2 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}