/* Muda a cor da borda do menu */

function navfilter () {
    var menu = document.querySelector("header nav");

    if (window.scrollY > 0) {
        menu.classList.add("filter");
    } else {
        menu.classList.remove("filter");
    }
};

window.addEventListener("scroll", navfilter);

navfilter ();

/* Função Mudar Background */

const backgroundImages = [
    'url("assets/img/background/background1.png")',
    'url("assets/img/background/background2.png")',
    'url("assets/img/background/background3.png")'
];

let indiceAtualBackground = 0;
const body = document.body;

function mudarBackground () {
    body.style.backgroundImage = backgroundImages[indiceAtualBackground];
    indiceAtualBackground = (indiceAtualBackground + 1) % backgroundImages.length;
}

setInterval (mudarBackground, 10000);

mudarBackground ();

/* Função Mudar Imagem Home */

const homeImages = [
    "assets/img/banners/bannerets2.jpg",
    "assets/img/banners/bannerats.jpg",
    "assets/img/banners/bannerbd.png",
    "assets/img/banners/bannermine.png",
    "assets/img/banners/bannerlfs.png",
    "assets/img/banners/bannermsc.jpg"
];

let indiceAtualHome = 0;

const imgChange = document.getElementById("imgchange");

function mudarImgHome () {
    imgChange.src = homeImages[indiceAtualHome];
    indiceAtualHome = (indiceAtualHome + 1) % homeImages.length;
}

setInterval (mudarImgHome, 5000);

mudarImgHome ();

/* Função Filtro No Banner */

function bannerFilter (id) {
    
    switch (id) {
        case 1:
            document.getElementById("1").classList.add("blur");
            document.getElementById("textets2").classList.add("show");
            break;
        case 2:
            document.getElementById("2").classList.add("blur");
            document.getElementById("textats").classList.add("show");
            break;
        case 3:
            document.getElementById("3").classList.add("blur");
            document.getElementById("textbd").classList.add("show");
            break;
        case 4:
            document.getElementById("4").classList.add("blur");
            document.getElementById("textmine").classList.add("show");
            break;
        case 5:
            document.getElementById("5").classList.add("blur");
            document.getElementById("textlfs").classList.add("show");
            break;
        case 6:
            document.getElementById("6").classList.add("blur");
            document.getElementById("textmsc").classList.add("show");
            break;
        default:
            alert("Algo deu errado!");
    }
}

/* Função Tirar Filtro Do Banner */

function bannerFilterOff () {
    document.getElementById("1").classList.remove("blur");
    document.getElementById("textets2").classList.remove("show");

    document.getElementById("2").classList.remove("blur");
    document.getElementById("textats").classList.remove("show");

    document.getElementById("3").classList.remove("blur");
    document.getElementById("textbd").classList.remove("show");

    document.getElementById("4").classList.remove("blur");
    document.getElementById("textmine").classList.remove("show");

    document.getElementById("5").classList.remove("blur");
    document.getElementById("textlfs").classList.remove("show");

    document.getElementById("6").classList.remove("blur");
    document.getElementById("textmsc").classList.remove("show");
}

