// console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--div-bg-color'));  ---to get css variable values in css

document.getElementById('dark-theme-btn').addEventListener('click', () => {
  document.documentElement.style.setProperty('--div-bg-color', 'magenta')
});

document.getElementById('light-theme-btn').addEventListener('click', () => {
  document.documentElement.style.setProperty('--div-bg-color', 'white')
});