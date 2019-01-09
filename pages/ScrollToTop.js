module.exports = () => {
  const element = document.getElementById('top');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else if (window) {
    window.scrollTo(0, 0);
  }
};
