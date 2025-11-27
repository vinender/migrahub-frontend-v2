"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Award,
  ArrowRight,
  Download,
  Share2
} from "lucide-react";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import Link from "next/link";

interface AssessmentResult {
  sessionId: string;
  score: number;
  riskLevel: string;
  eligibilityStatus: string;
  recommendations: string[];
  nextSteps: string[];
  fromCountry: string;
  toCountry: string;
  completedAt: string;
}

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("sessionId");
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      fetchResults();
    } else {
      router.push("/assessment");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  const fetchResults = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/assessment/results/${sessionId}`);
      setResult(response.data);
    } catch (error) {
      toast.error("Failed to fetch assessment results");
      console.error(error);
      router.push("/assessment");
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      eligible: "bg-green-100 border-green-500",
      potentially_eligible: "bg-yellow-100 border-yellow-500",
      needs_review: "bg-orange-100 border-orange-500",
      not_eligible: "bg-red-100 border-red-500"
    };
    return colors[status] || "bg-gray-100 border-gray-500";
  };

  const getStatusIcon = (status: string) => {
    if (status === "eligible") return <CheckCircle className="h-16 w-16 text-green-400" />;
    if (status === "potentially_eligible") return <AlertCircle className="h-16 w-16 text-yellow-400" />;
    return <AlertCircle className="h-16 w-16 text-red-400" />;
  };

  const getStatusMessage = (status: string) => {
    const messages: Record<string, string> = {
      eligible: "Congratulations! You have strong eligibility for immigration.",
      potentially_eligible: "You may be eligible with some improvements to your profile.",
      needs_review: "Your profile needs expert review for the best pathway forward.",
      not_eligible: "Your current profile faces significant challenges for immigration."
    };
    return messages[status] || "Please consult with our experts for guidance.";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background pattern */}
      <div className="absolute inset-0 w-full h-full opacity-[0.02]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Assessment Results
          </h1>
          <p className="text-xl text-gray-600">
            Based on your responses, here's your immigration eligibility assessment
          </p>
        </motion.div>

        {/* Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className={`${getStatusColor(result.eligibilityStatus)} rounded-3xl p-8 border-2`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  {getStatusIcon(result.eligibilityStatus)}
                  <div>
                    <h2 className="text-3xl font-bold capitalize text-gray-900">
                      {result.eligibilityStatus.replace(/_/g, " ")}
                    </h2>
                    <p className="text-gray-600">
                      Risk Level: {result.riskLevel}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700">
                  {getStatusMessage(result.eligibilityStatus)}
                </p>
              </div>

              {/* Score Circle */}
              <div className="flex justify-center">
                <div className="relative">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="rgba(0,0,0,0.1)"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="#000000"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(result.score / 100) * 553} 553`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-gray-900">{result.score}%</span>
                      <p className="text-sm mt-1 text-gray-600">Eligibility Score</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-gray-600" />
              Recommendations
            </h3>
            <ul className="space-y-3">
              {result.recommendations.map((rec, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <span className="text-gray-700">{rec}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-gray-600" />
              Your Next Steps
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {result.nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-semibold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {result.eligibilityStatus === "eligible" && (
              <Link href="/register">
                <button className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition-all flex items-center gap-2">
                  Start Your Application
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            )}
            
            {(result.eligibilityStatus === "potentially_eligible" || 
              result.eligibilityStatus === "needs_review") && (
              <Link href="/contact">
                <button className="px-8 py-4 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-all flex items-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            )}

            <button className="px-8 py-4 rounded-full bg-white border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Report
            </button>

            <button className="px-8 py-4 rounded-full bg-white border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Share Results
            </button>
          </div>

          {/* Retake Assessment */}
          <div className="text-center mt-8">
            <Link href="/assessment">
              <button className="text-gray-600 hover:text-gray-900 transition-colors underline">
                Take Assessment Again
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4">
            <p className="text-yellow-700 text-sm flex items-start gap-2">
              <AlertCircle className="h-4 w-4 mt-0.5" />
              <span>
                This assessment is for informational purposes only and does not constitute legal advice. 
                Please consult with our immigration experts for a comprehensive evaluation of your case.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}