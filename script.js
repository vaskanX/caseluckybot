document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("openButton");
  const animation = document.getElementById("animation");
  const result = document.getElementById("result");

  if (window.Telegram.WebApp) {
    Telegram.WebApp.ready();
  }

  button.addEventListener("click", function () {
    if (animation.classList.contains("active")) return;

    result.textContent = "";
    animation.classList.add("active");

    setTimeout(() => {
      animation.classList.remove("active");
      result.textContent = "Вы выиграли ПОДАРОК!";
    }, 3000);
  });
});
