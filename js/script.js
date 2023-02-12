console.log("Hello Devs! Little fun-fact for today: the weight of Milky Way galaxy is estimated around 1,5 trillion solar masses! ;>")

let buttonHideSquirrel = document.querySelector(".js-buttonHideSquirrel")
let imageChange = document.querySelector(".js-photo")
let catName = document.querySelector(".js-paragraphCat")
let body = document.querySelector(".js-body")
let background = document.querySelector(".js-background")
let headline = document.querySelectorAll(".js-sectionHeadline")
let tableHeader = document.querySelectorAll(".js-tableHeader")
let tableCellBackground = document.querySelectorAll(".js-tableCell")
let hyperlink = document.querySelectorAll(".js-hyperlink")
let endText = document.querySelector(".js-footerText")
let decoration = document.querySelector(".js-sectionDecoration")
let buttonSwitchMode = document.querySelector(".js-buttonSwitchMode")

buttonHideSquirrel.addEventListener("click", () => {
    buttonHideSquirrel.remove();
    catName.innerText = "Przyszywany brat - Rumcajs. Postrach wiewiórek!";
    decoration.classList.add("lineDecoration");

    switch (imageChange.getAttribute("src")) {
        case "https://i.postimg.cc/LXcFfSF2/Squirrel.png":
            imageChange.setAttribute("src", "https://i.postimg.cc/NG7Bj51Q/Rumcajs1.jpg");
        break;
    }
});

buttonSwitchMode.addEventListener("click", () => {
    body.classList.toggle("bodyLightTheme");
    background.classList.toggle("backgroundLightTheme");
    headline.forEach((element) => { element.classList.toggle("headlineLightTheme") });
    tableHeader.forEach((element) => { element.classList.toggle("tableHeaderLightTheme") });
    tableCellBackground.forEach((element) => { element.classList.toggle("tableCellLightTheme") });
    hyperlink.forEach((element) => { element.classList.toggle("hyperlinkLightTheme") });
    endText.classList.toggle("endTextLightTheme");
    buttonSwitchMode.classList.toggle("buttonLightTheme");
    buttonHideSquirrel.classList.toggle("buttonLightTheme");

    buttonSwitchMode.innerText = body.classList.contains("bodyLightTheme")
        ? "Ustaw ciemny motyw"
        : "Ustaw jasny motyw";
});