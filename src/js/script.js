function component() {
  const element = document.createElement('div');

  element.innerHTML = 'This is an element created via JS';

  return element;
}

document.body.appendChild(component());
