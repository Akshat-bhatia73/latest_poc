export const workflowData = {
    "agent_id": "Linkedin_Post_Analyzer",
    "agent_name": "Linkedin Post Analyzer",
    "agent_description": "Analyzes linkedin posts for marketing research",
    "user_input": {
        "contents_of_companies": {
            "choices": [
                "Momentum.io"
            ]
        }
    },
    "stages": [
        {
            "name": "stage 1",
            "description": "Analyzes linkedin posts step by step using various criteria",
            "template": "# Qualitative Analysis Template - LinkedIn Posts\n\nThis template is designed to guide a detail-oriented intern in analyzing LinkedIn posts by competitors, focusing on actionable insights. \n\n---\n\n## **1. Gather Contextual Information**\n\n- **Competitor Name:**\n- **Industry Segment:**\n- **Target Audience (Based on Post Content):**\n- **Post Details:**\n    - **Post Date:**\n    - **Post Title:**\n    - **Post Content:**\n    - **Engagement Metrics:** (Likes, comments, shares, or any observable reactions)\n\n---\n\n## **2. Categorize the Post**\n\nAssign one or more categories to each post based on its purpose:\n\n- **Educational/Thought Leadership:** Sharing trends, predictions, or expertise.\n- **Product/Feature Announcements:** Introducing new tools, updates, or capabilities.\n- **Customer Stories/Case Studies:** Highlighting customer successes or testimonials.\n- **Webinar/Events Promotions:** Promoting events, webinars, or live sessions.\n- **Company Culture/Brand Building:** Posts that showcase internal initiatives or values.\n\n---\n\n## **3. Identify the Core Theme**\n\n- **What is the post trying to achieve?**(E.g., drive webinar sign-ups, showcase product value, or establish credibility.)\n- **What is the key message?**(Summarize in one sentence.)\n- **What specific pain points are they addressing?**(E.g., slow sales cycles, lack of insights, or inefficiency in workflows.)\n- **What audience segments does this target?**(E.g., sales managers, revenue ops professionals, or enterprise executives.)\n\n---\n\n## **4. Analyze Engagement Strategy**\n\n- **Call-to-Action (CTA):**\n    - What action are they asking the audience to take?(E.g., \u201cSign up for a demo,\u201d \u201cJoin our webinar,\u201d or \u201cDownload our whitepaper.\u201d)\n- **Content Format:**(E.g., text-only, image-based, video, carousel, etc.)\n- **Tone and Style:**(E.g., professional, conversational, motivational, etc.)\n- **Engagement Hooks:**(E.g., use of emojis, questions, or bold statements to capture attention.)\n\n---\n\n## **5. Evaluate Their Positioning**\n\n- **How are they positioning themselves or their product?**\n    - (E.g., market leader, innovation driver, customer-centric partner.)\n- **What differentiators are they emphasizing?**\n    - (E.g., AI, advanced analytics, ease of use, customer success focus.)\n- **What market trends are they aligning with?**\n    - (E.g., automation, predictive analytics, remote work, etc.)\n",
            "steps": [
                {
                    "step_number": 1,
                    "step_name": "Gather Contextual Information",
                    "step_description": "Collect basic post details and metrics to set the context for analysis.",
                    "substeps": [
                        {
                            "substep_number": "1.a.",
                            "substep_name": "Competitor Name",
                            "description": "Extract the name of the competitor from the post."
                        },
                        {
                            "substep_number": "1.b.",
                            "substep_name": "Industry Segment",
                            "description": "Extract the industry segment of the competitor."
                        },
                        {
                            "substep_number": "1.c.",
                            "substep_name": "Target Audience",
                            "description": "Identify the target audience based on the post content."
                        },
                        {
                            "substep_number": "1.d.",
                            "substep_name": "Engagement Metrics",
                            "description": "Extract engagement metrics such as likes, comments, and shares."
                        }
                    ]
                },
                {
                    "step_number": 2,
                    "step_name": "Categorize the Post",
                    "step_description": "Assign categories to the post based on its purpose.",
                    "substeps": [
                        {
                            "substep_number": "2.a.",
                            "substep_name": "Post Purpose Category",
                            "description": "Classify the post into one or more categories: Educational, Product Announcements, Customer Stories, Webinar Promotions, or Brand Building."
                        }
                    ]
                },
                {
                    "step_number": 3,
                    "step_name": "Identify the Core Theme",
                    "step_description": "Determine the key objectives and themes of the post.",
                    "substeps": [
                        {
                            "substep_number": "3.a.",
                            "substep_name": "Post Objective",
                            "description": "Identify what the post is trying to achieve, such as driving sign-ups, showcasing product value, or establishing credibility."
                        },
                        {
                            "substep_number": "3.b.",
                            "substep_name": "Key Message",
                            "description": "Summarize the key message of the post in one sentence."
                        },
                        {
                            "substep_number": "3.c.",
                            "substep_name": "Pain Points Addressed",
                            "description": "Identify the pain points addressed by the post, such as inefficiency or lack of insights."
                        },
                        {
                            "substep_number": "3.d.",
                            "substep_name": "Audience Segments Targeted",
                            "description": "Identify the audience segments targeted, such as sales managers or enterprise executives."
                        }
                    ]
                },
                {
                    "step_number": 4,
                    "step_name": "Analyze Engagement Strategy",
                    "step_description": "Examine how the post engages its audience.",
                    "substeps": [
                        {
                            "substep_number": "4.a.",
                            "substep_name": "Call To Action",
                            "description": "Extract the call-to-action in the post, such as 'Sign up' or 'Download'."
                        },
                        {
                            "substep_number": "4.b.",
                            "substep_name": "Content Format",
                            "description": "Classify the content format: text-only, image-based, video, or carousel."
                        },
                        {
                            "substep_number": "4.c.",
                            "substep_name": "Tone And Style",
                            "description": "Classify the tone and style of the post: professional, conversational, or motivational."
                        },
                        {
                            "substep_number": "4.d.",
                            "substep_name": "Engagement Hooks",
                            "description": "Identify engagement hooks such as emojis, questions, or bold statements."
                        }
                    ]
                },
                {
                    "step_number": 5,
                    "step_name": "Evaluate Their Positioning",
                    "step_description": "Analyze the positioning and differentiators highlighted in the post.",
                    "substeps": [
                        {
                            "substep_number": "5.a.",
                            "substep_name": "Positioning Strategy",
                            "description": "Extract how the competitor positions themselves, such as a market leader or innovation driver."
                        },
                        {
                            "substep_number": "5.b.",
                            "substep_name": "Differentiators Emphasized",
                            "description": "Identify differentiators emphasized, such as AI or customer-centric focus."
                        },
                        {
                            "substep_number": "5.c.",
                            "substep_name": "Aligned Market Trends",
                            "description": "Identify market trends the post aligns with, such as automation or predictive analytics."
                        }
                    ]
                }
            ],
            "config": {
                "agent_role": "Qualitative Marketing Analyst",
                "detailed_global_output_instructions": "\n- Include as much detail as required in the output for a successful analysis.\n\n#### Your analysis needs to focus on clear patterns from the available content set, removing temporal and effectiveness claims.\n\n#### **REMOVE ALL:**\n    - Performance assumptions (\"effectively uses...\")\n    - Temporal analysis (\"started testing...\")\n    - A/B test speculation\n    - Recommendations\n    - Best practices\n    - Repetitive summaries\n\nEach insight must be:\n\n- Backed by specific frequency data\n- Based only on observable elements\n- Free from effectiveness claims. Only if engagement data is available, you can observe and infer / extract patterns from it\n- Structured for quick scanning\n\nThe goal is to present a clear snapshot of competitor strategy based solely on the content set, without speculation about performance or changes over time.\n",
                "llm_config": {
                    "model": "gpt-4o",
                    "max_tokens": 5000,
                    "temperature": 0
                }
            }
        },
        {
            "name": "stage 2",
            "description": "Filter out posts that are not relevant to the purpose of the report",
            "template": "Categorize the post and observe if its relevant to the purpose of the report, i.e. 'Analyze linkedin posts for marketing research.'",
            "steps": [
                {
                    "step_number": 1,
                    "step_name": "Categorize the Post",
                    "step_description": "Assign categories to the post based on its purpose.",
                    "substeps": [
                        {
                            "substep_number": "2.a.",
                            "substep_name": "Post Purpose Category",
                            "description": "Classify the post into one or more categories: Educational, Product Announcements, Customer Stories, Webinar Promotions, or Brand Building."
                        },
                        {
                            "substep_number": "2.b.",
                            "substep_name": "Post Relevance To Company",
                            "description": "Is the post relevant to the analysis?"
                        }
                    ]
                }
            ],
            "config": {
                "agent_role": "Qualitative Marketing Analyst",
                "detailed_global_output_instructions": "\n- Include as much detail as required in the output for a successful analysis.\n\n#### Your analysis needs to focus on clear patterns from the available content set, removing temporal and effectiveness claims.\n\n#### **REMOVE ALL:**\n    - Performance assumptions (\"effectively uses...\")\n    - Temporal analysis (\"started testing...\")\n    - A/B test speculation\n    - Recommendations\n    - Best practices\n    - Repetitive summaries\n\nEach insight must be:\n\n- Backed by specific frequency data\n- Based only on observable elements\n- Free from effectiveness claims. Only if engagement data is available, you can observe and infer / extract patterns from it\n- Structured for quick scanning\n\nThe goal is to present a clear snapshot of competitor strategy based solely on the content set, without speculation about performance or changes over time.\n",
                "llm_config": {
                    "model": "gpt-4o-mini",
                    "max_tokens": 5000,
                    "temperature": 0
                }
            }
        },
        {
            "name": "stage 3",
            "description": "Analyzes patterns across multiple posts",
            "config": {
                "agent_role": "Qualitative Marketing Analyst",
                "detailed_reporting_requirements": "\n    **Objective**: Organize your findings clearly.\n    Keep language concise and focused on actionable insights.\n\n### Your analysis needs to focus on clear patterns from the available content set, removing temporal and effectiveness claims.\n\n### **REMOVE ALL:**\n    - Performance assumptions (\"effectively uses...\")\n    - Temporal analysis (\"started testing...\")\n    - A/B test speculation\n    - Recommendations\n    - Best practices\n    - Repetitive summaries\n\nEach insight must be:\n\n- Backed by specific frequency data\n- Based only on observable elements\n- Free from effectiveness claims. Only if engagement data is available, you can observe and infer / extract patterns from it\n- Structured for quick scanning\n\nThe goal is to present a clear snapshot of competitor strategy based solely on the content set, without speculation about performance or changes over time.\n",
                "llm_config": {
                    "model": "gpt-4o",
                    "max_tokens": 15000,
                    "temperature": 0.0
                }
            }
        },
        {
            "name": "stage 4",
            "description": "Generates section reports",
            "config": {
                "agent_role": "Qualitative Marketing Analyst",
                "detailed_reporting_requirements": "\n### 1. General Requirements:\n    - Word Limit for each section: 500 words\n    - Organize your findings clearly\n    - Keep language concise and focused on actionable insights.\n\n### 2. **Format Requirements**:\n    - Use markdown headers (##, ### etc) for clear structure. Don't use markdown headers for the section title which is (#).\n    - Include bullet points for key findings\n    - Format quotes and citations appropriately\n    - Keep paragraphs concise and focused\n\n### 3. **Executive Summary**:\n    - Conclude with a summary section titled \"Key Takeaways\"\n    - Highlight 3-5 most important observations and patterns\n    - Include supporting examples and relevant quotes\n    - Use callout blocks (>) for critical insights\n\n### Your analysis needs to focus on clear patterns from the available content set, removing temporal and effectiveness claims.\n\n### **MAP STRATEGIC CHOICES**\n    \n#### Document only observable patterns, for e.g.:\n    \n    - Primary Message Themes (with frequency)\n    - Content Investment Patterns (video vs static, production value)\n    - Target Audience Signals (explicit mentions, implied focus)\n    - Calls-to-Action Distribution\n\n### **REMOVE ALL:**\n    - Performance assumptions (\"effectively uses...\")\n    - Temporal analysis (\"started testing...\")\n    - A/B test speculation\n    - Recommendations\n    - Best practices\n    - Repetitive summaries\n\nEach insight must be:\n\n- Backed by specific frequency data\n- Based only on observable elements\n- Free from effectiveness claims. Only if engagement data is available, you can observe and infer / extract patterns from it\n- Structured for quick scanning\n\nThe goal is to present a clear snapshot of competitor strategy based solely on the content set, without speculation about performance or changes over time.\n",
                "llm_config": {
                    "model": "gpt-4o",
                    "max_tokens": 4000,
                    "temperature": 0.0
                }
            }
        },
        {
            "name": "stage 5",
            "description": "Generates final report",
            "config": {
                "report_title": "LinkedIn Posts Analysis Report",
                "agent_role": "Qualitative Marketing Analyst",
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