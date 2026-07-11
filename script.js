// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 80){
        header.style.background = "#000";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.3)";
    }else{
        header.style.background = "#111";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";
    }
});

// Reveal animation
const cards = document.querySelectorAll(
'.about-card,.service-card,.why-card,.industry,.stat'
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".6s";

observer.observe(card);

});
