"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle, AlertCircle, Globe, MapPin } from "lucide-react";
import { api } from "@/lib/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Question {
  _id: string;
  question: string;
  category: string;
  weight: number;
  riskFactor: string;
  helpText?: string;
  order: number;
}

interface AssessmentResponse {
  questionId: string;
  question: string;
  answer: boolean | string;
  weight: number;
}

const countries = [
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
];

const destinations = [
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "US", name: "USA", flag: "🇺🇸" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
];

export default function AssessmentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [responses, setResponses] = useState<AssessmentResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [fromCountry, setFromCountry] = useState(searchParams.get("from") || "");
  const [toCountry, setToCountry] = useState(searchParams.get("to") || "");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Fetch questions
  useEffect(() => {
    if (fromCountry && toCountry && currentStep === 1) {
      fetchQuestions();
    }
  }, [fromCountry, toCountry, currentStep]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await api.get("/assessment/questions", {
        params: { fromCountry, toCountry }
      });
      setQuestions(response.data.questions);
      setResponses(
        response.data.questions.map((q: Question) => ({
          questionId: q._id,
          question: q.question,
          answer: false,
          weight: q.weight
        }))
      );
    } catch (error) {
      toast.error("Failed to fetch assessment questions");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCountrySelection = () => {
    if (!fromCountry || !toCountry) {
      toast.error("Please select both countries");
      return;
    }
    setCurrentStep(1);
  };

  const handleAnswerChange = (questionId: string, answer: boolean) => {
    setResponses(prev =>
      prev.map(r =>
        r.questionId === questionId ? { ...r, answer } : r
      )
    );
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitAssessment();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const submitAssessment = async () => {
    try {
      setSubmitting(true);
      const sessionId = `session_${Date.now()}`;
      
      const response = await api.post("/assessment/submit", {
        sessionId,
        fromCountry,
        toCountry,
        responses
      });

      const { data } = response;
      toast.success("Assessment completed successfully!");
      
      // Navigate to results page
      router.push(`/assessment/results?sessionId=${data.sessionId}`);
    } catch (error) {
      toast.error("Failed to submit assessment");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const progress = questions.length > 0 
    ? ((currentQuestionIndex + 1) / questions.length) * 100 
    : 0;

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, any> = {
      personal: "👤",
      employment: "💼",
      financial: "💰",
      travel: "✈️",
      legal: "⚖️",
      health: "🏥",
      other: "📋"
    };
    return icons[category] || "📝";
  };

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
            Visa Eligibility Assessment
          </h1>
          <p className="text-xl text-gray-600">
            Answer a few questions to check your eligibility
          </p>
        </motion.div>

        {/* Country Selection Step */}
        {currentStep === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                Select Your Countries
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    Current Country
                  </label>
                  <select
                    value={fromCountry}
                    onChange={(e) => setFromCountry(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-gray-500 transition-colors"
                  >
                    <option value="" className="text-gray-900">Select your country</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code} className="text-gray-900">
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-600 mb-3">
                    <Globe className="h-4 w-4" />
                    Destination Country
                  </label>
                  <select
                    value={toCountry}
                    onChange={(e) => setToCountry(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-gray-500 transition-colors"
                  >
                    <option value="" className="text-gray-900">Select destination</option>
                    {destinations.map((country) => (
                      <option key={country.code} value={country.code} className="text-gray-900">
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleCountrySelection}
                  disabled={!fromCountry || !toCountry}
                  className="w-full py-4 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Start Assessment
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Questions Step */}
        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading questions...</p>
              </div>
            ) : questions.length > 0 ? (
              <>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 text-sm">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                    <span className="text-gray-700 text-sm">
                      {Math.round(progress)}% Complete
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="bg-black h-2 rounded-full"
                    />
                  </div>
                </div>

                {/* Question Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <span className="text-3xl">
                        {getCategoryIcon(questions[currentQuestionIndex].category)}
                      </span>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm mb-3">
                          {questions[currentQuestionIndex].category}
                        </span>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {questions[currentQuestionIndex].question}
                        </h3>
                        {questions[currentQuestionIndex].helpText && (
                          <p className="text-gray-500 text-sm flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 mt-0.5" />
                            {questions[currentQuestionIndex].helpText}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Answer Options */}
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => handleAnswerChange(
                          questions[currentQuestionIndex]._id,
                          true
                        )}
                        className={`p-6 rounded-xl border-2 transition-all ${
                          responses[currentQuestionIndex]?.answer === true
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <span className="text-gray-900 font-semibold">Yes</span>
                      </button>

                      <button
                        onClick={() => handleAnswerChange(
                          questions[currentQuestionIndex]._id,
                          false
                        )}
                        className={`p-6 rounded-xl border-2 transition-all ${
                          responses[currentQuestionIndex]?.answer === false
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <AlertCircle className="h-8 w-8 text-red-400 mx-auto mb-2" />
                        <span className="text-gray-900 font-semibold">No</span>
                      </button>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center mt-8">
                      <button
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                        className="px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        <ChevronLeft className="h-5 w-5" />
                        Previous
                      </button>

                      <button
                        onClick={handleNext}
                        disabled={submitting}
                        className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {currentQuestionIndex === questions.length - 1 ? (
                          submitting ? "Submitting..." : "Submit Assessment"
                        ) : (
                          "Next"
                        )}
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Category Progress */}
                <div className="mt-8 grid grid-cols-7 gap-2">
                  {["personal", "employment", "financial", "travel", "legal", "health", "other"].map((category) => {
                    const categoryQuestions = questions.filter(q => q.category === category);
                    const answeredQuestions = categoryQuestions.filter((q, idx) => {
                      const questionIdx = questions.findIndex(question => question._id === q._id);
                      return questionIdx <= currentQuestionIndex;
                    });
                    const progress = categoryQuestions.length > 0 
                      ? (answeredQuestions.length / categoryQuestions.length) * 100 
                      : 0;

                    return (
                      <div key={category} className="text-center">
                        <div className="text-2xl mb-2">{getCategoryIcon(category)}</div>
                        <div className="w-full bg-gray-200 rounded-full h-1">
                          <div 
                            className="bg-black h-1 rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400 mt-1">
                          {category}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No questions available</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}