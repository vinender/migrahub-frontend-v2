'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { toast } from 'sonner';
import {
  FileText,
  Upload,
  Download,
  Trash2,
  Loader2,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import DashboardLayout from '@/components/layout/DashboardLayout';

interface Document {
  _id: string;
  documentType: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
}

const documentTypes = [
  { value: 'passport', label: 'Passport' },
  { value: 'birth_certificate', label: 'Birth Certificate' },
  { value: 'marriage_certificate', label: 'Marriage Certificate' },
  { value: 'education_certificate', label: 'Education Certificate' },
  { value: 'employment_letter', label: 'Employment Letter' },
  { value: 'bank_statement', label: 'Bank Statement' },
  { value: 'tax_return', label: 'Tax Return' },
  { value: 'police_clearance', label: 'Police Clearance' },
  { value: 'medical_report', label: 'Medical Report' },
  { value: 'other', label: 'Other' }
];

export default function DocumentsPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [selectedType, setSelectedType] = useState('');
  const [uploading, setUploading] = useState(false);
  const queryClient = useQueryClient();

  // Fetch documents
  const { data: documents = [], isLoading } = useQuery<Document[]>({
    queryKey: ['documents'],
    queryFn: async () => {
      const response = await api.get('/profile/documents');
      return response.data || [];
    },
    enabled: !!user,
  });

  // Delete document mutation
  const deleteDocumentMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await api.delete(`/profile/documents/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      queryClient.invalidateQueries({ queryKey: ['profile-completion'] });
      toast.success('Document deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to delete document');
    },
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedType) {
      toast.error('Please select a document type');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size must be less than 10MB');
      return;
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Only PDF, JPG, and PNG files are allowed');
      return;
    }

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('documentType', selectedType);

      const response = await api.post('/profile/documents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.success) {
        queryClient.invalidateQueries({ queryKey: ['documents'] });
        queryClient.invalidateQueries({ queryKey: ['profile-completion'] });
        toast.success('Document uploaded successfully');
        setSelectedType('');
        // Reset file input
        e.target.value = '';
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to upload document');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this document?')) {
      deleteDocumentMutation.mutate(id);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle2 className="h-5 w-5 text-success-600" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-error-600" />;
      default:
        return <Clock className="h-5 w-5 text-warning-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-success-600 bg-success-50 border-success-200';
      case 'rejected':
        return 'text-error-600 bg-error-50 border-error-200';
      default:
        return 'text-warning-600 bg-warning-50 border-warning-200';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

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
          <div className="flex items-center gap-4">
            <Link
              href="/profile"
              className="text-primary-600 hover:text-primary-900 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-heading-3 text-primary-900">Documents</h1>
              <p className="mt-1 text-body-base text-primary-600">
                Upload and manage your visa application documents
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upload Section */}
        <div className="card mb-8">
          <h2 className="text-heading-5 text-primary-900 mb-6">Upload New Document</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-body-sm font-medium text-primary-700 mb-2">
                Document Type *
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="input-field"
              >
                <option value="">Select document type</option>
                {documentTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-body-sm font-medium text-primary-700 mb-2">
                Select File *
              </label>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  disabled={!selectedType || uploading}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="input-field file:mr-4 file:py-2 file:px-4 file:rounded-button file:border-0 file:text-body-sm file:font-medium file:bg-primary-600 file:text-white hover:file:bg-primary-700 disabled:opacity-50"
                />
              </div>
              <p className="text-body-xs text-primary-600 mt-2">
                Accepted formats: PDF, JPG, PNG (Max 10MB)
              </p>
            </div>
          </div>
          {uploading && (
            <div className="mt-4 flex items-center gap-2 text-primary-600">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span className="text-body-sm">Uploading document...</span>
            </div>
          )}
        </div>

        {/* Documents List */}
        <div className="card">
          <h2 className="text-heading-5 text-primary-900 mb-6">Uploaded Documents</h2>
          {documents.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-primary-300 mx-auto mb-4" />
              <h3 className="text-heading-6 text-primary-900 mb-2">
                No Documents Uploaded
              </h3>
              <p className="text-body-base text-primary-600">
                Upload your required documents to complete your profile
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc._id}
                  className="flex items-center justify-between p-4 border border-primary-200 rounded-card hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-primary-100 rounded-card flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-body-base font-semibold text-primary-900 truncate">
                          {documentTypes.find(t => t.value === doc.documentType)?.label || doc.documentType}
                        </h3>
                        <div className={`px-3 py-1 rounded-card border text-body-xs font-medium ${getStatusColor(doc.status)}`}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(doc.status)}
                            <span className="capitalize">{doc.status}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-body-sm text-primary-600 truncate">
                        {doc.fileName} • {formatFileSize(doc.fileSize)} • {new Date(doc.uploadedAt).toLocaleDateString()}
                      </p>
                      {doc.status === 'rejected' && doc.rejectionReason && (
                        <div className="mt-2 flex items-start gap-2 p-2 bg-error-50 rounded-button">
                          <AlertCircle className="h-4 w-4 text-error-600 flex-shrink-0 mt-0.5" />
                          <p className="text-body-xs text-error-700">{doc.rejectionReason}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-primary-600 hover:bg-primary-50 rounded-button transition-colors"
                      title="View document"
                    >
                      <Eye className="h-5 w-5" />
                    </a>
                    <a
                      href={doc.fileUrl}
                      download
                      className="p-2 text-primary-600 hover:bg-primary-50 rounded-button transition-colors"
                      title="Download document"
                    >
                      <Download className="h-5 w-5" />
                    </a>
                    <button
                      onClick={() => handleDelete(doc._id)}
                      disabled={deleteDocumentMutation.isPending}
                      className="p-2 text-error-600 hover:bg-error-50 rounded-button transition-colors"
                      title="Delete document"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Guidelines */}
        <div className="card mt-8 bg-info-50 border-info-200">
          <h3 className="text-heading-6 text-primary-900 mb-4">Document Guidelines</h3>
          <ul className="space-y-2 text-body-sm text-primary-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
              All documents must be clear and legible
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
              Accepted formats: PDF, JPG, PNG (Maximum size: 10MB)
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
              Ensure all text in the documents is readable
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
              Upload certified translations for non-English documents
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
              Keep digital copies of all uploaded documents
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
