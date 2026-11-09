document.querySelector("#dodaj").addEventListener("click", dodajZadatak);
document.querySelector("#tema").addEventListener("click", promijeniTemu);
document.querySelector("#unos").addEventListener("keydown", function (e) { if (e.key === "Enter") { dodajZadatak(); } });



function dodajZadatak() {
    let unos1 = document.querySelector("#unos").value;

    console.log(unos1);

    if (unos1.trim() === "") {
        alert("Greška: Unesite zadatak.");
        return;
    }

    let lista = document.querySelector("#lista");
    let noviZadatak = document.createElement("li");
    noviZadatak.textContent = unos1;
    let gumbX = document.createElement("button");
    gumbX.textContent = "X";
    gumbX.addEventListener("click", function (e) {
        e.stopPropagation();
        noviZadatak.remove();
    });
    noviZadatak.addEventListener("click", function () {
        noviZadatak.classList.toggle("gotovo");
    });

    lista.appendChild(noviZadatak);
    noviZadatak.appendChild(gumbX);
    document.querySelector("#unos").value = "";

}


function promijeniTemu() {
    document.body.classList.toggle("dark");

    let gumb = document.querySelector("#tema");

    if (document.body.classList.contains("dark")) {
        gumb.textContent = "Light mode";
    } else {
        gumb.textContent = "Dark mode";
    }
}