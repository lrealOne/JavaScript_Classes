
const clockProject = () => {
    const getTimeSeconds = (seconds) => {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString("pt-Br", {
            hour12: false,
            timeZone: "UTC"
        });
    }

    const clock = document.querySelector(".timer");

    let seconds = 0;
    let timer;

    const startClock = () => {
        timer = setInterval(() => {
            seconds++;
            clock.innerHTML = getTimeSeconds(seconds);
        }, 1000)
        console.log("ok")
    }

    document.addEventListener("click", (event) => {
        const el = event.target;

        if (el.classList.contains("reset")){
            console.log("resetei");
            clock.innerHTML = "00:00:00";
            pauseClock(timer);
            clock.classList.remove("stop")
            seconds = 0;
        }

        if (el.classList.contains("start")){
            clearInterval(timer);
            console.log("startei");
            clock.classList.remove("stop")
            startClock();
        }

        if (el.classList.contains("pause")){
            console.log("pausei");
            pauseClock(timer);
            clock.classList.add("stop")
        }
    })

    const pauseClock = (timer) => {
        return clearInterval(timer);
    }
}

clockProject();