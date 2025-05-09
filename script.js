// Animasi: buat teks muncul perlahan dari bawah
gsap.registerPlugin(ScrollTrigger);

gsap.from(".fade-left", {
    scrollTrigger: ".fade-left",
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power2.out"
  });
  
  gsap.from(".fade-right", {
    scrollTrigger: ".fade-right",
    x: 100,
    opacity: 0,
    duration: 2,
    ease: "power2.out"
  });
  
  gsap.from(".keterangan1", {
    y: 50,           // geser dari bawah 50px
    opacity: 0,      // mulai dari transparan
    duration: 1.2    // selama 1.2 detik
  });

  gsap.from(".judul", {
    y: 50,           // geser dari bawah 50px
    opacity: 0,      // mulai dari transparan
    duration: 1.2,    // selama 1.2 detik
    delay:0.5
  });
  
  gsap.from(".deskripsi", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    delay: 1       // muncul setengah detik setelah judul
  });
  
  gsap.from(".acara", {
    scrollTrigger: ".acara", // elemen yang memicu
    y: 50,
    opacity: 0,
    duration: 2.5,
  });
  
  gsap.from(".scroll-hint", {
    y: 50,           // geser dari bawah 50px
    opacity: 0,      // mulai dari transparan
    duration: 1.2,    // selama 1.2 detik
    delay:2
  })
  
  gsap.to(".scroll-hint", {
    scrollTrigger: {
      trigger: ".acara", // ketika bagian acara muncul
      start: "top 80%",
      once: true
      
    },
    opacity: 0,
    duration: 0.5,
    pointerEvents: "none"
  });

const sliderContainer = document.querySelector(".slider-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.addEventListener("click", () => {
  sliderContainer.scrollBy({ left: -320, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  sliderContainer.scrollBy({ left: 320, behavior: "smooth" });
});
