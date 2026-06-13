// ===============================
// GSAP REGISTER
// ===============================

gsap.registerPlugin(ScrollTrigger);

// ===============================
// DOM LOADED
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    initTypedText();
    initEnterButton();
    initMusicPlayer();

    // Intro entrance animation
    gsap.from(".intro-content", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out"
    });
});

// ===============================
// PRELOADER
// ===============================

function initPreloader() {
    gsap.to(".loader-progress", {
        width: "100%",
        duration: 2.5,
        ease: "power2.inOut"
    });

    setTimeout(() => {
        gsap.to("#preloader", {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                document.getElementById("preloader").style.display = "none";
            }
        });
    }, 2800);
}

// ===============================
// TYPED TEXT
// ===============================

function initTypedText() {
    new Typed("#typed-text", {
        strings: [
            "I made something for you..."
        ],
        typeSpeed: 55,
        backSpeed: 0,
        startDelay: 600,
        showCursor: true,
        loop: false
    });
}

// ===============================
// ENTER BUTTON
// ===============================

function initEnterButton() {
    const enterBtn = document.getElementById("enter-btn");

    if (!enterBtn) return;

    enterBtn.addEventListener("click", () => {

        const timeline = gsap.timeline();

        timeline.to(".intro-content", {
            opacity: 0,
            y: -40,
            duration: 1,
            ease: "power3.inOut"
        });

        timeline.to("#intro-section", {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",

            onComplete: () => {
                document.getElementById("intro-section").style.display = "none";

                showLettersSection();
            }

        }, "-=0.6");

    });
}

// ===============================
// SHOW LETTERS SECTION
// ===============================

function showLettersSection() {

    const lettersSection = document.getElementById("letters-section");

    if (!lettersSection) return;

    gsap.set(lettersSection, {
        display: "block",
        opacity: 0,
        y: 80
    });

    gsap.to(lettersSection, {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out"
    });
}

// ===============================
// MUSIC PLAYER
// ===============================

function initMusicPlayer() {

    const musicButton = document.getElementById("music-toggle");

    if (!musicButton) return;

    const backgroundMusic = new Audio(
        "assets/audio/background.mp3"
    );

    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.4;

    let isPlaying = false;

    musicButton.addEventListener("click", () => {

        if (!isPlaying) {

            backgroundMusic.play().catch(err => {
                console.log("Music blocked:", err);
            });

            musicButton.innerHTML = "⏸";

            gsap.to(musicButton, {
                scale: 1.1,
                repeat: -1,
                yoyo: true,
                duration: 1
            });

        } else {

            backgroundMusic.pause();

            musicButton.innerHTML = "🎵";

            gsap.killTweensOf(musicButton);

            gsap.to(musicButton, {
                scale: 1
            });
        }

        isPlaying = !isPlaying;
    });
}
