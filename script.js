let scrollContainer = document.querySelector('.gallery');
let backBtn = document.querySelector('#backBtn');
let nextBtn = document.querySelector('#nextBtn');

let isAutoScrolling = true;
let left;

function startAutoScroll() {
    if (isAutoScrolling) {
       if(scrollContainer.scrollLeft >= 900) left = true;
        if(scrollContainer.scrollLeft <= 0) left = false;
        if (!left) {
            scrollContainer.scrollLeft += 2;
        } else {
            scrollContainer.scrollLeft -= 2;
        }
        requestAnimationFrame(startAutoScroll);
    }
}

function pauseAutoScroll() {
    isAutoScrolling = false;
    setTimeout(() => {
        isAutoScrolling = true;
        startAutoScroll();
    }, 3000);
}

scrollContainer.addEventListener('wheel', function (e) {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
    
});

backBtn.addEventListener('click', function (e) {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 1000;
    console.log(scrollContainer.scrollLeft);
    pauseAutoScroll();
});

nextBtn.addEventListener('click', function (e) {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 1000;
    console.log(scrollContainer.scrollLeft);
    pauseAutoScroll();
});

startAutoScroll();