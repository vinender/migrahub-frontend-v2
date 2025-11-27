"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Users, Globe } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-primary-950">
      {/* Background Images Grid */}
      <div className="absolute inset-0 grid grid-cols-3 opacity-10">
        <div className="relative h-full">
          <Image
            src="https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=2940"
            alt="Vancouver"
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-full">
          <Image
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2940"
            alt="Golden Gate"
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-full">
          <Image
            src="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=2940"
            alt="Sydney"
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/90 to-primary-950/95" />

      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-500/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/10 backdrop-blur-sm">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-warning-400 text-warning-400" />
                  ))}
                </div>
                <span className="text-white/90 text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2 text-white/80">
                <Users className="h-4 w-4 text-accent-300" />
                <span className="text-sm font-medium">50,000+ Clients</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2 text-white/80">
                <Globe className="h-4 w-4 text-info-300" />
                <span className="text-sm font-medium">30+ Countries</span>
              </div>
            </div>

            <h2 className="text-heading-1 text-white mb-8 leading-tight tracking-tight">
              Ready to Start Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-white to-info-300 animate-gradient">
                Immigration Journey?
              </span>
            </h2>

            <p className="text-xl text-primary-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join thousands of successful immigrants who trusted MigraHub with their dreams.
              Get your free assessment in just 2 minutes.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-white/90 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <CheckCircle className="h-5 w-5 text-success-400" />
                <span className="font-medium">Free Assessment</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <CheckCircle className="h-5 w-5 text-success-400" />
                <span className="font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <CheckCircle className="h-5 w-5 text-success-400" />
                <span className="font-medium">Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <CheckCircle className="h-5 w-5 text-success-400" />
                <span className="font-medium">98% Success Rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/assessment">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white text-primary-950 rounded-button font-bold text-lg hover:bg-primary-50 transition-all flex items-center gap-3 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                >
                  Start Free Assessment
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-transparent text-white border border-white/30 rounded-button font-semibold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Talk to an Expert
                </motion.button>
              </Link>
            </div>

            {/* Urgency Message */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              <p className="text-sm text-accent-200 font-medium">
                Limited spots available for priority processing this month
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}