
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
let intervalId;

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
const indicators = [...document.querySelectorAll('.indicator')];
let length = sampleArr.length;
let i = 0;

const itemClick = (e) => {
  indicators.map((indicator) => {
    indicator.style.backgroundColor = 'transparent';
    if ( e.target.id === indicator.id) {
      const idInt = +indicator.id;
      title.textContent = sampleArr[idInt].title;
      content.textContent = sampleArr[idInt].content;
      clearInterval(intervalId);
      i = +indicator.id + 1;
    }
  });
  e.target.style.backgroundColor = 'green';
}


const container = document.getElementById('carousal-slider');

function getData() {
  if (i < length) {
    const title = document.getElementById('title');
    const content = document.getElementById('content');
    const sliderItem = document.getElementsByClassName('carousal-item')[0];
    const red = Math.random() * 255;
    const blue = Math.random() * 255;
    const green = Math.random() * 255;
    sliderItem.style.backgroundColor = `rgb(${red},${green},${blue})`;
    sliderItem.classList.add('mr-100');
    //  Change indication
    indicators.map((indicator, index) => {
      indicator.addEventListener('click', itemClick);
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

// change value onclick

const button = document.getElementById('add-value');

const updateValue = () => {
  const resultContainer = document.getElementById('result');
  if (resultContainer.textContent === '11111') {
    button.removeEventListener('click', updateValue);
  } else {
    resultContainer.textContent += 1;
  }

};

button.addEventListener('click', updateValue);
const ringContainer = document.getElementById('ring-container');

for (let index = 0; index < 200; index++) {
  const ring = document.createElement('div');
  ring.classList.add('ring');
  const randomClr = randomColor({ luminosity: "light" });
  ring.style.borderColor = randomClr;
  ringContainer.appendChild(ring);
}

ringContainer.addEventListener('click', () => {
  const rings = [...document.querySelectorAll('.ring')];
  rings.map(ring => {
    ring.style.left = `${Math.random() * 100}vw`;
    ring.style.top = `${Math.random() * 100}vh`;
  })

})

//  drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if (!ev.target.innerText) {
  ev.target.appendChild(document.getElementById(data));
  } else {
    alert('Not allowed');
  }
}