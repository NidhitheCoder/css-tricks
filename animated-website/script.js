
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


let length = array_list.length;
let i = 0;
getData();

function getData() {
  if (i < length) {
    content.innerText = `${array_list[i].title}`;
    profileName.innerText = `${array_list[i].name}`;
    profileImage.innerHTML = `<img src="${array_list[i].image}" alt="">`;
    userLocation.innerText = `${array_list[i].location}`;
    i++;
    setInterval(getData, 4000);
  } else {
    i = 0;
    setInterval(getData, 4000);
  }
}