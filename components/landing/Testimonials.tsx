"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of happy immigrants who trusted MigraHub with their dreams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="rounded-2xl h-full p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative">
                  {/* Quote Icon */}
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gray-200" />
                  
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs">{testimonial.from}</span>
                        <span className="text-xs">→</span>
                        <span className="text-xs font-semibold">{testimonial.to}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Program Badge */}
                  <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-gray-700">
                      {testimonial.program}
                    </span>
                  </div>
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
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-gray-900">4.9/5 Rating</span>
            </div>
            <div className="text-gray-400">•</div>
            <span className="text-gray-600">50,000+ Success Stories</span>
            <div className="text-gray-400">•</div>
            <span className="text-gray-600">Licensed RCCIC Professionals</span>
            <div className="text-gray-400">•</div>
            <span className="text-gray-600">Verified Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}