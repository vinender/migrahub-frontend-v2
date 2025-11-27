'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { toast } from 'sonner';
import {
  Users,
  Plus,
  Edit2,
  Trash2,
  Loader2,
  ChevronLeft,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import DashboardLayout from '@/components/layout/DashboardLayout';

interface FamilyMember {
  _id?: string;
  firstName: string;
  lastName: string;
  relationship: string;
  dateOfBirth: string;
  nationality: string;
  passportNumber?: string;
  email?: string;
  phone?: string;
}

export default function FamilyMembersPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState<FamilyMember | null>(null);
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<FamilyMember>({
    firstName: '',
    lastName: '',
    relationship: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    email: '',
    phone: ''
  });

  // Fetch family members
  const { data: familyMembers = [], isLoading } = useQuery<FamilyMember[]>({
    queryKey: ['family-members'],
    queryFn: async () => {
      const response = await api.get('/profile/family-members');
      return response.data || [];
    },
    enabled: !!user,
  });

  // Add/Update family member mutation
  const saveMemberMutation = useMutation({
    mutationFn: async (data: FamilyMember) => {
      if (data._id) {
        const response = await api.put(`/profile/family-members/${data._id}`, data);
        return response.data;
      } else {
        const response = await api.post('/profile/family-members', data);
        return response.data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['family-members'] });
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      queryClient.invalidateQueries({ queryKey: ['profile-completion'] });
      toast.success(editingMember ? 'Family member updated successfully' : 'Family member added successfully');
      resetForm();
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to save family member');
    },
  });

  // Delete family member mutation
  const deleteMemberMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await api.delete(`/profile/family-members/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['family-members'] });
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      queryClient.invalidateQueries({ queryKey: ['profile-completion'] });
      toast.success('Family member deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to delete family member');
    },
  });

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      relationship: '',
      dateOfBirth: '',
      nationality: '',
      passportNumber: '',
      email: '',
      phone: ''
    });
    setEditingMember(null);
    setShowForm(false);
  };

  const handleEdit = (member: FamilyMember) => {
    setEditingMember(member);
    setFormData(member);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this family member?')) {
      deleteMemberMutation.mutate(id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveMemberMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/profile"
                className="text-primary-600 hover:text-primary-900 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </Link>
              <div>
                <h1 className="text-heading-3 text-primary-900">Family Members</h1>
                <p className="mt-1 text-body-base text-primary-600">
                  Manage your family members who will be included in your application
                </p>
              </div>
            </div>
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Plus className="h-5 w-5" />
                Add Family Member
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showForm ? (
          <div className="card max-w-2xl mx-auto">
            <h2 className="text-heading-5 text-primary-900 mb-6">
              {editingMember ? 'Edit Family Member' : 'Add New Family Member'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-body-sm font-medium text-primary-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-body-sm font-medium text-primary-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-body-sm font-medium text-primary-700 mb-2">
                    Relationship *
                  </label>
                  <select
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select relationship</option>
                    <option value="spouse">Spouse</option>
                    <option value="child">Child</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-body-sm font-medium text-primary-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-body-sm font-medium text-primary-700 mb-2">
                    Nationality *
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-body-sm font-medium text-primary-700 mb-2">
                    Passport Number
                  </label>
                  <input
                    type="text"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-body-sm font-medium text-primary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-body-sm font-medium text-primary-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={saveMemberMutation.isPending}
                  className="btn-primary flex-1"
                >
                  {saveMemberMutation.isPending ? 'Saving...' : editingMember ? 'Update Member' : 'Add Member'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            {familyMembers.length === 0 ? (
              <div className="card text-center py-12">
                <Users className="h-16 w-16 text-primary-300 mx-auto mb-4" />
                <h3 className="text-heading-5 text-primary-900 mb-2">
                  No Family Members Added
                </h3>
                <p className="text-body-base text-primary-600 mb-6">
                  Add family members who will be included in your visa application
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Plus className="h-5 w-5" />
                  Add Your First Family Member
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {familyMembers.map((member) => (
                  <div key={member._id} className="card">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(member)}
                          className="p-2 text-primary-600 hover:bg-primary-50 rounded-button transition-colors"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => member._id && handleDelete(member._id)}
                          disabled={deleteMemberMutation.isPending}
                          className="p-2 text-error-600 hover:bg-error-50 rounded-button transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-heading-6 text-primary-900 mb-1">
                      {member.firstName} {member.lastName}
                    </h3>
                    <p className="text-body-sm text-primary-600 mb-4 capitalize">
                      {member.relationship}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-body-sm text-primary-700">
                        <Calendar className="h-4 w-4 text-primary-500" />
                        {new Date(member.dateOfBirth).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-body-sm text-primary-700">
                        <MapPin className="h-4 w-4 text-primary-500" />
                        {member.nationality}
                      </div>
                      {member.email && (
                        <div className="flex items-center gap-2 text-body-sm text-primary-700">
                          <Mail className="h-4 w-4 text-primary-500" />
                          {member.email}
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex items-center gap-2 text-body-sm text-primary-700">
                          <Phone className="h-4 w-4 text-primary-500" />
                          {member.phone}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
