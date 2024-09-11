function goToNextPage(isYes) {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    if (isYes) {
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
        addSparks('page2');
    } else {
        alert("Sorry, you don't have access.");
        page1.classList.add('blurred');
    }
}

function nextPage(nextPageId) {
    const currentPage = document.querySelector('.page:not(.hidden)');
    currentPage.classList.add('hidden');
    
    const nextPage = document.getElementById(nextPageId);
    nextPage.classList.remove('hidden');
    addSparks(nextPageId);
}

function addSparks(pageId) {
    const page = document.getElementById(pageId);
    const sparkContainer = page.querySelector('.sparks');
    sparkContainer.innerHTML = '';  // Clear previous sparks
    
    for (let i = 0; i < 50; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.left = Math.random() * 100 + 'vw';
        spark.style.top = Math.random() * 100 + 'vh';
        spark.style.animationDelay = Math.random() * 2 + 's';
        sparkContainer.appendChild(spark);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const sparkContainer = document.querySelector('.sparks');
    for (let i = 0; i < 100; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');
        spark.style.left = `${Math.random() * 100}vw`;
        spark.style.top = `${Math.random() * 100}vh`;
        spark.style.animationDelay = `${Math.random() * 2}s`;
        sparkContainer.appendChild(spark);
    }
});