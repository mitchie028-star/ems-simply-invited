document.getElementById("tagline").textContent =
invitation.tagline;

document.getElementById("subtitle").textContent =
invitation.subtitle;

document.getElementById("celebrant").textContent =
invitation.celebrant;

document.getElementById("occasion").textContent =
invitation.occasion;

document.getElementById("date").textContent =
invitation.date;

document.getElementById("time").textContent =
invitation.time;

document.getElementById("venue").textContent =
invitation.venue;


const video =
document.querySelector(".background-video");


video.addEventListener("timeupdate", () => {

    if (
        video.currentTime >= invitation.revealTime
    ) {

        document
            .querySelector(".hero-top")
            .classList.add("show");


        document
            .querySelector(".hero-bottom")
            .classList.add("show");

    }

});
