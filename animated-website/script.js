// let featuresections = [...document.querySelectorAll('.features')];
// featuresections.map(feature => {
//   feature.addEventListener('show', () => {
//     console.log('Hovered')
//   })
// })

const init = function() {
  let items = document.querySelectorAll(".features .card");
  for (let i = 0; i < items.length; i++) {
    const randomClr = randomColor({ luminosity: "light" });
    items[i].style.background = randomClr;
    items[i].style.boxShadow = `0 0 10px 10px ${randomClr}`;
  }
  cssScrollSnapPolyfill();
};
init();
