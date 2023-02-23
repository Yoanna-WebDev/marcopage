{
    const welcome = () => {
        console.log(
            "Hello Devs! Little fun-fact for today: the weight of Milky Way galaxy is estimated around 1,5 trillion solar masses! ;>"
        );
    };

    const changeImage = () => {
        let imageChange = document.querySelector(".js-photo");

        if (
            imageChange.getAttribute(
                "src",
                "https://i.postimg.cc/LXcFfSF2/Squirrel.png"
            )
        ) {
            imageChange.setAttribute(
                "src",
                "https://i.postimg.cc/NG7Bj51Q/Rumcajs1.jpg"
            );
        }
    };

    const addDecoration = () => {
        const decoration = document.querySelector(".js-sectionDecoration");
        decoration.classList.add("lineDecoration");
    };

    const addText = () => {
        const catName = document.querySelector(".js-paragraphCat");
        catName.innerText = "Przyszywany brat - Rumcajs. Postrach wiewiórek!";
    };

    const hideSquirrelImage = (buttonHideSquirrel) => {
        buttonHideSquirrel.remove();

        addText();
        addDecoration();
        changeImage();
    };

    const switchButtonText = (body, buttonSwitchMode) => {
        buttonSwitchMode.innerText = body.classList.contains("bodyLightTheme")
            ? "Ustaw ciemny motyw"
            : "Ustaw jasny motyw";
    };

    const changeFooterMode = () => {
        const endText = document.querySelector(".js-footerText");
        endText.classList.toggle("endTextLightTheme");
    };

    const changeHyperlinksMode = () => {
        const hyperlink = document.querySelectorAll(".js-hyperlink");
        hyperlink.forEach((element) => {
            element.classList.toggle("hyperlinkLightTheme");
        });
    };

    const changeHeadersMode = () => {
        const headline = document.querySelectorAll(".js-sectionHeadline");
        const tableHeader = document.querySelectorAll(".js-tableHeader");

        headline.forEach((element) => {
            element.classList.toggle("headlineLightTheme");
        });
        tableHeader.forEach((element) => {
            element.classList.toggle("tableHeaderLightTheme");
        });
    };

    const changeButtonsMode = (buttonSwitchMode, buttonHideSquirrel) => {
        buttonSwitchMode.classList.toggle("buttonLightTheme");
        buttonHideSquirrel.classList.toggle("buttonLightTheme");
    };

    const toggleLightMode = (buttonSwitchMode, buttonHideSquirrel) => {
        const body = document.querySelector(".js-body");
        const background = document.querySelector(".js-background");
        const tableCellBackground = document.querySelectorAll(".js-tableCell");

        body.classList.toggle("bodyLightTheme");
        background.classList.toggle("backgroundLightTheme");
        tableCellBackground.forEach((element) => {
            element.classList.toggle("tableCellLightTheme");
        });

        changeButtonsMode(buttonSwitchMode, buttonHideSquirrel);
        changeHeadersMode();
        changeHyperlinksMode();
        changeFooterMode();
        switchButtonText(body, buttonSwitchMode);
    };

    const init = () => {
        const buttonHideSquirrel = document.querySelector(
            ".js-buttonHideSquirrel"
        );
        const buttonSwitchMode = document.querySelector(".js-buttonSwitchMode");

        buttonHideSquirrel.addEventListener("click", () =>
            hideSquirrelImage(buttonHideSquirrel)
        );
        buttonSwitchMode.addEventListener("click", () =>
            toggleLightMode(buttonSwitchMode, buttonHideSquirrel)
        );
        welcome();
    };

    init();
}
