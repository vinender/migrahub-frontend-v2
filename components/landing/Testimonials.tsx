"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Raj Kumar",
    role: "Software Engineer",
    from: "India",
    to: "Canada",
    image: "https://ui-avatars.com/api/?name=Raj+Kumar&background=6366f1&color=fff",
    rating: 5,
    testimonial: "MigraHub made my Canadian PR dream a reality! The AI assessment saved me months of preparation. My case manager was incredibly supportive throughout the entire journey. Got my PR in just 6 months!",
    program: "Express Entry"
  },
  {
    name: "Maria Santos",
    role: "Healthcare Professional",
    from: "Philippines",
    to: "USA",
    image: "https://ui-avatars.com/api/?name=Maria+Santos&background=ec4899&color=fff",
    rating: 5,
    testimonial: "The process was so smooth! Real-time updates kept me informed at every step. The expert review caught issues I would have missed. Now I'm living my American dream as a registered nurse in California.",
    program: "H1-B Visa"
  },
  {
    name: "Zhang Wei",
    role: "Business Owner",
    from: "China",
    to: "Australia",
    image: "https://ui-avatars.com/api/?name=Zhang+Wei&background=10b981&color=fff",
    rating: 5,
    testimonial: "Outstanding service! The business visa process was complex but MigraHub simplified everything. Their lawyers are top-notch. I'm now successfully running my import business in Sydney.",
    program: "Business Innovation Visa"
  },
  {
    name: "Ahmed Hassan",
    role: "Data Scientist",
    from: "Egypt",
    to: "Canada",
    image: "https://ui-avatars.com/api/?name=Ahmed+Hassan&background=f59e0b&color=fff",
    rating: 5,
    testimonial: "I was skeptical about online immigration services, but MigraHub exceeded all expectations. The AI risk assessment was spot-on, and the 48-hour submission promise was kept. Highly recommended!",
    program: "Provincial Nominee"
  },
  {
    name: "Priya Sharma",
    role: "University Student",
    from: "India",
    to: "USA",
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=8b5cf6&color=fff",
    rating: 5,
    testimonial: "From F1 visa to green card, MigraHub guided me through every step. The document checklist was super helpful. Their team's expertise made a complex process feel simple. Forever grateful!",
    program: "Student to PR"
  },
  {
    name: "Carlos Rodriguez",
    role: "Chef",
    from: "Mexico",
    to: "Australia",
    image: "https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=06b6d4&color=fff",
    rating: 5,
    testimonial: "MigraHub's personalized approach made all the difference. My case manager understood my unique situation and found the perfect visa pathway. Now I'm head chef at a top Melbourne restaurant!",
    program: "Employer Sponsorship"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="testimonials">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 opacity-60" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-50 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 opacity-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent-50 text-accent-600 text-sm font-bold tracking-wide uppercase mb-4 border border-accent-100">
            Success Stories
          </span>
          <h2 className="text-heading-2 text-primary-900 mb-4">
            Trusted by Immigrants Worldwide
          </h2>
          <p className="text-body-lg text-primary-600 max-w-3xl mx-auto">
            Join thousands of happy immigrants who trusted MigraHub with their dreams. Real people, real success stories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="rounded-card h-full p-8 bg-white border border-primary-100 hover:border-accent-200 hover:shadow-card-hover transition-all duration-300 group relative">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-primary-100 group-hover:text-accent-100 transition-colors">
                  <Quote className="h-10 w-10 fill-current" />
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                      <div className="bg-success-500 rounded-full w-3 h-3 border-2 border-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 text-lg leading-tight">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary-500 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Journey Badge */}
                <div className="flex items-center gap-2 mb-6 bg-primary-50 rounded-lg p-3 border border-primary-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary-700">
                    <MapPin className="h-3.5 w-3.5 text-primary-400" />
                    {testimonial.from}
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-primary-400" />
                  <div className="flex items-center gap-1.5 text-xs font-bold text-accent-600">
                    <MapPin className="h-3.5 w-3.5 text-accent-500" />
                    {testimonial.to}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning-400 text-warning-400" />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-body-sm text-primary-600 leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Program Badge */}
                <div className="inline-flex items-center gap-2 bg-primary-900 px-3 py-1.5 rounded-full mt-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wide">
                    {testimonial.program}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-8 bg-white px-8 py-4 rounded-full shadow-sm border border-primary-100">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-warning-400 text-warning-400" />
              <span className="font-bold text-primary-900">4.9/5 Rating</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-primary-300" />
            <span className="text-primary-600 font-medium">50,000+ Success Stories</span>
            <div className="w-1 h-1 rounded-full bg-primary-300" />
            <span className="text-primary-600 font-medium">Licensed Professionals</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}