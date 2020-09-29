const menuItems = Array.from(document.getElementById('menu-list').children);
const sections = Array.from(document.getElementById('sections').children);
const timeSection = document.getElementById('timeSection');
const dateSection = document.getElementById('dateSection');
const noteSection = document.getElementById('noteSection');
const weatherSection = document.getElementById('weatherSection');
const gameSection = document.getElementById('gameSection');

menuItems.forEach(item => item.addEventListener('click', toggleActiveTab));
sections.forEach(item => item.addEventListener('click', toggleActiveTab));

function toggleActiveTab(event) {
    if ( event.target.className.split(" ")[1] === timeSection.className.split(" ")[1] ) {
        timeSection.classList.add('active');
    } else {
        timeSection.classList.remove('active');
    }
    if ( event.target.className.split(" ")[1] === dateSection.className.split(" ")[1] ) {
        dateSection.classList.add('active');
    } else {
        dateSection.classList.remove('active');
    }
    if ( event.target.className.split(" ")[1] === noteSection.className.split(" ")[1] ) {
        noteSection.classList.add('active');
    } else {
        noteSection.classList.remove('active');
    }
    if ( event.target.className.split(" ")[1] === weatherSection.className.split(" ")[1] ) {
        weatherSection.classList.add('active');
    } else {
        weatherSection.classList.remove('active');
    }
    if ( event.target.className.split(" ")[1] === gameSection.className.split(" ")[1] ) {
        gameSection.classList.add('active');
    } else {
        gameSection.classList.remove('active');
    }
}

