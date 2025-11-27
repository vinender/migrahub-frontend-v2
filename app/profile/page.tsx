'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { toast } from 'sonner';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  FileText,
  Loader2,
  Edit2,
  Plus,
  Users,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import DashboardLayout from '@/components/layout/DashboardLayout';
import PersonalInfoForm from '@/components/profile/PersonalInfoForm';
import ContactInfoForm from '@/components/profile/ContactInfoForm';
import PassportInfoForm from '@/components/profile/PassportInfoForm';
import EducationForm from '@/components/profile/EducationForm';
import EmploymentForm from '@/components/profile/EmploymentForm';
import FinancialInfoForm from '@/components/profile/FinancialInfoForm';

interface ApplicantProfile {
  _id: string;
  personalInfo: any;
  contactInfo: any;
  passportInfo: any;
  education: any[];
  employment: any[];
  financialInfo: any;
  familyMembers: any[];
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

type Section = 'view' | 'personalInfo' | 'contactInfo' | 'passportInfo' | 'education' | 'employment' | 'financialInfo';

export default function ProfilePage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [activeSection, setActiveSection] = useState<Section>('view');
  const queryClient = useQueryClient();

  // Fetch profile
  const { data: profile, isLoading } = useQuery<ApplicantProfile>({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await api.get('/profile');
      return response.data;
    },
    enabled: !!user,
  });

  // Update profile mutation
  const updateProfileMutation = useMutation({
    mutationFn: async ({ section, data }: { section: string; data: any }) => {
      const response = await api.put('/profile', { section, data });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      queryClient.invalidateQueries({ queryKey: ['profile-completion'] });
      toast.success('Profile updated successfully');
      setActiveSection('view');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to update profile');
    },
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-50">
        <Loader2 className="h-12 w-12 animate-spin text-primary-900" />
      </div>
    );
  }

  const handleSaveSection = (section: string, data: any) => {
    updateProfileMutation.mutate({ section, data });
  };

  // Render section content
  const renderSectionContent = () => {
    if (!profile) return null;

    switch (activeSection) {
      case 'personalInfo':
        return (
          <PersonalInfoForm
            data={profile.personalInfo}
            onSave={(data) => handleSaveSection('personalInfo', data)}
            onCancel={() => setActiveSection('view')}
          />
        );
      case 'contactInfo':
        return (
          <ContactInfoForm
            data={profile.contactInfo}
            onSave={(data) => handleSaveSection('contactInfo', data)}
            onCancel={() => setActiveSection('view')}
          />
        );
      case 'passportInfo':
        return (
          <PassportInfoForm
            data={profile.passportInfo}
            onSave={(data) => handleSaveSection('passportInfo', data)}
            onCancel={() => setActiveSection('view')}
          />
        );
      case 'education':
        return (
          <EducationForm
            data={profile.education}
            onSave={(data) => handleSaveSection('education', data)}
            onCancel={() => setActiveSection('view')}
          />
        );
      case 'employment':
        return (
          <EmploymentForm
            data={profile.employment}
            onSave={(data) => handleSaveSection('employment', data)}
            onCancel={() => setActiveSection('view')}
          />
        );
      case 'financialInfo':
        return (
          <FinancialInfoForm
            data={profile.financialInfo}
            onSave={(data) => handleSaveSection('financialInfo', data)}
            onCancel={() => setActiveSection('view')}
          />
        );
      default:
        return renderProfileView();
    }
  };

  const renderProfileView = () => {
    if (!profile) return null;

    return (
      <div className="space-y-6">
        {/* Family Members Section - At Top */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-heading-5 text-primary-900 flex items-center gap-2">
                <Users className="h-6 w-6" />
                Family Members
              </h2>
              <p className="text-body-sm text-primary-600 mt-1">
                Manage family members included in your application
              </p>
            </div>
            <Link
              href="/profile/family/add"
              className="btn-primary flex items-center gap-2"
            >
              <Plus className="h-5 w-5" />
              Add Family Member
            </Link>
          </div>

          {profile.familyMembers && profile.familyMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.familyMembers.map((member: any) => (
                <Link
                  key={member._id}
                  href={`/profile/family/${member._id}`}
                  className="flex items-center justify-between p-4 border-2 border-primary-200 rounded-card hover:border-primary-400 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-body-base font-medium text-primary-900">
                        {member.firstName} {member.lastName}
                      </p>
                      <p className="text-body-sm text-primary-600 capitalize">
                        {member.relationship}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-primary-400" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-primary-50 rounded-card">
              <Users className="h-12 w-12 text-primary-300 mx-auto mb-3" />
              <p className="text-body-base text-primary-600">No family members added yet</p>
              <p className="text-body-sm text-primary-500 mt-1">
                Add family members who will be included in your visa application
              </p>
            </div>
          )}
        </div>

        {/* Personal Information */}
        <ProfileSection
          title="Personal Information"
          icon={<User className="h-6 w-6" />}
          onEdit={() => setActiveSection('personalInfo')}
          isComplete={profile.completionStatus.personalInfo}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem label="First Name" value={profile.personalInfo?.firstName} />
            <InfoItem label="Last Name" value={profile.personalInfo?.lastName} />
            <InfoItem label="Date of Birth" value={profile.personalInfo?.dateOfBirth ? new Date(profile.personalInfo.dateOfBirth).toLocaleDateString() : null} />
            <InfoItem label="Gender" value={profile.personalInfo?.gender} />
            <InfoItem label="Nationality" value={profile.personalInfo?.nationality} />
            <InfoItem label="Marital Status" value={profile.personalInfo?.maritalStatus} />
          </div>
        </ProfileSection>

        {/* Contact Information */}
        <ProfileSection
          title="Contact Information"
          icon={<Mail className="h-6 w-6" />}
          onEdit={() => setActiveSection('contactInfo')}
          isComplete={profile.completionStatus.contactInfo}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem label="Email" value={profile.contactInfo?.email} />
            <InfoItem label="Phone" value={profile.contactInfo?.phone} />
            <InfoItem
              label="Current Address"
              value={profile.contactInfo?.currentAddress ?
                `${profile.contactInfo.currentAddress.street}, ${profile.contactInfo.currentAddress.city}, ${profile.contactInfo.currentAddress.country}` : null
              }
              fullWidth
            />
          </div>
        </ProfileSection>

        {/* Passport Information */}
        <ProfileSection
          title="Passport Information"
          icon={<FileText className="h-6 w-6" />}
          onEdit={() => setActiveSection('passportInfo')}
          isComplete={profile.completionStatus.passportInfo}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem label="Passport Number" value={profile.passportInfo?.passportNumber} />
            <InfoItem label="Issuing Country" value={profile.passportInfo?.issuingCountry} />
            <InfoItem label="Issue Date" value={profile.passportInfo?.issueDate ? new Date(profile.passportInfo.issueDate).toLocaleDateString() : null} />
            <InfoItem label="Expiry Date" value={profile.passportInfo?.expiryDate ? new Date(profile.passportInfo.expiryDate).toLocaleDateString() : null} />
          </div>
        </ProfileSection>

        {/* Education */}
        <ProfileSection
          title="Education History"
          icon={<GraduationCap className="h-6 w-6" />}
          onEdit={() => setActiveSection('education')}
          isComplete={profile.completionStatus.education}
        >
          {profile.education && profile.education.length > 0 ? (
            <div className="space-y-4">
              {profile.education.map((edu: any, index: number) => (
                <div key={index} className="p-4 bg-primary-50 rounded-card">
                  <h4 className="text-body-base font-medium text-primary-900">{edu.degree}</h4>
                  <p className="text-body-sm text-primary-600">{edu.institution}</p>
                  <p className="text-body-xs text-primary-500 mt-1">
                    {new Date(edu.startDate).getFullYear()} - {edu.isCurrentlyEnrolled ? 'Present' : new Date(edu.endDate).getFullYear()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-body-sm text-primary-500">No education history added</p>
          )}
        </ProfileSection>

        {/* Employment */}
        <ProfileSection
          title="Employment History"
          icon={<Briefcase className="h-6 w-6" />}
          onEdit={() => setActiveSection('employment')}
          isComplete={profile.completionStatus.employment}
        >
          {profile.employment && profile.employment.length > 0 ? (
            <div className="space-y-4">
              {profile.employment.map((emp: any, index: number) => (
                <div key={index} className="p-4 bg-primary-50 rounded-card">
                  <h4 className="text-body-base font-medium text-primary-900">{emp.position}</h4>
                  <p className="text-body-sm text-primary-600">{emp.employer}</p>
                  <p className="text-body-xs text-primary-500 mt-1">
                    {new Date(emp.startDate).toLocaleDateString()} - {emp.isCurrentlyEmployed ? 'Present' : new Date(emp.endDate).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-body-sm text-primary-500">No employment history added</p>
          )}
        </ProfileSection>

        {/* Financial Information */}
        <ProfileSection
          title="Financial Information"
          icon={<MapPin className="h-6 w-6" />}
          onEdit={() => setActiveSection('financialInfo')}
          isComplete={profile.completionStatus.financialInfo}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem label="Employment Status" value={profile.financialInfo?.employmentStatus} />
            <InfoItem label="Annual Income" value={profile.financialInfo?.annualIncome ? `${profile.financialInfo.currency || 'USD'} ${profile.financialInfo.annualIncome.toLocaleString()}` : null} />
          </div>
        </ProfileSection>
      </div>
    );
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-heading-3 text-primary-900">
                {activeSection === 'view' ? 'Your Profile' : 'Edit Profile'}
              </h1>
              <p className="mt-1 text-body-base text-primary-600">
                {activeSection === 'view'
                  ? 'Manage your personal information and visa application details'
                  : 'Update your information'
                }
              </p>
            </div>
            {profile && activeSection === 'view' && (
              <div className="text-right">
                <p className="text-body-sm text-primary-600">Profile Completion</p>
                <p className="text-heading-5 text-primary-900">
                  {profile.completionStatus.overallPercentage}%
                </p>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSectionContent()}
      </main>
    </DashboardLayout>
  );
}

// Helper Components
interface ProfileSectionProps {
  title: string;
  icon: React.ReactNode;
  onEdit: () => void;
  isComplete: boolean;
  children: React.ReactNode;
}

function ProfileSection({ title, icon, onEdit, isComplete, children }: ProfileSectionProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-heading-5 text-primary-900 flex items-center gap-2">
          {icon}
          {title}
        </h2>
        <button
          onClick={onEdit}
          className="btn-outline flex items-center gap-2"
        >
          <Edit2 className="h-4 w-4" />
          Edit
        </button>
      </div>
      {children}
    </div>
  );
}

interface InfoItemProps {
  label: string;
  value: string | null | undefined;
  fullWidth?: boolean;
}

function InfoItem({ label, value, fullWidth }: InfoItemProps) {
  return (
    <div className={fullWidth ? 'md:col-span-2' : ''}>
      <p className="text-body-sm text-primary-600 mb-1">{label}</p>
      <p className="text-body-base text-primary-900 capitalize">
        {value || <span className="text-primary-400 italic">Not provided</span>}
      </p>
    </div>
  );
}
