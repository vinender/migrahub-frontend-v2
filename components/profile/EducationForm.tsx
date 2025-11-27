'use client';

import { useState } from 'react';
import { Save, X, GraduationCap, Plus, Trash2 } from 'lucide-react';

interface EducationEntry {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  isCurrentlyEnrolled: boolean;
  country: string;
}

interface EducationFormProps {
  data: EducationEntry[];
  onSave: (data: EducationEntry[]) => void;
  onCancel: () => void;
}

export default function EducationForm({ data, onSave, onCancel }: EducationFormProps) {
  const [educationList, setEducationList] = useState<EducationEntry[]>(data || []);

  const addEducation = () => {
    setEducationList([...educationList, {
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      isCurrentlyEnrolled: false,
      country: ''
    }]);
  };

  const removeEducation = (index: number) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };

  const updateEducation = (index: number, field: string, value: string | boolean) => {
    const updated = [...educationList];
    updated[index] = { ...updated[index], [field]: value };
    setEducationList(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(educationList);
  };

  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="h-6 w-6 text-primary-600" />
        <h2 className="text-heading-5 text-primary-900">Education History</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {educationList.map((edu, index) => (
          <div key={index} className="p-6 bg-primary-50 rounded-card space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-heading-6 text-primary-900">Education #{index + 1}</h3>
              {educationList.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
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
                  Institution <span className="text-error-600">*</span>
                </label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                  className="input-field"
                  placeholder="University name"
                  required
                />
              </div>

              <div>
                <label className="block text-label-base text-primary-700 mb-2">
                  Degree <span className="text-error-600">*</span>
                </label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                  className="input-field"
                  placeholder="Bachelor's, Master's, etc."
                  required
                />
              </div>

              <div>
                <label className="block text-label-base text-primary-700 mb-2">
                  Field of Study
                </label>
                <input
                  type="text"
                  value={edu.fieldOfStudy}
                  onChange={(e) => updateEducation(index, 'fieldOfStudy', e.target.value)}
                  className="input-field"
                  placeholder="Computer Science, etc."
                />
              </div>

              <div>
                <label className="block text-label-base text-primary-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={edu.country}
                  onChange={(e) => updateEducation(index, 'country', e.target.value)}
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
                  value={edu.startDate ? new Date(edu.startDate).toISOString().split('T')[0] : ''}
                  onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
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
                  value={edu.endDate ? new Date(edu.endDate).toISOString().split('T')[0] : ''}
                  onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                  className="input-field"
                  disabled={edu.isCurrentlyEnrolled}
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={edu.isCurrentlyEnrolled}
                onChange={(e) => updateEducation(index, 'isCurrentlyEnrolled', e.target.checked)}
                className="h-5 w-5 text-primary-900 focus:ring-primary-600 border-primary-300 rounded"
              />
              <label className="text-body-base text-primary-900">
                Currently enrolled
              </label>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addEducation}
          className="btn-secondary w-full flex items-center justify-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Education
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
