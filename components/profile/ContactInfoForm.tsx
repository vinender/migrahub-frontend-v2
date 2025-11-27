'use client';

import { useForm } from 'react-hook-form';
import { Save, X, Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoFormProps {
  data: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}

export default function ContactInfoForm({ data, onSave, onCancel }: ContactInfoFormProps) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      email: data?.email || '',
      phone: data?.phone || '',
      alternatePhone: data?.alternatePhone || '',
      currentAddress: {
        street: data?.currentAddress?.street || '',
        city: data?.currentAddress?.city || '',
        state: data?.currentAddress?.state || '',
        country: data?.currentAddress?.country || '',
        postalCode: data?.currentAddress?.postalCode || '',
      },
      sameAsCurrentAddress: data?.sameAsCurrentAddress || false,
      permanentAddress: {
        street: data?.permanentAddress?.street || '',
        city: data?.permanentAddress?.city || '',
        state: data?.permanentAddress?.state || '',
        country: data?.permanentAddress?.country || '',
        postalCode: data?.permanentAddress?.postalCode || '',
      },
    },
  });

  const sameAsCurrentAddress = watch('sameAsCurrentAddress');

  const onSubmit = (formData: any) => {
    if (formData.sameAsCurrentAddress) {
      formData.permanentAddress = { ...formData.currentAddress };
    }
    onSave(formData);
  };

  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="h-6 w-6 text-primary-600" />
        <h2 className="text-heading-5 text-primary-900">Contact Information</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Email Address <span className="text-error-600">*</span>
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="input-field"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-body-sm text-error-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Phone Number <span className="text-error-600">*</span>
            </label>
            <input
              type="tel"
              {...register('phone', { required: 'Phone number is required' })}
              className="input-field"
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && (
              <p className="mt-1 text-body-sm text-error-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Alternate Phone
            </label>
            <input
              type="tel"
              {...register('alternatePhone')}
              className="input-field"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        {/* Current Address */}
        <div className="space-y-4">
          <h3 className="text-heading-6 text-primary-900 flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Current Address
          </h3>

          <div>
            <label className="block text-label-base text-primary-700 mb-2">
              Street Address <span className="text-error-600">*</span>
            </label>
            <input
              type="text"
              {...register('currentAddress.street', { required: 'Street address is required' })}
              className="input-field"
              placeholder="123 Main Street, Apt 4B"
            />
            {errors.currentAddress?.street && (
              <p className="mt-1 text-body-sm text-error-600">{errors.currentAddress.street.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-label-base text-primary-700 mb-2">
                City <span className="text-error-600">*</span>
              </label>
              <input
                type="text"
                {...register('currentAddress.city', { required: 'City is required' })}
                className="input-field"
                placeholder="New York"
              />
              {errors.currentAddress?.city && (
                <p className="mt-1 text-body-sm text-error-600">{errors.currentAddress.city.message}</p>
              )}
            </div>

            <div>
              <label className="block text-label-base text-primary-700 mb-2">
                State/Province
              </label>
              <input
                type="text"
                {...register('currentAddress.state')}
                className="input-field"
                placeholder="NY"
              />
            </div>

            <div>
              <label className="block text-label-base text-primary-700 mb-2">
                Country <span className="text-error-600">*</span>
              </label>
              <input
                type="text"
                {...register('currentAddress.country', { required: 'Country is required' })}
                className="input-field"
                placeholder="United States"
              />
              {errors.currentAddress?.country && (
                <p className="mt-1 text-body-sm text-error-600">{errors.currentAddress.country.message}</p>
              )}
            </div>

            <div>
              <label className="block text-label-base text-primary-700 mb-2">
                Postal Code <span className="text-error-600">*</span>
              </label>
              <input
                type="text"
                {...register('currentAddress.postalCode', { required: 'Postal code is required' })}
                className="input-field"
                placeholder="10001"
              />
              {errors.currentAddress?.postalCode && (
                <p className="mt-1 text-body-sm text-error-600">{errors.currentAddress.postalCode.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Same as Current Address Checkbox */}
        <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-button">
          <input
            type="checkbox"
            {...register('sameAsCurrentAddress')}
            className="h-5 w-5 text-primary-900 focus:ring-primary-600 border-primary-300 rounded"
          />
          <label className="text-body-base text-primary-900">
            Permanent address is same as current address
          </label>
        </div>

        {/* Permanent Address */}
        {!sameAsCurrentAddress && (
          <div className="space-y-4">
            <h3 className="text-heading-6 text-primary-900 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Permanent Address
            </h3>

            <div>
              <label className="block text-label-base text-primary-700 mb-2">
                Street Address <span className="text-error-600">*</span>
              </label>
              <input
                type="text"
                {...register('permanentAddress.street', { required: !sameAsCurrentAddress && 'Street address is required' })}
                className="input-field"
                placeholder="123 Main Street, Apt 4B"
              />
              {errors.permanentAddress?.street && (
                <p className="mt-1 text-body-sm text-error-600">{errors.permanentAddress.street.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-label-base text-primary-700 mb-2">
                  City <span className="text-error-600">*</span>
                </label>
                <input
                  type="text"
                  {...register('permanentAddress.city', { required: !sameAsCurrentAddress && 'City is required' })}
                  className="input-field"
                  placeholder="New York"
                />
                {errors.permanentAddress?.city && (
                  <p className="mt-1 text-body-sm text-error-600">{errors.permanentAddress.city.message}</p>
                )}
              </div>

              <div>
                <label className="block text-label-base text-primary-700 mb-2">
                  State/Province
                </label>
                <input
                  type="text"
                  {...register('permanentAddress.state')}
                  className="input-field"
                  placeholder="NY"
                />
              </div>

              <div>
                <label className="block text-label-base text-primary-700 mb-2">
                  Country <span className="text-error-600">*</span>
                </label>
                <input
                  type="text"
                  {...register('permanentAddress.country', { required: !sameAsCurrentAddress && 'Country is required' })}
                  className="input-field"
                  placeholder="United States"
                />
                {errors.permanentAddress?.country && (
                  <p className="mt-1 text-body-sm text-error-600">{errors.permanentAddress.country.message}</p>
                )}
              </div>

              <div>
                <label className="block text-label-base text-primary-700 mb-2">
                  Postal Code <span className="text-error-600">*</span>
                </label>
                <input
                  type="text"
                  {...register('permanentAddress.postalCode', { required: !sameAsCurrentAddress && 'Postal code is required' })}
                  className="input-field"
                  placeholder="10001"
                />
                {errors.permanentAddress?.postalCode && (
                  <p className="mt-1 text-body-sm text-error-600">{errors.permanentAddress.postalCode.message}</p>
                )}
              </div>
            </div>
          </div>
        )}

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
