"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/auth-context';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import {
  User,
  FileText,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Loader2,
  TrendingUp,
  Users
} from 'lucide-react';
import Link from 'next/link';

// Layout and landing page components
import DashboardLayout from '@/components/layout/DashboardLayout';
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import DestinationCountries from "@/components/landing/DestinationCountries";
import Features from "@/components/landing/Features";
import FamilyVisaSection from "@/components/landing/FamilyVisaSection";
import ImmigrationStats from "@/components/landing/ImmigrationStats";
import ProcessTimeline from "@/components/landing/ProcessTimeline";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

interface Assessment {
  _id: string;
  score: number;
  riskLevel: 'low' | 'medium' | 'high';
  eligibilityStatus: string;
  recommendations: string[];
  fromCountry: string;
  toCountry: string;
  createdAt: string;
}

interface ProfileCompletion {
  completionStatus: {
    personalInfo: boolean;
    contactInfo: boolean;
    passportInfo: boolean;
    education: boolean;
    employment: boolean;
    financialInfo: boolean;
    documents: boolean;
    overallPercentage: number;
  };
  isProfileComplete: boolean;
}

interface AssessmentApiResponse {
  data?: Assessment;
}

interface ProfileCompletionApiResponse {
  data?: ProfileCompletion;
}

// Dashboard Component
function DashboardContent() {
  const { user } = useAuth();

  // Fetch assessment
  const { data: assessment, isLoading: assessmentLoading } = useQuery<Assessment>({
    queryKey: ['assessment'],
    queryFn: async () => {
      const response = await api.get<AssessmentApiResponse | Assessment>('/assessment/my-assessment');
      return (response as AssessmentApiResponse)?.data || (response as Assessment);
    },
    enabled: !!user,
  });

  // Fetch profile completion
  const { data: profileCompletion, isLoading: profileLoading } = useQuery<ProfileCompletion>({
    queryKey: ['profile-completion'],
    queryFn: async () => {
      const response = await api.get<ProfileCompletionApiResponse | ProfileCompletion>('/profile/completion');
      return (response as ProfileCompletionApiResponse)?.data || (response as ProfileCompletion);
    },
    enabled: !!user,
  });

  if (assessmentLoading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-50">
        <Loader2 className="h-12 w-12 animate-spin text-primary-900" />
      </div>
    );
  }

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'text-success-600 bg-success-50 border-success-200';
      case 'medium':
        return 'text-warning-600 bg-warning-50 border-warning-200';
      case 'high':
        return 'text-error-600 bg-error-50 border-error-200';
      default:
        return 'text-primary-600 bg-primary-50 border-primary-200';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success-600';
    if (score >= 60) return 'text-warning-600';
    return 'text-error-600';
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div>
            <h1 className="text-heading-3 text-primary-900">Welcome back, {user?.firstName}!</h1>
            <p className="mt-1 text-body-base text-primary-600">
              Track your visa application journey
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Risk Assessment Card */}
          <div className="lg:col-span-2">
            <div className="card">
              {assessment ? (
                <>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-heading-5 text-primary-900 mb-2">
                        Visa Eligibility Score
                      </h2>
                      <p className="text-body-sm text-primary-600">
                        Based on your risk assessment from {' '}
                        {new Date(assessment.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className={`px-4 py-2 rounded-card border-2 ${getRiskLevelColor(assessment.riskLevel)}`}>
                      <span className="text-label-base uppercase">{assessment.riskLevel} Risk</span>
                    </div>
                  </div>

                  {/* Score Circle */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-48 h-48">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="currentColor"
                          strokeWidth="12"
                          fill="none"
                          className="text-primary-200"
                        />
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="currentColor"
                          strokeWidth="12"
                          fill="none"
                          strokeDasharray={`${(assessment.score / 100) * 553} 553`}
                          className={getScoreColor(assessment.score)}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`text-5xl font-bold ${getScoreColor(assessment.score)}`}>
                          {Math.round(assessment.score)}
                        </span>
                        <span className="text-body-sm text-primary-600">/ 100</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="space-y-3">
                    <h3 className="text-heading-6 text-primary-900 mb-3">
                      Recommendations
                    </h3>
                    {assessment.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-primary-50 rounded-button">
                        <CheckCircle2 className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
                        <p className="text-body-sm text-primary-700">{rec}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <TrendingUp className="h-16 w-16 text-primary-300 mx-auto mb-4" />
                  <h3 className="text-heading-5 text-primary-900 mb-2">
                    No Assessment Found
                  </h3>
                  <p className="text-body-base text-primary-600 mb-6">
                    Take our visa eligibility assessment to check your chances
                  </p>
                  <Link
                    href="/assessment"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Start Assessment
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Profile Completion Card */}
          <div className="lg:col-span-1">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-heading-5 text-primary-900">
                  Profile Completion
                </h2>
                <User className="h-6 w-6 text-primary-600" />
              </div>

              {/* Completion Percentage */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-body-base text-primary-700">Overall Progress</span>
                  <span className="text-heading-6 text-primary-900">
                    {profileCompletion?.completionStatus.overallPercentage || 0}%
                  </span>
                </div>
                <div className="w-full bg-primary-200 rounded-full h-3">
                  <div
                    className="bg-success-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${profileCompletion?.completionStatus.overallPercentage || 0}%` }}
                  />
                </div>
              </div>

              {/* Completion Checklist */}
              <div className="space-y-3">
                {[
                  { key: 'personalInfo', label: 'Personal Information' },
                  { key: 'contactInfo', label: 'Contact Details' },
                  { key: 'passportInfo', label: 'Passport Information' },
                  { key: 'education', label: 'Education History' },
                  { key: 'employment', label: 'Employment History' },
                  { key: 'financialInfo', label: 'Financial Information' },
                  { key: 'documents', label: 'Documents Upload' },
                ].map((item) => {
                  const isComplete = profileCompletion?.completionStatus[item.key as keyof typeof profileCompletion.completionStatus];
                  return (
                    <div key={item.key} className="flex items-center gap-3">
                      {isComplete ? (
                        <CheckCircle2 className="h-5 w-5 text-success-600 flex-shrink-0" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-primary-300 flex-shrink-0" />
                      )}
                      <span className={`text-body-sm ${isComplete ? 'text-primary-900' : 'text-primary-600'}`}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <Link
                href="/profile"
                className="btn-primary w-full mt-6 flex items-center justify-center gap-2"
              >
                {profileCompletion?.isProfileComplete ? (
                  <>
                    <FileText className="h-5 w-5" />
                    View Profile
                  </>
                ) : (
                  <>
                    <User className="h-5 w-5" />
                    Complete Profile
                  </>
                )}
              </Link>
            </div>

            {/* Quick Links Card */}
            <div className="card mt-6">
              <h3 className="text-heading-6 text-primary-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/profile/family"
                  className="flex items-center justify-between p-3 rounded-button bg-primary-50 hover:bg-primary-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary-600" />
                    <span className="text-body-sm text-primary-900">Manage Family Members</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary-600" />
                </Link>
                <Link
                  href="/profile/documents"
                  className="flex items-center justify-between p-3 rounded-button bg-primary-50 hover:bg-primary-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary-600" />
                    <span className="text-body-sm text-primary-900">Upload Documents</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps Section */}
        {!profileCompletion?.isProfileComplete && (
          <div className="mt-8 card bg-info-50 border-info-200">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-info-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-heading-6 text-primary-900 mb-2">
                  Next Steps
                </h3>
                <p className="text-body-base text-primary-700 mb-4">
                  Complete your profile to start your visa application process. This will help us match you with the best visa options and streamline your application.
                </p>
                <Link
                  href="/profile"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Complete Your Profile
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

// Landing Page Component
function LandingPageContent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <DestinationCountries />
        <Features />
        <FamilyVisaSection />
        <ImmigrationStats />
        <ProcessTimeline />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}

// Main Home Component
export default function Home() {
  const { user, loading } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show loading state while checking auth or mounting
  if (loading || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-50">
        <Loader2 className="h-12 w-12 animate-spin text-primary-900" />
      </div>
    );
  }

  // Show dashboard for logged-in users
  if (user) {
    return <DashboardContent />;
  }

  // Show landing page for logged-out users
  return <LandingPageContent />;
}
