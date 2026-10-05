import React, { createContext, useContext } from 'react';

export const LanguageContext = createContext('zh');
const words = {
  '深度学习交互笔记': 'Interactive deep learning notes', '深度学习': 'Deep learning', '搜索知识与章节': 'Search topics and chapters', '学习地图': 'Learning map',
  '开始': 'Start here', '数学基础': 'Mathematical foundations', '从数据到模型': 'From data to models', '视觉与序列': 'Vision and sequences', '大语言模型': 'Large language models', '原教程之后': 'Beyond the course', '补充': 'Extra',
  '阅读原教程': 'Read the original course', '来源与说明': 'Sources & notes', '慢一点，也可以学得更深。': 'Take your time. Understand more.', '18 章原教程 · 6 个附加主题': '18 original chapters · 6 extra topics', '内容核对于 2026-10-03': 'Content checked on October 3, 2026', '学习路径': 'Learning path', '动手实验': 'Experiments', '前沿补充': 'Further reading',
  '开启环境音': 'Enable ambient audio', '关闭环境音': 'Disable ambient audio', '暂停自然动效': 'Pause ambient motion', '开启自然动效': 'Enable ambient motion', '选择语言': 'Choose language', '打开目录': 'Open course navigation', '关闭目录': 'Close course navigation', '跳到正文': 'Skip to content', '课程目录': 'Course navigation', '主要页面': 'Main pages',
  '原教程之后 · 附加笔记': 'BEYOND THE COURSE · EXTRA NOTES', '附加笔记': 'Extra notes', '可交互的学习笔记': 'Interactive notes', '动手试一试': 'Try it yourself', '本地计算': 'Local computation', '重置实验': 'Reset experiment', '重置': 'Reset', '正在载入实验…': 'Loading the experiment…',
  '留意一下': 'Something to notice', '看懂这次计算': 'Understand the calculation', '把它写成公式': 'Write it as an equation', '再往里看一点': 'Look a little deeper', '点击展开': 'Expand to read', '把知识连起来': 'Connect the ideas', '停留可预览': 'Hover to preview', '来源与继续阅读': 'Sources & further reading', 
  
  '原教程示例代码': 'Original example code', '本章原文小节': 'Original sections in this chapter', '解释与实验为独立整理；原教程小节可从上方链接阅读。补充内容核对于 2026-10-03。': 'Explanations and experiments are independently organized. Use the links above for original sections. Supplementary material was checked on October 3, 2026.',
  '上一主题': 'Previous topic', '下一主题': 'Next topic', '在这一页': 'On this page', '核心解释': 'Explanation', '计算公式': 'Equation', '内部细节': 'Details', '相关知识': 'Connections', '参考来源': 'Sources', '先动手，再读公式。': 'Try it, then read the equation.', '数值会随操作变化。': 'Values change as you interact.', '本页目录': 'On-page navigation',
  '原教程': 'Original course', '教学实验': 'Teaching experiments', '补充内容': 'Supplementary material', '保留 RethinkFun 的 18 章学习主线与 119 个小节入口。这里的笔记是独立组织的交互解释，不替代原文。': 'The 18-chapter learning path and 119 original section links are retained. These independent interactive notes accompany the original course.',
  '可计算的实验在浏览器中执行。人工数据、简化架构与脚本模拟均在对应实验中说明。': 'Numerical experiments run in your browser. Artificial data, simplified architectures, and scripted simulations are labeled in each experiment.',
  '研究论文与官方文档作为来源，标注发表日期或核对时间。内容快照核对于 2026-10-03。': 'Research papers and official documentation are dated by publication or verification. This content snapshot was checked on October 3, 2026.',
  '数据流动画使用 Remotion；图形与图标为可缩放矢量。可选环境音由浏览器实时合成，无采样素材。': 'Data-flow animation uses Remotion. Diagrams and icons are scalable vectors. Optional ambient audio is synthesized in your browser without sampled recordings.', '原教程 GitHub': 'Original course on GitHub',
  '6 个附加主题': '6 supplementary topics', '18 章主线 · 24 个交互主题': '18 original chapters · 24 interactive topics', '理解计算': 'Understand computation', '学会训练': 'Learn to train', '理解架构': 'Understand architectures', '走向实践': 'Put it into practice', '向量、导数、概率': 'Vectors, derivatives, probability', '损失、梯度、网络': 'Losses, gradients, networks', '卷积、序列、注意力': 'Convolution, sequences, attention', '检索、工具、评估': 'Retrieval, tools, evaluation', '个主题': 'topics',
  '每个主题都有对应来源。完整推导与更多小节，请继续阅读原教程。': 'Each topic links to its sources. Read the original course for full derivations and additional sections.', 'RethinkFun 原站': 'Original RethinkFun site', '知识来自计算，理解来自尝试。': 'Calculate. Try. Understand.', '概念预览': 'Concept preview', '打开交互笔记': 'Open interactive notes', '可以从这里开始': 'Suggested starting points', '交互笔记': 'Interactive notes', '原教程小节': 'Original course sections', '没有找到对应主题': 'No matching topic', '换一个关键词试试，或者按章节目录浏览。': 'Try another keyword or browse the course navigation.', '个参考入口': 'source links', '关闭搜索': 'Close search', '搜索主题与原文小节': 'Search topics and original sections', '关闭': 'Close',
  '输入 x₁': 'Input x₁', '输入 x₂': 'Input x₂', '隐藏层激活': 'Hidden activation', '线性': 'Linear', '输出 ŷ': 'Output ŷ', '固定权重的前向计算': 'Forward pass with fixed weights', '加权和 z': 'Weighted sum z', '激活后 h': 'Activation h', '点选隐藏节点，查看乘加与激活。': 'Select a hidden node to inspect its computation.',
  '正权重': 'Positive weight', '负权重': 'Negative weight', '隐藏节点': 'Hidden node', '输入层': 'Inputs', '隐藏层': 'Hidden layer', '输出层': 'Output', '两个数值特征': 'Two numeric features', '加权和 → 激活': 'Weighted sum → activation',
  '旋转角度': 'Rotation', '横向拉伸': 'Horizontal stretch', '变换矩阵 A': 'Transformation A', '点 (1.5, 1) 变换后': 'Transformed point (1.5, 1)', '拉伸后再旋转': 'Stretch, then rotate', '第一基向量': 'First basis vector', '第二基向量': 'Second basis vector', '变换后的点': 'Transformed point',
  '位置 x': 'Position x', '两点间隔 h': 'Separation h', '切线斜率 f′(x)': 'Tangent slope f′(x)', '割线斜率': 'Secant slope', '让 h 变小，观察两者接近': 'Reduce h to see the slopes converge', '函数曲线': 'Function', '切线': 'Tangent', '割线': 'Secant',
  '均值 μ': 'Mean μ', '标准差 σ': 'Standard deviation σ', 'μ ± σ 的区间概率': 'Probability within μ ± σ', '约 68.27%': 'About 68.27%', '峰值密度': 'Peak density', '阴影覆盖 μ − σ 到 μ + σ；概率是曲线下的面积。': 'Shading covers μ − σ to μ + σ. Probability is the area under the curve.', '区间': 'Interval', '密度': 'Density',
  '斜率 w': 'Slope w', '截距 b': 'Intercept b', '均方误差 MSE': 'Mean squared error', '暂停训练': 'Pause training', '运行梯度下降': 'Run gradient descent', '样本': 'Examples', '预测直线': 'Prediction', '残差': 'Residuals', '10 个固定教学样本': '10 fixed teaching examples', '学习率': 'Learning rate', '已更新': 'Updates:', '步': 'steps',
  '输入 x': 'Input x', '观察方向': 'Direction', '前向': 'Forward', '反向': 'Backward', '最终导数 dy / dx': 'Derivative dy / dx', '局部导数 2z × 2': 'Local derivatives: 2z × 2', '函数值 y': 'Function value y', '链式法则把两个局部导数相乘；反向求导不改变前向值。': 'The chain rule multiplies local derivatives. The backward pass does not change forward values.', '从 y 到 x，组合局部导数': 'From y to x: combine local derivatives', '从 x 到 y，计算中间值': 'From x to y: compute values',
  '判为正类的阈值': 'Positive threshold', '精确率 Precision': 'Precision', '召回率 Recall': 'Recall', '规则：分数 ≥ 阈值即判为正类': 'Positive when score ≥ threshold', '真实正类': 'Actual positive', '真实负类': 'Actual negative', '正确找出的正类 TP': 'True positives TP', '误报 FP': 'False positives FP', '漏报 FN': 'False negatives FN', '正确排除的负类 TN': 'True negatives TN', '无定义': 'Undefined',
  '学习率 η': 'Learning rate η', '动量 β': 'Momentum β', '当前损失 w²': 'Current loss w²', '暂停': 'Pause', '运行': 'Run', '走一步': 'One step', '回到起点': 'Return to start', '参数已离开图示范围，运行停止。减小学习率再比较。': 'The parameter has left the plotted range. Reduce the learning rate and restart.', '损失曲线': 'Loss curve', '参数走过的位置': 'Parameter history', '损失': 'Loss',
  '选择卷积核': 'Kernel', '边缘': 'Edge', '平滑': 'Smooth', '锐化': 'Sharpen', '步幅 1 · 无填充 · 不翻转核': 'Stride 1 · No padding · Unflipped kernel', '当前窗口的逐项乘加': 'Multiply and sum this window', '输入 6 × 6': 'Input 6 × 6', '输出 4 × 4 · 点击选择': 'Output 4 × 4 · Select a cell',
  '分支权重 w': 'Branch weight w', '跳跃连接': 'Skip connection', '开启': 'On', '输出 y': 'Output y', '导数 dy / dx': 'Derivative dy / dx', '简化分支 F(x) = w · tanh(x)。有跳跃连接时加回原输入。': 'Simplified branch: F(x) = w · tanh(x). The skip adds the original input.', '直接保留输入 x': 'Keep the input x', '跳跃连接已关闭': 'Skip connection is off',
  '温度 T': 'Temperature T', '采样一次': 'Sample once', '本次选中': 'Selected token', '等待采样': 'No sample yet', '按下方概率随机抽取': 'Drawn from the displayed distribution', '人工 logits：[2.2, 1.7, 1.2, 0.6, 0.1]。保留的候选重新归一化。': 'Artificial logits: [2.2, 1.7, 1.2, 0.6, 0.1]. Retained candidates are renormalized.', '让我们一起': 'Let’s', '截断并归一化后的候选概率': 'Probabilities after truncation and renormalization', '理解': 'understand', '探索': 'explore', '练习': 'practice', '观察': 'observe',
  '循环权重 Wₕ': 'Recurrent weight Wₕ', '输入权重 0.8 · 偏置 0': 'Input weight 0.8 · Bias 0', '读入下一个': 'Read next input', '从头读取': 'Read from the beginning', '同一组权重在五个时间步共享。点选时间步也可查看状态。': 'Weights are shared across five time steps. Select a step to inspect its state.', '隐藏状态 h': 'Hidden state h', '节点': 'Node', '当前执行至第': 'Current step:',
  '选择生成位置': 'Target position', '主要读取输入': 'Main input attended to', '人工对齐示例 · 非模型输出': 'Illustrative alignment · Not model output', '每个目标位置有一组不同的权重，每组权重之和为 1。': 'Each target position has its own weights, which sum to one.', '生成': 'Generating', '时的读取比例': 'attention weights',
  '查询 token': 'Query token', '因果遮罩': 'Causal mask', '当前 Query': 'Current Query', '输出向量': 'Output vector', '按权重组合二维 Value': 'Weighted sum of 2D Values', '二维人工向量 · Q = K · dₖ = 2 · 权重为真实 Softmax 计算。': 'Artificial 2D vectors · Q = K · dₖ = 2 · Weights calculated by Softmax.', '已遮罩': 'Masked', '分数': 'Score', '点积 → 缩放 → Softmax': 'Dot product → scale → Softmax',
  '注意力可见性': 'Attention visibility', 'GPT 因果': 'GPT causal', 'BERT 双向': 'BERT bidirectional', '查询位置': 'Query position', '当前可读位置数': 'Readable positions', '可读取': 'Visible', '被遮罩': 'Masked', '行：查询位置 · 列：读取位置': 'Rows: query positions · Columns: readable positions',
  'Query 位置 m': 'Query position m', 'Key 位置 n': 'Key position n', '相对位置 n − m': 'Relative position n − m', '旋转后的点积': 'Rotated dot product', '两者一起平移 +1': 'Shift both positions +1', '单个二维分量对，频率 θ = 0.3 弧度 / 位置。原向量 q=[1, 0.2]、k=[0.6, 0.9]。': 'One 2D pair, frequency θ = 0.3 radians / position. Original q=[1, 0.2], k=[0.6, 0.9].',
  '专家 E₁ 的路由得分': 'Expert E₁ router score', '激活专家数 Top-k': 'Active experts: Top-k', '加权输出': 'Weighted output', '仅组合被选择的专家': 'Only selected experts contribute', '其他 logits：[1.0, 0.6, −0.2]': 'Other logits: [1.0, 0.6, −0.2]', '教学专家输出固定为 [0.4, 0.9, −0.2, 0.7]。仅演示路由与组合。': 'Fixed expert outputs: [0.4, 0.9, −0.2, 0.7]. Routing and combination demonstration only.', '输入 token → 路由器': 'Input token → router', '专家 E': 'Expert E', '组合权重': 'Mixture weight', '本次未激活': 'Inactive this time', '选中专家 → 重新归一化 → 加权求和': 'Select experts → renormalize → weighted sum',
  '搜索小型资料库': 'Search the local collection', '输入问题或关键词': 'Enter a question or keyword', '卷积为什么能检测边缘？': 'How does convolution detect edges?', '学习率太大会怎样？': 'What if the learning rate is too large?', 'KV Cache 占多少内存？': 'How much memory does KV Cache use?', '查看交互笔记': 'Open interactive notes', '没有命中资料': 'No matching passages', '这组资料仅包含六个主题。试试“卷积”“梯度”“注意力”或“缓存”。': 'This collection has six topics. Try “convolution”, “gradient”, “attention”, or “cache”.', '本地关键词匹配 · 6 条人工整理的资料 · 未接入生成模型': 'Local keyword matching · Six curated passages · No generation model connected', '匹配': 'Matched', '个词项': 'terms',
  '梯度下降': 'Gradient descent', '卷积与边缘': 'Convolution and edges', '注意力与遮罩': 'Attention and masks', '推理时的 KV Cache': 'KV Cache at inference', '低秩微调': 'Low-rank adaptation', 'Agent 的工具循环': 'An agent’s tool loop',
  '梯度是损失对参数的变化方向。学习率决定每次参数更新的步长。太大的学习率可能让损失发散。': 'The gradient describes how loss changes with parameters. Learning rate controls update size. An overly large rate may cause divergence.',
  '卷积窗口逐项乘加。边缘核用正负权重对比相邻像素；输出大小由核尺寸、步幅与填充决定。': 'Convolution multiplies and sums local elements. Edge kernels compare neighboring pixels with positive and negative weights. Kernel size, stride, and padding determine output size.',
  'Query 与 Key 的点积产生注意力分数，Softmax 得到权重，再组合 Value。因果遮罩阻止读取未来位置。': 'Query–Key dot products give attention scores; Softmax gives weights for combining Values. A causal mask blocks later positions.',
  '缓存历史 Key 与 Value 能减少重复计算。缓存占用随序列长度和 KV 头数增加，与模型权重内存不同。': 'Caching previous Keys and Values avoids repeated computation. Cache storage grows with sequence length and KV heads, separately from model weights.',
  'LoRA 冻结原权重，通过两个小矩阵训练低秩更新。秩与目标层会影响可训练参数量。': 'LoRA freezes original weights and trains a low-rank update through two smaller matrices. Rank and target layers affect trainable parameter counts.',
  '模型选择工具，应用执行调用并返回观察。循环需要明确停止条件，评估要检查最终状态。': 'A model selects a tool; the application executes it and returns an observation. The loop needs stopping conditions, and evaluation must check final states.',
  '问题：卷积核为什么可以检测边缘？': 'Question: how can a kernel detect edges?', '收起动画': 'Hide animation', '播放数据流': 'Play data flow', '接收问题': 'Receive question', '选择工具': 'Choose tool', '执行检索': 'Run retrieval', '读取证据': 'Read evidence', '检查并回答': 'Check & answer', '输入': 'Input', '决策': 'Decision', '工具': 'Tool', '输出': 'Output', '执行条件与内部细节': 'Conditions & details', '推进到下一步': 'Advance one step', '重新开始': 'Restart', '满足停止条件，示例结束。': 'Stopping condition met. Example complete.', '脚本流程模拟 · 点选任意节点查看输入与输出 · 数据流动画使用 Remotion': 'Scripted simulation · Select a node to inspect I/O · Animation uses Remotion',
  '先记录用户目标。这个示例将问题与期望结果写成状态；实际应用还需要处理缺失信息。': 'Record the user’s goal. This example stores the question and expected outcome as state. Real applications also handle missing information.',
  '工具定义需要有清楚的名称、参数与返回结构。此处选择来自固定脚本，并非实时模型决策。': 'Tools need clear names, parameters, and return structures. This selection comes from a fixed script, not a live model decision.',
  '执行发生在应用程序中。真实系统应把工具调用、错误和结果记录下来，便于检查与复现。': 'The application executes the tool. Real systems should record calls, errors, and results for inspection and reproduction.',
  '工具结果是数据，不应被当作控制应用的指令。资料来源和时间也需要与回答一起保留。': 'Tool results are data rather than application instructions. Retain evidence sources and dates with the answer.',
  '停止条件要与真实任务完成相符。这个案例没有修改外部状态；其他工具任务应检查实际操作结果。': 'The stopping condition should reflect actual completion. This example changes no external state; other tool tasks should verify their outcomes.',
  '“卷积核为什么可以检测边缘？”': '“How can a kernel detect edges?”', '问题 + 可用工具说明': 'Question + tool definitions', '读取问题，确定完成条件：解释计算，并提供课程证据。': 'Read the question. Success means explaining the calculation with course evidence.', '当前上下文缺少课程证据，选择只读搜索工具。': 'The context lacks evidence. Choose a read-only search tool.', '先校验参数，再执行工具。空结果或错误应返回给下一步处理。': 'Validate parameters, then execute. Return empty results or errors for the next decision.',
  '搜索结果与章节片段': 'Search results and course passages', '局部窗口与卷积核逐项相乘后求和；差分核突出相邻像素的变化。': 'Multiply local pixels by kernel weights and sum. Difference kernels highlight changes between neighboring pixels.', '检查片段是否与问题有关，缺少证据时继续检索。': 'Check relevance. Retrieve again if evidence is missing.', '原问题 + 已核对的证据': 'Original question + checked evidence', '给出解释与章节链接；标明此处使用手工边缘核。': 'Explain and link the chapter; identify the hand-designed edge kernel.', '问题已覆盖，来源可查，停止循环。若证据不够，则返回选择工具。': 'Stop when the question is covered and evidence is traceable. Otherwise return to tool selection.',
  '一次资料查询的工具循环': 'A tool loop for course retrieval', '固定脚本演示 · 非实时模型调用': 'Scripted example · No live model call', '明确问题与完成条件': 'Clarify the question and success condition', '生成结构化调用参数': 'Build structured tool parameters', '应用执行，返回结果': 'Execute the tool and return its result', '核对资料，补充上下文': 'Check evidence and update context', '验证覆盖，满足条件后停止': 'Verify coverage and stop when complete', '当前步骤': 'Current step',
  '序列长度 S': 'Sequence length S', 'KV 头数 Hₖᵥ': 'KV heads Hₖᵥ', '批量大小 B': 'Batch size B', '每元素字节 b': 'Bytes per element b', '固定 32 层、每头维度 128；只估计 KV 张量的理想存储。': '32 layers, head dimension 128. Ideal KV tensor storage only.', 'KV Cache 内存估计': 'Estimated KV Cache storage', '示意 8 组，实际共 32 层 · 每层缓存随序列增长': '8 groups shown, 32 layers total · Cache grows with sequence length',
  '方形权重矩阵维度 d': 'Square matrix dimension d', '秩 r': 'Rank r', '完整矩阵参数': 'Full-matrix parameters', 'LoRA 新增参数': 'LoRA adapter parameters', '为原矩阵的': 'Fraction of original:', '忽略偏置，仅比较一个线性层的权重参数。': 'Bias excluded. One linear layer’s weight parameters only.', '冻结': 'Frozen', '训练两个小矩阵，组合成一个低秩更新。': 'Train two small matrices to form a low-rank update.',
  '动作 A 的奖励': 'Reward for action A', '动作 B 的奖励': 'Reward for action B', '更新策略一步': 'Update the policy once', '重置概率': 'Reset probabilities', '期望奖励': 'Expected reward', '步长 0.8': 'Step size 0.8', '两动作解析策略梯度示例，非 GRPO：logitₐ += 0.8 · pₐ · pᵦ · (Rₐ − Rᵦ)。': 'Analytic two-action policy gradient, not GRPO: logitₐ += 0.8 · pₐ · pᵦ · (Rₐ − Rᵦ).', '策略对两个候选动作的概率': 'Policy probabilities for two actions', '动作 A': 'Action A', '动作 B': 'Action B', '奖励相等时，梯度为零；奖励较高的动作概率逐步增加。': 'Equal rewards give zero gradient. The higher-reward action becomes more likely.', '奖励': 'Reward',
  '全部': 'All', '检索': 'Retrieval', '回答': 'Answer', '任务类别': 'Task category', '单次试验成功率': 'Per-trial success rate', '3 次全部成功的任务': 'Tasks passing all 3 trials', '检查任务': 'Check', '第 1 次': 'Trial 1', '第 2 次': 'Trial 2', '第 3 次': 'Trial 3', '平均延迟': 'Mean latency', '通过': 'Pass', '失败': 'Fail', '个任务': 'tasks', '次': 'trials',
  '定位卷积章节': 'Find the convolution chapter', '问题未收录时返回空结果': 'Return no results for an unknown query', '调用参数符合定义': 'Use valid tool parameters', '工具报错后停止错误操作': 'Stop invalid actions after a tool error', '来源支持核心结论': 'Support the main claim with evidence', '缺少证据时说明限制': 'State limitations when evidence is missing', '6 个固定教学任务 × 3 次试验 · 此处为示例记录，不是实时模型评测。': '6 teaching tasks × 3 trials · Example records, not a live model evaluation.',
  '喜欢': 'like', '卷积 边缘': 'convolution edges', '卷积操作': 'Convolution operations', '输入：中文 · 输出：英文': 'Input: Chinese · Output: English', '解释卷积': 'Explain convolution', '观察结果': 'Observation', '固定教学试验，每个任务重复三次': 'Fixed teaching trials, three repeats per task',
  '线性变换前后的二维坐标网格': 'Two-dimensional grids before and after a linear transformation', '二次函数的切线与割线': 'Tangent and secant lines on a quadratic function', '正态分布与一个标准差范围': 'Normal distribution with a one-standard-deviation interval', '线性回归的样本、预测直线和残差': 'Linear regression examples, predictions and residuals', '函数 y 等于 2x 加 1 的平方的计算图': 'Computation graph for y equals the square of 2x plus 1', '梯度下降沿二次损失函数移动': 'Gradient descent on a quadratic loss', '残差块的主分支与跳跃连接': 'Residual branch and skip connection', '两个位置编码旋转后的向量': 'Vectors rotated by position embeddings',
  '我': 'I', '正在': 'am', '学习': 'learn', '数学': 'math', 
};

