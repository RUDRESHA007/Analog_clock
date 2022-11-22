setInterval(clock, 1000);
    function clock() {
        const hr = document.querySelector("#hour");
        const min = document.querySelector("#minute");
        const sec = document.querySelector("#second");
        const dt = document.querySelector("#day")


        const deg = 6;



        //1 minute = 60 second
        //1 rotetion = 360 degree
        //360/60 = 6 degree   => minute and seconds rotetion
        //1 second && 1 minute =>6 degree rotetin
        //1 day = 24 hour
        //in analog clock there are  2 equal part that is 12 hr equally
        //threfore    360/12 = 30 
        //1hour = 30 degree rotetion


        const time = new Date();
        //hour
        const hour = (time.getHours() - 12) * 30;
        //minute
        const minute = time.getMinutes() * deg;
        //second
        const second = time.getSeconds() * deg;
        //date
        const date = time.getDate();
        //month
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[time.getMonth()];
        //year
        const year = time.getFullYear();


        hr.style.transform = "rotate(" + (hour) + "deg)";
        min.style.transform = "rotate(" + minute + "deg)";
        sec.style.transform = "rotate(" + second + "deg)";
        dt.innerHTML = date + " " + month + " " + year;


    }
