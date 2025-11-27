"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function CompleteAssessmentPage() {
  const router = useRouter();
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    completeAssessment();
  }, []);

  const completeAssessment = async () => {
    try {
      // Check if user is logged in
      const token = localStorage.getItem('access_token');
      const user = localStorage.getItem('user');

      if (!token || !user) {
        toast.error("Please login first");
        router.push('/login');
        return;
      }

      // Get pending assessment data
      const pendingAssessment = localStorage.getItem('pending_assessment');

      if (!pendingAssessment) {
        toast.info("No pending assessment found");
        router.push('/');
        return;
      }

      const assessmentData = JSON.parse(pendingAssessment);

      // Check if assessment exists for this user
      const existingAssessment = await api.get('/assessment/my-assessment');

      if (existingAssessment.data && existingAssessment.data._id) {
        // User already has an assessment
        toast.info("You already have a completed assessment");
        localStorage.removeItem('pending_assessment');
        router.push('/');
        return;
      }

      // Submit the assessment
      const response = await api.post("/assessment/submit", assessmentData);

      if (response.success) {
        toast.success("Assessment saved successfully!");
        localStorage.removeItem('pending_assessment');

        // Redirect to dashboard
        router.push('/');
      }
    } catch (error: any) {
      console.error('Error completing assessment:', error);
      const message = error.response?.data?.message || 'Failed to save assessment';
      toast.error(message);

      // Redirect to dashboard anyway
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary-900 mx-auto mb-4" />
        <h2 className="text-heading-5 text-primary-900 mb-2">
          {processing ? "Saving your assessment..." : "Redirecting..."}
        </h2>
        <p className="text-body-base text-primary-600">
          Please wait while we process your information
        </p>
      </div>
    </div>
  );
}
