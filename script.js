const boxes = document.querySelectorAll(".option-box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((b) => b.classList.remove("active"));
    box.classList.add("active");
    box.querySelector("input[type='radio']").checked = true;
  });
});
