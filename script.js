document.addEventListener("DOMContentLoaded", function () {
  const payButton = document.getElementById("payButton");
  const openButton = document.getElementById("openButton");
  const animation = document.getElementById("animation");
  const result = document.getElementById("result");

  if (window.Telegram.WebApp) {
    Telegram.WebApp.ready();
  }

  payButton.addEventListener("click", function () {
    const tonLink = "https://tonkeeper.com/transfer/UQDyF3c6uCGHIbbLdEkj9VJeGdYZNiWOqB2UeJTivaKmOvJn?amount=1500000000";
    window.open(tonLink, "_blank");
    
    // После открытия TON-ссылки показываем кнопку "Открыть кейс"
    payButton.style.display = "none";
    openButton.style.display = "block";
  });

  openButton.addEventListener("click", function () {
    if (animation.classList.contains("active")) return;

    result.textContent = "";
    animation.classList.add("active");

    setTimeout(() => {
      animation.classList.remove("active");
      result.textContent = "Вы выиграли ПОДАРОК!";
    }, 3000);
  });
});