function prints (id) {
    var section = document.getElementById("prints");
    section.classList.add("show");

    switch (id) {
        case 1:
            var img1 = 'assets/img/ets2/print1.jpg';
            var img2 = 'assets/img/ets2/print2.jpg';
            var img3 = 'assets/img/ets2/print3.jpg';
            var img4 = 'assets/img/ets2/print4.jpg';
            var img5 = 'assets/img/ets2/print5.jpg';
            var img6 = 'assets/img/ets2/print6.jpg';
            var img7 = 'assets/img/ets2/print7.jpg';
            var img8 = 'assets/img/ets2/print8.jpg';
            var img9 = 'assets/img/ets2/print9.jpg';
            var img10 = 'assets/img/ets2/print10.jpg';
            var img11 = 'assets/img/ets2/print11.jpg';
            var img12 = 'assets/img/ets2/print12.jpg';
            var img13 = 'assets/img/ets2/print13.jpg';
            var img14 = 'assets/img/ets2/print14.jpg';
            var img15 = 'assets/img/ets2/print15.jpg';
            var img16 = 'assets/img/ets2/print16.jpg';
            var img17 = 'assets/img/ets2/print17.jpg';
            var img18 = 'assets/img/ets2/print18.jpg';

            section.innerHTML = `
            <div class="containerprints" id="containerprints">
                <nav class="top">
                    <h2 id="gamename">Euro Truck Simulator 2</h2>
                    <div class="fechar" onclick="fechar()"></div>
                </nav>

                <div>
                    <img src="${img1}" alt="">
                    <img src="${img2}" alt="">
                    <img src="${img3}" alt="">
                </div>

                <div>
                    <img src="${img4}" alt="">
                    <img src="${img5}" alt="">
                    <img src="${img6}" alt="">
                </div>

                <div>
                    <img src="${img7}" alt="">
                    <img src="${img8}" alt="">
                    <img src="${img9}" alt="">
                </div>

                <div>
                    <img src="${img10}" alt="">
                    <img src="${img11}" alt="">
                    <img src="${img12}" alt="">
                </div>

                <div>
                    <img src="${img13}" alt="">
                    <img src="${img14}" alt="">
                    <img src="${img15}" alt="">
                </div>

                <div>
                    <img src="${img16}" alt="">
                    <img src="${img17}" alt="">
                    <img src="${img18}" alt="">
                </div>
            </div>
            `
            break;
        case 2:
            var img1 = 'assets/img/ats/print1.jpg';
            var img2 = 'assets/img/ats/print2.jpg';
            var img3 = 'assets/img/ats/print3.jpg';
            var img4 = 'assets/img/ats/print4.jpg';
            var img5 = 'assets/img/ats/print5.jpg';
            var img6 = 'assets/img/ats/print6.png';
            var img7 = 'assets/img/ats/print7.png';
            var img8 = 'assets/img/ats/print8.png';
            var img9 = 'assets/img/ats/print9.png';
            var img10 = 'assets/img/ats/print10.png';
            var img11 = 'assets/img/ats/print11.png';
            var img12 = 'assets/img/ats/print12.png';
            var img13 = 'assets/img/ats/print13.png';
            var img14 = 'assets/img/ats/print14.png';
            var img15 = 'assets/img/ats/print15.png';
            var img16 = 'assets/img/ats/print16.png';

            section.innerHTML = `
            <div class="containerprints" id="containerprints">
                <nav class="top">
                    <h2 id="gamename">American Truck Simulator</h2>
                    <div class="fechar" onclick="fechar()"></div>
                </nav>

                <div>
                    <img src="${img1}" alt="">
                    <img src="${img2}" alt="">
                    <img src="${img3}" alt="">
                </div>

                <div>
                    <img src="${img4}" alt="">
                    <img src="${img5}" alt="">
                    <img src="${img6}" alt="">
                </div>

                <div>
                    <img src="${img7}" alt="">
                    <img src="${img8}" alt="">
                    <img src="${img9}" alt="">
                </div>

                <div>
                    <img src="${img10}" alt="">
                    <img src="${img11}" alt="">
                    <img src="${img12}" alt="">
                </div>

                <div>
                    <img src="${img13}" alt="">
                    <img src="${img14}" alt="">
                    <img src="${img15}" alt="">
                </div>

                <div>
                    <img src="${img16}" alt="">
                </div>
            </div>
            `
            break;
        case 3:
            var img1 = 'assets/img/bd/print1.jpg';
            var img2 = 'assets/img/bd/print2.jpg';
            var img3 = 'assets/img/bd/print3.jpg';
            var img4 = 'assets/img/bd/print4.jpg';
            var img5 = 'assets/img/bd/print5.png';
            var img6 = 'assets/img/bd/print6.jpg';
            var img7 = 'assets/img/bd/print7.jpg';
            var img8 = 'assets/img/bd/print8.png';
            var img9 = 'assets/img/bd/print9.png';
            var img10 = 'assets/img/bd/print10.png';
            var img11 = 'assets/img/bd/print11.png';
            var img12 = 'assets/img/bd/print12.png';
            var img13 = 'assets/img/bd/print13.png';
            var img14 = 'assets/img/bd/print14.png';
            var img15 = 'assets/img/bd/print15.jpg';
            var img16 = 'assets/img/bd/print16.png';

            section.innerHTML = `
            <div class="containerprints" id="containerprints">
                <nav class="top">
                    <h2 id="gamename">BeamNG Drive</h2>
                    <div class="fechar" onclick="fechar()"></div>
                </nav>

                <div>
                    <img src="${img1}" alt="">
                    <img src="${img2}" alt="">
                    <img src="${img3}" alt="">
                </div>

                <div>
                    <img src="${img4}" alt="">
                    <img src="${img5}" alt="">
                    <img src="${img6}" alt="">
                </div>

                <div>
                    <img src="${img7}" alt="">
                    <img src="${img8}" alt="">
                    <img src="${img9}" alt="">
                </div>

                <div>
                    <img src="${img10}" alt="">
                    <img src="${img11}" alt="">
                    <img src="${img12}" alt="">
                </div>

                <div>
                    <img src="${img13}" alt="">
                    <img src="${img14}" alt="">
                    <img src="${img15}" alt="">
                </div>

                <div>
                    <img src="${img16}" alt="">
                </div>
            </div>
            `
            break;
        case 4:
            var img1 = 'assets/img/mine/print1.png';
            var img2 = 'assets/img/mine/print2.png';
            var img3 = 'assets/img/mine/print3.png';
            var img4 = 'assets/img/mine/print4.png';
            var img5 = 'assets/img/mine/print5.png';
            var img6 = 'assets/img/mine/print6.png';
            var img7 = 'assets/img/mine/print7.png';
            var img8 = 'assets/img/mine/print8.png';
            var img9 = 'assets/img/mine/print9.png';
            var img10 = 'assets/img/mine/print10.png';
            var img11 = 'assets/img/mine/print11.png';
            var img12 = 'assets/img/mine/print12.png';
            var img13 = 'assets/img/mine/print13.png';
            var img14 = 'assets/img/mine/print14.png';
            var img15 = 'assets/img/mine/print15.png';
            var img16 = 'assets/img/mine/print16.png';
            var img17 = 'assets/img/mine/print17.png';
            var img18 = 'assets/img/mine/print18.png';
            var img19 = 'assets/img/mine/print19.png';
            var img20 = 'assets/img/mine/print20.png';
            var img21 = 'assets/img/mine/print21.png';
            var img22 = 'assets/img/mine/print22.png';
            var img23 = 'assets/img/mine/print23.png';
            var img24 = 'assets/img/mine/print24.png';
            var img25 = 'assets/img/mine/print25.png';
            var img26 = 'assets/img/mine/print26.png';
            var img27 = 'assets/img/mine/print27.png';
            var img28 = 'assets/img/mine/print28.png';
            var img29 = 'assets/img/mine/print29.png';
            var img30 = 'assets/img/mine/print30.png';
            var img31 = 'assets/img/mine/print31.png';

            section.innerHTML = `
            <div class="containerprints" id="containerprints">
                <nav class="top">
                    <h2 id="gamename">Minecraft</h2>
                    <div class="fechar" onclick="fechar()"></div>
                </nav>

                <div>
                    <img src="${img1}" alt="">
                    <img src="${img2}" alt="">
                    <img src="${img3}" alt="">
                </div>

                <div>
                    <img src="${img4}" alt="">
                    <img src="${img5}" alt="">
                    <img src="${img6}" alt="">
                </div>

                <div>
                    <img src="${img7}" alt="">
                    <img src="${img8}" alt="">
                    <img src="${img9}" alt="">
                </div>

                <div>
                    <img src="${img10}" alt="">
                    <img src="${img11}" alt="">
                    <img src="${img12}" alt="">
                </div>

                <div>
                    <img src="${img13}" alt="">
                    <img src="${img14}" alt="">
                    <img src="${img15}" alt="">
                </div>

                <div>
                    <img src="${img16}" alt="">
                    <img src="${img17}" alt="">
                    <img src="${img18}" alt="">
                </div>

                <div>
                    <img src="${img19}" alt="">
                    <img src="${img20}" alt="">
                    <img src="${img21}" alt="">
                </div>

                <div>
                    <img src="${img22}" alt="">
                    <img src="${img23}" alt="">
                    <img src="${img24}" alt="">
                </div>

                <div>
                    <img src="${img25}" alt="">
                    <img src="${img26}" alt="">
                    <img src="${img27}" alt="">
                </div>

                <div>
                    <img src="${img28}" alt="">
                    <img src="${img29}" alt="">
                    <img src="${img30}" alt="">
                </div>

                <div>
                    <img src="${img31}" alt="">
                </div>
            </div>
            `
            break;
        case 5:
            var img1 = 'assets/img/lfs/print1.png';
            var img2 = 'assets/img/lfs/print2.jpg';
            var img3 = 'assets/img/lfs/print3.jpg';
            var img4 = 'assets/img/lfs/print4.png';
            var img5 = 'assets/img/lfs/print5.png';
            var img6 = 'assets/img/lfs/print6.png';

            section.innerHTML = `
            <div class="containerprints" id="containerprints">
                <nav class="top">
                    <h2 id="gamename">Live For Speed</h2>
                    <div class="fechar" onclick="fechar()"></div>
                </nav>

                <div>
                    <img src="${img1}" alt="">
                    <img src="${img2}" alt="">
                    <img src="${img3}" alt="">
                </div>

                <div>
                    <img src="${img4}" alt="">
                    <img src="${img5}" alt="">
                    <img src="${img6}" alt="">
                </div>
            </div>
            `
            break;
        case 6:
            var img1 = 'assets/img/msc/print1.jpg';

            section.innerHTML = `
            <div class="containerprints" id="containerprints">
                <nav class="top">
                    <h2 id="gamename">My Summer Car</h2>
                    <div class="fechar" onclick="fechar()"></div>
                </nav>

                <div>
                    <img src="${img1}" alt="">
                </div>
            </div>
            `
            break;
    }
}

function fechar () {
    var containerprints = document.getElementById("containerprints");
    var section = document.getElementById("prints");

    if (containerprints) {
        containerprints.classList.add("filter");
        section.classList.remove("show");

        setTimeout(() => {
            containerprints.remove();
        }, 1000);
    }
}