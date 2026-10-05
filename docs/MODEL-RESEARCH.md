# Try v5：模型系列与技术节点资料核对

核对日期：2026-10-04。范围为用户点名的 GLM、Kimi、MiniMax、MiMo、Grok、Muse Spark，以及 OpenAI、Anthropic、Google、DeepSeek、Qwen、Mistral。Muse Spark 归在 Meta 卡片下；用户的 “gork” 和 “muse saprk” 统一为官方拼写 Grok、Muse Spark。

只采用厂商发布页、官方代码/权重仓库、官方文档和研究论文。本文件提供代表节点，不声称穷尽全部版本，也不把厂商自行报告的 benchmark 排名变成跨厂商结论。2024/2025 基线用于理解演进；2026 节点用于补齐当前知识。模型版本号、论文公开日期、权重公开日期和产品发布日期分别记录。

## 页面数据的记录规则

- 每个节点保留 date、datePrecision、kind、model、access、license、sources、zh、en、checkedAt。
- datePrecision 为 day 或 month。缺少可靠日级证据时保留月份，禁止自动补为当月 1 日。
- kind 区分模型发布、预览、权重公开、论文、产品/基础设施；preview 和受限访问直接出现在标签中。
- access 区分托管服务、开放权重、两者都有。开放代码或技术报告不自动代表开放模型权重。
- license 绑定具体 checkpoint。MIT、Modified MIT、自定义社区协议、托管服务条款分别展示；不能沿用同一厂商前代许可证。
- 权重已经可以下载但首日开放日期尚未核实时，写“截至核对日可下载”，不把服务发布日当成权重开放日。
- 下面的中文/英文解释是学习页面短文，可直接用于卡片；技术细节与许可链接放在展开区域。

## Z.ai / GLM

