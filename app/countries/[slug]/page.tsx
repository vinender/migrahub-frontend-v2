"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Users,
  DollarSign,
  Clock,
  Globe,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Heart,
  GraduationCap,
  Briefcase,
  BookOpen,
  Zap,
  Mountain,
  ArrowRight,
  Download,
  Calendar,
  ChevronRight,
  Info
} from "lucide-react";
import { countriesData } from "@/data/countries";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

import { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Heart,
  TrendingUp,
  Users,
  Shield,
  Mountain,
  Briefcase,
  BookOpen,
  Zap,
  MapPin,
  Star,
  DollarSign
};

export default function CountryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const country = countriesData[slug];

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-50">
        <div className="text-center p-8">
          <h1 className="text-heading-3 text-primary-900 mb-4">Country Not Found</h1>
          <p className="text-body-base text-primary-600 mb-6">The country you&apos;re looking for doesn&apos;t exist in our system.</p>
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <Image
            src={country.heroImage}
            alt={country.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/80 to-primary-950/50" />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 md:mb-8 w-fit transition-colors"
            >
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm md:text-base font-medium">Back to Home</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="text-4xl md:text-6xl">{country.flag}</span>
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 md:mb-2">
                    {country.name}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/90">{country.tagline}</p>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mb-6 md:mb-8 leading-relaxed">
                {country.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href="/assessment" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-primary-900 rounded-button font-semibold hover:bg-primary-50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg">
                    Start Free Assessment
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                </Link>
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-button font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Download className="h-4 w-4 md:h-5 md:w-5" />
                  Download Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Facts - Mobile First Grid */}
        <section className="py-8 md:py-12 bg-primary-50 border-y border-primary-200">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { icon: MapPin, label: "Capital", value: country.facts.capital },
                { icon: Users, label: "Population", value: country.facts.population },
                { icon: Globe, label: "Language", value: country.facts.language.join(", ") },
                { icon: DollarSign, label: "Currency", value: country.facts.currency },
                { icon: Clock, label: "Timezone", value: country.facts.timezone },
                { icon: Calendar, label: "Climate", value: country.facts.climate }
              ].map((fact) => (
                <div key={fact.label} className="text-center p-3 bg-white rounded-card border border-primary-100">
                  <fact.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-400 mx-auto mb-2" />
                  <p className="text-xs text-primary-500 mb-1 font-medium uppercase tracking-wide">{fact.label}</p>
                  <p className="text-xs md:text-sm font-bold text-primary-900 line-clamp-2">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics - Clean Mobile Layout */}
        <section className="py-12 md:py-16 bg-primary-900 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {country.statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-accent-300">{stat.value}</div>
                  <div className="text-base md:text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs md:text-sm text-white/60">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose - Mobile Optimized Cards */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-16"
            >
              <h2 className="text-heading-3 md:text-heading-2 text-primary-900 mb-3 md:mb-4">
                Why Choose {country.name}?
              </h2>
              <p className="text-body-base md:text-body-lg text-primary-600 max-w-2xl mx-auto">
                Discover the advantages of making {country.name} your new home
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {country.whyChoose.map((reason, index) => {
                const Icon = iconMap[reason.icon] || Star;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-primary-50 rounded-card p-5 md:p-6 hover:shadow-card-hover transition-all border border-primary-100"
                  >
                    <div className="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-heading-6 md:text-heading-5 text-primary-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-body-sm text-primary-600 leading-relaxed">{reason.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Visa Types - Mobile First Design */}
        <section className="py-12 md:py-20 bg-primary-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-16"
            >
              <h2 className="text-heading-3 md:text-heading-2 text-primary-900 mb-3 md:mb-4">
                Immigration Pathways
              </h2>
              <p className="text-body-base md:text-body-lg text-primary-600 max-w-2xl mx-auto">
                Explore different visa options tailored to your situation
              </p>
            </motion.div>

            <div className="grid gap-4 md:gap-8">
              {country.visaTypes.map((visa, index) => {
                const Icon = iconMap[visa.icon] || Briefcase;
                return (
                  <motion.div
                    key={visa.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-card p-5 md:p-8 border border-primary-200 hover:shadow-card-hover transition-all"
                  >
                    <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-heading-6 md:text-heading-5 text-primary-900 mb-1">
                          {visa.name}
                        </h3>
                        <p className="text-body-sm text-primary-600">{visa.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="bg-primary-50 rounded-xl p-3 border border-primary-100">
                        <p className="text-xs text-primary-500 mb-1 font-medium uppercase tracking-wide">Processing Time</p>
                        <p className="text-sm font-bold text-primary-900">{visa.processingTime}</p>
                      </div>
                      <div className="bg-primary-50 rounded-xl p-3 border border-primary-100">
                        <p className="text-xs text-primary-500 mb-1 font-medium uppercase tracking-wide">Validity</p>
                        <p className="text-sm font-bold text-primary-900">{visa.validity}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-primary-900 mb-2 flex items-center gap-2">
                          <Info className="h-4 w-4 text-primary-600" />
                          Key Requirements:
                        </h4>
                        <ul className="space-y-2">
                          {visa.requirements.slice(0, 4).map((req) => (
                            <li key={req} className="flex items-start gap-2 text-sm text-primary-600">
                              <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button className="w-full mt-4 md:mt-6 py-3 bg-primary-900 text-white rounded-button font-semibold hover:bg-primary-800 transition-all flex items-center justify-center gap-2 shadow-lg">
                      Learn More About {visa.name}
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Cities - Responsive Grid */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-16"
            >
              <h2 className="text-heading-3 md:text-heading-2 text-primary-900 mb-3 md:mb-4">
                Popular Destinations
              </h2>
              <p className="text-body-base md:text-body-lg text-primary-600 max-w-2xl mx-auto">
                Explore the best cities to live and work in {country.name}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
              {country.popularCities.map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-64 md:h-80 rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all"
                >
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{city.name}</h3>
                    <p className="text-white/90 text-xs md:text-sm leading-relaxed">{city.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery - Masonry Mobile Grid */}
        <section className="py-12 md:py-20 bg-primary-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-16"
            >
              <h2 className="text-heading-3 md:text-heading-2 text-primary-900 mb-3 md:mb-4">
                Experience {country.name}
              </h2>
              <p className="text-body-base md:text-body-lg text-primary-600 max-w-2xl mx-auto">
                A glimpse of what awaits you
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {country.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative h-48 md:h-64 rounded-card overflow-hidden group cursor-pointer shadow-card hover:shadow-card-hover transition-all"
                >
                  <Image
                    src={image.url}
                    alt={image.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/60 transition-colors flex items-end p-3 md:p-4">
                    <p className="text-white font-semibold text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile Optimized */}
        <section className="py-12 md:py-20 bg-primary-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-heading-3 md:text-heading-2 font-bold mb-3 md:mb-4">
                Ready to Start Your Journey to {country.name}?
              </h2>
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
                Take the first step today. Our AI-powered assessment will evaluate your eligibility in minutes.
              </p>
              <Link href="/assessment" className="inline-block w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary-900 rounded-button font-semibold hover:bg-primary-50 transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 shadow-glow">
                  Start Free Assessment
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
