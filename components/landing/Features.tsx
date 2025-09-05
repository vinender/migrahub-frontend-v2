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
  UserCheck
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "AI Risk Assessment",
    description: "Advanced AI analyzes your profile against thousands of successful cases to predict approval chances."
  },
  {
    icon: Zap,
    title: "48-Hour Processing",
    description: "Once we receive your documents, we'll submit your application online within just 48 hours."
  },
  {
    icon: UserCheck,
    title: "Simple Onboarding",
    description: "Guided process that takes you step-by-step through requirements. No confusing forms."
  },
  {
    icon: FileCheck,
    title: "Smart Application",
    description: "Auto-fills forms, validates documents in real-time, and ensures 100% accuracy."
  },
  {
    icon: Bell,
    title: "Real-Time Updates",
    description: "Instant notifications on status changes, document requests, and important deadlines."
  },
  {
    icon: Award,
    title: "Expert Review",
    description: "Licensed RCCIC professionals and immigration lawyers review every application."
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal case manager guides you through every step of your journey."
  },
  {
    icon: TrendingUp,
    title: "98% Success Rate",
    description: "Industry-leading approval rates through AI technology and expert support."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Choose MigraHub
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technology meets expertise for reliable immigration services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="p-6 h-full hover:bg-gray-50 rounded-lg transition-colors">
                {/* Icon */}
                <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors">
            Start Your Free Assessment
          </button>
        </motion.div>
      </div>
    </section>
  );
}