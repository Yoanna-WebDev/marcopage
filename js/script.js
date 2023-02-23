{
    const welcome = () => {
        console.log(
            "Hello Devs! Little fun-fact for today: the weight of Milky Way galaxy is estimated around 1,5 trillion solar masses! ;>"
        );
    };

    const imageChanging = () => {
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

    const addingDecoration = () => {
        const decoration = document.querySelector(".js-sectionDecoration");
        decoration.classList.add("lineDecoration");
    };

    const addingText = () => {
        const catName = document.querySelector(".js-paragraphCat");
        catName.innerText = "Przyszywany brat - Rumcajs. Postrach wiewiórek!";
    };

    const hidingSquirrelImage = (buttonHideSquirrel) => {
        buttonHideSquirrel.remove();

        addingText();
        addingDecoration();
        imageChanging();
    };

    const switchingButtonText = (body, buttonSwitchMode) => {
        buttonSwitchMode.innerText = body.classList.contains("bodyLightTheme")
            ? "Ustaw ciemny motyw"
            : "Ustaw jasny motyw";
    };

    const changingFooterMode = () => {
        const endText = document.querySelector(".js-footerText");
        endText.classList.toggle("endTextLightTheme");
    };

    const changingHyperlinksMode = () => {
        const hyperlink = document.querySelectorAll(".js-hyperlink");
        hyperlink.forEach((element) => {
            element.classList.toggle("hyperlinkLightTheme");
        });
    };

    const changingHeadersMode = () => {
        const headline = document.querySelectorAll(".js-sectionHeadline");
        const tableHeader = document.querySelectorAll(".js-tableHeader");

        headline.forEach((element) => {
            element.classList.toggle("headlineLightTheme");
        });
        tableHeader.forEach((element) => {
            element.classList.toggle("tableHeaderLightTheme");
        });
    };

    const changingButtonsMode = (buttonSwitchMode, buttonHideSquirrel) => {
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

        changingButtonsMode(buttonSwitchMode, buttonHideSquirrel);
        changingHeadersMode();
        changingHyperlinksMode();
        changingFooterMode();
        switchingButtonText(body, buttonSwitchMode);
    };

    const init = () => {
        const buttonHideSquirrel = document.querySelector(
            ".js-buttonHideSquirrel"
        );
        const buttonSwitchMode = document.querySelector(".js-buttonSwitchMode");

        buttonHideSquirrel.addEventListener("click", () =>
            hidingSquirrelImage(buttonHideSquirrel)
        );
        buttonSwitchMode.addEventListener("click", () =>
            toggleLightMode(buttonSwitchMode, buttonHideSquirrel)
        );
        welcome();
    };

    init();
}
