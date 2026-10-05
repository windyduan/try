export const modelCheckedAt="2026-10-04";
export const models=[
  {
    "id": "openai",
    "brand": "OpenAI",
    "icon": "openai",
    "color": "#369af4",
    "family": "GPT / gpt-oss",
    "access": "both",
    "mechanism": {
      "zh": "GPT 系列的近期进步涉及 reasoning、工具使用、长任务执行和推理效率。可调 reasoning effort 给任务分配不同计算预算；缓存可复用已经处理的上下文，Agent 的多步工具交互则由模型和 harness 共同完成。gpt-oss 有公开架构与权重，不能把这些细节推测为 GPT-6 的内部设计。",
      "en": "Recent GPT progress spans reasoning, tool use, long tasks and inference efficiency. Reasoning effort allocates compute, caching reuses processed context, and multi-step tool interactions depend on both a model and its harness. The published gpt-oss architecture should not be treated as evidence about GPT-6's internals."
    },
    "boundary": {
      "zh": "gpt-oss 的公开架构不能推测为 GPT-6 的内部设计；这里不采用厂商排名作为跨模型结论。",
      "en": "The gpt-oss architecture does not establish GPT-6 internals. Vendor rankings are not treated as independent cross-model conclusions."
    },
    "links": [
      "cot",
      "inference",
      "quantization"
    ],
    "releases": [
      {
        "date": "2024-05-13",
        "datePrecision": "day",
        "name": "GPT-4o",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "托管多模态模型。",
          "en": "A hosted multimodal model."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://openai.com/index/hello-gpt-4o/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2025-08-05",
        "datePrecision": "day",
        "name": "gpt-oss-120b / 20b",
        "kind": "release",
        "access": "weights",
        "license": "Apache 2.0",
        "brief": {
          "zh": "公开文本 MoE 权重，原生使用 MXFP4 低精度。",
          "en": "Open text MoE weights with native MXFP4 precision."
        },
        "sources": [
          {
            "title": "官方发布与许可说明",
            "url": "https://openai.com/index/introducing-gpt-oss/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2025-08-07",
        "datePrecision": "day",
        "name": "GPT-5",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "托管产品与 API；产品路由体系和单个模型分别看。",
          "en": "Hosted products and APIs; product routing differs from an individual model."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://openai.com/index/introducing-gpt-5/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-07-09",
        "datePrecision": "day",
        "name": "GPT-5.6 Sol / Terra / Luna",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "GA 节点；此前的 limited preview 不是同一次上线。",
          "en": "The GA release, distinct from the earlier limited preview."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://openai.com/index/gpt-5-6/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-09-03",
        "datePrecision": "day",
        "name": "GPT-6 Astra",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "面向复杂 reasoning 与长任务，分阶段开放服务。",
          "en": "Targets complex reasoning and long tasks, with staged access."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://openai.com/index/gpt-6-astra/"
          },
          {
            "title": "API 发布记录",
            "url": "https://developers.openai.com/api/docs/changelog"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-09-29",
        "datePrecision": "day",
        "name": "GPT-6.1 Sol",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "重点改进任务能力与推理效率，支持多步骤工具工作。",
          "en": "Improves task capability and inference efficiency for multi-step tool work."
        },
        "sources": [
          {
            "title": "发布记录",
            "url": "https://developers.openai.com/api/docs/changelog"
          },
          {
            "title": "官方发布",
            "url": "https://openai.com/index/introducing-gpt-6-1-sol/"
          },
          {
            "title": "模型文档",
            "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol"
          }
        ],
        "checkedAt": "2026-10-04"
      }
    ],
    "sources": [
      {
        "title": "官方发布",
        "url": "https://openai.com/index/hello-gpt-4o/"
      },
      {
        "title": "gpt-oss",
        "url": "https://openai.com/index/introducing-gpt-oss/"
      },
      {
        "title": "官方发布",
        "url": "https://openai.com/index/introducing-gpt-5/"
      },
      {
        "title": "官方发布",
        "url": "https://openai.com/index/gpt-5-6/"
      },
      {
        "title": "官方发布",
        "url": "https://openai.com/index/gpt-6-astra/"
      },
      {
        "title": "API changelog",
        "url": "https://developers.openai.com/api/docs/changelog"
      },
      {
        "title": "官方发布",
        "url": "https://openai.com/index/introducing-gpt-6-1-sol/"
      },
      {
        "title": "GPT-6.1 Sol",
        "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol"
      }
    ]
  },
  {
    "id": "anthropic",
    "brand": "Anthropic",
    "icon": "anthropic",
    "color": "#ff9d28",
    "family": "Claude",
    "access": "hosted",
    "mechanism": {
      "zh": "Claude 从 extended thinking 与工具交互，推进到更长的软件工程、研究和专业任务。Fable 与 Mythos 5.1 的差别是访问条件和 safeguards，不能把它们解释成已经公开证实的两套不同架构。Opus/Sonnet 5.5 强调任务完成与计算效率；实际工作仍需用自己的样本检查质量、速度和成本。",
      "en": "Claude progressed from extended thinking and tool interaction to longer engineering, research and professional tasks. Fable and Mythos 5.1 share a model but differ in access and safeguards; they should not be described as two disclosed architectures. Opus/Sonnet 5.5 focus on task completion and efficiency, which users should evaluate on their own work."
    },
    "boundary": {
      "zh": "Fable / Mythos 5.1 的公开差异是访问条件与 safeguards；Haiku 5.5 不记为已发布。",
      "en": "Public differences between Fable and Mythos 5.1 concern access and safeguards. Haiku 5.5 is not listed as released."
    },
    "links": [
      "cot",
      "agents",
      "harness"
    ],
    "releases": [
      {
        "date": "2024-03-04",
        "datePrecision": "day",
        "name": "Claude 3 Opus / Sonnet",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "Opus / Sonnet 发布；Haiku 当时仍是后续计划。",
          "en": "Opus and Sonnet launch; Haiku was still planned."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://www.anthropic.com/news/claude-3-family"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2025-05-22",
        "datePrecision": "day",
        "name": "Claude Opus 4 / Sonnet 4",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "Extended thinking 与工具交互。",
          "en": "Extended thinking interleaved with tool use."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://www.anthropic.com/news/claude-4"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-09-01",
        "datePrecision": "day",
        "name": "Claude Fable / Mythos 5.1",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted / trusted access",
        "brief": {
          "zh": "同一基础模型、不同 safeguards；Mythos 为受限访问。",
          "en": "A shared model with different safeguards; Mythos has restricted access."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://www.anthropic.com/claude-fable-and-mythos-5-1"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-09-22",
        "datePrecision": "day",
        "name": "Claude Opus 5.5",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "改进长任务完成与专业工作。",
          "en": "Improves long-task completion and professional work."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://www.anthropic.com/claude-opus-5-5"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-09-28",
        "datePrecision": "day",
        "name": "Claude Sonnet 5.5",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "强调效率与任务完成；Haiku 5.5 仍属后续计划。",
          "en": "Focuses on efficiency and completion; Haiku 5.5 was still planned."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://www.anthropic.com/claude-sonnet-5-5"
          }
        ],
        "checkedAt": "2026-10-04"
      }
    ],
    "sources": [
      {
        "title": "官方发布",
        "url": "https://www.anthropic.com/news/claude-3-family"
      },
      {
        "title": "Claude 4",
        "url": "https://www.anthropic.com/news/claude-4"
      },
      {
        "title": "Fable / Mythos",
        "url": "https://www.anthropic.com/claude-fable-and-mythos-5-1"
      },
      {
        "title": "Opus 5.5",
        "url": "https://www.anthropic.com/claude-opus-5-5"
      },
      {
        "title": "Sonnet 5.5",
        "url": "https://www.anthropic.com/claude-sonnet-5-5"
      },
      {
        "title": "恢复公告",
        "url": "https://www.anthropic.com/news/redeploying-fable-5"
      }
    ]
  },
  {
    "id": "google",
    "brand": "Google",
    "icon": "gemini-color",
    "color": "#43c491",
    "family": "Gemini / Gemma",
    "access": "both",
    "mechanism": {
      "zh": "Gemini 把多模态、长上下文与 thinking 扩展到需要多轮工具反馈的工作。3.8 Flash 会在复杂任务中投入更多 reasoning 与迭代调用，可用 effort 控制开销。Gemma 4 提供可自行部署的权重；Gemini API 的访问方式和内部架构公开程度与 Gemma 分开记录。",
      "en": "Gemini combines multimodality, long contexts and thinking with repeated tool feedback. On complex tasks, 3.8 Flash spends more reasoning and tool steps, with effort settings controlling the overhead. Gemma 4 provides deployable weights; its access and disclosed architecture are separate from Gemini's hosted service."
    },
    "boundary": {
      "zh": "Gemma 4 的 Apache 2.0 许可绑定该版本；Gemini 与 Gemma 的访问和架构资料分别看。",
      "en": "Gemma 4’s Apache 2.0 label applies to that release. Check Gemini and Gemma access and architectural disclosures separately."
    },
    "links": [
      "multimodal",
      "context",
      "infra"
    ],
    "releases": [
      {
        "date": "2024-02-15",
        "datePrecision": "day",
        "name": "Gemini 1.5 Pro",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted preview",
        "brief": {
          "zh": "早期 preview，公开 MoE 与长上下文设计。",
          "en": "An early preview documenting MoE and long contexts."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2025-06-17",
        "datePrecision": "day",
        "name": "Gemini 2.5 Pro / Flash",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "Pro / Flash GA；与 3 月的 experimental 版本区分。",
          "en": "Pro and Flash reach GA, distinct from the March experimental release."
        },
        "sources": [
          {
            "title": "GA 公告",
            "url": "https://blog.google/products-and-platforms/products/gemini/gemini-2-5-model-family-expands/"
          },
          {
            "title": "实验版本",
            "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-04-02",
        "datePrecision": "day",
        "name": "Gemma 4",
        "kind": "release",
        "access": "weights",
        "license": "Apache 2.0",
        "brief": {
          "zh": "权重采用 Apache 2.0；与 Gemma 3 的旧条款不同。",
          "en": "Open weights under Apache 2.0, distinct from Gemma 3’s terms."
        },
        "sources": [
          {
            "title": "官方发布及许可",
            "url": "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-05-19",
        "datePrecision": "day",
        "name": "Gemini 3.5 Flash",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "将 thinking 与工具反馈接入更多任务。",
          "en": "Extends thinking and tool feedback to more tasks."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-09-02",
        "datePrecision": "day",
        "name": "Gemini 3.8 Flash / Cyber",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted / trusted Cyber access",
        "brief": {
          "zh": "Flash 普遍提供；Cyber 只面向 Fairwind 受信任防守方。",
          "en": "Flash is broadly available; Cyber is restricted to trusted Fairwind defenders."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
          }
        ],
        "checkedAt": "2026-10-04"
      }
    ],
    "sources": [
      {
        "title": "官方发布",
        "url": "https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/"
      },
      {
        "title": "GA 公告",
        "url": "https://blog.google/products-and-platforms/products/gemini/gemini-2-5-model-family-expands/"
      },
      {
        "title": "实验版本",
        "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/"
      },
      {
        "title": "Gemma 4",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/"
      },
      {
        "title": "官方发布",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/"
      },
      {
        "title": "Gemini 3.8",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
      }
    ]
  },
  {
    "id": "meta",
    "brand": "Meta",
    "icon": "meta-color",
    "color": "#ffcf32",
    "family": "Llama / Muse Spark",
    "access": "both",
    "mechanism": {
      "zh": "Llama 4 使用原生多模态 MoE；Muse Spark 的公开材料强调 multimodal reasoning、工具与多 Agent 协调。Spark 1.3 在多种 harness 上训练，以改善长任务中的规划、反馈处理和复杂指令遵循。Muse Spark 的架构细节未完整披露，不能套用 Llama 的内部结构或开放状态。",
      "en": "Llama 4 uses native multimodal MoE; Muse Spark's public material emphasizes multimodal reasoning, tools and multi-agent orchestration. Spark 1.3 trains across varied harnesses to improve long-task planning, feedback handling and complex instruction following. Its undisclosed internals and hosted access should not be inferred from Llama."
    },
    "boundary": {
      "zh": "Llama 和 Muse Spark 的访问状态分别记录；Spark 1.3 公告仍把开放权重列为未来计划。",
      "en": "Llama and Muse Spark have separate access states. The Spark 1.3 announcement still describes open weights as a future plan."
    },
    "links": [
      "llama",
      "multimodal",
      "agents"
    ],
    "releases": [
      {
        "date": "2024-07-23",
        "datePrecision": "day",
        "name": "Llama 3.1",
        "kind": "release",
        "access": "weights",
        "license": "Llama Community License",
        "brief": {
          "zh": "开放 Llama 权重，沿用 Community License。",
          "en": "Open Llama weights under a Community License."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://ai.meta.com/blog/meta-llama-3-1/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2025-04-05",
        "datePrecision": "day",
        "name": "Llama 4 Scout / Maverick",
        "kind": "release",
        "access": "weights",
        "license": "Llama 4 Community License",
        "brief": {
          "zh": "原生多模态 MoE；当时的 Behemoth 是预览。",
          "en": "Native multimodal MoE; Behemoth was a preview at that time."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://ai.meta.com/blog/llama-4-multimodal-intelligence/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-04-08",
        "datePrecision": "day",
        "name": "Muse Spark",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted / partner API preview",
        "brief": {
          "zh": "Meta AI 托管模型；API 当时只给部分伙伴预览。",
          "en": "A hosted Meta AI model, initially with partner-only API preview."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://ai.meta.com/blog/introducing-muse-spark-msl/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-07-09",
        "datePrecision": "day",
        "name": "Muse Spark 1.1",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted API public preview",
        "brief": {
          "zh": "Meta Model API public preview；未核实开放 Spark 权重。",
          "en": "A public-preview Meta Model API; Spark weights are not established as open."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-09-02",
        "datePrecision": "day",
        "name": "Muse Spark 1.3",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "在多种 harness 上训练，改善长任务中的规划与反馈处理。",
          "en": "Trains across varied harnesses for long-task planning and feedback handling."
        },
        "sources": [
          {
            "title": "官方研究发布",
            "url": "https://research.meta.ai/blog/introducing-muse-spark-1-3"
          }
        ],
        "checkedAt": "2026-10-04"
      }
    ],
    "sources": [
      {
        "title": "官方发布",
        "url": "https://ai.meta.com/blog/meta-llama-3-1/"
      },
      {
        "title": "Llama 4",
        "url": "https://ai.meta.com/blog/llama-4-multimodal-intelligence/"
      },
      {
        "title": "Spark",
        "url": "https://ai.meta.com/blog/introducing-muse-spark-msl/"
      },
      {
        "title": "官方发布",
        "url": "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/"
      },
      {
        "title": "Spark 1.3",
        "url": "https://research.meta.ai/blog/introducing-muse-spark-1-3"
      }
    ]
  },
  {
    "id": "deepseek",
    "brand": "DeepSeek",
    "icon": "deepseek-color",
    "color": "#28c5d8",
    "family": "DeepSeek",
    "access": "both",
    "mechanism": {
      "zh": "V3 的 MLA、MoE 与 FP8 训练强调计算和显存效率，R1 展示 RL 对 reasoning 的作用。V4.1 Flash 的 Causal Encoder-Decoder 与 CSA2 通过跨层 KV/索引复用、压缩和缓存管理减轻长上下文负担。可以类比程序里的缓存与复用，但大 context window 不保证每条信息都被准确利用。",
      "en": "V3's MLA, MoE and FP8 training target compute and memory efficiency, while R1 demonstrates RL for reasoning. V4.1 Flash uses a Causal Encoder-Decoder and CSA2 with cross-layer KV/index reuse, compression and cache management for long contexts. The analogy is caching in software; a large context window does not guarantee perfect use of every detail."
    },
    "boundary": {
      "zh": "V4.1 Flash 发布日为 9 月 10 日，论文首版为 9 月 17 日；Pro 许可不从 Flash 推断。",
      "en": "V4.1 Flash launched September 10; its first paper appeared September 17. Pro licensing is not inferred from Flash."
    },
    "links": [
      "deepseek",
      "reasoning",
      "distributed"
    ],
    "releases": [
      {
        "date": "2024-12-26",
        "datePrecision": "day",
        "name": "DeepSeek V3",
        "kind": "release",
        "access": "both",
        "license": "V3 model agreement / MIT code",
        "brief": {
          "zh": "MLA、MoE 与 FP8 训练分别改善缓存、计算和训练系统。",
          "en": "MLA, MoE and FP8 training target cache, compute and training efficiency."
        },
        "sources": [
          {
            "title": "发布日志",
            "url": "https://api-docs.deepseek.com/updates/"
          },
          {
            "title": "仓库许可说明",
            "url": "https://github.com/deepseek-ai/DeepSeek-V3"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2025-01-20",
        "datePrecision": "day",
        "name": "DeepSeek R1",
        "kind": "release",
        "access": "both",
        "license": "MIT (check distilled base)",
        "brief": {
          "zh": "用 RL 训练 reasoning；蒸馏版还要查底模协议。",
          "en": "Trains reasoning through RL; distilled models require base-license checks."
        },
        "sources": [
          {
            "title": "发布日志",
            "url": "https://api-docs.deepseek.com/updates/"
          },
          {
            "title": "官方模型卡及许可",
            "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-04-24",
        "datePrecision": "day",
        "name": "DeepSeek V4 Pro / Flash",
        "kind": "preview",
        "access": "both",
        "license": "Check this checkpoint",
        "brief": {
          "zh": "Pro / Flash 预览，保留 Preview 标识。",
          "en": "The Pro and Flash preview release."
        },
        "sources": [
          {
            "title": "公告",
            "url": "https://deepseek.com/en/news/v4-preview/"
          },
          {
            "title": "发布日志",
            "url": "https://api-docs.deepseek.com/updates/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-08-13",
        "datePrecision": "day",
        "name": "DeepSeek V4 Pro",
        "kind": "release",
        "access": "both",
        "license": "Check Pro checkpoint",
        "brief": {
          "zh": "Pro 正式服务发布；该 checkpoint 的许可单独查。",
          "en": "The Pro service reaches GA; check its checkpoint-specific license."
        },
        "sources": [
          {
            "title": "官方日志",
            "url": "https://api-docs.deepseek.com/updates/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-09-10",
        "datePrecision": "day",
        "name": "DeepSeek V4.1 Flash",
        "kind": "release",
        "access": "both",
        "license": "MIT",
        "brief": {
          "zh": "文本与图像输入；CSA2 及跨层缓存复用减轻长上下文负担。",
          "en": "Text and image inputs; CSA2 and cross-layer cache reuse reduce context overhead."
        },
        "sources": [
          {
            "title": "官方日志",
            "url": "https://api-docs.deepseek.com/updates/"
          },
          {
            "title": "官方模型卡",
            "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
          }
        ],
        "checkedAt": "2026-10-04"
      }
    ],
    "sources": [
      {
        "title": "官方日志",
        "url": "https://api-docs.deepseek.com/updates/"
      },
      {
        "title": "V3",
        "url": "https://github.com/deepseek-ai/DeepSeek-V3"
      },
      {
        "title": "R1",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1"
      },
      {
        "title": "公告",
        "url": "https://deepseek.com/en/news/v4-preview/"
      },
      {
        "title": "官方模型卡",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
      },
      {
        "title": "V4.1 paper",
        "url": "https://arxiv.org/abs/2609.19969"
      }
    ]
  },
  {
    "id": "qwen",
    "brand": "Alibaba / Qwen",
    "icon": "qwen-color",
    "color": "#ff87b4",
    "family": "Qwen",
    "access": "both",
    "mechanism": {
      "zh": "Qwen3.8 的开放文本 checkpoint 混合 Gated DeltaNet、Gated Attention 和 MoE，分别处理序列状态、重点信息与按需计算。托管 Qwen3.8-Max 额外提供视觉输入等功能，不能把这些功能直接写进本地文本 checkpoint。Omni 的多模态工具可以按需要搜集图像、视频或音频证据，让“看清楚再回答”成为多步骤过程。",
      "en": "Qwen3.8's open text checkpoint combines Gated DeltaNet, Gated Attention and MoE for sequence state, selective attention and conditional computation. Hosted Qwen3.8-Max adds features such as vision, which should not be attributed to the local text checkpoint. Omni can gather multimodal evidence on demand before answering."
    },
    "boundary": {
      "zh": "Qwen3.8 保留月份精度。开放文本模型、托管 Max 和 Omni 的能力与协议分别记录。",
      "en": "Qwen3.8 retains month precision. The open text model, hosted Max and Omni have separate capabilities and agreements."
    },
    "links": [
      "new-architectures",
      "multimodal",
      "context"
    ],
    "releases": [
      {
        "date": "2024-09-19",
        "datePrecision": "day",
        "name": "Qwen2.5",
        "kind": "release",
        "access": "weights",
        "license": "Apache 2.0 (3B / 72B exceptions)",
        "brief": {
          "zh": "多数为 Apache 2.0；3B / 72B 存在许可例外。",
          "en": "Mostly Apache 2.0, with license exceptions for 3B and 72B."
        },
        "sources": [
          {
            "title": "官方发布及许可例外",
            "url": "https://qwenlm.github.io/blog/qwen2.5/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2025-04-29",
        "datePrecision": "day",
        "name": "Qwen3",
        "kind": "release",
        "access": "weights",
        "license": "Apache 2.0",
        "brief": {
          "zh": "Dense / MoE 开放权重与 hybrid thinking。",
          "en": "Open dense and MoE weights with hybrid thinking."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://qwenlm.github.io/blog/qwen3/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-01-25",
        "datePrecision": "day",
        "name": "Qwen3-Max-Thinking",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "托管 thinking 模型，使用 RL、自适应工具与 test-time scaling。",
          "en": "Hosted thinking with RL, adaptive tools and test-time scaling."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://qwen.ai/blog?id=qwen3-max-thinking"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-08",
        "datePrecision": "month",
        "name": "Qwen3.8-Max / 2.4T-A95B",
        "kind": "release",
        "access": "both",
        "license": "qwen3.8-max (open checkpoint)",
        "brief": {
          "zh": "开放 checkpoint 仅文本；托管 Max 才额外有视觉等功能。",
          "en": "The open checkpoint is text-only; hosted Max adds vision and other features."
        },
        "sources": [
          {
            "title": "官方模型卡与 2026-08 引用记录",
            "url": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B"
          },
          {
            "title": "发布链接",
            "url": "https://qwen.ai/blog?id=qwen3.8"
          },
          {
            "title": "当前许可",
            "url": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B/blob/main/LICENSE"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-09-18",
        "datePrecision": "day",
        "name": "Qwen3.8-Omni-Flash / Realtime",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted API",
        "brief": {
          "zh": "API 多模态工具；开放插件与 harness 不代表开放模型权重。",
          "en": "An API for multimodal tools; open plugins and harnesses do not imply open model weights."
        },
        "sources": [
          {
            "title": "官方公告",
            "url": "https://qwen.ai/blog?id=qwen3.8-omni-flash"
          }
        ],
        "checkedAt": "2026-10-04"
      }
    ],
    "sources": [
      {
        "title": "官方发布及许可例外",
        "url": "https://qwenlm.github.io/blog/qwen2.5/"
      },
      {
        "title": "官方发布",
        "url": "https://qwenlm.github.io/blog/qwen3/"
      },
      {
        "title": "官方发布",
        "url": "https://qwen.ai/blog?id=qwen3-max-thinking"
      },
      {
        "title": "Qwen3.8 model card",
        "url": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B"
      },
      {
        "title": "发布链接",
        "url": "https://qwen.ai/blog?id=qwen3.8"
      },
      {
        "title": "当前许可",
        "url": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B/blob/main/LICENSE"
      },
      {
        "title": "Omni",
        "url": "https://qwen.ai/blog?id=qwen3.8-omni-flash"
      }
    ]
  },
  {
    "id": "glm",
    "brand": "Z.ai / GLM",
    "icon": "zai",
    "color": "#369af4",
    "family": "GLM",
    "access": "both",
    "mechanism": {
      "zh": "GLM 从 hybrid thinking 和 MoE，推进到稀疏 Attention 与长任务 RL。GLM-5.2 的 IndexShare 在多层之间复用稀疏 Attention 的索引计算，减少长上下文开销；GLM-5.3 沿用这一架构基础，重点扩展训练任务、环境与 post-training。一次升级可以来自训练方法，也可以来自架构和推理工程。",
      "en": "GLM progressed from hybrid thinking and MoE to sparse attention and reinforcement learning for long tasks. IndexShare in GLM-5.2 reuses attention-index calculations across layers; GLM-5.3 builds on that architecture with broader tasks, environments and post-training. A release can improve through training as well as architecture and inference engineering."
    },
    "boundary": {
      "zh": "GLM-5.3 的权重截至核对日已开放，但本次没有确认首次上传日；它使用独立协议。",
      "en": "GLM-5.3 weights are available as of the check date. Their first upload date is unverified, and the release has a separate agreement."
    },
    "links": [
      "deepseek",
      "cot",
      "distributed"
    ],
    "releases": [
      {
        "date": "2024-06-05",
        "datePrecision": "day",
        "name": "GLM-4-9B",
        "kind": "release",
        "access": "weights",
        "license": "Model agreement / Apache 2.0 code",
        "brief": {
          "zh": "开放 9B 系列；模型协议与代码许可分别记录。",
          "en": "The 9B release separates the model agreement from the code license."
        },
        "sources": [
          {
            "title": "官方仓库更新记录",
            "url": "https://github.com/zai-org/GLM-4"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2025-07-28",
        "datePrecision": "day",
        "name": "GLM-4.5 / Air",
        "kind": "release",
        "access": "both",
        "license": "MIT",
        "brief": {
          "zh": "Hybrid thinking 与 MoE：按任务切换思考方式，按 token 选择专家。",
          "en": "Hybrid thinking and MoE select reasoning modes and experts."
        },
        "sources": [
          {
            "title": "发布",
            "url": "https://z.ai/blog/glm-4.5"
          },
          {
            "title": "官方模型卡及许可",
            "url": "https://huggingface.co/zai-org/GLM-4.5"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-02-12",
        "datePrecision": "day",
        "name": "GLM-5",
        "kind": "release",
        "access": "both",
        "license": "MIT",
        "brief": {
          "zh": "稀疏 Attention 与面向长任务的 RL。",
          "en": "Sparse attention and reinforcement learning for long tasks."
        },
        "sources": [
          {
            "title": "发布及技术",
            "url": "https://z.ai/blog/glm-5"
          },
          {
            "title": "官方模型卡",
            "url": "https://huggingface.co/zai-org/GLM-5"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-06-16",
        "datePrecision": "day",
        "name": "GLM-5.2",
        "kind": "release",
        "access": "both",
        "license": "MIT",
        "brief": {
          "zh": "IndexShare 跨层复用 Attention 索引计算，降低长上下文开销。",
          "en": "IndexShare reuses attention-index calculations across layers."
        },
        "sources": [
          {
            "title": "发布",
            "url": "https://z.ai/blog/glm-5.2"
          },
          {
            "title": "模型卡",
            "url": "https://huggingface.co/zai-org/GLM-5.2"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-08-14",
        "datePrecision": "day",
        "name": "GLM-5.3",
        "kind": "release",
        "access": "both",
        "license": "GLM-5.3 License",
        "brief": {
          "zh": "扩展任务、环境与 post-training；服务发布后，权重现已可下载。",
          "en": "Broader tasks, environments and post-training. Weights are downloadable as of the check date."
        },
        "sources": [
          {
            "title": "发布",
            "url": "https://z.ai/blog/glm-5.3"
          },
          {
            "title": "实际权重文件",
            "url": "https://huggingface.co/zai-org/GLM-5.3/tree/main"
          },
          {
            "title": "当前许可",
            "url": "https://huggingface.co/zai-org/GLM-5.3/blob/main/LICENSE"
          }
        ],
        "checkedAt": "2026-10-04"
      }
    ],
    "sources": [
      {
        "title": "官方仓库更新记录",
        "url": "https://github.com/zai-org/GLM-4"
      },
      {
        "title": "发布",
        "url": "https://z.ai/blog/glm-4.5"
      },
      {
        "title": "官方模型卡及许可",
        "url": "https://huggingface.co/zai-org/GLM-4.5"
      },
      {
        "title": "发布及技术",
        "url": "https://z.ai/blog/glm-5"
      },
      {
        "title": "官方模型卡",
        "url": "https://huggingface.co/zai-org/GLM-5"
      },
      {
        "title": "发布",
        "url": "https://z.ai/blog/glm-5.2"
      },
      {
        "title": "GLM-5.2",
        "url": "https://huggingface.co/zai-org/GLM-5.2"
      },
      {
        "title": "GLM-5.3",
        "url": "https://z.ai/blog/glm-5.3"
      },
      {
        "title": "实际权重文件",
        "url": "https://huggingface.co/zai-org/GLM-5.3/tree/main"
      },
      {
        "title": "当前许可",
        "url": "https://huggingface.co/zai-org/GLM-5.3/blob/main/LICENSE"
      }
    ]
  },
  {
    "id": "kimi",
    "brand": "Moonshot AI / Kimi",
    "icon": "kimi-color",
    "color": "#43c491",
    "family": "Kimi",
    "access": "both",
    "mechanism": {
      "zh": "K2.5 把视觉与文本联合训练，并让 Agent Swarm 按任务拆出并行工作。K3 使用 Kimi Delta Attention、Attention Residuals 和 MoE，分别处理长序列效率、跨层信息传递和按需计算。可以把 swarm 类比为临时组建的项目团队；分工、协调与检查仍会产生额外成本。",
      "en": "K2.5 jointly trains vision and language and lets Agent Swarm organize parallel work. K3 combines Kimi Delta Attention, Attention Residuals and MoE to address sequence efficiency, information flow across depth and selective computation. A swarm is like a temporary project team: coordination and checking still have costs."
    },
    "boundary": {
      "zh": "K3 服务公告的中英文日期不同；时间线采用明确的 7 月 27 日权重开放节点。",
      "en": "K3 service announcements differ by language. The timeline uses the explicit July 27 weight-release milestone."
    },
    "links": [
      "new-architectures",
      "agents",
      "infra"
    ],
    "releases": [
      {
        "date": "2024-06-26",
        "datePrecision": "day",
        "name": "Mooncake",
        "kind": "research",
        "access": "report",
        "license": "Research / infrastructure",
        "brief": {
          "zh": "研究如何组织 KV Cache 与模型服务；这是 Infra 节点。",
          "en": "Research on KV-cache organization and serving infrastructure."
        },
        "sources": [
          {
            "title": "官方研究目录",
            "url": "https://www.kimi.com/en/blog/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2025-01-20",
        "datePrecision": "day",
        "name": "Kimi k1.5",
        "kind": "research",
        "access": "report",
        "license": "Technical report",
        "brief": {
          "zh": "公布 RL 技术报告；报告公开与权重开放分开看。",
          "en": "A published RL report; this node does not document open weights."
        },
        "sources": [
          {
            "title": "研究目录",
            "url": "https://www.kimi.com/en/blog/"
          },
          {
            "title": "技术报告仓库",
            "url": "https://github.com/MoonshotAI/Kimi-k1.5"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2025-07-11",
        "datePrecision": "day",
        "name": "Kimi K2",
        "kind": "release",
        "access": "both",
        "license": "Modified MIT",
        "brief": {
          "zh": "MoE 与 Agent 任务训练，公开模型权重。",
          "en": "MoE and agent-task training, with downloadable weights."
        },
        "sources": [
          {
            "title": "发布目录日期",
            "url": "https://www.kimi.com/en/blog/"
          },
          {
            "title": "官方仓库",
            "url": "https://github.com/MoonshotAI/Kimi-K2"
          },
          {
            "title": "许可",
            "url": "https://github.com/MoonshotAI/Kimi-K2/blob/main/LICENSE"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-01-27",
        "datePrecision": "day",
        "name": "Kimi K2.5",
        "kind": "release",
        "access": "both",
        "license": "Modified MIT",
        "brief": {
          "zh": "视觉与文本联合训练；Agent Swarm 初始为 beta。",
          "en": "Joint vision-language training; Agent Swarm initially launched in beta."
        },
        "sources": [
          {
            "title": "发布",
            "url": "https://www.kimi.com/en/blog/kimi-k2-5"
          },
          {
            "title": "官方模型卡",
            "url": "https://huggingface.co/moonshotai/Kimi-K2.5"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-04-20",
        "datePrecision": "day",
        "name": "Kimi K2.6",
        "kind": "release",
        "access": "both",
        "license": "Check this release",
        "brief": {
          "zh": "扩展编程与多 Agent 工作；该版本许可需单独检查。",
          "en": "Expanded coding and multi-agent work; check this release’s license."
        },
        "sources": [
          {
            "title": "研究目录",
            "url": "https://www.kimi.com/en/blog/"
          },
          {
            "title": "官方 Agent Swarm 帮助页",
            "url": "https://www.kimi.com/en/help/agent/agent-swarm"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-07-27",
        "datePrecision": "day",
        "name": "Kimi K3",
        "kind": "weights",
        "access": "both",
        "license": "Kimi K3 License",
        "brief": {
          "zh": "公开 KDA、Attention Residuals 与 MoE 技术，以及配套 Infra。",
          "en": "Publishes KDA, Attention Residuals, MoE and supporting infrastructure."
        },
        "sources": [
          {
            "title": "权重公开公告",
            "url": "https://www.kimi.com/news/kimi-k3-open-source"
          },
          {
            "title": "模型卡",
            "url": "https://huggingface.co/moonshotai/Kimi-K3"
          },
          {
            "title": "许可",
            "url": "https://huggingface.co/moonshotai/Kimi-K3/blob/main/LICENSE"
          }
        ],
        "checkedAt": "2026-10-04"
      }
    ],
    "sources": [
      {
        "title": "研究目录",
        "url": "https://www.kimi.com/en/blog/"
      },
      {
        "title": "技术报告仓库",
        "url": "https://github.com/MoonshotAI/Kimi-k1.5"
      },
      {
        "title": "官方仓库",
        "url": "https://github.com/MoonshotAI/Kimi-K2"
      },
      {
        "title": "许可",
        "url": "https://github.com/MoonshotAI/Kimi-K2/blob/main/LICENSE"
      },
      {
        "title": "K2.5",
        "url": "https://www.kimi.com/en/blog/kimi-k2-5"
      },
      {
        "title": "官方模型卡",
        "url": "https://huggingface.co/moonshotai/Kimi-K2.5"
      },
      {
        "title": "官方 Agent Swarm 帮助页",
        "url": "https://www.kimi.com/en/help/agent/agent-swarm"
      },
      {
        "title": "K3",
        "url": "https://www.kimi.com/news/kimi-k3-open-source"
      },
      {
        "title": "模型卡",
        "url": "https://huggingface.co/moonshotai/Kimi-K3"
      },
      {
        "title": "许可",
        "url": "https://huggingface.co/moonshotai/Kimi-K3/blob/main/LICENSE"
      },
      {
        "title": "服务公告",
        "url": "https://www.kimi.com/news/kimi-k3"
      }
    ]
  },
  {
    "id": "minimax",
    "brand": "MiniMax",
    "icon": "minimax-color",
    "color": "#ff87b4",
    "family": "MiniMax",
    "access": "both",
    "mechanism": {
      "zh": "MiniMax-01 混用 Lightning Attention 与 full Attention；M3 用 MiniMax Sparse Attention 承载长上下文和多模态任务。M2.5 的 Forge 把 Agent 环境与训练/推理设施拆开，让真实多步骤任务可用于 RL。M2.7 所称的 self-evolution 包括分析失败轨迹、修改 harness、评估并保留或回滚；这属于可验证的研发循环，不能据此断言无限自我提升。",
      "en": "MiniMax-01 mixes Lightning Attention with full attention, while M3 uses MiniMax Sparse Attention for long contexts and multimodal work. Forge in M2.5 separates agent environments from training and inference infrastructure for multi-step RL. M2.7's self-evolution examples include analyzing failures, editing a harness, evaluating it and keeping or reverting changes; they do not establish unlimited self-improvement."
    },
    "boundary": {
      "zh": "M2.5 为 Modified-MIT，M2.7 为非商用协议，M3 为 minimax-community；许可随具体版本。",
      "en": "M2.5 uses Modified-MIT, M2.7 a non-commercial agreement, and M3 minimax-community. Check the exact release."
    },
    "links": [
      "new-architectures",
      "harness",
      "rsi"
    ],
    "releases": [
      {
        "date": "2025-01-15",
        "datePrecision": "day",
        "name": "MiniMax-Text-01 / VL-01",
        "kind": "release",
        "access": "both",
        "license": "Check historical agreement",
        "brief": {
          "zh": "Lightning Attention 与 full Attention 混合。",
          "en": "Combines Lightning Attention and full attention."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://www.minimax.io/news/minimax-01-series-2"
          },
          {
            "title": "Text-01 模型卡",
            "url": "https://huggingface.co/MiniMaxAI/MiniMax-Text-01"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-02-12",
        "datePrecision": "day",
        "name": "MiniMax M2.5",
        "kind": "release",
        "access": "both",
        "license": "Modified-MIT",
        "brief": {
          "zh": "Forge 将 Agent 环境与训练/推理设施拆开，用多步骤任务训练。",
          "en": "Forge separates agent environments from training and inference infrastructure."
        },
        "sources": [
          {
            "title": "发布",
            "url": "https://www.minimax.io/news/minimax-m25"
          },
          {
            "title": "模型卡及许可标签",
            "url": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-03-18",
        "datePrecision": "day",
        "name": "MiniMax M2.7",
        "kind": "release",
        "access": "both",
        "license": "Non-commercial License",
        "brief": {
          "zh": "分析失败、修改 harness、评估并回滚，形成可检查的改进循环。",
          "en": "Analyzes failures, edits harnesses, evaluates changes and rolls them back when needed."
        },
        "sources": [
          {
            "title": "发布",
            "url": "https://www.minimax.io/blog/minimax-m27"
          },
          {
            "title": "权重",
            "url": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7"
          },
          {
            "title": "许可正文",
            "url": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/main/LICENSE"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-06-01",
        "datePrecision": "day",
        "name": "MiniMax M3",
        "kind": "release",
        "access": "both",
        "license": "minimax-community",
        "brief": {
          "zh": "MiniMax Sparse Attention 面向长上下文与多模态；权重现已可下载。",
          "en": "MiniMax Sparse Attention targets long contexts and multimodality; weights are now downloadable."
        },
        "sources": [
          {
            "title": "发布",
            "url": "https://www.minimax.io/blog/minimax-m3"
          },
          {
            "title": "模型卡",
            "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3"
          },
          {
            "title": "许可",
            "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3/blob/main/LICENSE"
          }
        ],
        "checkedAt": "2026-10-04"
      }
    ],
    "sources": [
      {
        "title": "01",
        "url": "https://www.minimax.io/news/minimax-01-series-2"
      },
      {
        "title": "Text-01 模型卡",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-Text-01"
      },
      {
        "title": "M2.5",
        "url": "https://www.minimax.io/news/minimax-m25"
      },
      {
        "title": "模型卡及许可标签",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5"
      },
      {
        "title": "M2.7",
        "url": "https://www.minimax.io/blog/minimax-m27"
      },
      {
        "title": "权重",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7"
      },
      {
        "title": "许可正文",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/main/LICENSE"
      },
      {
        "title": "M3",
        "url": "https://www.minimax.io/blog/minimax-m3"
      },
      {
        "title": "模型卡",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3"
      },
      {
        "title": "许可",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3/blob/main/LICENSE"
      }
    ]
  },
  {
    "id": "mimo",
    "brand": "Xiaomi / MiMo",
    "icon": "xiaomimimo",
    "color": "#ff9d28",
    "family": "MiMo",
    "access": "both",
    "mechanism": {
      "zh": "MiMo 把可验证任务用于 RL，并在 V2.6 中扩展复杂任务和多模态能力。团队发现，只奖励“最后答对”可能遗漏重复工具调用的成本，因此通过 multi-teacher on-policy distillation 修正轨迹行为。这个案例说明，Agent 质量还包括过程是否高效，而不仅是最后一句答案。",
      "en": "MiMo uses verifiable tasks for RL and expands complex, multimodal work in V2.6. Its team found that rewarding final correctness could overlook repetitive tool calls, then used multi-teacher on-policy distillation to improve trajectories. Agent quality includes efficient execution, not just a correct final answer."
    },
    "boundary": {
      "zh": "V2.6 时间记录区分服务、MOPD checkpoint 和分析文章；已有权重不证明首日即开放。",
      "en": "V2.6 service, MOPD checkpoint and analysis dates are distinct. Current weights do not establish first-day availability."
    },
    "links": [
      "reasoning",
      "tuning",
      "evals"
    ],
    "releases": [
      {
        "date": "2025-05-30",
        "datePrecision": "day",
        "name": "MiMo-7B-RL-0530",
        "kind": "release",
        "access": "weights",
        "license": "MIT",
        "brief": {
          "zh": "可验证任务上的 RL 更新，提供 7B 权重。",
          "en": "A 7B RL update trained on verifiable tasks."
        },
        "sources": [
          {
            "title": "官方仓库更新",
            "url": "https://github.com/XiaomiMiMo/MiMo/blob/main/README.md"
          },
          {
            "title": "权重及许可",
            "url": "https://huggingface.co/XiaomiMiMo/MiMo-7B-RL-0530"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-03-18",
        "datePrecision": "day",
        "name": "MiMo-V2-Pro",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted API",
        "brief": {
          "zh": "Pro 托管 API 发布；此节点未核实开放权重。",
          "en": "The hosted Pro API launches; open weights are not established for this node."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://mimo.xiaomi.com/mimo-v2-pro"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-09-22",
        "datePrecision": "day",
        "name": "MiMo-V2.6 Pro / Flash",
        "kind": "release",
        "access": "both",
        "license": "MIT (Pro-MOPD)",
        "brief": {
          "zh": "扩展复杂任务与多模态；已有 Pro-MOPD 权重，首次开放日期未核实。",
          "en": "Expands complex and multimodal work. Pro-MOPD weights are available; their first upload date is unverified."
        },
        "sources": [
          {
            "title": "技术文章",
            "url": "https://mimo.xiaomi.com/mimo-v2-6/article"
          },
          {
            "title": "官方权重集合",
            "url": "https://huggingface.co/collections/XiaomiMiMo/mimo-v26"
          },
          {
            "title": "Pro-MOPD",
            "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-09-25",
        "datePrecision": "day",
        "name": "MiMo-V2.6 MOPD",
        "kind": "checkpoint",
        "access": "both",
        "license": "MIT (Pro-MOPD)",
        "brief": {
          "zh": "修正重复工具调用；MOPD 让训练关注任务执行过程。",
          "en": "MOPD addresses repetitive tool calls and inefficient trajectories."
        },
        "sources": [
          {
            "title": "官方分析与更新日",
            "url": "https://mimo.xiaomi.com/blog/mimo-v2-6-tool-call-repetition"
          }
        ],
        "checkedAt": "2026-10-04"
      }
    ],
    "sources": [
      {
        "title": "官方仓库更新",
        "url": "https://github.com/XiaomiMiMo/MiMo/blob/main/README.md"
      },
      {
        "title": "权重及许可",
        "url": "https://huggingface.co/XiaomiMiMo/MiMo-7B-RL-0530"
      },
      {
        "title": "官方发布",
        "url": "https://mimo.xiaomi.com/mimo-v2-pro"
      },
      {
        "title": "V2.6",
        "url": "https://mimo.xiaomi.com/mimo-v2-6/article"
      },
      {
        "title": "官方权重集合",
        "url": "https://huggingface.co/collections/XiaomiMiMo/mimo-v26"
      },
      {
        "title": "Pro-MOPD",
        "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD"
      },
      {
        "title": "Tool-call analysis",
        "url": "https://mimo.xiaomi.com/blog/mimo-v2-6-tool-call-repetition"
      }
    ]
  },
  {
    "id": "grok",
    "brand": "xAI / Grok",
    "icon": "grok",
    "color": "#28c5d8",
    "family": "Grok",
    "access": "hosted",
    "mechanism": {
      "zh": "Grok 3 用大规模 RL 强化 reasoning，并把联网搜索、代码执行接入回答过程。Grok 4.5 进一步面向真实软件工程与 Agent 工作。搜索和工具能提供反馈，但产品接入工具不等于公开了模型内部架构。",
      "en": "Grok 3 strengthened reasoning through large-scale RL and combined it with search and code execution. Grok 4.5 extends the focus to real software engineering and agent work. Tool access supplies feedback, but it does not disclose a model's internal architecture."
    },
    "boundary": {
      "zh": "早期 Grok 的开放权重不能推出 Grok 4.5 开放；完整内部架构未公开。",
      "en": "Earlier open Grok weights do not establish open Grok 4.5 weights. The full internal architecture is undisclosed."
    },
    "links": [
      "reasoning",
      "agents",
      "harness"
    ],
    "releases": [
      {
        "date": "2024-08-13",
        "datePrecision": "day",
        "name": "Grok-2 / mini",
        "kind": "preview",
        "access": "hosted",
        "license": "Hosted beta",
        "brief": {
          "zh": "在 X 中提供 beta；企业 API 当时仍属计划。",
          "en": "An X beta; the enterprise API was still planned at this release."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://x.ai/news/grok-2"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2025-02-19",
        "datePrecision": "day",
        "name": "Grok 3",
        "kind": "preview",
        "access": "hosted",
        "license": "Hosted beta",
        "brief": {
          "zh": "RL reasoning 加入联网搜索与代码执行反馈。",
          "en": "RL reasoning combines search with code-execution feedback."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://x.ai/news/grok-3"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-07-16",
        "datePrecision": "day",
        "name": "Grok 4.5",
        "kind": "release",
        "access": "hosted",
        "license": "Hosted service",
        "brief": {
          "zh": "面向真实软件工程与 Agent 任务。",
          "en": "Extends the focus to software engineering and agent tasks."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://x.ai/news/grok-4-5"
          }
        ],
        "checkedAt": "2026-10-04"
      }
    ],
    "sources": [
      {
        "title": "官方发布",
        "url": "https://x.ai/news/grok-2"
      },
      {
        "title": "Grok 3",
        "url": "https://x.ai/news/grok-3"
      },
      {
        "title": "Grok 4.5",
        "url": "https://x.ai/news/grok-4-5"
      }
    ]
  },
  {
    "id": "mistral",
    "brand": "Mistral AI",
    "icon": "mistral-color",
    "color": "#ff746b",
    "family": "Mistral",
    "access": "both",
    "mechanism": {
      "zh": "Small 4 把 reasoning、coding 和图像理解放入同一个 MoE 模型，Medium 3.5 则是公开的 dense 模型路线。Agentic Search 会按任务多轮寻找和核查材料，因此要同时看引用是否支持结论、检索过程与使用成本。模型架构、Agent 工作流程和产品功能分别展示，能避免把所有进步都归因于“参数更大”。",
      "en": "Small 4 combines reasoning, coding and image understanding in one MoE model, while Medium 3.5 follows a disclosed dense-model design. Agentic Search iteratively gathers and checks material, so assess source support, the retrieval process and cost together. Separating model architecture, agent workflow and product features makes progress easier to understand."
    },
    "boundary": {
      "zh": "Medium 3.5 的 GA 日和后续 Agent 产品文章日分别记录；Agentic Search 是产品节点。",
      "en": "Medium 3.5’s GA date differs from the later agent-product article. Agentic Search is a product milestone."
    },
    "links": [
      "new-architectures",
      "rag",
      "harness"
    ],
    "releases": [
      {
        "date": "2024-07-18",
        "datePrecision": "day",
        "name": "Mistral NeMo",
        "kind": "release",
        "access": "weights",
        "license": "Apache 2.0",
        "brief": {
          "zh": "开放权重并使用 FP8 quantization-aware training。",
          "en": "Open weights with FP8 quantization-aware training."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://mistral.ai/news/mistral-nemo/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2025-03-17",
        "datePrecision": "day",
        "name": "Mistral Small 3.1",
        "kind": "release",
        "access": "weights",
        "license": "Apache 2.0",
        "brief": {
          "zh": "图像理解、长上下文与 function calling。",
          "en": "Image understanding, long context and function calling."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://mistral.ai/news/mistral-small-3-1/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-03-16",
        "datePrecision": "day",
        "name": "Mistral Small 4",
        "kind": "release",
        "access": "weights",
        "license": "Apache 2.0",
        "brief": {
          "zh": "把 reasoning、coding 和图像理解组合在一个 MoE 中。",
          "en": "Combines reasoning, coding and image understanding in one MoE."
        },
        "sources": [
          {
            "title": "官方发布",
            "url": "https://mistral.ai/news/mistral-small-4/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-04-28",
        "datePrecision": "day",
        "name": "Mistral Medium 3.5",
        "kind": "release",
        "access": "weights",
        "license": "Modified MIT",
        "brief": {
          "zh": "Dense 路线；日期来自模型文档的 GA 记录。",
          "en": "A dense-model design; the date comes from its documented GA release."
        },
        "sources": [
          {
            "title": "模型文档",
            "url": "https://docs.mistral.ai/models/mistral-medium-3-5-26-04"
          },
          {
            "title": "05-22 产品文章",
            "url": "https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/"
          }
        ],
        "checkedAt": "2026-10-04"
      },
      {
        "date": "2026-08-20",
        "datePrecision": "day",
        "name": "Agentic Search",
        "kind": "product",
        "access": "hosted",
        "license": "Hosted product",
        "brief": {
          "zh": "迭代检索、阅读与核查材料；这是产品/工作流节点。",
          "en": "Iterative retrieval, reading and source checks; a product/workflow milestone."
        },
        "sources": [
          {
            "title": "官方文章",
            "url": "https://mistral.ai/news/agentic-search/"
          }
        ],
        "checkedAt": "2026-10-04"
      }
    ],
    "sources": [
      {
        "title": "官方发布",
        "url": "https://mistral.ai/news/mistral-nemo/"
      },
      {
        "title": "官方发布",
        "url": "https://mistral.ai/news/mistral-small-3-1/"
      },
      {
        "title": "Small 4",
        "url": "https://mistral.ai/news/mistral-small-4/"
      },
      {
        "title": "模型文档",
        "url": "https://docs.mistral.ai/models/mistral-medium-3-5-26-04"
      },
      {
        "title": "Medium 3.5",
        "url": "https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/"
      },
      {
        "title": "Agentic Search",
        "url": "https://mistral.ai/news/agentic-search/"
      }
    ]
  }
];
export function selectModelReleases(families,{year='all',access='all'}={}){
 return families.map(m=>({...m,visibleReleases:m.releases.filter(r=>(year==='all'||r.date.startsWith(year))&&(access==='all'||r.access===access||r.access==='both'))})).filter(m=>m.visibleReleases.length);
}
