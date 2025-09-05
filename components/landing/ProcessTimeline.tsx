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
    <section className="py-20 bg-gray-50" id="process">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Your Immigration Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From application to approval - we make every step simple, transparent, and stress-free
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className={`flex items-center gap-4 mb-3 ${
                      index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                    }`}>
                      <span className="text-sm font-semibold px-3 py-1 rounded-full bg-black text-white">
                        Step {step.step}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-lg"
                >
                  <step.icon className="h-8 w-8 text-white" />
                  
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-gray-400 opacity-20 animate-ping" />
                </motion.div>

                {/* Spacer for mobile */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 bg-gray-900 rounded-3xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">50,000+</h3>
              <p className="text-white/80">Successful Applications</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p className="text-white/80">Success Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">48hrs</h3>
              <p className="text-white/80">Submission Time</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p className="text-white/80">Support Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}