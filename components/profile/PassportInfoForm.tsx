'use client';

import { useForm } from 'react-hook-form';
import { Save, X, FileText } from 'lucide-react';

interface PassportInfoFormProps {
  data: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}

export default function PassportInfoForm({ data, onSave, onCancel }: PassportInfoFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      passportNumber: data?.passportNumber || '',
      issueDate: data?.issueDate ? new Date(data.issueDate).toISOString().split('T')[0] : '',
      expiryDate: data?.expiryDate ? new Date(data.expiryDate).toISOString().split('T')[0] : '',
      issuingCountry: data?.issuingCountry || '',
      placeOfIssue: data?.placeOfIssue || '',
    },
  });

  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="h-6 w-6 text-primary-600" />
        <h2 className="text-heading-5 text-primary-900">Passport Information</h2>
      </div>

      <form onSubmit={handleSubmit(onSave)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Passport Number <span className="text-error-600">*</span>
            </label>
            <input
              type="text"
              {...register('passportNumber', { required: 'Passport number is required' })}
              className="input-field"
              placeholder="Enter passport number"
            />
            {errors.passportNumber && (
              <p className="mt-1 text-body-sm text-error-600">{errors.passportNumber.message}</p>
            )}
          </div>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Issuing Country <span className="text-error-600">*</span>
            </label>
            <input
              type="text"
              {...register('issuingCountry', { required: 'Issuing country is required' })}
              className="input-field"
              placeholder="Enter country"
            />
            {errors.issuingCountry && (
              <p className="mt-1 text-body-sm text-error-600">{errors.issuingCountry.message}</p>
            )}
          </div>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Issue Date <span className="text-error-600">*</span>
            </label>
            <input
              type="date"
              {...register('issueDate', { required: 'Issue date is required' })}
              className="input-field"
            />
            {errors.issueDate && (
              <p className="mt-1 text-body-sm text-error-600">{errors.issueDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Expiry Date <span className="text-error-600">*</span>
            </label>
            <input
              type="date"
              {...register('expiryDate', { required: 'Expiry date is required' })}
              className="input-field"
            />
            {errors.expiryDate && (
              <p className="mt-1 text-body-sm text-error-600">{errors.expiryDate.message}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-label-base text-primary-700 mb-2">
              Place of Issue
            </label>
            <input
              type="text"
              {...register('placeOfIssue')}
              className="input-field"
              placeholder="City, Country"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-primary-200">
          <button type="submit" className="btn-primary flex items-center gap-2">
            <Save className="h-5 w-5" />
            Save Changes
          </button>
          <button type="button" onClick={onCancel} className="btn-outline flex items-center gap-2">
            <X className="h-5 w-5" />
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
