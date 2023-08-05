const menuBtn = document.querySelector('.menu-btn-container');
const particle1 = document.querySelector('.p-1');
const particle2 = document.querySelector('.p-2');
const particle3 = document.querySelector('.p-3');
const particle4 = document.querySelector('.p-4');
const particle5 = document.querySelector('.p-5');
const particle6 = document.querySelector('.p-6');
const menuWrapper = document.querySelector('.menu-wrapper');
const menuIllus = document.querySelector('.menu-illus');
const menuHead = document.querySelector('.h-1');
const underline = document.querySelector('.underline-hide');
const leftBar = document.querySelector('.left-bar-hide');
const rightBar = document.querySelector('.right-bar-hide');
const menuContact = document.querySelector('.menu-contact-content');
const barcode = document.querySelector('.barcode');
const menuSocials = document.querySelector('.menu-socials');
const centerBar = document.querySelector('.center-bar');
const link1 = document.querySelector('.link-1');
const link2 = document.querySelector('.link-2');
const link3 = document.querySelector('.link-3');
const link4 = document.querySelector('.link-4');
const link5 = document.querySelector('.link-5');
const menuDate = document.querySelector('.menu-date-content');
const opacityFlicker = document.querySelector('.opacity-flicker');



//==Menu Transition on Click==//
menuBtn.addEventListener('click', function () {
    particle1.classList.toggle('p-1-active');
    particle2.classList.toggle('p-2-active');
    particle3.classList.toggle('p-3-active');
    particle4.classList.toggle('p-4-active');
    particle5.classList.toggle('p-5-active');
    particle6.classList.toggle('p-6-active');
    menuWrapper.classList.toggle('menu-wrapper-active');
    menuIllus.classList.toggle('menu-illus-active');
    menuHead.classList.toggle('h-1-active');
    underline.classList.toggle('underline-active');
    leftBar.classList.toggle('left-bar-active');
    rightBar.classList.toggle('right-bar-active');
    menuContact.classList.toggle('menu-contact-active');
    barcode.classList.toggle('barcode-active');
    menuSocials.classList.toggle('menu-social-active');
    centerBar.classList.toggle('center-bar-active');
    link1.classList.toggle('link-1-active');
    link2.classList.toggle('link-2-active');
    link3.classList.toggle('link-3-active');
    link4.classList.toggle('link-4-active');
    link5.classList.toggle('link-5-active');
    menuDate.classList.toggle('menu-date-content-active');
    opacityFlicker.classList.toggle('opacity-flicker-active');
});



//==============Menu-Date/Time==============//

function showDateTime() {
    var myDiv = document.getElementById("date-content");

    var date = new Date();
    var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var dayName = dayList[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var today = `${monthName} ${date.getDate()}`;

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var time = hour + ":" + min + ":" + sec;
    myDiv.innerText = `${today}, ${time}`;
}
setInterval(showDateTime, 1000);
