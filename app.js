const topLogo = document.querySelector(".topLogoGroup .logo");
const mainPage = "./index.html";
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

// 메인 로고 클릭 시 홈화면으로 이동
topLogo.addEventListener(onclick, function() {
    location.href = mainPage;
    alert("test");
});

function setOptionHour() {
    let option = document.createElement("option");
    for (let i=1; i++; i<=12) {
        option.text = i;
        option.value = i;
        hour.options.add(option);
    }
};

function setOptionMinute() {
    for (let i=1; i++; i<=60) {
        let option = document.createElement("option");
        option.text = i;
        option.value = i;
        minute.options.add(option);
    }
};
// hour, minute 셀렉트 옵션 추가
// setOptionHour();
// setOptionMinute();