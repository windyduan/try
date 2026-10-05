export const sigmoid = x => 1 / (1 + Math.exp(-x));
export const softmax = (logits, temperature = 1) => {
  if (!(temperature > 0)) throw new RangeError('Temperature must be positive');
  const scaled = logits.map(v => v / temperature);
  const max = Math.max(...scaled);
  const weights = scaled.map(v => Number.isFinite(v) ? Math.exp(v - max) : 0);
  const sum = weights.reduce((a, b) => a + b, 0);
  return weights.map(v => sum ? v / sum : 0);
};
export const activate = (x, type) => type === 'relu' ? Math.max(0, x) : type === 'tanh' ? Math.tanh(x) : type === 'linear' ? x : sigmoid(x);
export const W1 = [[0.9, -0.6], [-0.4, 1.1], [0.7, 0.5], [-0.8, -0.9]];
export const B1 = [0.2, -0.1, -0.3, 0.6];
export const W2 = [0.8, -0.5, 0.9, -0.7];
export const B2 = -0.15;
export function forward(x, type = 'sigmoid') {
  const z = W1.map((w, i) => w.reduce((s, v, j) => s + v * x[j], B1[i]));
  const h = z.map(v => activate(v, type));
  const outputLogit = h.reduce((s, v, i) => s + W2[i] * v, B2);
  return { z, h, outputLogit, output: sigmoid(outputLogit) };
}
export const samples = [[0.4, 0.7], [0.8, 1.5], [1.2, 1.8], [1.5, 2.5], [1.9, 2.9], [2.3, 3.8], [2.6, 3.9], [3, 4.8], [3.4, 5.1], [3.8, 5.9]];
export const mse = (data, w, b) => data.reduce((s, [x, y]) => s + (w * x + b - y) ** 2, 0) / data.length;
export function regressionStep(data, w, b, eta = 0.035) {
  const dw = 2 * data.reduce((s, [x, y]) => s + x * (w * x + b - y), 0) / data.length;
  const db = 2 * data.reduce((s, [x, y]) => s + (w * x + b - y), 0) / data.length;
  return { w: w - eta * dw, b: b - eta * db, dw, db };
}
export const rotate = ([x, y], theta) => [x * Math.cos(theta) - y * Math.sin(theta), x * Math.sin(theta) + y * Math.cos(theta)];
export const dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);
export const attentionKeys = [[0.8, 0.2], [0.3, 1.0], [1.2, -0.3], [-0.2, 0.9]];
export const attentionValues = [[0.4, 0.7], [0.6, 0.2], [0.9, -0.1], [-0.3, 0.8]];
export function attention(query, causal = false, index = 3, temperature = 1) {
  const scores = attentionKeys.map((k, i) => causal && i > index ? -Infinity : dot(query, k) / Math.sqrt(2));
  const weights = softmax(scores, temperature);
  const output = [0, 1].map(d => attentionValues.reduce((s, v, i) => s + weights[i] * v[d], 0));
  return { scores, weights, output };
}
export const imageGrid = [[0,0,1,1,0,0],[0,1,1,1,1,0],[0,1,0,0,1,0],[0,1,0,0,1,0],[0,1,1,1,1,0],[0,0,1,1,0,0]];
export const kernels = { edge: [[-1,0,1],[-1,0,1],[-1,0,1]], smooth: [[1/9,1/9,1/9],[1/9,1/9,1/9],[1/9,1/9,1/9]], sharpen: [[0,-1,0],[-1,5,-1],[0,-1,0]] };
export function convolution(input, kernel) {
  return Array.from({ length: input.length - kernel.length + 1 }, (_, y) => Array.from({ length: input[0].length - kernel[0].length + 1 }, (_, x) => kernel.reduce((s, row, j) => s + row.reduce((sum, v, i) => sum + v * input[y + j][x + i], 0), 0)));
}
export const classificationSamples = [{p:.08,y:0},{p:.18,y:0},{p:.3,y:1},{p:.4,y:0},{p:.49,y:0},{p:.55,y:1},{p:.61,y:0},{p:.7,y:1},{p:.79,y:1},{p:.86,y:1},{p:.92,y:0},{p:.96,y:1}];
export function confusion(data, threshold) {
  const counts = { tp:0, fp:0, tn:0, fn:0 };
  data.forEach(({p,y}) => counts[p >= threshold ? (y ? 'tp':'fp') : (y ? 'fn':'tn')]++);
  return { ...counts, precision: counts.tp + counts.fp ? counts.tp / (counts.tp + counts.fp) : null, recall: counts.tp + counts.fn ? counts.tp / (counts.tp + counts.fn) : null };
}
export function nucleus(probabilities, p) {
  const sorted = probabilities.map((v,i) => ({v,i})).sort((a,b) => b.v-a.v);
  let total = 0;
  const selected = new Set();
  for (const {v,i} of sorted) { selected.add(i); total += v; if (total >= p) break; }
  return probabilities.map((v,i) => selected.has(i) ? v / total : 0);
}
export function routeExperts(logits, k) {
  const weights = softmax(logits);
  const selected = weights.map((v,i) => ({v,i})).sort((a,b) => b.v-a.v).slice(0,k).map(x => x.i);
  const total = selected.reduce((s,i) => s+weights[i],0);
  return {weights, selected, activeWeights: weights.map((v,i) => selected.includes(i) ? v/total : 0)};
}
export const kvBytes = ({batch=1,layers=32,sequence=4096,kvHeads=8,headDim=128,bytes=2}) => 2*batch*layers*sequence*kvHeads*headDim*bytes;
export const loraParams = (input, output, rank) => ({full:input*output, adapter:rank*(input+output)});
export function keywordSearch(query, docs) {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return [];
  return docs.map(d => ({...d,score:d.terms.reduce((s,t)=>s+(normalized.includes(t.toLowerCase()) ? 1 : 0),0)})).filter(d=>d.score>0).sort((a,b)=>b.score-a.score);
}
