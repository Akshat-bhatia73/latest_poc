"use client";

import React, { useState } from 'react';
import { Bot, X, Save, Workflow } from 'lucide-react';
import { workflowData } from '@/lib/data';

interface AgentConfigProps {
  onClose: () => void;
}

export function AgentConfig({ onClose }: AgentConfigProps) {
  const [agentName, setAgentName] = useState(workflowData.agent_name);
  const [agentDescription, setAgentDescription] = useState(workflowData.agent_description);
  const [companies, setCompanies] = useState(workflowData.user_input.contents_of_companies.choices);
  const [newCompany, setNewCompany] = useState('');

  const handleAddCompany = () => {
    if (newCompany.trim()) {
      setCompanies([...companies, newCompany.trim()]);
      setNewCompany('');
    }
  };

  const handleRemoveCompany = (company: string) => {
    setCompanies(companies.filter(c => c !== company));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Bot className="w-6 h-6 text-green-500" />
          <h2 className="text-xl font-semibold text-white">Agent Configuration</h2>
        </div>
        <button onClick={onClose} className="icon-button">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Basic Information */}
        <div className="glass-panel p-6">
          <h3 className="text-lg font-medium text-white mb-4">Basic Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">
                Agent Name
              </label>
              <input
                type="text"
                className="input-field"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">
                Description
              </label>
              <textarea
                className="input-field"
                rows={3}
                value={agentDescription}
                onChange={(e) => setAgentDescription(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* User Input Configuration */}
        <div className="glass-panel p-6">
          <h3 className="text-lg font-medium text-white mb-4">User Input Configuration</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">
                Available Companies
              </label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="input-field flex-1"
                    placeholder="Add company name"
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddCompany()}
                  />
                  <button 
                    className="btn btn-secondary h-10"
                    onClick={handleAddCompany}
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {companies.map((company, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-lg text-sm flex items-center gap-2"
                    >
                      {company}
                      <button 
                        className="text-neutral-500 hover:text-neutral-400"
                        onClick={() => handleRemoveCompany(company)}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Overview */}
        <div className="glass-panel p-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <Workflow className="w-5 h-5 text-green-500" />
            Workflow Overview
          </h3>
          <div className="space-y-4">
            {workflowData.stages.map((stage, index) => (
              <div key={index} className="p-4 bg-neutral-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">{stage.name}</span>
                  <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">
                    Stage {index + 1}
                  </span>
                </div>
                <p className="text-sm text-neutral-400">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary">
            <Save className="w-4 h-4 mr-2" />
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}