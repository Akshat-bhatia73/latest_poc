"use client";

import React, { useState } from 'react';
import { Save, Trash2, X, Plus } from 'lucide-react';
import { Step, Substep } from '@/types';

interface StepEditorProps {
  step: Step;
  onClose: () => void;
  onSave: (step: Step) => void;
  onDelete: () => void;
}

export function StepEditor({
  step,
  onClose,
  onSave,
  onDelete
}: StepEditorProps) {
  const [name, setName] = useState(step.step_name);
  const [description, setDescription] = useState(step.step_description);
  const [substeps, setSubsteps] = useState<Substep[]>(step.substeps);

  const handleAddSubstep = () => {
    const newSubstep: Substep = {
      substep_number: `${step.step_number}.${substeps.length + 1}`,
      substep_name: '',
      description: ''
    };
    setSubsteps([...substeps, newSubstep]);
  };

  const handleRemoveSubstep = (index: number) => {
    setSubsteps(substeps.filter((_, i) => i !== index));
  };

  const handleSubstepChange = (index: number, field: keyof Substep, value: string) => {
    setSubsteps(substeps.map((substep, i) => {
      if (i === index) {
        return { ...substep, [field]: value };
      }
      return substep;
    }));
  };

  const handleSave = () => {
    onSave({
      ...step,
      step_name: name,
      step_description: description,
      substeps
    });
  };

  return (
    <div className="w-[600px] shrink-0">
      <div className="sticky top-6">
        <div className="glass-panel">
          <div className="p-4 border-b border-neutral-700/50 flex justify-between items-center">
            <h2 className="font-semibold text-white">Step Configuration</h2>
            <button onClick={onClose} className="icon-button">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-6">
            {/* Step Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Step Name</label>
                <input
                  type="text"
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter step name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Description</label>
                <textarea
                  className="input-field"
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter step description"
                />
              </div>
            </div>

            {/* Substeps */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium text-neutral-300">Substeps</label>
                <button 
                  className="btn btn-secondary h-8 text-xs"
                  onClick={handleAddSubstep}
                >
                  <Plus className="w-3 h-3 mr-1" />
                  Add Substep
                </button>
              </div>

              <div className="space-y-4">
                {substeps.map((substep, index) => (
                  <div key={index} className="p-4 bg-neutral-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-neutral-400">
                        Substep {substep.substep_number}
                      </span>
                      <button
                        className="icon-button"
                        onClick={() => handleRemoveSubstep(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <input
                        type="text"
                        className="input-field"
                        value={substep.substep_name}
                        onChange={(e) => handleSubstepChange(index, 'substep_name', e.target.value)}
                        placeholder="Substep name"
                      />
                      
                      <textarea
                        className="input-field"
                        rows={2}
                        value={substep.description}
                        onChange={(e) => handleSubstepChange(index, 'description', e.target.value)}
                        placeholder="Substep description"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-neutral-700/50 flex items-center justify-between gap-3">
            <button className="btn btn-secondary" onClick={onDelete}>
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Step
            </button>
            <div className="flex items-center gap-2">
              <button className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}