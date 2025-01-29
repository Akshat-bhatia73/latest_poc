"use client";

import React, { useState } from 'react';
import { Bot, Cpu, Settings2, ChevronRight, Brain, Sliders } from 'lucide-react';
import { Stage } from '@/types';

interface NodeListProps {
  selectedStage: string | null;
  selectedStep: string | null;
  selectedSubstep: string | null;
  stages: Stage[];
}

export function NodeList({ 
  selectedStage,
  selectedStep,
  selectedSubstep,
  stages
}: NodeListProps) {
  const [temperature, setTemperature] = useState<number>(0);
  const [maxTokens, setMaxTokens] = useState<number>(5000);
  const [model, setModel] = useState<string>('gpt-4o');

  // Get the current stage from stages based on selectedStage
  const getCurrentStage = (): Stage | undefined => {
    if (!selectedStage) return undefined;
    const stageIndex = parseInt(selectedStage.split('-')[1]);
    if (isNaN(stageIndex) || stageIndex < 0 || stageIndex >= stages.length) {
      return undefined;
    }
    return stages[stageIndex];
  };

  const currentStage = getCurrentStage();
  if (!currentStage) return null;

  const stageNumber = selectedStage ? parseInt(selectedStage.split('-')[1]) + 1 : 0;

  // Initialize LLM config values from stage config
  React.useEffect(() => {
    if (currentStage.config?.llm_config) {
      setTemperature(currentStage.config.llm_config.temperature);
      setMaxTokens(currentStage.config.llm_config.max_tokens);
      setModel(currentStage.config.llm_config.model);
    }
  }, [currentStage]);

  return (
    <div className="space-y-6">
      {/* Stage Overview */}
      <div className="glass-panel p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-700/50 text-sm font-semibold">
                {stageNumber}
              </div>
              <h2 className="text-xl font-semibold text-white">
                {currentStage.name}
              </h2>
            </div>
            <p className="text-neutral-400">
              {currentStage.description}
            </p>
          </div>
        </div>

        {/* LLM Configuration */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-neutral-400">
            <Sliders className="w-4 h-4" />
            <span className="text-sm font-medium">LLM Configuration</span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Model Selection */}
            <div className="p-4 bg-neutral-800/50 rounded-lg">
              <div className="flex items-center gap-2 text-neutral-400 mb-2">
                <Cpu className="w-4 h-4" />
                <span className="text-sm">Model</span>
              </div>
              <select 
                className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-green-500"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                <option value="gpt-4o">GPT-4 Optimized</option>
                <option value="gpt-4o-mini">GPT-4 Mini</option>
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
              </select>
            </div>
            
            {/* Temperature Control */}
            <div className="p-4 bg-neutral-800/50 rounded-lg">
              <div className="flex items-center gap-2 text-neutral-400 mb-2">
                <Settings2 className="w-4 h-4" />
                <span className="text-sm">Temperature</span>
              </div>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-neutral-500">
                  <span>Precise ({temperature})</span>
                  <span>Creative</span>
                </div>
              </div>
            </div>
            
            {/* Max Tokens */}
            <div className="p-4 bg-neutral-800/50 rounded-lg">
              <div className="flex items-center gap-2 text-neutral-400 mb-2">
                <Bot className="w-4 h-4" />
                <span className="text-sm">Max Tokens</span>
              </div>
              <input
                type="number"
                value={maxTokens}
                onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-green-500"
                min="1"
                max="32000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Steps Overview */}
      {currentStage.steps && currentStage.steps.length > 0 ? (
        <div className="glass-panel p-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-green-500" />
            Analysis Steps
          </h3>
          <div className="space-y-3">
            {currentStage.steps.map((step, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg transition-colors ${
                  selectedStep === `step-${selectedStage?.split('-')[1]}-${index}`
                    ? 'bg-green-500/10 border border-green-500/20'
                    : 'bg-neutral-800/50 hover:bg-neutral-700/50 border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white flex items-center gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-neutral-700/50 text-xs font-semibold">
                      {step.step_number}
                    </div>
                    {step.step_name}
                  </h4>
                  <span className="text-xs bg-neutral-700/50 px-2 py-1 rounded-full text-neutral-400">
                    {step.substeps.length} substeps
                  </span>
                </div>
                <p className="text-sm text-neutral-400 mb-3">{step.step_description}</p>

                {/* Substeps */}
                <div className="space-y-2">
                  {step.substeps.map((substep, subIndex) => (
                    <div 
                      key={subIndex}
                      className={`p-3 rounded-lg text-sm ${
                        selectedSubstep === `substep-${selectedStage?.split('-')[1]}-${index}-${subIndex}`
                          ? 'bg-green-500/5 text-green-500'
                          : 'bg-neutral-700/30 text-neutral-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-neutral-500">{substep.substep_number}</span>
                          <span className="font-medium">{substep.substep_name}</span>
                        </div>
                      </div>
                      <p className="text-neutral-400">{substep.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="glass-panel p-6">
          <div className="text-center py-8">
            <Brain className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-neutral-300 mb-2">
              No Steps Configured
            </h3>
            <p className="text-neutral-500 max-w-md mx-auto">
              This stage doesn't have any analysis steps configured yet. Edit the stage to add steps.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}