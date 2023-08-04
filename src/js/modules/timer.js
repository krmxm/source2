const timer = (id, deadline) => {
    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              seconds = Math.floor((t/1000) % 60),
              minutes = Math.floor((t/1000/60) % 60),
              hours = Math.floor((t/1000/60/60) % 24),
              days = Math.floor((t/(1000*60*60*24)) % 24); 

        return {
            total: t,
            seconds,
            minutes,
            hours,
            days
        };
    };

    function zero(num) {
        if(num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }
    

    const setTime = (selector, endtime) => {
        const timer = document.querySelector(selector),
              seconds = timer.querySelector('#seconds'),
              minutes = timer.querySelector('#minutes'),
              hours = timer.querySelector('#hours'),
              days = timer.querySelector('#days'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            seconds.textContent = zero(t.seconds);
            minutes.textContent = zero(t.minutes);
            hours.textContent = zero(t.hours);
            days.textContent = zero(t.days);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        
        }
    };

    setTime(id, deadline);
};

export default timer;