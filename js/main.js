const TIME = document.querySelector('.clock_main_time');
const DATA = document.querySelector('.clock_main_data');
const HOURLINE = document.querySelector('.clock_center_hour_line');
const MINLINE = document.querySelector('.clock_center_min_line');
const SECLIN = document.querySelector('.clock_center_sec_line');
const DCSS = window.StyleSheet[0];

; (function () {
    setInterval(() => {
        const data = new Date();
        HOURLINE.style.transform = `rotate(${formatAMPM(new Date) * 30}deg)`;
        MINLINE.style.transform = `rotate(${data.getMinutes() * 6}deg)`;
        SECLIN.style.transform = `rotate(${data.getSeconds() * 6}deg)`

        const [week, month, date, year] = data.toDateString().split(' ')
        DATA.innerText = `${date} ${month}, ${year}`

        const HOUR = data.getHours().toString().padStart(2, '0');
        const MIN = data.getMinutes().toString().padStart(2, '0');
        TIME.innerText = `${HOUR}:${MIN}`;
    }, 1000);


}());


function formatAMPM(date) {
    var hours = date.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours;
}
