"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Plus, Settings2, Bot, Workflow, FileText } from 'lucide-react';
import { Header } from '@/components/Header';
import { ReportAssistant } from '@/components/report/ReportAssistant';
import { ReportView } from '@/components/report/ReportView';
import { WorkflowStages } from '@/components/workflow/WorkflowStages';
import { NodeList } from '@/components/workflow/NodeList';
import { StageModal } from '@/components/workflow/StageModal';
import { StepModal } from '@/components/workflow/StepModal';
import { AgentConfig } from '@/components/workflow/AgentConfig';
import { Stage, Step, Message } from '@/types';
import { workflowData as agent1Data } from '@/lib/data';
import { workflowData as agent2Data } from '@/lib/data_2';
import { v4 as uuidv4 } from 'uuid';

export default function AgentPage() {
  const params = useParams();
  const id = params?.id as string;
  
  const [agentData, setAgentData] = useState<typeof agent1Data | typeof agent2Data | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [selectedSubstep, setSelectedSubstep] = useState<string | null>(null);
  const [showAgentConfig, setShowAgentConfig] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuery, setCurrentQuery] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [stages, setStages] = useState<Stage[]>([]);

  useEffect(() => {
    if (id) {
      const data = id === 'Linkedin_Ad_Analyzer' ? agent1Data : agent2Data;
      setAgentData(data);
      setStages(data.stages);
    }
  }, [id]);

  // Clear selections when changing levels
  useEffect(() => {
    setSelectedSubstep(null);
  }, [selectedStep]);

  useEffect(() => {
    setSelectedStep(null);
  }, [selectedStage]);

  const handleStageSelect = (stageId: string) => {
    setSelectedStage(stageId);
  };

  const handleStepSelect = (stepId: string | null) => {
    setSelectedStep(stepId);
  };

  const handleSubstepSelect = (substepId: string | null) => {
    setSelectedSubstep(substepId);
  };

  const handleSaveStage = (updatedStage: Stage) => {
    setStages(prevStages => 
      prevStages.map((stage, index) => 
        stage === updatedStage ? { ...stage, ...updatedStage } : stage
      )
    );
  };

  const handleSaveStep = (updatedStep: Step) => {
    setStages(prevStages => 
      prevStages.map((stage, stageIndex) => {
        if (`stage-${stageIndex}` === selectedStage) {
          return {
            ...stage,
            steps: stage.steps?.map((step, stepIndex) => 
              `step-${stageIndex}-${stepIndex}` === selectedStep ? updatedStep : step
            )
          };
        }
        return stage;
      })
    );
  };

  const handleDeleteStep = () => {
    if (!selectedStage || !selectedStep) return;

    setStages(prevStages => 
      prevStages.map((stage, stageIndex) => {
        if (`stage-${stageIndex}` === selectedStage) {
          return {
            ...stage,
            steps: stage.steps?.filter((_, stepIndex) => 
              `step-${stageIndex}-${stepIndex}` !== selectedStep
            )
          };
        }
        return stage;
      })
    );
    setSelectedStep(null);
  };

  const handlePlanAnalysis = async (template: string) => {
    // Simulate API call for now
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Update stage with new steps
    if (selectedStage) {
      setStages(prevStages => 
        prevStages.map((stage, index) => 
          `stage-${index}` === selectedStage 
            ? {
                ...stage,
                template,
                steps: [
                  {
                    step_number: 1,
                    step_name: "New Step",
                    step_description: "Generated from template",
                    substeps: [
                      {
                        substep_number: "1.1",
                        substep_name: "Initial Substep",
                        description: "Auto-generated substep"
                      }
                    ]
                  }
                ]
              }
            : stage
        )
      );
    }
  };

  const handleQuerySubmit = async (query: string) => {
    if (!query.trim() || isStreaming) return;
    
    setIsStreaming(true);
    setMessages(prev => [...prev, {
      id: uuidv4(),
      content: query,
      type: 'user'
    }]);
    setCurrentQuery('');
    
    const sampleResponse = "Based on the analysis of the workflow configuration...";
    await streamResponse(sampleResponse);
  };

  const streamResponse = async (response: string) => {
    const newMessage: Message = {
      id: uuidv4(),
      content: '',
      type: 'assistant',
      streaming: true
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    let currentText = '';
    for (let i = 0; i < response.length; i++) {
      currentText += response[i];
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMessage.id 
            ? { ...msg, content: currentText }
            : msg
        )
      );
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    
    setMessages(prev => 
      prev.map(msg => 
        msg.id === newMessage.id 
          ? { ...msg, streaming: false }
          : msg
      )
    );
    setIsStreaming(false);
  };

  const getCurrentStep = (): Step | undefined => {
    if (!selectedStep || !selectedStage) return undefined;
    const [_, stageIndex, stepIndex] = selectedStep.split('-');
    return stages[parseInt(stageIndex)]?.steps?.[parseInt(stepIndex)];
  };

  if (!agentData) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <Bot className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-white">Loading Agent...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <Tabs defaultValue="report">
        <Header />
        
        <div className="max-w-[1800px] mx-auto px-6 py-6">
          <TabsContent value="report" className="mt-0">
            <div className="flex gap-6 h-[calc(100vh-8rem)]">
              <ReportAssistant
                messages={messages}
                currentQuery={currentQuery}
                isStreaming={isStreaming}
                onQueryChange={setCurrentQuery}
                onQuerySubmit={handleQuerySubmit}
              />
              <ReportView />
            </div>
          </TabsContent>

          <TabsContent value="workflow" className="mt-0">
            <div className="flex gap-6 h-[calc(100vh-8rem)]">
              {/* Left Sidebar - Workflow Navigation */}
              <WorkflowStages
                stages={stages}
                selectedStage={selectedStage}
                selectedStep={selectedStep}
                selectedSubstep={selectedSubstep}
                onStageSelect={handleStageSelect}
                onStepSelect={handleStepSelect}
                onSubstepSelect={handleSubstepSelect}
                onSaveStage={handleSaveStage}
                onPlanAnalysis={handlePlanAnalysis}
              />
              
              {/* Main Content Area */}
              <div className="flex-1 flex flex-col glass-panel overflow-hidden">
                {/* Top Bar */}
                <div className="p-4 border-b border-neutral-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Bot className="w-5 h-5 text-green-500" />
                    <div>
                      <h1 className="text-lg font-semibold text-white">{agentData.agent_name}</h1>
                      <p className="text-sm text-neutral-400">{agentData.agent_description}</p>
                    </div>
                  </div>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setShowAgentConfig(true)}
                  >
                    <Settings2 className="w-4 h-4 mr-2" />
                    Agent Settings
                  </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6">
                  {showAgentConfig ? (
                    <AgentConfig onClose={() => setShowAgentConfig(false)} />
                  ) : (
                    <div className="space-y-6">
                      {!selectedStage ? (
                        <div className="text-center py-12">
                          <Workflow className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                          <h2 className="text-xl font-medium text-neutral-300 mb-2">
                            Select a Stage to Begin
                          </h2>
                          <p className="text-neutral-500 max-w-md mx-auto">
                            Choose a workflow stage from the left sidebar to view and edit its configuration
                          </p>
                        </div>
                      ) : (
                        <NodeList
                          stages={stages}
                          selectedStage={selectedStage}
                          selectedStep={selectedStep}
                          selectedSubstep={selectedSubstep}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Step Edit Modal */}
              {selectedStep && getCurrentStep() && (
                <StepModal
                  step={getCurrentStep()!}
                  isOpen={true}
                  onClose={() => setSelectedStep(null)}
                  onSave={handleSaveStep}
                  onDelete={handleDeleteStep}
                />
              )}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}