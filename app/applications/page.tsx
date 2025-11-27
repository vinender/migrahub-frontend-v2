'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/auth-context';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import {
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Loader2,
  Eye,
  Download,
  Plus,
  Filter,
  Search,
  Calendar,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import DashboardLayout from '@/components/layout/DashboardLayout';

interface Application {
  _id: string;
  applicationType: string;
  destinationCountry: string;
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
  submittedAt?: string;
  updatedAt: string;
  caseManager?: {
    firstName: string;
    lastName: string;
    email: string;
  };
  statusHistory: {
    status: string;
    timestamp: string;
    notes?: string;
  }[];
}

export default function ApplicationsPage() {
  const { user, loading: authLoading } = useAuth();
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch applications
  const { data: applications = [], isLoading } = useQuery<Application[]>({
    queryKey: ['applications'],
    queryFn: async () => {
      const response = await api.get('/applications');
      return response.data || [];
    },
    enabled: !!user,
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle2 className="h-5 w-5 text-success-600" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-error-600" />;
      case 'under_review':
        return <Clock className="h-5 w-5 text-warning-600" />;
      case 'submitted':
        return <CheckCircle2 className="h-5 w-5 text-info-600" />;
      default:
        return <FileText className="h-5 w-5 text-primary-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-success-600 bg-success-50 border-success-200';
      case 'rejected':
        return 'text-error-600 bg-error-50 border-error-200';
      case 'under_review':
        return 'text-warning-600 bg-warning-50 border-warning-200';
      case 'submitted':
        return 'text-info-600 bg-info-50 border-info-200';
      default:
        return 'text-primary-600 bg-primary-50 border-primary-200';
    }
  };

  const filteredApplications = applications.filter((app) => {
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    const matchesSearch =
      app.applicationType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.destinationCountry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  if (authLoading || isLoading) {
    return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary-900" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-heading-3 text-primary-900">My Applications</h1>
              <p className="mt-1 text-body-base text-primary-600">
                Track and manage your visa applications
              </p>
            </div>
            <Link
              href="/applications/new"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Plus className="h-5 w-5" />
              New Application
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-body-sm font-medium text-primary-700 mb-2">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search Applications
                </div>
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by type or country..."
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-body-sm font-medium text-primary-700 mb-2">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter by Status
                </div>
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-field"
              >
                <option value="all">All Statuses</option>
                <option value="draft">Draft</option>
                <option value="submitted">Submitted</option>
                <option value="under_review">Under Review</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Applications List */}
        {filteredApplications.length === 0 ? (
          <div className="card text-center py-12">
            <FileText className="h-16 w-16 text-primary-300 mx-auto mb-4" />
            <h3 className="text-heading-5 text-primary-900 mb-2">
              {applications.length === 0 ? 'No Applications Yet' : 'No Matching Applications'}
            </h3>
            <p className="text-body-base text-primary-600 mb-6">
              {applications.length === 0
                ? 'Start your visa application journey by creating a new application'
                : 'Try adjusting your filters or search query'}
            </p>
            {applications.length === 0 && (
              <Link
                href="/applications/new"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Plus className="h-5 w-5" />
                Create Your First Application
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredApplications.map((application) => (
              <div key={application._id} className="card hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-primary-100 rounded-card flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-heading-6 text-primary-900">
                          {application.applicationType}
                        </h3>
                        <div className={`px-3 py-1 rounded-card border text-body-xs font-medium ${getStatusColor(application.status)}`}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(application.status)}
                            <span className="capitalize">{application.status.replace('_', ' ')}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-body-sm text-primary-600">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          {application.destinationCountry}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {application.submittedAt
                            ? `Submitted ${new Date(application.submittedAt).toLocaleDateString()}`
                            : `Updated ${new Date(application.updatedAt).toLocaleDateString()}`}
                        </div>
                      </div>
                      {application.caseManager && (
                        <div className="mt-3 p-3 bg-primary-50 rounded-button">
                          <p className="text-body-xs text-primary-600 mb-1">Assigned Case Manager</p>
                          <p className="text-body-sm font-medium text-primary-900">
                            {application.caseManager.firstName} {application.caseManager.lastName}
                          </p>
                          <p className="text-body-xs text-primary-600">{application.caseManager.email}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/applications/${application._id}`}
                      className="p-2 text-primary-600 hover:bg-primary-50 rounded-button transition-colors"
                      title="View application"
                    >
                      <Eye className="h-5 w-5" />
                    </Link>
                    {application.status !== 'draft' && (
                      <button
                        className="p-2 text-primary-600 hover:bg-primary-50 rounded-button transition-colors"
                        title="Download application"
                      >
                        <Download className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Status History */}
                {application.statusHistory && application.statusHistory.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-primary-200">
                    <h4 className="text-body-sm font-semibold text-primary-900 mb-3">Recent Activity</h4>
                    <div className="space-y-2">
                      {application.statusHistory.slice(-3).reverse().map((history, index) => (
                        <div key={index} className="flex items-start gap-3 text-body-sm">
                          <div className={`w-2 h-2 rounded-full mt-1.5 ${
                            history.status === 'approved' ? 'bg-success-600' :
                            history.status === 'rejected' ? 'bg-error-600' :
                            history.status === 'under_review' ? 'bg-warning-600' :
                            'bg-info-600'
                          }`} />
                          <div className="flex-1">
                            <p className="text-primary-900">
                              Status changed to <span className="font-medium capitalize">{history.status.replace('_', ' ')}</span>
                            </p>
                            <p className="text-primary-600 text-body-xs">
                              {new Date(history.timestamp).toLocaleString()}
                            </p>
                            {history.notes && (
                              <p className="text-primary-700 mt-1">{history.notes}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Info Banner */}
        <div className="card mt-8 bg-info-50 border-info-200">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-info-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-heading-6 text-primary-900 mb-2">
                Application Processing Times
              </h3>
              <p className="text-body-sm text-primary-700">
                Processing times vary by application type and destination country. You can track the status of your application in real-time.
                If you have any questions, please contact your assigned case manager or reach out to our support team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
