"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  FileSearch,
  Upload,
  CreditCard,
  Send,
  Clock,
  CheckCircle,
  Plane
} from "lucide-react";

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and complete your profile with basic information in under 5 minutes",
    duration: "5 min"
  },
  {
    step: 2,
    icon: FileSearch,
    title: "AI Risk Assessment",
    description: "Our AI analyzes your profile and provides instant eligibility feedback",
    duration: "Instant"
  },
  {
    step: 3,
    icon: Upload,
    title: "Upload Documents",
    description: "Securely upload required documents with our guided checklist",
    duration: "15 min"
  },
  {
    step: 4,
    icon: CreditCard,
    title: "Make Payment",
    description: "Secure payment processing with multiple payment options",
    duration: "2 min"
  },
  {
    step: 5,
    icon: Send,
    title: "Application Submission",
    description: "Expert review and submission within 48 hours",
    duration: "48 hrs"
  },
  {
    step: 6,
    icon: Clock,
    title: "Track Progress",
    description: "Real-time updates on your application status",
    duration: "Ongoing"
  },
  {
    step: 7,
    icon: CheckCircle,
    title: "Receive Decision",
    description: "Get notified instantly when decision is made",
    duration: "4-6 months"
  },
  {
    step: 8,
    icon: Plane,
    title: "Start Your Journey",
    description: "Receive your visa and begin your new life abroad",
    duration: "Success!"
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-20"
        >
          <h2 className="text-heading-2 text-primary-900 mb-3 sm:mb-4">
            Your Immigration Journey
          </h2>
          <p className="text-body-base sm:text-body-lg text-primary-600 max-w-3xl mx-auto px-2">
            From application to approval - we make every step simple, transparent, and stress-free
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop only */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200 hidden lg:block" />

          {/* Connecting Line - Mobile */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-primary-200 lg:hidden" />

          <div className="space-y-6 sm:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-start lg:items-center gap-4 sm:gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Icon Circle - Mobile positioned first */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary-900 flex items-center justify-center shadow-lg border-4 border-white flex-shrink-0 lg:order-none order-first"
                >
                  <step.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />

                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-accent-500 opacity-20 animate-ping" />
                </motion.div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl sm:rounded-card p-4 sm:p-8 border border-primary-100 hover:shadow-card-hover transition-all duration-300 group"
                  >
                    <div className={`flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-4 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                      }`}>
                      <span className="text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary-900 text-white uppercase tracking-wider">
                        Step {step.step}
                      </span>
                      <span className="text-[10px] sm:text-xs text-primary-500 font-medium flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-heading-6 font-semibold text-primary-900 mb-1 sm:mb-2 group-hover:text-accent-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-body-sm text-primary-500">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for desktop */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}