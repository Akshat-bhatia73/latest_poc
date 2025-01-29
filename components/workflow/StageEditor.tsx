"use client";

import React, { useState } from 'react';
import { Bot, Save, X, MessageSquare, Settings2, Code2, Play } from 'lucide-react';
import { Stage } from '@/types';
import { MarkdownEditor } from './MarkdownEditor';

interface StageEditorProps {
  stage: Stage;
  onClose: () => void;
  onSave: (stage: Stage) => void;
  onPlanAnalysis: (template: string) => Promise<void>;
}

export function StageEditor({
  stage,
  onClose,
  onSave,
  onPlanAnalysis
}: StageEditorProps) {
  const [name, setName] = useState(stage.name);
  const [description, setDescription] = useState(stage.description);
  const [template, setTemplate] = useState(stage.template || '');
  const [isPlanning, setIsPlanning] = useState(false);

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
  };

  return (
    <div className="w-[800px] shrink-0">
      <div className="sticky top-6">
        <div className="glass-panel">
          <div className="p-4 border-b border-neutral-700/50 flex justify-between items-center">
            <h2 className="font-semibold text-white flex items-center gap-2">
              <Settings2 className="w-4 h-4 text-green-500" />
              Stage Configuration
            </h2>
            <button onClick={onClose} className="icon-button">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
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

            {/* Template Editor */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  Analysis Template
                </label>
                <button
                  className="btn btn-primary h-8 text-xs"
                  onClick={handlePlanAnalysis}
                  disabled={isPlanning || !template.trim()}
                >
                  <Play className="w-3 h-3 mr-1" />
                  {isPlanning ? 'Planning...' : 'Plan Analysis'}
                </button>
              </div>
              <MarkdownEditor
                value={template}
                onChange={setTemplate}
                minHeight="400px"
                placeholder="Enter your analysis template in markdown format..."
              />
              <p className="mt-1.5 text-xs text-neutral-500">
                Edit the template and click Plan Analysis to generate steps automatically
              </p>
            </div>

            {/* Agent Configuration */}
            {stage.config && (
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  Agent Configuration
                </h3>
                
                <div>
                  <label className="block text-sm text-neutral-400 mb-1">Agent Role</label>
                  <input
                    type="text"
                    className="input-field"
                    value={stage.config.agent_role}
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-400 mb-1">
                    <MessageSquare className="w-4 h-4 inline-block mr-1" />
                    Output Instructions
                  </label>
                  <textarea
                    className="input-field"
                    rows={4}
                    value={stage.config.detailed_global_output_instructions}
                    readOnly
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">Model</label>
                    <input
                      type="text"
                      className="input-field"
                      value={stage.config.llm_config.model}
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">Max Tokens</label>
                    <input
                      type="number"
                      className="input-field"
                      value={stage.config.llm_config.max_tokens}
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">Temperature</label>
                    <input
                      type="number"
                      className="input-field"
                      value={stage.config.llm_config.temperature}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-neutral-700/50 flex items-center justify-end gap-3">
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
  );
}