'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Save, X, User } from 'lucide-react';

interface PersonalInfoFormProps {
  data: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}

interface PersonalInfoData {
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  placeOfBirth?: string;
  gender: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  nationality: string;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed' | 'separated';
}

export default function PersonalInfoForm({ data, onSave, onCancel }: PersonalInfoFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<PersonalInfoData>({
    defaultValues: {
      firstName: data?.firstName || '',
      middleName: data?.middleName || '',
      lastName: data?.lastName || '',
      dateOfBirth: data?.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split('T')[0] : '',
      placeOfBirth: data?.placeOfBirth || '',
      gender: data?.gender || 'prefer_not_to_say',
      nationality: data?.nationality || '',
      maritalStatus: data?.maritalStatus || 'single',
    },
  });

  const onSubmit = (formData: PersonalInfoData) => {
    onSave(formData);
  };

  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-6">
        <User className="h-6 w-6 text-primary-600" />
        <h2 className="text-heading-5 text-primary-900">Personal Information</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              First Name <span className="text-error-600">*</span>
            </label>
            <input
              type="text"
              {...register('firstName', { required: 'First name is required' })}
              className="input-field"
              placeholder="Enter first name"
            />
            {errors.firstName && (
              <p className="mt-1 text-body-sm text-error-600">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Middle Name
            </label>
            <input
              type="text"
              {...register('middleName')}
              className="input-field"
              placeholder="Enter middle name (optional)"
            />
          </div>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Last Name <span className="text-error-600">*</span>
            </label>
            <input
              type="text"
              {...register('lastName', { required: 'Last name is required' })}
              className="input-field"
              placeholder="Enter last name"
            />
            {errors.lastName && (
              <p className="mt-1 text-body-sm text-error-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Date and Place of Birth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Date of Birth <span className="text-error-600">*</span>
            </label>
            <input
              type="date"
              {...register('dateOfBirth', { required: 'Date of birth is required' })}
              className="input-field"
            />
            {errors.dateOfBirth && (
              <p className="mt-1 text-body-sm text-error-600">{errors.dateOfBirth.message}</p>
            )}
          </div>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Place of Birth
            </label>
            <input
              type="text"
              {...register('placeOfBirth')}
              className="input-field"
              placeholder="City, Country"
            />
          </div>
        </div>

        {/* Gender and Nationality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Gender <span className="text-error-600">*</span>
            </label>
            <select
              {...register('gender', { required: 'Gender is required' })}
              className="input-field"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
            {errors.gender && (
              <p className="mt-1 text-body-sm text-error-600">{errors.gender.message}</p>
            )}
          </div>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Nationality <span className="text-error-600">*</span>
            </label>
            <input
              type="text"
              {...register('nationality', { required: 'Nationality is required' })}
              className="input-field"
              placeholder="Enter nationality"
            />
            {errors.nationality && (
              <p className="mt-1 text-body-sm text-error-600">{errors.nationality.message}</p>
            )}
          </div>
        </div>

        {/* Marital Status */}
        <div>
          <label className="block text-label-base text-primary-700 mb-2">
            Marital Status <span className="text-error-600">*</span>
          </label>
          <select
            {...register('maritalStatus', { required: 'Marital status is required' })}
            className="input-field"
          >
            <option value="">Select marital status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
            <option value="separated">Separated</option>
          </select>
          {errors.maritalStatus && (
            <p className="mt-1 text-body-sm text-error-600">{errors.maritalStatus.message}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-4 border-t border-primary-200">
          <button
            type="submit"
            className="btn-primary flex items-center gap-2"
          >
            <Save className="h-5 w-5" />
            Save Changes
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="btn-outline flex items-center gap-2"
          >
            <X className="h-5 w-5" />
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
