const createElement = (element, elementClasses, elementText) => {
  const el = document.createElement(element);
  if (elementClasses) el.classList.add(...elementClasses.split(' '));
  el.textContent = elementText;
  return el;
};

export default createElement;
