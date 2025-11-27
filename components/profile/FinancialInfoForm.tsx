'use client';

import { useForm } from 'react-hook-form';
import { Save, X, DollarSign } from 'lucide-react';

interface FinancialInfoFormProps {
  data: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}

export default function FinancialInfoForm({ data, onSave, onCancel }: FinancialInfoFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      annualIncome: data?.annualIncome || '',
      currency: data?.currency || 'USD',
      employmentStatus: data?.employmentStatus || '',
      fundSource: data?.fundSource || '',
    },
  });

  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="h-6 w-6 text-primary-600" />
        <h2 className="text-heading-5 text-primary-900">Financial Information</h2>
      </div>

      <form onSubmit={handleSubmit(onSave)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Employment Status <span className="text-error-600">*</span>
            </label>
            <select
              {...register('employmentStatus', { required: 'Employment status is required' })}
              className="input-field"
            >
              <option value="">Select status</option>
              <option value="employed">Employed</option>
              <option value="self_employed">Self Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="student">Student</option>
              <option value="retired">Retired</option>
            </select>
            {errors.employmentStatus && (
              <p className="mt-1 text-body-sm text-error-600">{errors.employmentStatus.message}</p>
            )}
          </div>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Currency
            </label>
            <select
              {...register('currency')}
              className="input-field"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
              <option value="INR">INR</option>
            </select>
          </div>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Annual Income
            </label>
            <input
              type="number"
              {...register('annualIncome')}
              className="input-field"
              placeholder="50000"
            />
          </div>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Source of Funds
            </label>
            <input
              type="text"
              {...register('fundSource')}
              className="input-field"
              placeholder="Salary, Business, etc."
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
