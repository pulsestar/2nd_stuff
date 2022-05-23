const prikols = [
    [
        "Лучше пофармить, чем не пофармить."
    ],

    [
        "А ну-ка иди-ка сюда. А вот все. Все."
    ],

    [
        "Парни, что мы надрафтили?"
    ],

    [
        "Кто смеет нарушать мою концентрацию?!"
    ],
];

document.getElementById("prikol").addEventListener("click", function () {
    const prikol = prikols[Math.floor(Math.random() * prikols.length)];
    const text = document.querySelector("#text");
    text.innerHTML = prikol[0];
});

document.getElementById("clear").addEventListener("click", function () {
    document.getElementById('text').innerHTML = "";
});

let colors = ['black', 'brown', 'pink', 'purple', 'blue', 'yellow'];
document.getElementById("prikol").addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    let main = document.getElementById('main');
    main.style.backgroundColor = randomColor;
});