const replacements = Object.entries(words).sort((a,b)=>b[0].length-a[0].length);
export function translate(text, language) {
  if (language !== 'en' || typeof text !== 'string' || !/[\u3400-\u9fff]/.test(text)) return text;
  if (words[text]) return words[text];
  let value=text
    .replace(/查看隐藏节点 h(\d+) 的计算/g,'Inspect hidden node h$1')
    .replace(/节点 h(\d) 的计算/g,'Node h$1 calculation')
    .replace(/本章原文小节（(\d+)）/g,'Original chapter sections ($1)')
    .replace(/当前执行至第 (\d+) 步/g,'Current step: $1')
    .replace(/第 (\d+) 步/g,'Step $1')
    .replace(/(\d+) 步/g,'$1 steps')
    .replace(/(\d+) 次/g,'$1 trials')
    .replace(/生成 “(.+)” 时的读取比例/g,'Attention when generating “$1”')
    .replace(/查询位置 (\d+) 读取位置 (\d+)：/g,'Query $1 reads position $2: ')
    .replace(/选择输出第 (\d+) 行第 (\d+) 列，值 /g,'Select output row $1, column $2, value ')
    .replace(/查看隐藏节点 h(\d+) 的计算/g,'Inspect hidden node h$1')
    .replace(/两个输入、四个隐藏节点和一个输出的神经网络，当前输出 /g,'Neural network with two inputs, four hidden nodes and one output: ');
  for (const [from,to] of replacements) if(from.length>1)value=value.replaceAll(from,to);
  return value;
}

function localize(node, language) {
  if (typeof node === 'string') return translate(node,language);
  if (Array.isArray(node)) return React.Children.map(node,n=>localize(n,language));
  if (!React.isValidElement(node)) return node;
  if (node.props['data-preserve-language']) return node;
  const props={};
  for(const [key,value] of Object.entries(node.props)) {
    if(['children','controls','footer','fallback'].includes(key))props[key]=localize(value,language);
    else if(['label','title','note','placeholder','aria-label','xLabel','yLabel'].includes(key))props[key]=translate(value,language);
    else if(key==='value' && node.type?.isDisplayValue===true)props[key]=translate(value,language);
    else if(key==='items'&&Array.isArray(value))props[key]=value.map(([color,text])=>[color,translate(text,language)]);
    else if(key==='labels'&&Array.isArray(value)&&!node.props.preserveLabels)props[key]=value.map(v=>translate(v,language));
    else if(key==='options'&&Array.isArray(value))props[key]=value.map(([v,text])=>[v,translate(text,language)]);
  }
  return React.cloneElement(node,props);
}

export function Localize({children}) {
  const language=useContext(LanguageContext);
  return localize(children,language);
}
