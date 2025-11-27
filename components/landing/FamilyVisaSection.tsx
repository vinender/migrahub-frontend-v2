"use client";

import { motion } from "framer-motion";
import { Users, Heart, Baby, UserPlus, CheckCircle2, Shield } from "lucide-react";
import Image from "next/image";

const familyMembers = [
  {
    icon: Heart,
    title: "Spouse",
    description: "Bring your husband or wife to start your new life together"
  },
  {
    icon: Baby,
    title: "Children",
    description: "File for dependent children under 22 years old"
  },
  {
    icon: Users,
    title: "Parents",
    description: "Sponsor your parents for permanent residency"
  },
  {
    icon: UserPlus,
    title: "Siblings",
    description: "Include eligible siblings in your application"
  }
];

const benefits = [
  "Single application process for all family members",
  "Synchronized visa processing and approval",
  "Reduced overall processing time and costs",
  "Family-friendly immigration pathways",
  "Expert guidance for dependent applications",
  "Comprehensive document management"
];

export default function FamilyVisaSection() {
  return (
    <section id="family" className="py-16 sm:py-24 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background decoration - Hidden on mobile */}
      <div className="hidden sm:block absolute top-20 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute bottom-20 left-0 w-96 h-96 bg-info-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary-900 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-lg">
            <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">Family Immigration</span>
          </div>

          <h2 className="text-heading-2 text-primary-900 mb-3 sm:mb-4">
            Bring Your Family Along
          </h2>
          <p className="text-body-base sm:text-body-lg text-primary-600 max-w-3xl mx-auto px-2">
            As a primary applicant, you can file visa applications for your family members
            alongside your own application. Keep your loved ones together throughout your immigration journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
          {/* Left: Family members grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {familyMembers.map((member, index) => (
                <motion.div
                  key={member.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-primary-100 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-900 text-white rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent-600 transition-colors">
                    <member.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-primary-900 mb-1 sm:mb-2 group-hover:text-accent-600 transition-colors">
                    {member.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary-500 leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image and benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 sm:space-y-8"
          >
            {/* Family image */}
            <div className="relative h-52 sm:h-80 rounded-xl sm:rounded-card overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2940"
                alt="Happy family together"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                <p className="text-base sm:text-lg font-bold mb-0.5 sm:mb-1">Your Complete Family</p>
                <p className="text-xs sm:text-sm text-primary-100">Together in your new home</p>
              </div>
            </div>

            {/* Benefits list */}
            <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-card shadow-card border border-primary-100">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 bg-accent-50 rounded-lg">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-accent-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary-900">
                  Family Application Benefits
                </h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-primary-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Glow - Hidden on mobile */}
          <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-5xl mx-auto relative z-10">
            <h3 className="text-heading-3 font-bold mb-8 sm:mb-12 text-center">
              How Family Filing Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 relative">
              {/* Connecting Line - Desktop only */}
              <div className="absolute top-6 left-0 w-full h-0.5 bg-white/20 hidden md:block" />

              <div className="text-center relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white text-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 font-bold text-lg sm:text-xl shadow-lg border-4 border-primary-800">
                  1
                </div>
                <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Complete Application</h4>
                <p className="text-xs sm:text-sm text-primary-200 leading-relaxed">
                  Start with your primary application and profile details
                </p>
              </div>
              <div className="text-center relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white text-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 font-bold text-lg sm:text-xl shadow-lg border-4 border-primary-800">
                  2
                </div>
                <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Add Family Members</h4>
                <p className="text-xs sm:text-sm text-primary-200 leading-relaxed">
                  Include eligible family members and their documents
                </p>
              </div>
              <div className="text-center relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white text-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 font-bold text-lg sm:text-xl shadow-lg border-4 border-primary-800">
                  3
                </div>
                <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Submit Together</h4>
                <p className="text-xs sm:text-sm text-primary-200 leading-relaxed">
                  One streamlined submission for all applications
                </p>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <a href="/register">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-900 rounded-lg sm:rounded-button font-bold text-base sm:text-lg hover:bg-primary-50 transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
                  Start Family Application
                  <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
