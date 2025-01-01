export function loadConfig() {
  return fetch('../config.json').then((response) => response.json());
}