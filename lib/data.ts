// Static data for the LinkedIn Ad Analyzer
export const workflowData = {
    "agent_id": "Linkedin_Ad_Analyzer",
    "agent_name": "Linkedin Ad Analyzer",
    "agent_description": "Analyzes linkedin ads for marketing research",
    "user_input": {
        "contents_of_companies": {
            "choices": [
                "Apollo.io",
                "Amplemarket",
                "Bardeen",
                "ZoomInfo",
                "Instantly.AI",
                "Cognism",
                "Lusha",
                "Gong",
                "Chorus By ZoomInfo",
                "momentum"
            ]
        }
    },
    "stages": [
        {
            "name": "stage 1",
            "description": "Analyzes linkedin ads step by step",
            "template": "# Qualitative Analysis Template - LinkedIn Ads\n\n### **LinkedIn Ad Analysis Template for B2B Companies**\n\nThis template is a step-by-step guide for analyzing LinkedIn ads to uncover actionable insights. The goal is to evaluate ad effectiveness, messaging strategy, and targeting precision, providing detailed insights that a B2B marketer can leverage.\n\n---\n\n## **Step 1: Ad Basics**\n\n- **Objective**: Understand the overall setup and initial impressions.\n- **Instructions**:\n    1. **Ad Format**:\n        - Identify the format: Single Image, Carousel, Video, etc.\n        - Note how the format complements the content.\n        - Evaluate whether the format is suitable for its intended purpose (e.g., awareness, lead generation).\n    2. **Advertiser Name**:\n        - Record the company name and any associated branding cues.\n\n---\n\n## **Step 2: Headline Analysis**\n\n- **Objective**: Analyze the main hook or promise of the ad.\n- **Instructions**:\n    1. Extract the headline.\n    2. Answer the following:\n        - What key benefit or promise does the headline convey?\n        - Does it contain quantifiable results or intriguing phrasing?\n        - Is the tone aspirational, authoritative, or conversational?\n\n---\n\n## **Step 3: Body Content Analysis**\n\n- **Objective**: Dissect the messaging to identify value propositions.\n- **Instructions**:\n    1. Copy the body text.\n    2. Analyze:\n        - **Pain Points Addressed**: What problems does the ad solve?\n        - **Solutions Offered**: What benefits or transformations are promised?\n        - **Call-to-Action (CTA)**: What is the desired next step (e.g., sign up, learn more)?\n    3. Categorize the language style:\n        - Persuasive (e.g., calls to action, urgency).\n        - Educational (e.g., insights, trends, best practices).\n        - Data-driven (e.g., metrics, benchmarks).\n\n---\n\n## **Step 4: Targeting Strategy**\n\n- **Objective**: Understand the intended audience.\n- **Instructions**:\n    1. Review the **Targeting Settings** field.\n    2. Analyze:\n        - Roles or job titles targeted.\n        - Industry or company type (e.g., SaaS, enterprise, SMB).\n        - Audience segmentation by location, seniority, or specific criteria.\n\n---\n\n## **Step 5: Visual Analysis**\n\n- **Objective**: Evaluate the effectiveness of visual elements.\n- **Instructions**:\n    1. Review the image, carousel slides, or video.\n    2. Note:\n        - Key design elements: branding, icons, typography.\n        - Whether visuals align with messaging.\n        - The emotional tone conveyed (e.g., professional, friendly, aspirational).\n\n---\n\n## **Step 6: Psychological Hooks**\n\n- **Objective**: Identify strategies used to capture attention.\n- **Instructions**:\n    1. Review headline, body, and visuals together.\n    2. Highlight:\n        - Use of curiosity (e.g., \"Discover\", \"Unlock\").\n        - Authority or social proof (e.g., \"Top sales teams\").\n        - Urgency or exclusivity (e.g., \"Limited time offer\").\n\n---\n\n## **Step 7: Competitive Intelligence Themes**\n\n- **Objective**: Extract actionable insights for competitor benchmarking.\n- **Instructions**:\n    1. Summarize the ad\u2019s key themes:\n        - Sales Enablement.\n        - Industry Trends.\n        - Performance Metrics.\n        - Technology Integration.\n",
            "steps": [
                {
                    "step_number": 1,
                    "step_name": "Ad Basics",
                    "step_description": "Understand the overall setup and initial impressions.",
                    "substeps": [
                        {
                            "substep_number": "1.a.",
                            "substep_name": "Ad Format Complements Content",
                            "description": "Does the ad format complement the content?"
                        },
                        {
                            "substep_number": "1.b.",
                            "substep_name": "Ad Intended Purpose",
                            "description": "Identify the intended purpose of the ad (e.g., awareness, lead generation)."
                        },
                        {
                            "substep_number": "1.c.",
                            "substep_name": "Format Suitability For Purpose",
                            "description": "Evaluate whether the format is suitable for its intended purpose."
                        },
                        {
                            "substep_number": "1.d.",
                            "substep_name": "Company Branding Cues",
                            "description": "Extract company-associated branding cues."
                        }
                    ]
                },
                {
                    "step_number": 2,
                    "step_name": "Headline Analysis",
                    "step_description": "Analyze the main hook or promise of the ad.",
                    "substeps": [
                        {
                            "substep_number": "2.a.",
                            "substep_name": "Headline Key Benefit",
                            "description": "Identify the key benefit or promise in the headline."
                        },
                        {
                            "substep_number": "2.b.",
                            "substep_name": "Headline Hooks",
                            "description": "Identify standout hooks such as quantifiable results or intriguing phrasing."
                        },
                        {
                            "substep_number": "2.c.",
                            "substep_name": "Headline Tone Classification",
                            "description": "Classify the headline tone (e.g., aspirational, authoritative, conversational)."
                        }
                    ]
                },
                {
                    "step_number": 3,
                    "step_name": "Body Content Analysis",
                    "step_description": "Dissect the messaging to identify value propositions.",
                    "substeps": [
                        {
                            "substep_number": "3.a.",
                            "substep_name": "Body Pain Points",
                            "description": "Identify pain points addressed in the body text."
                        },
                        {
                            "substep_number": "3.b.",
                            "substep_name": "Body Solutions",
                            "description": "Identify solutions or transformations promised."
                        },
                        {
                            "substep_number": "3.c.",
                            "substep_name": "Body Call To Action",
                            "description": "Identify the call-to-action (e.g., sign up, learn more)."
                        },
                        {
                            "substep_number": "3.d.",
                            "substep_name": "Body Language Style",
                            "description": "Categorize the language style (e.g., persuasive, educational, data-driven)."
                        }
                    ]
                },
                {
                    "step_number": 4,
                    "step_name": "Targeting Strategy",
                    "step_description": "Understand the intended audience.",
                    "substeps": [
                        {
                            "substep_number": "4.a.",
                            "substep_name": "Target Roles Or Titles",
                            "description": "Analyze roles or job titles targeted."
                        },
                        {
                            "substep_number": "4.b.",
                            "substep_name": "Target Industry Type",
                            "description": "Analyze industry or company type targeted (e.g., SaaS, enterprise, SMB)."
                        },
                        {
                            "substep_number": "4.c.",
                            "substep_name": "Audience Segmentation",
                            "description": "Analyze audience segmentation by location, seniority, or specific criteria."
                        }
                    ]
                },
                {
                    "step_number": 5,
                    "step_name": "Visual Analysis",
                    "step_description": "Evaluate the effectiveness of visual elements.",
                    "substeps": [
                        {
                            "substep_number": "5.a.",
                            "substep_name": "Visual Design Elements",
                            "description": "Identify key design elements: branding, icons, typography."
                        },
                        {
                            "substep_number": "5.b.",
                            "substep_name": "Visual Message Alignment",
                            "description": "Evaluate whether visuals align with messaging."
                        },
                        {
                            "substep_number": "5.c.",
                            "substep_name": "Visual Emotional Tone",
                            "description": "Classify the emotional tone conveyed (e.g., professional, friendly, aspirational)."
                        }
                    ]
                },
                {
                    "step_number": 6,
                    "step_name": "Psychological Hooks",
                    "step_description": "Identify strategies used to capture attention.",
                    "substeps": [
                        {
                            "substep_number": "6.a.",
                            "substep_name": "Use Of Curiosity",
                            "description": "Highlight use of curiosity (e.g., 'Discover', 'Unlock')."
                        },
                        {
                            "substep_number": "6.b.",
                            "substep_name": "Use Of Authority",
                            "description": "Highlight authority or social proof (e.g., 'Top sales teams')."
                        },
                        {
                            "substep_number": "6.c.",
                            "substep_name": "Use Of Urgency",
                            "description": "Highlight urgency or exclusivity (e.g., 'Limited time offer')."
                        }
                    ]
                },
                {
                    "step_number": 7,
                    "step_name": "Competitive Intelligence Themes",
                    "step_description": "Extract actionable insights for competitor benchmarking.",
                    "substeps": [
                        {
                            "substep_number": "7.a.",
                            "substep_name": "Key Themes Summary",
                            "description": "Summarize the ad\u2019s key themes: Sales Enablement, Industry Trends, Performance Metrics, Technology Integration."
                        }
                    ]
                }
            ],
            "config": {
                "agent_role": "Qualitative Ad Analyst",
                "detailed_global_output_instructions": "\n- Include as much detail as required in the output for a successful analysis.\n\n#### Your analysis needs to focus on clear patterns from the available content set, removing temporal and effectiveness claims.\n\n#### **REMOVE ALL:**\n    - Performance assumptions (\"effectively uses...\")\n    - Temporal analysis (\"started testing...\")\n    - A/B test speculation\n    - Recommendations\n    - Best practices\n    - Repetitive summaries\n\nEach insight must be:\n\n- Backed by specific frequency data\n- Based only on observable elements\n- Free from effectiveness claims. Only if engagement data is available, you can observe and infer / extract patterns from it\n- Structured for quick scanning\n\nThe goal is to present a clear snapshot of competitor strategy based solely on the content set, without speculation about performance or changes over time.\n",
                "llm_config": {
                    "model": "gpt-4o",
                    "max_tokens": 5000,
                    "temperature": 0.0
                }
            }
        },
        {
            "name": "stage 2",
            "description": "Analyzes patterns across multiple ads",
            "config": {
                "agent_role": "Qualitative Ad Analyst",
                "detailed_reporting_requirements": "\n    **Objective**: Organize your findings clearly.\n    Keep language concise and focused on actionable insights.\n\n### Your analysis needs to focus on clear patterns from the available content set, removing temporal and effectiveness claims.\n\n### **REMOVE ALL:**\n    - Performance assumptions (\"effectively uses...\")\n    - Temporal analysis (\"started testing...\")\n    - A/B test speculation\n    - Recommendations\n    - Best practices\n    - Repetitive summaries\n\nEach insight must be:\n\n- Backed by specific frequency data\n- Based only on observable elements\n- Free from effectiveness claims. Only if engagement data is available, you can observe and infer / extract patterns from it\n- Structured for quick scanning\n\nThe goal is to present a clear snapshot of competitor strategy based solely on the content set, without speculation about performance or changes over time.\n",
                "llm_config": {
                    "model": "gpt-4o",
                    "max_tokens": 15000,
                    "temperature": 0.0
                }
            }
        },
        {
            "name": "stage 3",
            "description": "Generates section reports",
            "config": {
                "agent_role": "Qualitative Ad Analyst",
                "detailed_reporting_requirements": "\n### 1. General Requirements:\n    - Word Limit for each section: 500 words\n    - Organize your findings clearly\n    - Keep language concise and focused on actionable insights.\n\n### 2. **Format Requirements**:\n    - Use markdown headers (##, ### etc) for clear structure. Don't use markdown headers for the section title which is (#).\n    - Include bullet points for key findings\n    - Format quotes and citations appropriately\n    - Keep paragraphs concise and focused\n\n### 3. **Executive Summary**:\n    - Conclude with a summary section titled \"Key Takeaways\"\n    - Highlight 3-5 most important observations and patterns\n    - Include supporting examples and relevant quotes\n    - Use callout blocks (>) for critical insights\n\n### Your analysis needs to focus on clear patterns from the available content set, removing temporal and effectiveness claims.\n\n### **MAP STRATEGIC CHOICES**\n    \n#### Document only observable patterns, for e.g.:\n    \n    - Primary Message Themes (with frequency)\n    - Content Investment Patterns (video vs static, production value)\n    - Target Audience Signals (explicit mentions, implied focus)\n    - Calls-to-Action Distribution\n\n### **REMOVE ALL:**\n    - Performance assumptions (\"effectively uses...\")\n    - Temporal analysis (\"started testing...\")\n    - A/B test speculation\n    - Recommendations\n    - Best practices\n    - Repetitive summaries\n\nEach insight must be:\n\n- Backed by specific frequency data\n- Based only on observable elements\n- Free from effectiveness claims. Only if engagement data is available, you can observe and infer / extract patterns from it\n- Structured for quick scanning\n\nThe goal is to present a clear snapshot of competitor strategy based solely on the content set, without speculation about performance or changes over time.\n",
                "llm_config": {
                    "model": "gpt-4o",
                    "max_tokens": 4000,
                    "temperature": 0.0
                }
            }
        },
        {
            "name": "stage 4",
            "description": "Generates final report",
            "config": {
                "report_title": "LinkedIn Ads Analysis Report",
                "agent_role": "Qualitative Ad Analyst",
                "detailed_reporting_requirements": "\n### 1. General Requirements:\n    - MAX Word Limit: 500 words (Can be less if not enough insights)\n    - Organize your findings clearly. Be concise as this section is the first section of the report and meant to be quickly scanned to glean most important, key insights.\n    - Keep language concise and focused on actionable insights.\n    - Include bullet points for key findings\n    - Use callout blocks (>) for critical insights\n\n### Your analysis needs to focus on clear patterns from the available content set, removing temporal and effectiveness claims.\n\n### **MAP STRATEGIC CHOICES**\n    \n#### Document only observable patterns, for e.g.:\n    \n    - Primary Message Themes (with frequency)\n    - Content Investment Patterns (video vs static, production value)\n    - Target Audience Signals (explicit mentions, implied focus)\n    - Calls-to-Action Distribution\n\n### **REMOVE ALL:**\n    - Performance assumptions (\"effectively uses...\")\n    - Temporal analysis (\"started testing...\")\n    - A/B test speculation\n    - Recommendations\n    - Best practices\n    - Repetitive summaries\n\nEach insight must be:\n\n- Backed by specific frequency data\n- Based only on observable elements\n- Free from effectiveness claims. Only if engagement data is available, you can observe and infer / extract patterns from it\n- Structured for quick scanning\n\nThe goal is to present a clear snapshot of competitor strategy based solely on the content set, without speculation about performance or changes over time.\n",
                "llm_config": {
                    "model": "gpt-4o",
                    "max_tokens": 4000,
                    "temperature": 0.0
                }
            }
        }
    ]
} 