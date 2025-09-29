export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatWeight(weight) {
  return `${weight / 10} kg`;
}

export function formatHeight(height) {
  return `${height / 10} m`;
}