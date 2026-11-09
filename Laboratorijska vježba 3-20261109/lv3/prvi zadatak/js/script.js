document.querySelector("#zbroji").addEventListener("click", zbroji);
document.querySelector("#oduzmi").addEventListener("click", oduzmi);
document.querySelector("#pomnozi").addEventListener("click", pomnozi);
document.querySelector("#podijeli").addEventListener("click", podijeli);
document.querySelector("#tema").addEventListener("click", promijeniTemu);



function zbroji() {
    let unos1 = document.querySelector("#a").value;
    let unos2 = document.querySelector("#b").value;

    if (unos1 === "" || unos2 === "") {
        document.querySelector("#rezultat").textContent = "Greška: Unesite oba broja.";
        return;
    }
    let a = Number(unos1);
    let b = Number(unos2);

    if (isNaN(a) || isNaN(b)) {
        document.querySelector("#rezultat").textContent = "Greška: Unesite valjane brojeve. ";
        return;
    }

    console.log(a, b);

    let rezultat = a + b;
    document.querySelector("#rezultat").textContent = "Rezultat: " + rezultat;
}


function oduzmi() {
    let unos1 = document.querySelector("#a").value;
    let unos2 = document.querySelector("#b").value;

    if (unos1 === "" || unos2 === "") {
        document.querySelector("#rezultat").textContent = "Greška: Unesite oba broja.";
        return;
    }
    let a = Number(unos1);
    let b = Number(unos2);

    if (isNaN(a) || isNaN(b)) {
        document.querySelector("#rezultat").textContent = "Greška: Unesite valjane brojeve. ";
        return;
    }

    console.log(a, b);

    let rezultat = a - b;
    document.querySelector("#rezultat").textContent = "Rezultat: " + rezultat;
}

function pomnozi() {
    let unos1 = document.querySelector("#a").value;
    let unos2 = document.querySelector("#b").value;

    if (unos1 === "" || unos2 === "") {
        document.querySelector("#rezultat").textContent = "Greška: Unesite oba broja.";
        return;
    }
    let a = Number(unos1);
    let b = Number(unos2);

    if (isNaN(a) || isNaN(b)) {
        document.querySelector("#rezultat").textContent = "Greška: Unesite valjane brojeve. ";
        return;
    }

    console.log(a, b);

    let rezultat = a * b;
    document.querySelector("#rezultat").textContent = "Rezultat: " + rezultat;
}

function podijeli() {
    let unos1 = document.querySelector("#a").value;
    let unos2 = document.querySelector("#b").value;

    if (unos1 === "" || unos2 === "") {
        document.querySelector("#rezultat").textContent = "Greška: Unesite oba broja.";
        return;
    }
    let a = Number(unos1);
    let b = Number(unos2);

    if (isNaN(a) || isNaN(b)) {
        document.querySelector("#rezultat").textContent = "Greška: Unesite valjane brojeve. ";
        return;
    }

    console.log(a, b);

    if(b===0){
        document.querySelector("#rezultat").textContent = "Greška: Dijeljenje s nulom nije dozvoljeno. ";
        return;
    }
    
    let rezultat = a / b;
    document.querySelector("#rezultat").textContent = "Rezultat: " + rezultat;
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


