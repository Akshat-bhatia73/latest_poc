"use client";

import { useRouter } from 'next/navigation';
import { Bot, ArrowRight, Workflow, FileText } from 'lucide-react';
import { workflowData as agent1Data } from '@/lib/data';
import { workflowData as agent2Data } from '@/lib/data_2';

export default function Home() {
  const router = useRouter();
  
  const agents = [agent1Data, agent2Data];

  const handleAgentClick = (agentId: string) => {
    router.push(`/agent/${agentId}`);
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <header className="glass-header sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6 text-green-500" />
              <h1 className="text-xl font-semibold text-white">
                Analysis Agents
              </h1>
            </div>
            <button className="btn btn-primary h-9 text-sm">
              Create New Agent
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.agent_id}
              className="glass-panel p-6 cursor-pointer group hover:border-green-500/20 hover:bg-green-500/5 transition-all"
              onClick={() => handleAgentClick(agent.agent_id)}
            >
              {/* Agent Icon & Name */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-neutral-800/50 rounded-lg">
                  {agent.agent_id.toLowerCase().includes('post') ? (
                    <FileText className="w-6 h-6 text-green-500" />
                  ) : (
                    <Workflow className="w-6 h-6 text-green-500" />
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-white group-hover:text-green-500 transition-colors">
                    {agent.agent_name}
                  </h2>
                  <p className="text-sm text-neutral-400 mt-1">
                    {agent.agent_description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-green-500 transition-colors" />
              </div>

              {/* Agent Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-neutral-800/50 rounded-lg">
                  <span className="text-sm text-neutral-400 block mb-1">Stages</span>
                  <span className="text-2xl font-semibold text-white">
                    {agent.stages.length}
                  </span>
                </div>
                <div className="p-3 bg-neutral-800/50 rounded-lg">
                  <span className="text-sm text-neutral-400 block mb-1">Companies</span>
                  <span className="text-2xl font-semibold text-white">
                    {agent.user_input.contents_of_companies.choices.length}
                  </span>
                </div>
              </div>

              {/* Agent Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {agent.stages.slice(0, 3).map((stage, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-md bg-neutral-800/50 text-neutral-300"
                  >
                    {stage.name}
                  </span>
                ))}
                {agent.stages.length > 3 && (
                  <span className="px-2 py-1 text-xs rounded-md bg-neutral-800/50 text-neutral-300">
                    +{agent.stages.length - 3} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}