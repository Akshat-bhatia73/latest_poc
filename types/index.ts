export type Tab = 'report' | 'workflow';

export type Stage = {
  id?: string;
  name: string;
  description: string;
  template?: string;
  steps?: Step[];
  config?: {
    agent_role: string;
    detailed_global_output_instructions: string;
    llm_config: {
      model: string;
      max_tokens: number;
      temperature: number;
    };
  };
};

export type Step = {
  step_number: number;
  step_name: string;
  step_description: string;
  substeps: Substep[];
};

export type Substep = {
  substep_number: string;
  substep_name: string;
  description: string;
};

export type Tag = {
  id: string;
  name: string;
  description: string;
};

export type Node = {
  id: string;
  name: string;
  type: string;
  description: string;
  prompt?: string;
  tags: Tag[];
};

export type Message = {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  streaming?: boolean;
};

export type ReportData = {
  timePeriod: {
    start: string;
    totalReviews: number;
  };
  criticalInsights: string[];
  metrics: {
    totalReviews: {
      value: number;
      change: string;
    };
    satisfactionScore: {
      value: number;
      change: string;
    };
  };
  industryDistribution: {
    [key: string]: number;
  };
  featureAnalysis: {
    strongest: {
      name: string;
      score: string;
    }[];
    improvements: {
      name: string;
      score: string;
      details: string[];
    }[];
  };
  buyerPersonas: {
    technical: {
      concerns: {
        name: string;
        percentage: number;
      }[];
      requirements: string[];
    };
    operations: {
      concerns: {
        name: string;
        percentage: number;
      }[];
      requirements: string[];
    };
  };
};