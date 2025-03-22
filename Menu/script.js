document.querySelectorAll(".flipText").forEach((text) => {
  text.addEventListener(
    "mouseenter",
    () => (text.style.transform = "rotateY(180deg)")
  );
  text.addEventListener(
    "mouseleave",
    () => (text.style.transform = "rotateY(0deg)")
  );
});