| 日期 | 节点 | 访问及许可边界 | 官方证据 |
| --- | --- | --- | --- |
| 2024-06-05 | GLM-4-9B 系列开放 | 开放权重；原始模型协议与代码 Apache-2.0 分开 | [官方仓库更新记录](https://github.com/zai-org/GLM-4) |
| 2025-07-28 | GLM-4.5 / GLM-4.5-Air | API 与开放权重；MIT | [发布](https://z.ai/blog/glm-4.5)、[官方模型卡及许可](https://huggingface.co/zai-org/GLM-4.5) |
| 2026-02-12 | GLM-5 | API 与开放权重；MIT | [发布及技术](https://z.ai/blog/glm-5)、[官方模型卡](https://huggingface.co/zai-org/GLM-5) |
| 2026-06-16 | GLM-5.2 | API 与开放权重；MIT | [发布](https://z.ai/blog/glm-5.2)、[模型卡](https://huggingface.co/zai-org/GLM-5.2) |
| 2026-08-14 | GLM-5.3 服务发布 | 截至核对日已有权重；使用 GLM-5.3 License，不能写为 MIT | [发布](https://z.ai/blog/glm-5.3)、[实际权重文件](https://huggingface.co/zai-org/GLM-5.3/tree/main)、[当前许可](https://huggingface.co/zai-org/GLM-5.3/blob/main/LICENSE) |

**中文短文：** GLM 从 hybrid thinking 和 MoE，推进到稀疏 Attention 与长任务 RL。GLM-5.2 的 IndexShare 在多层之间复用稀疏 Attention 的索引计算，减少长上下文开销；GLM-5.3 沿用这一架构基础，重点扩展训练任务、环境与 post-training。一次升级可以来自训练方法，也可以来自架构和推理工程。[5.2 模型卡](https://huggingface.co/zai-org/GLM-5.2)、[5.3 发布](https://z.ai/blog/glm-5.3)

**English:** GLM progressed from hybrid thinking and MoE to sparse attention and reinforcement learning for long tasks. IndexShare in GLM-5.2 reuses attention-index calculations across layers; GLM-5.3 builds on that architecture with broader tasks, environments and post-training. A release can improve through training as well as architecture and inference engineering. [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2), [GLM-5.3](https://z.ai/blog/glm-5.3)

**需保留的边界：** 5.3 发布文章说权重将在两周后开放，这句话是当时的计划。当前实际文件证明截至核对日已经开放；本次没有逐条恢复首次上传日。5.3 协议对超大规模 Model-as-a-Service 商业运营者另设条件。

## Moonshot AI / Kimi

| 日期 | 节点 | 访问及许可边界 | 官方证据 |
| --- | --- | --- | --- |
| 2024-06-26 | Mooncake 论文/基础设施节点 | KVCache 相关 serving 研究；不是新模型发布，也不代表模型权重开放 | [官方研究目录](https://www.kimi.com/en/blog/) |
| 2025-01-20 | Kimi k1.5 技术报告 | 可核实 RL 研究；报告仓库不是权重仓库 | [研究目录](https://www.kimi.com/en/blog/)、[技术报告仓库](https://github.com/MoonshotAI/Kimi-k1.5) |
| 2025-07-11 | Kimi K2 | API 与开放权重；Modified MIT | [发布目录日期](https://www.kimi.com/en/blog/)、[官方仓库](https://github.com/MoonshotAI/Kimi-K2)、[许可](https://github.com/MoonshotAI/Kimi-K2/blob/main/LICENSE) |
| 2026-01-27 | Kimi K2.5 | API、产品与开放权重；Modified MIT；Agent Swarm 初始为 beta | [发布](https://www.kimi.com/en/blog/kimi-k2-5)、[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.5) |
| 2026-04-20 | Kimi K2.6 | 产品/API 与开放权重；本次未逐字复核该版本许可，不能自动继承 K2.5 | [研究目录](https://www.kimi.com/en/blog/)、[官方 Agent Swarm 帮助页](https://www.kimi.com/en/help/agent/agent-swarm) |
| 2026-07-27 | Kimi K3 权重和技术报告公开 | 截至核对日有实际权重；Kimi K3 License | [权重公开公告](https://www.kimi.com/news/kimi-k3-open-source)、[模型卡](https://huggingface.co/moonshotai/Kimi-K3)、[许可](https://huggingface.co/moonshotai/Kimi-K3/blob/main/LICENSE) |

**中文短文：** K2.5 把视觉与文本联合训练，并让 Agent Swarm 按任务拆出并行工作。K3 使用 Kimi Delta Attention、Attention Residuals 和 MoE，分别处理长序列效率、跨层信息传递和按需计算。可以把 swarm 类比为临时组建的项目团队；分工、协调与检查仍会产生额外成本。[K2.5](https://www.kimi.com/en/blog/kimi-k2-5)、[K3 技术与开放说明](https://www.kimi.com/news/kimi-k3-open-source)

**English:** K2.5 jointly trains vision and language and lets Agent Swarm organize parallel work. K3 combines Kimi Delta Attention, Attention Residuals and MoE to address sequence efficiency, information flow across depth and selective computation. A swarm is like a temporary project team: coordination and checking still have costs. [K2.5](https://www.kimi.com/en/blog/kimi-k2-5), [K3](https://www.kimi.com/news/kimi-k3-open-source)

**日期分歧：** 官方英文研究目录把 K3 服务文章标为 2026-07-16，中文 [服务公告](https://www.kimi.com/news/kimi-k3) 标为 2026-07-17。未核实为何相差一天；页面主节点采用明确的 07-27 权重公开日，服务首发可写 2026-07、day 未核实。2024 本次核实了 Mooncake 技术节点，没有把它伪装成 Kimi 模型版本。

## MiniMax

| 日期 | 节点 | 访问及许可边界 | 官方证据 |
| --- | --- | --- | --- |
| 2024 | 本次未核实日级模型基线 | 不填虚构的模型或发布日期；不意味着该年没有产品 | — |
| 2025-01-15 | MiniMax-Text-01 / VL-01 | API 与完整开放权重；权重许可需查看该历史版本协议 | [官方发布](https://www.minimax.io/news/minimax-01-series-2)、[Text-01 模型卡](https://huggingface.co/MiniMaxAI/MiniMax-Text-01) |
| 2026-02-12 | MiniMax M2.5 | API 与开放权重；当前官方模型卡明确为 Modified-MIT | [发布](https://www.minimax.io/news/minimax-m25)、[模型卡及许可标签](https://huggingface.co/MiniMaxAI/MiniMax-M2.5) |
| 2026-03-18 | MiniMax M2.7 | API 与可下载权重；当前协议为 Non-commercial License，商业使用需另行书面授权 | [发布](https://www.minimax.io/blog/minimax-m27)、[权重](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)、[许可正文](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/main/LICENSE) |
| 2026-06-01 | MiniMax M3 | 服务发布；截至核对日有权重，minimax-community 自定义许可 | [发布](https://www.minimax.io/blog/minimax-m3)、[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3)、[许可](https://huggingface.co/MiniMaxAI/MiniMax-M3/blob/main/LICENSE) |

**中文短文：** MiniMax-01 混用 Lightning Attention 与 full Attention；M3 用 MiniMax Sparse Attention 承载长上下文和多模态任务。M2.5 的 Forge 把 Agent 环境与训练/推理设施拆开，让真实多步骤任务可用于 RL。M2.7 所称的 self-evolution 包括分析失败轨迹、修改 harness、评估并保留或回滚；这属于可验证的研发循环，不能据此断言无限自我提升。[01](https://www.minimax.io/news/minimax-01-series-2)、[M2.5](https://www.minimax.io/news/minimax-m25)、[M2.7](https://www.minimax.io/blog/minimax-m27)、[M3](https://www.minimax.io/blog/minimax-m3)

**English:** MiniMax-01 mixes Lightning Attention with full attention, while M3 uses MiniMax Sparse Attention for long contexts and multimodal work. Forge in M2.5 separates agent environments from training and inference infrastructure for multi-step RL. M2.7's self-evolution examples include analyzing failures, editing a harness, evaluating it and keeping or reverting changes; they do not establish unlimited self-improvement. [01](https://www.minimax.io/news/minimax-01-series-2), [M2.5](https://www.minimax.io/news/minimax-m25), [M2.7](https://www.minimax.io/blog/minimax-m27), [M3](https://www.minimax.io/blog/minimax-m3)

**需修正的旧印象：** M2.5 当前不是纯 MIT；M2.7 更不能标为“无限制商用开源”。M3 协议也独立于 M2 系列。模型可下载与商业使用无条件开放是不同问题。

## Xiaomi / MiMo

| 日期 | 节点 | 访问及许可边界 | 官方证据 |
| --- | --- | --- | --- |
| 2024 | 本次未核实 MiMo 日级模型节点 | 保持空缺，不倒推发布 | — |
| 2025-05-30 | MiMo-7B-RL-0530 更新 | 可下载权重；MIT | [官方仓库更新](https://github.com/XiaomiMiMo/MiMo/blob/main/README.md)、[权重及许可](https://huggingface.co/XiaomiMiMo/MiMo-7B-RL-0530) |
| 2026-03-18 | MiMo-V2-Pro | 官方 hosted API 发布；该节点未核实权重开放 | [官方发布](https://mimo.xiaomi.com/mimo-v2-pro) |
| 2026-09-22 | MiMo-V2.6 Pro / Flash | API；截至核对日 Pro-MOPD 有官方权重，MIT，不能把后续 checkpoint 时间当成首日开放时间 | [技术文章](https://mimo.xiaomi.com/mimo-v2-6/article)、[官方权重集合](https://huggingface.co/collections/XiaomiMiMo/mimo-v26)、[Pro-MOPD](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD) |
| 2026-09-25 | V2.6 MOPD checkpoint API 更新 | 针对工具调用重复的训练修正；解释文章发布于 09-27 | [官方分析与更新日](https://mimo.xiaomi.com/blog/mimo-v2-6-tool-call-repetition) |

**中文短文：** MiMo 把可验证任务用于 RL，并在 V2.6 中扩展复杂任务和多模态能力。团队发现，只奖励“最后答对”可能遗漏重复工具调用的成本，因此通过 multi-teacher on-policy distillation 修正轨迹行为。这个案例说明，Agent 质量还包括过程是否高效，而不仅是最后一句答案。[V2.6](https://mimo.xiaomi.com/mimo-v2-6/article)、[重复工具调用分析](https://mimo.xiaomi.com/blog/mimo-v2-6-tool-call-repetition)

**English:** MiMo uses verifiable tasks for RL and expands complex, multimodal work in V2.6. Its team found that rewarding final correctness could overlook repetitive tool calls, then used multi-teacher on-policy distillation to improve trajectories. Agent quality includes efficient execution, not just a correct final answer. [V2.6](https://mimo.xiaomi.com/mimo-v2-6/article), [Tool-call analysis](https://mimo.xiaomi.com/blog/mimo-v2-6-tool-call-repetition)

**日期边界：** 本次没有从官方首发公告核实广泛流传的 MiMo-7B 2025-04-30 首发日，采用仓库明确记录的 05-30 更新。V2-Flash 的技术论文在 2026-01 公开，不能把论文年简单当作模型首发年。

## xAI / Grok

| 日期 | 节点 | 访问及许可边界 | 官方证据 |
| --- | --- | --- | --- |
| 2024-08-13 | Grok-2 / Grok-2 mini beta | X 内托管 beta；该公告中的企业 API 是后续计划 | [官方发布](https://x.ai/news/grok-2) |
| 2025-02-19 | Grok 3 beta | 托管服务；RL reasoning 与 DeepSearch | [官方发布](https://x.ai/news/grok-3) |
| 2026-07-16 | Grok 4.5 | Grok 产品/API；未核实该版本开放权重 | [官方发布](https://x.ai/news/grok-4-5) |

**中文短文：** Grok 3 用大规模 RL 强化 reasoning，并把联网搜索、代码执行接入回答过程。Grok 4.5 进一步面向真实软件工程与 Agent 工作。搜索和工具能提供反馈，但产品接入工具不等于公开了模型内部架构。[Grok 3](https://x.ai/news/grok-3)、[Grok 4.5](https://x.ai/news/grok-4-5)

**English:** Grok 3 strengthened reasoning through large-scale RL and combined it with search and code execution. Grok 4.5 extends the focus to real software engineering and agent work. Tool access supplies feedback, but it does not disclose a model's internal architecture. [Grok 3](https://x.ai/news/grok-3), [Grok 4.5](https://x.ai/news/grok-4-5)

**边界：** 2026-04-07 是 Grok 4.20 system card 文件日期；本次没有将其当成模型首发日。Grok 的早期开放权重记录不能推出 4.5 开放。

## Meta / Llama 与 Muse Spark

| 日期 | 节点 | 访问及许可边界 | 官方证据 |
| --- | --- | --- | --- |
| 2024-07-23 | Llama 3.1 | 开放权重；Llama Community License，不能改写为 Apache/MIT | [官方发布](https://ai.meta.com/blog/meta-llama-3-1/) |
| 2025-04-05 | Llama 4 Scout / Maverick | 开放权重；Llama 4 Community License；Behemoth 当时为预览 | [官方发布](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) |
| 2026-04-08 | Muse Spark | Meta AI 托管产品；API 当时仅部分伙伴 private preview | [官方发布](https://ai.meta.com/blog/introducing-muse-spark-msl/) |
| 2026-07-09 | Muse Spark 1.1 / Meta Model API | 托管 API public preview；未核实 Spark 权重公开 | [官方发布](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/) |
| 2026-09-02 | Muse Spark 1.3 | Meta Model API / Muse Code 托管；开放权重仍属未来计划 | [官方研究发布](https://research.meta.ai/blog/introducing-muse-spark-1-3) |

**中文短文：** Llama 4 使用原生多模态 MoE；Muse Spark 的公开材料强调 multimodal reasoning、工具与多 Agent 协调。Spark 1.3 在多种 harness 上训练，以改善长任务中的规划、反馈处理和复杂指令遵循。Muse Spark 的架构细节未完整披露，不能套用 Llama 的内部结构或开放状态。[Llama 4](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)、[Spark](https://ai.meta.com/blog/introducing-muse-spark-msl/)、[Spark 1.3](https://research.meta.ai/blog/introducing-muse-spark-1-3)

**English:** Llama 4 uses native multimodal MoE; Muse Spark's public material emphasizes multimodal reasoning, tools and multi-agent orchestration. Spark 1.3 trains across varied harnesses to improve long-task planning, feedback handling and complex instruction following. Its undisclosed internals and hosted access should not be inferred from Llama. [Llama 4](https://ai.meta.com/blog/llama-4-multimodal-intelligence/), [Spark](https://ai.meta.com/blog/introducing-muse-spark-msl/), [Spark 1.3](https://research.meta.ai/blog/introducing-muse-spark-1-3)

**系列边界：** 2024/2025 是 Meta 的 Llama 基线，不是尚未发布的 Muse Spark 版本。不能给 Muse Spark 卡片挂“Llama 开源”标签。

## OpenAI / GPT 与 gpt-oss

| 日期 | 节点 | 访问及许可边界 | 官方证据 |
| --- | --- | --- | --- |
| 2024-05-13 | GPT-4o | 托管多模态模型；未公开模型权重 | [官方发布](https://openai.com/index/hello-gpt-4o/) |
| 2025-08-05 | gpt-oss-120b / 20b | 开放权重；Apache-2.0；文本模型，原生 MXFP4 | [官方发布与许可说明](https://openai.com/index/introducing-gpt-oss/) |
| 2025-08-07 | GPT-5 | 托管产品/API；产品的模型路由体系与单个 API 模型需区分 | [官方发布](https://openai.com/index/introducing-gpt-5/) |
| 2026-07-09 | GPT-5.6 Sol / Terra / Luna GA | 托管；06-26 limited preview 与 07-09 GA 分开 | [官方发布](https://openai.com/index/gpt-5-6/) |
| 2026-09-03 | GPT-6 Astra | 托管产品/API；分阶段上线，不推断开放权重或内部架构 | [官方发布](https://openai.com/index/gpt-6-astra/)、[API 发布记录](https://developers.openai.com/api/docs/changelog) |
| 2026-09-29 | GPT-6.1 Sol | OpenAI API、Codex、ChatGPT Work；发布时未在 Chat 提供。工具调用使用 Responses API | [发布记录](https://developers.openai.com/api/docs/changelog)、[官方发布](https://openai.com/index/introducing-gpt-6-1-sol/)、[模型文档](https://developers.openai.com/api/docs/models/gpt-6.1-sol) |

**中文短文：** GPT 系列的近期进步涉及 reasoning、工具使用、长任务执行和推理效率。可调 reasoning effort 给任务分配不同计算预算；缓存可复用已经处理的上下文，Agent 的多步工具交互则由模型和 harness 共同完成。gpt-oss 有公开架构与权重，不能把这些细节推测为 GPT-6 的内部设计。[gpt-oss](https://openai.com/index/introducing-gpt-oss/)、[API 模型与发布记录](https://developers.openai.com/api/docs/changelog)、[GPT-6.1 Sol](https://developers.openai.com/api/docs/models/gpt-6.1-sol)

**English:** Recent GPT progress spans reasoning, tool use, long tasks and inference efficiency. Reasoning effort allocates compute, caching reuses processed context, and multi-step tool interactions depend on both a model and its harness. The published gpt-oss architecture should not be treated as evidence about GPT-6's internals. [gpt-oss](https://openai.com/index/introducing-gpt-oss/), [API changelog](https://developers.openai.com/api/docs/changelog), [GPT-6.1 Sol](https://developers.openai.com/api/docs/models/gpt-6.1-sol)

## Anthropic / Claude

| 日期 | 节点 | 访问及许可边界 | 官方证据 |
| --- | --- | --- | --- |
| 2024-03-04 | Claude 3 Opus / Sonnet | 托管模型；公告中的 Haiku 尚未上线 | [官方发布](https://www.anthropic.com/news/claude-3-family) |
| 2025-05-22 | Claude Opus 4 / Sonnet 4 | 托管产品/API；extended thinking 与工具交互 | [官方发布](https://www.anthropic.com/news/claude-4) |
| 2026-09-01 | Claude Fable 5.1 / Mythos 5.1 | 同一基础模型、不同 safeguards；Fable 普遍提供，Mythos 仅 trusted access | [官方发布](https://www.anthropic.com/claude-fable-and-mythos-5-1) |
| 2026-09-22 | Claude Opus 5.5 | 托管服务/API；没有开放权重 | [官方发布](https://www.anthropic.com/claude-opus-5-5) |
| 2026-09-28 | Claude Sonnet 5.5 | 托管服务/API；Haiku 5.5 仍是未来计划 | [官方发布](https://www.anthropic.com/claude-sonnet-5-5) |

**中文短文：** Claude 从 extended thinking 与工具交互，推进到更长的软件工程、研究和专业任务。Fable 与 Mythos 5.1 的差别是访问条件和 safeguards，不能把它们解释成已经公开证实的两套不同架构。Opus/Sonnet 5.5 强调任务完成与计算效率；实际工作仍需用自己的样本检查质量、速度和成本。[Claude 4](https://www.anthropic.com/news/claude-4)、[Fable / Mythos](https://www.anthropic.com/claude-fable-and-mythos-5-1)、[Opus 5.5](https://www.anthropic.com/claude-opus-5-5)、[Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)

**English:** Claude progressed from extended thinking and tool interaction to longer engineering, research and professional tasks. Fable and Mythos 5.1 share a model but differ in access and safeguards; they should not be described as two disclosed architectures. Opus/Sonnet 5.5 focus on task completion and efficiency, which users should evaluate on their own work. [Claude 4](https://www.anthropic.com/news/claude-4), [Fable / Mythos](https://www.anthropic.com/claude-fable-and-mythos-5-1), [Opus 5.5](https://www.anthropic.com/claude-opus-5-5), [Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)

**历史解释：** 2026-06-09 Fable/Mythos 5 首发、06-12 Fable 暂停及 07-01 恢复属于同一发布史，不能省略暂停后写“一直可用”。本页优先用已核实的 09 月 5.1/5.5 节点，避免主卡片过长。[恢复公告](https://www.anthropic.com/news/redeploying-fable-5)

## Google / Gemini 与 Gemma

| 日期 | 节点 | 访问及许可边界 | 官方证据 |
| --- | --- | --- | --- |
| 2024-02-15 | Gemini 1.5 Pro 早期测试 | 托管 preview；公开说明 MoE 与长上下文 | [官方发布](https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/) |
| 2025-06-17 | Gemini 2.5 Pro / Flash GA | 托管；03-25 Pro 是 experimental，不能与 GA 混为一日 | [GA 公告](https://blog.google/products-and-platforms/products/gemini/gemini-2-5-model-family-expands/)、[实验版本](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/) |
| 2026-04-02 | Gemma 4 | 开放权重；Apache-2.0，不能沿用 Gemma 3 旧协议 | [官方发布及许可](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) |
| 2026-05-19 | Gemini 3.5 Flash | 托管服务/API | [官方发布](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/) |
| 2026-09-02 | Gemini 3.8 Flash / Flash Cyber | Flash 普遍提供；Cyber 仅 Fairwind Program 中的受信任防守方 | [官方发布](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) |

**中文短文：** Gemini 把多模态、长上下文与 thinking 扩展到需要多轮工具反馈的工作。3.8 Flash 会在复杂任务中投入更多 reasoning 与迭代调用，可用 effort 控制开销。Gemma 4 提供可自行部署的权重；Gemini API 的访问方式和内部架构公开程度与 Gemma 分开记录。[3.8 发布](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)、[Gemma 4](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)

**English:** Gemini combines multimodality, long contexts and thinking with repeated tool feedback. On complex tasks, 3.8 Flash spends more reasoning and tool steps, with effort settings controlling the overhead. Gemma 4 provides deployable weights; its access and disclosed architecture are separate from Gemini's hosted service. [Gemini 3.8](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/), [Gemma 4](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)

## DeepSeek

| 日期 | 节点 | 访问及许可边界 | 官方证据 |
| --- | --- | --- | --- |
| 2024-12-26 | DeepSeek V3 | API 与开放权重；原 V3 的模型许可和代码 MIT 分开 | [发布日志](https://api-docs.deepseek.com/updates/)、[仓库许可说明](https://github.com/deepseek-ai/DeepSeek-V3) |
| 2025-01-20 | DeepSeek R1 | API 与开放权重；主模型 MIT；蒸馏到 Llama 的版本还需检查原始 Llama 协议 | [发布日志](https://api-docs.deepseek.com/updates/)、[官方模型卡及许可](https://huggingface.co/deepseek-ai/DeepSeek-R1) |
| 2026-04-24 | DeepSeek V4 Pro / Flash Preview | 官方 API/产品预览及开放权重；明确保留 Preview | [公告](https://deepseek.com/en/news/v4-preview/)、[发布日志](https://api-docs.deepseek.com/updates/) |
| 2026-08-13 | DeepSeek V4 Pro 正式版 | app、web、API；权重许可按对应仓库核对，本次不以 Flash 许可推断 Pro | [官方日志](https://api-docs.deepseek.com/updates/) |
| 2026-09-10 | DeepSeek V4.1 Flash | API 与开放权重；MIT；文本与图像输入 | [官方日志](https://api-docs.deepseek.com/updates/)、[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) |

**中文短文：** V3 的 MLA、MoE 与 FP8 训练强调计算和显存效率，R1 展示 RL 对 reasoning 的作用。V4.1 Flash 的 Causal Encoder-Decoder 与 CSA2 通过跨层 KV/索引复用、压缩和缓存管理减轻长上下文负担。可以类比程序里的缓存与复用，但大 context window 不保证每条信息都被准确利用。[V3](https://github.com/deepseek-ai/DeepSeek-V3)、[R1](https://huggingface.co/deepseek-ai/DeepSeek-R1)、[V4.1 论文](https://arxiv.org/abs/2609.19969)

**English:** V3's MLA, MoE and FP8 training target compute and memory efficiency, while R1 demonstrates RL for reasoning. V4.1 Flash uses a Causal Encoder-Decoder and CSA2 with cross-layer KV/index reuse, compression and cache management for long contexts. The analogy is caching in software; a large context window does not guarantee perfect use of every detail. [V3](https://github.com/deepseek-ai/DeepSeek-V3), [R1](https://huggingface.co/deepseek-ai/DeepSeek-R1), [V4.1 paper](https://arxiv.org/abs/2609.19969)

**日期边界：** V4.1 Flash 论文首版是 2026-09-17，模型发布是 09-10。API 旧别名自动路由到新版本不表示旧版本权重也被重新命名。

## Alibaba / Qwen

| 日期 | 节点 | 访问及许可边界 | 官方证据 |
| --- | --- | --- | --- |
| 2024-09-19 | Qwen2.5 | 开放权重；大多数 Apache-2.0，但 3B/72B 的许可例外需保留 | [官方发布及许可例外](https://qwenlm.github.io/blog/qwen2.5/) |
| 2025-04-29 | Qwen3 | 开放权重；发布的 dense/MoE 模型 Apache-2.0；hybrid thinking | [官方发布](https://qwenlm.github.io/blog/qwen3/) |
| 2026-01-25 | Qwen3-Max-Thinking | 托管模型；RL、adaptive tool use 和 test-time scaling | [官方发布](https://qwen.ai/blog?id=qwen3-max-thinking) |
| 2026-08，日级未核实 | Qwen3.8-Max / Qwen3.8-2.4T-A95B | Max 为托管服务；2.4T-A95B 为已开放权重，自定义 qwen3.8-max 协议 | [官方模型卡与 2026-08 引用记录](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)、[发布链接](https://qwen.ai/blog?id=qwen3.8)、[当前许可](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B/blob/main/LICENSE) |
| 2026-09-18 | Qwen3.8-Omni-Flash / Realtime | 官方 API 发布；开放 Qwen-MM-Plugins 和 LiveHarness 不代表开放 Omni 模型权重 | [官方公告](https://qwen.ai/blog?id=qwen3.8-omni-flash) |

**中文短文：** Qwen3.8 的开放文本 checkpoint 混合 Gated DeltaNet、Gated Attention 和 MoE，分别处理序列状态、重点信息与按需计算。托管 Qwen3.8-Max 额外提供视觉输入等功能，不能把这些功能直接写进本地文本 checkpoint。Omni 的多模态工具可以按需要搜集图像、视频或音频证据，让“看清楚再回答”成为多步骤过程。[3.8 模型卡](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)、[Omni 发布](https://qwen.ai/blog?id=qwen3.8-omni-flash)

**English:** Qwen3.8's open text checkpoint combines Gated DeltaNet, Gated Attention and MoE for sequence state, selective attention and conditional computation. Hosted Qwen3.8-Max adds features such as vision, which should not be attributed to the local text checkpoint. Omni can gather multimodal evidence on demand before answering. [Qwen3.8 model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B), [Omni](https://qwen.ai/blog?id=qwen3.8-omni-flash)

**证据状态：** 官方模型卡确认 2026-08，但发布页当前的网页提取为空。搜索曾显示 08-02，未取得稳定正文来消除歧义，因此 UI 用月份。Omni 官方文章页面标题含 draft，但正文明确宣布 API 可用；只标 API，不增加“已开放权重”结论。

## Mistral AI

| 日期 | 节点 | 访问及许可边界 | 官方证据 |
| --- | --- | --- | --- |
| 2024-07-18 | Mistral NeMo | 开放权重；Apache-2.0；FP8 quantization-aware training | [官方发布](https://mistral.ai/news/mistral-nemo/) |
| 2025-03-17 | Mistral Small 3.1 | 多模态开放权重；Apache-2.0 | [官方发布](https://mistral.ai/news/mistral-small-3-1/) |
| 2026-03-16 | Mistral Small 4 | MoE、reasoning、coding 与图像输入；开放权重，Apache-2.0 | [官方发布](https://mistral.ai/news/mistral-small-4/) |
| 2026-04-28 | Mistral Medium 3.5 文档中的 GA 日期 | 官方模型文档标注该日；开放权重 Modified MIT。05-22 是 Vibe remote agents 文章/产品节点，不能混成同一天 | [模型文档](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)、[05-22 产品文章](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/) |
| 2026-08-20 | Agentic Search 产品/技术节点 | 迭代式搜集、阅读与导航的托管能力；不是一个新基础模型名称 | [官方文章](https://mistral.ai/news/agentic-search/) |

**中文短文：** Small 4 把 reasoning、coding 和图像理解放入同一个 MoE 模型，Medium 3.5 则是公开的 dense 模型路线。Agentic Search 会按任务多轮寻找和核查材料，因此要同时看引用是否支持结论、检索过程与使用成本。模型架构、Agent 工作流程和产品功能分别展示，能避免把所有进步都归因于“参数更大”。[Small 4](https://mistral.ai/news/mistral-small-4/)、[Medium 3.5](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/)、[Agentic Search](https://mistral.ai/news/agentic-search/)

**English:** Small 4 combines reasoning, coding and image understanding in one MoE model, while Medium 3.5 follows a disclosed dense-model design. Agentic Search iteratively gathers and checks material, so assess source support, the retrieval process and cost together. Separating model architecture, agent workflow and product features makes progress easier to understand. [Small 4](https://mistral.ai/news/mistral-small-4/), [Medium 3.5](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/), [Agentic Search](https://mistral.ai/news/agentic-search/)

## 给学习页面的共同解释

这些是对上述公开案例的教学归纳，不是对闭源内部实现的额外断言。

| 页面概念 | 简短中文 | Short English | 对应实例 |
| --- | --- | --- | --- |
| Pre-training / post-training | 前者学习统计规律与表示，后者把能力训练成更合适的行为；一次升级可能主要改后者 | Pre-training learns representations; post-training shapes useful behavior. A release can mainly improve the latter. | GLM-5.3、MiMo、MiniMax |
| MoE | 每个 token 只调用部分专家；总参数大不代表每次全算，也不等于显存只按 active 参数占用 | Each token uses selected experts. Active compute and total weight memory are different quantities. | GLM、Qwen、Llama 4、Mistral Small 4 |
| Long context / KV cache | 长任务既要装下信息，也要付出缓存、读取和计算成本；窗口大小与准确利用能力分开看 | Long tasks cost memory, reads and compute. Window size and reliable use of context are separate. | Mooncake、GLM IndexShare、DeepSeek CSA2 |
| RL / verifiable rewards | 奖励能校验的结果，也要注意过程成本与 reward hacking | Reward verifiable results while checking trajectory costs and reward hacking. | R1、MiMo 重复工具调用、Forge |
| Agent / harness | 模型提出下一步，工具执行，环境返回反馈；harness 管会话、上下文、权限和恢复 | A model proposes actions, tools execute them and the environment returns feedback; a harness manages the surrounding workflow. | Kimi Swarm、MiniMax、GPT、Muse Spark |
| Test-time compute | 对难题分配更多推理、搜索、验证；通常增加延迟和调用成本 | Allocate more reasoning, search or verification to hard tasks, usually at added latency and cost. | GPT effort、Gemini effort、Grok、Qwen |
| Open weights / open source | 可以下载参数，不等于训练数据、训练流程和商用条件全部开放 | Downloadable parameters do not imply open training data, training code or unrestricted commercial use. | Kimi、GLM-5.3、MiniMax、Llama、Qwen |
| Self-evolution / RSI | 公开案例可以是模型帮忙改代码、做实验和评估；没有证据就不推断无上限自我提升 | Public examples may involve model-assisted coding, experiments and evaluations; do not infer unbounded improvement without evidence. | MiniMax M2.7、MiMo V2.6 |

## 尚未核实或应避免的展示

- MiniMax、MiMo 的 2024 日级模型发布日期：本次没有可靠首发证据，不填猜测。
- Kimi K3 服务首发日：官方中英文页相差一天，采用 07-27 权重开放节点或 2026-07 月精度。
- Qwen3.8 日级首发：月份已核实，日级未消除歧义；不能把 2026-08 自动显示为 08-01。
- Mistral Medium 3.5：04-28 文档 GA 与 05-22 Vibe 产品公告并存，标签说明事件种类。
- GLM-5.3、MiniMax M3 和 MiMo-V2.6 Pro-MOPD：已验证当前实际权重，但未在本次研究复原全部首次权重上传日。
- Kimi K2.6、MiniMax-01、DeepSeek V4 Pro：访问方式已有官方证据，未逐条核对具体权重许可正文，页面必须标“查看版本许可”，不能用其他 checkpoint 的许可替代。
- Muse Spark 权重开放、Claude Haiku 5.5：当时官方表述为计划，不写成已发布。
- 不推断 GPT-6、Claude、Gemini 3.8 或 Grok 4.5 未披露的层数、专家数、参数规模和完整训练配方。
- 不展示未经复现的“第一/最强”排行；若以后加 benchmark，需要连同数据集版本、harness、effort、工具、成本与误差一起记录。

本资料用于 Try 的学习与个人开发页面。发布时保留官方来源链接、核对日期和各版本许可入口；厂商、模型及技术名称归其相应权利人。
