document.querySelectorAll(".bi-caret-down").forEach(drop => {
    drop.addEventListener("click", function () {
        const container = drop.closest(".container");
        const answer = container.querySelector(".answer");
        const upIcon = container.querySelector(".bi-caret-up");

        answer.classList.add("show");
        drop.style.display = "none";
        upIcon.style.display = "inline";
    });
});

document.querySelectorAll(".bi-caret-up").forEach(up => {
    up.addEventListener("click", function () {
        const container = up.closest(".container");
        const answer = container.querySelector(".answer");
        const downIcon = container.querySelector(".bi-caret-down");

        answer.classList.remove("show");
        up.style.display = "none";
        downIcon.style.display = "inline";
    });
});
