export const repositoryUrl = 'https://github.com/windyduan/try';

// Public files must resolve under the deployment directory, including /try/.
export function assetPath(path, base = './') {
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${path.replace(/^\/+/, '')}`;
}

export function publicAsset(path) {
  return assetPath(path, import.meta.env.BASE_URL);
}
