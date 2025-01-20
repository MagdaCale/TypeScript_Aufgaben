const getInfoBtn = document.querySelector("#getInfoBtn") as HTMLButtonElement;
const ausgabe = document.querySelector("#ausgabe") as HTMLDivElement;
const deleteInfoBtn = document.querySelector("#deletInfo") as HTMLButtonElement;

const showWindowData = () => {
    const browserInfo = window.navigator;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    const colorDepth = window.screen.colorDepth;
    const pixelDepth = window.screen.pixelDepth;

    if (ausgabe) {
        ausgabe.innerHTML = `
            <p><strong>Browsername:</strong> ${browserInfo.appName}</p>
            <p><strong>Betriebssystem:</strong> ${browserInfo.platform}</p>
            <p><strong>Browser-Version:</strong> ${browserInfo.userAgent}</p>
            <p><strong>Window Auflösung:</strong> ${screenWidth} x ${screenHeight}</p>
            <p><strong>Innere Breite/Höhe:</strong> ${innerWidth} x ${innerHeight}</p>
            <p><strong>Color Depth:</strong> ${colorDepth}</p>
            <p><strong>Pixel Depth:</strong> ${pixelDepth}</p>
        `;
    }
}

const clearInfoData = () => {
    if (ausgabe) ausgabe.innerHTML = "";
}


getInfoBtn?.addEventListener("click", showWindowData);
deleteInfoBtn?.addEventListener("click", clearInfoData);