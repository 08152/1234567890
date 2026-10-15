/*
 * Flat-project path registry.
 * This release intentionally has no subfolders. When the project is reorganized later,
 * these central path bases are the only place that needs to change.
 */
export const PROJECT_PATHS = Object.freeze({
  mapImage: './island-map.jpeg',
  modelBaseNow: './',
  modelBasePlanned: './Models/',
  worldsBaseNow: './',
  worldsBasePlanned: './Welten/',
  futureCityFolders: Object.freeze([
    'FrostyPeaks', 'VerdantValley', 'SnowfallRidge', 'TheForge', 'StormyShores',
    'RavenCove', 'ShadowWoods', 'LostIsle', 'RiftRocks', 'WillowHeights',
    'SunflowerFields', 'DustyDunes', 'NeonHeights', 'IronHarbor', 'IronWoods', 'CrownsRest'
  ])
});

export function assetUrl(filename, kind = 'root') {
  const base = kind === 'model' ? PROJECT_PATHS.modelBaseNow : kind === 'world' ? PROJECT_PATHS.worldsBaseNow : './';
  return `${base}${String(filename).replace(/^\/+/, '')}`;
}
