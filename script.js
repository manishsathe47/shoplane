let on = document.getElementById("da");
let per = document.getElementById("cloth");



let roan = [{
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799629/01.image_j3jfuw.webp",
        b: "Men Navy Blue Solid Sweatshirt",
        c: "United Colors of Benetton",
        d: "Rs 2599"
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799627/02.image_tfyysb.webp",
        b: "Men Black MAMGP T7 Sweat Sporty Jacket",
        c: "Puma",
        d: "Rs 7999"
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799627/03.image_pcxsxo.webp",
        b: "Men Black Action Parkview Lifestyle Shoes",
        c: "Hush Puppies",
        d: "Rs 6999"
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799629/04.image_q3qof2.webp",
        b: "Women Black Solid Lightweight Leather Jacket",
        c: "BARESKIN",
        d: "Rs 9999"
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799628/05.image_cmlet5.webp",
        b: "Women Blue Solid Shirt Dress",
        c: "SASSAFRAS",
        d: "Rs 5200"
    }
]

function multiple(_Pinky) {
    let card01 = document.createElement("div");
    card01.classList.add("card");
    //card01.setAttribute("style", "width: 25rem;");
    per.appendChild(card01);

    let image01 = document.createElement("img");
    image01.classList.add("card-img-top");
    image01.src = _Pinky.a;
    card01.appendChild(image01);

    let headingE = document.createElement("h3");
    headingE.classList.add("product02");
    headingE.textContent = _Pinky.b;
    card01.appendChild(headingE);


    let healing = document.createElement("h4");
    healing.classList.add("product03");
    healing.textContent = _Pinky.c;
    card01.appendChild(healing);


    let headingU = document.createElement("h5");
    headingU.classList.add("product04");
    headingU.textContent = _Pinky.d;
    card01.appendChild(headingU);

}


for (let _Pinky of roan) {
    multiple(_Pinky)
}







let per1 = document.getElementById("acce");



let marish = [{
        A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/06.image_qdoqlo.webp",
        B: "Unisex Silver-Toned Series 3 Smart Watch",
        C: "Apple",
        D: "Rs 31999"
    },
    {
        A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/07.image_x5tijn.webp",
        B: "Unisex Black & Green Reflex 2.0 Smart Band",
        C: "Fastrack",
        D: "Rs 1999"
    },
    {
        A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/08.image_mfxnmh.webp",
        B: "Unisex Black Galaxy Fit Fitness Band",
        C: "Samsung",
        D: "Rs 9990"
    },
    {
        A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/09.image_jznp4h.webp",
        B: "Gear IconX Black Cord-free Fitness Earbuds",
        C: "Samsung",
        D: "Rs 13990"
    },
    {
        A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/10.image_tlrrpr.webp",
        B: "White 2nd Gen AirPods with Charging Case",
        C: "Apple",
        D: "Rs 14999"
    }
]

function multiple02(_sima) {
    let card01 = document.createElement("div");
    card01.classList.add("card");
    //card01.setAttribute("style", "width: 25rem;");
    per1.appendChild(card01);

    let image01 = document.createElement("img");
    image01.classList.add("card-img-top");
    image01.src = _sima.A;
    card01.appendChild(image01);

    let headingE = document.createElement("h3");
    headingE.classList.add("product02");
    headingE.textContent = _sima.B;
    card01.appendChild(headingE);


    let heaping = document.createElement("h4");
    heaping.classList.add("product03");
    heaping.textContent = _sima.C;
    card01.appendChild(heaping);


    let headingU = document.createElement("h5");
    headingU.classList.add("product04");
    headingU.textContent = _sima.D;
    card01.appendChild(headingU);

}


for (let _sima of  marish) {
    multiple02(_sima)
}