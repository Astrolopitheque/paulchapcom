export const scrollToEl = (selector, options) => {
  options = options || {};
  const behavior = options.behavior || 'smooth';
  const offset = options.offset || 0;
  const el = document.querySelector(selector);
  const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
  window.scrollTo({top: y, behavior});
}