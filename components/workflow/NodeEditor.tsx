"use client";

import React, { useState } from 'react';
import { Bot, Save, Trash2, X, MessageSquare, Settings2, Code2 } from 'lucide-react';

interface NodeEditorProps {
  selectedStage: string | null;
  selectedStep: string | null;
  selectedSubstep: string | null;
  onClose: () => void;
}

export function NodeEditor({
  selectedStage,
  selectedStep,
  selectedSubstep,
  onClose
}: NodeEditorProps) {
  const [template, setTemplate] = useState('');
  const [role, setRole] = useState('');
  const [instructions, setInstructions] = useState('');

  return (
    <div className="w-96 shrink-0">
      <div className="sticky top-6">
        <div className="glass-panel">
          <div className="p-4 border-b border-neutral-700/50 flex justify-between items-center">
            <h2 className="font-semibold text-white flex items-center gap-2">
              <Settings2 className="w-4 h-4 text-green-500" />
              Configuration
            </h2>
            <button 
              onClick={onClose}
              className="icon-button"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-6">
            {/* Basic Information */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Description</label>
              <textarea
                className="input-field"
                rows={3}
                placeholder="Enter description"
              />
            </div>

            {/* Agent Configuration */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2 flex items-center gap-2">
                <Bot className="w-4 h-4" />
                Agent Role
              </label>
              <textarea
                className="input-field"
                rows={3}
                placeholder="Define the agent's role and responsibilities"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            {/* Template Configuration */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Template
              </label>
              <textarea
                className="input-field font-mono text-sm"
                rows={6}
                placeholder="Enter the template for this component"
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
              />
              <p className="mt-1 text-xs text-neutral-500">
                Use {`{variables}`} for dynamic content
              </p>
            </div>

            {/* Output Instructions */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Output Instructions
              </label>
              <textarea
                className="input-field"
                rows={4}
                placeholder="Detailed instructions for output generation"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </div>

            {/* LLM Configuration */}
            <div>
              <h3 className="text-sm font-medium text-neutral-300 mb-3">LLM Configuration</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-neutral-400 mb-1">Model</label>
                  <select className="input-field">
                    <option value="gpt-4">GPT-4</option>
                    <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-neutral-400 mb-1">Temperature</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-neutral-500 mt-1">
                    <span>Precise</span>
                    <span>Creative</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-neutral-400 mb-1">Max Tokens</label>
                  <input
                    type="number"
                    className="input-field"
                    placeholder="Enter max tokens"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-neutral-700/50 flex items-center justify-between gap-3">
            <button className="btn btn-secondary">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </button>
            <button className="btn btn-primary">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}