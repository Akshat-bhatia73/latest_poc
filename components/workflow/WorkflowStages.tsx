"use client";

import React, { useState } from 'react';
import { ChevronDown, Plus, Layers, GitBranch, Box, Pencil } from 'lucide-react';
import { Stage, Step } from '@/types';
import { StageModal } from './StageModal';
import { StepModal } from './StepModal';

interface WorkflowStagesProps {
  stages: Stage[];
  selectedStage: string | null;
  selectedStep: string | null;
  selectedSubstep: string | null;
  onStageSelect: (stageId: string) => void;
  onStepSelect: (stepId: string | null) => void;
  onSubstepSelect: (substepId: string | null) => void;
  onSaveStage: (stage: Stage) => void;
  onPlanAnalysis: (template: string) => Promise<void>;
}

export function WorkflowStages({ 
  stages,
  selectedStage, 
  selectedStep,
  selectedSubstep,
  onStageSelect, 
  onStepSelect,
  onSubstepSelect,
  onSaveStage,
  onPlanAnalysis
}: WorkflowStagesProps) {
  const [editingStage, setEditingStage] = React.useState<Stage | null>(null);
  const [newStage, setNewStage] = React.useState<Stage | null>(null);
  const [newStep, setNewStep] = React.useState<{stage: Stage, step: Step} | null>(null);
  const [expandedStages, setExpandedStages] = useState<Set<string>>(new Set());

  const handleAddStage = () => {
    const newStageData: Stage = {
      name: "New Stage",
      description: "Description for the new stage",
      steps: []
    };
    setNewStage(newStageData);
  };

  const handleAddStep = (stage: Stage) => {
    const newStepData: Step = {
      step_number: (stage.steps?.length || 0) + 1,
      step_name: "New Step",
      step_description: "Description for the new step",
      substeps: []
    };
    setNewStep({ stage, step: newStepData });
  };

  const toggleStageExpansion = (stageId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setExpandedStages(prev => {
      const next = new Set(prev);
      if (next.has(stageId)) {
        next.delete(stageId);
      } else {
        next.add(stageId);
      }
      return next;
    });
  };

  const isStageExpanded = (stageId: string) => {
    return expandedStages.has(stageId);
  };

  return (
    <div className="w-80 shrink-0">
      <div className="sticky top-6">
        <div className="glass-panel">
          <div className="p-4 border-b border-neutral-700/50">
            <h2 className="font-semibold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-green-500" />
              Workflow Structure
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Configure your analysis pipeline
            </p>
          </div>
          
          <div className="p-2">
            {stages.map((stage, stageIndex) => (
              <div key={stageIndex} className="mb-2">
                <div
                  className={`workflow-stage-btn group cursor-pointer ${
                    selectedStage === `stage-${stageIndex}`
                      ? 'workflow-stage-btn-selected'
                      : 'workflow-stage-btn-default'
                  }`}
                  onClick={() => onStageSelect(`stage-${stageIndex}`)}
                >
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 mt-1 rounded-full bg-neutral-700/50 text-xs font-semibold">
                      {stageIndex + 1}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{stage.name}</span>
                        <div
                          className="p-1 hover:bg-neutral-700/50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingStage(stage);
                          }}
                        >
                          <Pencil className="w-3.5 h-3.5 text-neutral-400" />
                        </div>
                      </div>
                      <p className="text-sm text-neutral-400 mt-0.5">{stage.description}</p>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 mt-1 transition-transform cursor-pointer ${
                        isStageExpanded(`stage-${stageIndex}`) || selectedStage === `stage-${stageIndex}` ? 'rotate-180' : ''
                      }`}
                      onClick={(e) => toggleStageExpansion(`stage-${stageIndex}`, e)}
                    />
                  </div>
                </div>

                {(isStageExpanded(`stage-${stageIndex}`) || selectedStage === `stage-${stageIndex}`) && stage.steps && (
                  <div className="ml-6 mt-2 space-y-1 border-l-2 border-neutral-800">
                    {stage.steps.map((step, stepIndex) => (
                      <div key={stepIndex}>
                        <div
                          onClick={() => onStepSelect(`step-${stageIndex}-${stepIndex}`)}
                          className={`pl-4 py-2 w-full text-left group hover:bg-neutral-800/50 rounded-r-lg transition-colors cursor-pointer ${
                            selectedStep === `step-${stageIndex}-${stepIndex}`
                              ? 'bg-green-500/10 text-green-500'
                              : 'text-neutral-400 hover:text-neutral-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full bg-neutral-700/50 text-xs">
                              {step.step_number}
                            </div>
                            <span className="text-sm">{step.step_name}</span>
                          </div>
                        </div>

                        {selectedStep === `step-${stageIndex}-${stepIndex}` && step.substeps && (
                          <div className="ml-4 space-y-1">
                            {step.substeps.map((substep, substepIndex) => (
                              <div
                                key={substepIndex}
                                onClick={() => onSubstepSelect(`substep-${stageIndex}-${stepIndex}-${substepIndex}`)}
                                className={`pl-4 py-1.5 w-full text-left text-sm group hover:bg-neutral-800/50 rounded-r-lg transition-colors cursor-pointer ${
                                  selectedSubstep === `substep-${stageIndex}-${stepIndex}-${substepIndex}`
                                    ? 'text-green-500 bg-green-500/5'
                                    : 'text-neutral-500 hover:text-neutral-400'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-neutral-500">{substep.substep_number}</span>
                                  <span>{substep.substep_name}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <div
                      className="pl-4 py-2 w-full text-left text-sm text-green-500 hover:bg-green-500/10 rounded-r-lg transition-colors flex items-center gap-2 cursor-pointer"
                      onClick={() => handleAddStep(stage)}
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Step
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div
              className="w-full mt-2 p-3 flex items-center justify-center text-sm font-medium text-green-500 hover:bg-green-500/10 rounded-lg transition-colors cursor-pointer"
              onClick={handleAddStage}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Stage
            </div>
          </div>
        </div>
      </div>

      {/* Stage Edit Modal */}
      {editingStage && (
        <StageModal
          stage={editingStage}
          isOpen={true}
          onClose={() => setEditingStage(null)}
          onSave={onSaveStage}
          onPlanAnalysis={onPlanAnalysis}
        />
      )}

      {/* New Stage Modal */}
      {newStage && (
        <StageModal
          stage={newStage}
          isOpen={true}
          onClose={() => setNewStage(null)}
          onSave={(stage) => {
            onSaveStage(stage);
            setNewStage(null);
          }}
          onPlanAnalysis={onPlanAnalysis}
        />
      )}

      {/* New Step Modal */}
      {newStep && (
        <StepModal
          step={newStep.step}
          isOpen={true}
          onClose={() => setNewStep(null)}
          onSave={(step) => {
            const updatedStage = {
              ...newStep.stage,
              steps: [...(newStep.stage.steps || []), step]
            };
            onSaveStage(updatedStage);
            setNewStep(null);
          }}
          onDelete={() => setNewStep(null)}
        />
      )}
    </div>
  );
}