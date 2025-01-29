"use client";

import React from 'react';
import { X, Save, Play } from 'lucide-react';
import { Stage } from '@/types';
import { MarkdownEditor } from './MarkdownEditor';

interface StageModalProps {
  stage: Stage;
  isOpen: boolean;
  onClose: () => void;
  onSave: (stage: Stage) => void;
  onPlanAnalysis: (template: string) => Promise<void>;
}

export function StageModal({
  stage,
  isOpen,
  onClose,
  onSave,
  onPlanAnalysis
}: StageModalProps) {
  const [name, setName] = React.useState(stage.name);
  const [description, setDescription] = React.useState(stage.description);
  const [template, setTemplate] = React.useState(stage.template || '');
  const [isPlanning, setIsPlanning] = React.useState(false);

  if (!isOpen) return null;

  const handlePlanAnalysis = async () => {
    if (!template.trim()) return;
    
    setIsPlanning(true);
    try {
      await onPlanAnalysis(template);
    } catch (error) {
      console.error('Failed to plan analysis:', error);
    }
    setIsPlanning(false);
  };

  const handleSave = () => {
    onSave({
      ...stage,
      name,
      description,
      template
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-neutral-900 rounded-xl w-[90vw] max-w-[1400px] max-h-[90vh] overflow-hidden shadow-xl">
        {/* Modal Header */}
        <div className="p-4 border-b border-neutral-700/50 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Edit Stage Configuration</h2>
          <button onClick={onClose} className="icon-button">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex divide-x divide-neutral-700/50 h-[calc(90vh-130px)]">
          {/* Left Column - Template Editor */}
          <div className="w-2/3 flex flex-col h-full overflow-hidden">
            <div className="flex-1 flex flex-col p-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-neutral-300">Analysis Template</label>
                <button
                  className="btn btn-primary h-8 text-xs"
                  onClick={handlePlanAnalysis}
                  disabled={isPlanning || !template.trim()}
                >
                  <Play className="w-3 h-3 mr-1" />
                  {isPlanning ? 'Planning...' : 'Plan Analysis'}
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <MarkdownEditor
                  value={template}
                  onChange={setTemplate}
                  minHeight="100%"
                  placeholder="Enter your analysis template in markdown format..."
                />
              </div>
            </div>
          </div>

          {/* Right Column - Stage Info & Steps */}
          <div className="w-1/3 flex flex-col h-full overflow-hidden">
            <div className="p-6 border-b border-neutral-700/50 space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Stage Name</label>
                <input
                  type="text"
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter stage name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Description</label>
                <textarea
                  className="input-field"
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter stage description"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <h3 className="text-lg font-medium text-white mb-4">Generated Steps</h3>
              {stage.steps?.map((step, index) => (
                <div key={index} className="mb-6 glass-panel p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">Step {step.step_number}: {step.step_name}</h4>
                    <span className="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-full">
                      {step.substeps.length} substeps
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 mb-4">{step.step_description}</p>
                  
                  <div className="space-y-3">
                    {step.substeps.map((substep, subIndex) => (
                      <div key={subIndex} className="p-3 bg-neutral-800/50 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-neutral-300">
                            {substep.substep_name}
                          </span>
                          <span className="text-xs text-neutral-500">{substep.substep_number}</span>
                        </div>
                        <p className="text-sm text-neutral-400">{substep.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-700/50 flex justify-end gap-3">
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
  );
}