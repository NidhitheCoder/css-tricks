const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkboxes);
checkboxes();
function checkboxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box, index) => {
    let boxTop;
    if (box[index + 1]) {
      boxTop = box[index + 1].getBoundingClientRect().top;
    } else {
      boxTop = box.getBoundingClientRect().top;
    }

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
