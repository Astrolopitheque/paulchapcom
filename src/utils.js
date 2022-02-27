export const scrollToEl = selector => {
  const el = document.querySelector(selector);
  el.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});
}