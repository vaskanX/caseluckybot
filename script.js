
const items = [
    { name: "Lol pop", image: "assets/images/lolpop.png", count: 3 },
    { name: "Calendar", image: "assets/images/calendar.png", count: 2 },
    { name: "Astral", image: "assets/images/astral.png", count: 2 },
    { name: "Candy", image: "assets/images/candy.png", count: 1 },
    { name: "Cookie", image: "assets/images/cookie.png", count: 1 }
];

function openCase() {
    document.getElementById("animation").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");

    setTimeout(() => {
        document.getElementById("animation").classList.add("hidden");

        let total = items.reduce((sum, item) => sum + item.count, 0);
        let rand = Math.floor(Math.random() * total);
        let current = 0;
        let selected;

        for (let item of items) {
            current += item.count;
            if (rand < current) {
                selected = item;
                break;
            }
        }

        const result = document.getElementById("result");
        result.innerHTML = `<h2>Вы выиграли: ${selected.name}</h2><img src="${selected.image}" alt="${selected.name}"/>`;
        result.classList.remove("hidden");
    }, 2000);
}
