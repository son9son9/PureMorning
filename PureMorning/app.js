const topLogo = document.querySelector(".topLogoGroup .logo");
const mainPage = "./index.html";
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

topLogo.addEventListener(onclick, function() {
    location.href = mainPage;
    alert("test");
});

hour.append = 
function setOption(num) {
    let content = "<option value=''></option>";

    for (let i=1; i++; i<=num) {
        // 여기서부터 다시
    }

    return content;
};