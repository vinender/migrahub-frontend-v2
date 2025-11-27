'use client';

import { useState } from 'react';
import { Save, X, Briefcase, Plus, Trash2 } from 'lucide-react';

interface EmploymentFormProps {
  data: any[];
  onSave: (data: any[]) => void;
  onCancel: () => void;
}

export default function EmploymentForm({ data, onSave, onCancel }: EmploymentFormProps) {
  const [employmentList, setEmploymentList] = useState(data || []);

  const addEmployment = () => {
    setEmploymentList([...employmentList, {
      employer: '',
      position: '',
      startDate: '',
      endDate: '',
      isCurrentlyEmployed: false,
      responsibilities: '',
      country: ''
    }]);
  };

  const removeEmployment = (index: number) => {
    setEmploymentList(employmentList.filter((_, i) => i !== index));
  };

  const updateEmployment = (index: number, field: string, value: any) => {
    const updated = [...employmentList];
    updated[index] = { ...updated[index], [field]: value };
    setEmploymentList(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(employmentList);
  };

  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="h-6 w-6 text-primary-600" />
        <h2 className="text-heading-5 text-primary-900">Employment History</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {employmentList.map((emp, index) => (
          <div key={index} className="p-6 bg-primary-50 rounded-card space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-heading-6 text-primary-900">Employment #{index + 1}</h3>
              {employmentList.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEmployment(index)}
                  className="text-error-600 hover:text-error-700 flex items-center gap-2"
                >
                  <Trash2 className="h-4 w-4" />
                  Remove
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-label-base text-primary-700 mb-2">
                  Employer <span className="text-error-600">*</span>
                </label>
                <input
                  type="text"
                  value={emp.employer}
                  onChange={(e) => updateEmployment(index, 'employer', e.target.value)}
                  className="input-field"
                  placeholder="Company name"
                  required
                />
              </div>

              <div>
                <label className="block text-label-base text-primary-700 mb-2">
                  Position <span className="text-error-600">*</span>
                </label>
                <input
                  type="text"
                  value={emp.position}
                  onChange={(e) => updateEmployment(index, 'position', e.target.value)}
                  className="input-field"
                  placeholder="Job title"
                  required
                />
              </div>

              <div>
                <label className="block text-label-base text-primary-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={emp.country}
                  onChange={(e) => updateEmployment(index, 'country', e.target.value)}
                  className="input-field"
                  placeholder="Country"
                />
              </div>

              <div>
                <label className="block text-label-base text-primary-700 mb-2">
                  Start Date <span className="text-error-600">*</span>
                </label>
                <input
                  type="date"
                  value={emp.startDate ? new Date(emp.startDate).toISOString().split('T')[0] : ''}
                  onChange={(e) => updateEmployment(index, 'startDate', e.target.value)}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-label-base text-primary-700 mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  value={emp.endDate ? new Date(emp.endDate).toISOString().split('T')[0] : ''}
                  onChange={(e) => updateEmployment(index, 'endDate', e.target.value)}
                  className="input-field"
                  disabled={emp.isCurrentlyEmployed}
                />
              </div>
            </div>

            <div>
              <label className="block text-label-base text-primary-700 mb-2">
                Responsibilities
              </label>
              <textarea
                value={emp.responsibilities}
                onChange={(e) => updateEmployment(index, 'responsibilities', e.target.value)}
                className="input-field"
                rows={3}
                placeholder="Describe your key responsibilities..."
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={emp.isCurrentlyEmployed}
                onChange={(e) => updateEmployment(index, 'isCurrentlyEmployed', e.target.checked)}
                className="h-5 w-5 text-primary-900 focus:ring-primary-600 border-primary-300 rounded"
              />
              <label className="text-body-base text-primary-900">
                Currently employed here
              </label>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addEmployment}
          className="btn-secondary w-full flex items-center justify-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Employment
        </button>

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
