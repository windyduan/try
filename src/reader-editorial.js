const p=(zh,en)=>({zh,en});
export const shortNames={
 embeddings:p('Embedding 与相似度','Embeddings & similarity'),
 context:p('Context 与记忆','Context & memory'),
 cot:p('CoT 与推理步骤','CoT & reasoning steps'),
 alignment:p('Post-training 与 RL','Post-training & RL'),
 diffusion:p('Diffusion 模型','Diffusion models'),
 multimodal:p('Multimodal 模型','Multimodal models'),
 'new-architectures':p('新架构与混合结构','New & hybrid architectures'),
 infra:p('AI Infra','AI infrastructure'),
 distributed:p('分布式训练','Distributed training'),
 gpu:p('显卡与软件生态','GPU & software ecosystems'),
 quantization:p('模型量化','Model quantization'),
 ai4s:p('AI4S：模型与科学验证','AI4S & scientific validation'),
 'data-pipeline':p('数据构建','Building datasets'),
 results:p('结果分析','Analyzing results'),
 prompting:p('提示词工程','Prompt engineering'),
 skills:p('Skills','Skills'),
 harness:p('Harness 工程','Harness engineering'),
 rsi:p('RSI 与迭代评估','RSI & iterative evaluation'),
 tuning:p('调参与训练诊断','Tuning & training diagnosis'),
 industry:p('AI 技术分层','Layers of AI technology')
};
const boundaries={
 intro:p('旧账单只是训练样本。要知道规则是否可靠，还要用未参与训练的数据检查预测误差。','Past bills are training examples. Check prediction errors on data that did not take part in training.'),
 vectors:p('这个例子描述线性变换：变换后的基向量决定所有输入的变化。非线性变换还需要其他规则。','Here the transform is linear: transformed basis vectors determine every input. Nonlinear maps require other rules.'),
 calculus:p('速度表对应某一时刻的变化率；一段路程的平均速度和瞬时速度可能不同。','A speedometer describes instantaneous change. Average speed over a journey can differ.'),
 probability:p('真实测量未必服从正态分布。这里先用它区分中心、宽度与区间概率。','Real measurements need not be normally distributed. This example separates center, spread and interval probability.'),
 regression:p('拟合能描述样本中的关联。它是否能用于新路线，以及关联是否有因果意义，需要额外证据。','A fit describes association in the samples. New routes and causal interpretation require further evidence.'),
 pytorch:p('自动求导沿可微运算传播梯度。张量形状、计算图是否被截断，以及参数更新仍由程序决定。','Autodiff propagates gradients through differentiable operations. The program still controls tensor shapes, graph breaks and updates.'),
 classification:p('灵敏度的类比对应阈值选择。分数的概率校准、误报代价和实际使用条件要分别检查。','The alarm analogy concerns thresholds. Calibration, false-alarm cost and deployment conditions need separate checks.'),
 neural:p('调音台帮助理解分层处理。网络中的权重与激活是数值运算，通常由训练优化。','A mixing desk illustrates stages. Weights and activations are numerical operations, usually optimized through training.'),
 optimization:p('实验是一维损失曲线。真实模型有很多参数，局部下降方向和最终泛化效果需要分别观察。','The experiment has one parameter dimension. Real models have many; inspect local descent and generalization separately.'),
 convolution:p('模板在每个位置共享。图像模型一般会学习卷积核，实验里的核由你设置。','The template is shared across positions. Image models usually learn kernels; you set the kernels in this example.'),
 architectures:p('“保留原稿”对应加法路径 x + F(x)。两条路径相加前，张量形状必须兼容。','Keeping the original corresponds to x + F(x). Tensor shapes must be compatible before addition.'),
 nlp:p('菜单中的分数是人工设置的。Temperature 与 Top-p 改变抽样方式；事实质量还要用任务数据评估。','The menu uses artificial scores. Temperature and top-p change sampling; assess factual quality on task data.'),
 rnn:p('便签对应数值状态，内容会随每一步更新。它能保留多少信息取决于结构与训练。','The note represents a numeric state updated each step. Structure and training determine how much information survives.'),
 translation:p('这里的对齐权重是教学例子。真实翻译质量要结合译文、参考答案与语义判断。','The alignment weights are a teaching example. Assess real translation using outputs, references and meaning.'),
 transformer:p('相关分数由 Q/K 的投影与点积计算。读取权重帮助理解计算路径，不能单独解释整个模型决策。','Q/K projections and dot products compute scores. Read weights explain this operation, not the model’s entire decision.'),
 pretraining:p('补空与续写对应不同训练目标和 mask；实际预训练还取决于数据与完整训练配方。','Gap filling and continuation have different objectives and masks. Real pretraining also depends on data and the training recipe.'),
 llama:p('旋转说明位置如何影响点积。更长的上下文效果还取决于训练和 RoPE 的具体设置。','Rotation shows how position affects dot products. Long-context quality also depends on training and the RoPE configuration.'),
 deepseek:p('只激活部分专家能减少计算。没有被这次 token 调用的权重，仍需要存储或调入。','Selected experts reduce compute. Weights unused by this token still need storage or loading.'),
 rag:p('资料架可能缺页或过时。检索结果的相关性、完整性和引用是否支持回答都要检查。','The shelf may be incomplete or outdated. Check relevance, completeness and whether citations support the answer.'),
 agents:p('工具执行会改变环境。每一步都要核对返回结果和最终状态；这里的流程是浏览器内的教学示例。','Tools can change an environment. Check their results and final state; this workflow is a browser-based teaching example.'),
 inference:p('缓存依赖模型和上下文。复用历史 K/V 可以省计算，同时消耗显存；修改历史输入时也要处理失效。','The cache depends on model and context. K/V reuse saves compute but uses memory; changed history requires invalidation.'),
 lora:p('补丁对应低秩更新 BA。Rank 和目标层限制更新形式，效果仍要在任务样本上验证。','The patch is a low-rank BA update. Rank and target layers constrain it; verify quality on task examples.'),
 reasoning:p('奖励只是训练信号，可能遗漏真实目标。实验展示策略概率的变化，没有复现 R1 的完整训练。','Rewards are training signals and may omit the real objective. This experiment changes policy probabilities without reproducing R1 training.'),
 evals:p('验收需要明确任务、样本与分母。一次成功演示之后，还要记录重复运行的失败类型与实际结果。','Acceptance requires tasks, samples and denominators. Record repeated-run failures and actual outcomes after a successful demo.')
};
export function readableTopic(topic,language){
 const name=shortNames[topic.id]?.[language]??topic.name;
 return {...topic,name,label:name,title:name,boundary:boundaries[topic.id]?.[language]??topic.boundary};
}
