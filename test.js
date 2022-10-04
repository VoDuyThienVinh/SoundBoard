const names = ['music', 'apple', 'samsung', 'netflix'];

names.forEach(name => {
  const h1El = document.createElement('h1');
  h1El.classList.add('btn');
  h1El.innerHTML = name;
  document.getElementById('buttons').appendChild(h1El);
})

