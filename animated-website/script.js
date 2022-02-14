
const init = function () {
  let items = document.querySelectorAll(".features .card");
  for (let i = 0; i < items.length; i++) {
    const randomClr = randomColor({ luminosity: "light" });
    items[i].style.background = randomClr;
    items[i].style.boxShadow = `0 0 10px 10px ${randomClr}`;
  }
  cssScrollSnapPolyfill();
};
init();

let sampleArr = [
  {
    title: 'Title 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, harum!'
  },
  {
    title: 'Title 2',
    content: 'psum dolor sit amet, consectetur adipisicing elit. At, harum!'
  },
  {
    title: 'Title 3',
    content: 'ipsum dolor sit amet, consectetur adipisicing elit. At, harum!'
  },
  {
    title: 'Title 4',
    content: 'hello ipsum dolor sit amet, consectetur adipisicing elit. At, harum!'
  },
];
let length = sampleArr.length;
let i = 0;

const container = document.getElementById('carousal-slider');

function getData() {
  if (i < length) {
    let intervalId;
    const title = document.getElementById('title');
    const content = document.getElementById('content');
    const sliderItem = document.getElementsByClassName('carousal-item')[0];
    const red = Math.random() * 255;
    const blue = Math.random() * 255;
    const green = Math.random() * 255;
    sliderItem.style.backgroundColor = `rgb(${red},${green},${blue})`;
    sliderItem.classList.add('mr-100');
    //  Change indication
    const indicators = [...document.querySelectorAll('.indicator')];
    indicators.map((indicator, index) => {
      if (index === i) {
        indicator.style.backgroundColor = 'green';
      } else {
        indicator.style.backgroundColor = 'transparent';
      }
    });

    title.textContent = sampleArr[i].title;
    content.textContent = sampleArr[i].content;
    i++;
    intervalId = setInterval(getData, 4000);
    setTimeout(() => {
      clearInterval(intervalId);
      sliderItem.classList.remove('mr-100');
    }, 4000);
  } else {
    i = 0;
    getData();
  }
};
container.addEventListener('hover', getData());
