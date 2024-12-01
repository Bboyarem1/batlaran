const apiKey = 'f781595a3184777fa4312e1701d028d4'; 
const city = 'Stockholm'; 
const units = 'metric'; 
const lang = 'sv'; 

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === 200) {
            const temperature = data.main.temp; 
            const description = data.weather[0].description; 
            
            
            document.getElementById('weather-info').innerHTML = `
                ${city}: ${temperature}°C, ${description}
            `;
        } else {
            document.getElementById('weather-info').innerText = 'Kunde inte hämta väderdata.';
        }
    } catch (error) {
        console.error('Fel vid hämtning av väderdata:', error);
        document.getElementById('weather-info').innerText = 'Något gick fel.';
    }
}

// Kör funktionen när sidan laddas
fetchWeather();




const dynamicTxt = document.querySelector('.dynamic-txt');
const words = ['Vattenskoter', 'Fritidsbåt', 'Kustskepparintyg']; 
let wordIndex = 0; 
let charIndex = 0; 
let isDeleting = false; 

function typeEffect() {
    const currentWord = words[wordIndex];
    const displayedText = currentWord.slice(0, charIndex);


    dynamicTxt.textContent = displayedText;

    if (!isDeleting) {
        
        if (charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = true;
            setTimeout(typeEffect, 1000); 
        }
    } else {
        
        if (charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50); 
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500); 
        }
    }
}


typeEffect();

let currentPage = 0; 
const pages = document.querySelectorAll('.kurs-boxar .page');
const dots = document.querySelectorAll('.dot');

function changePage(direction) {
    const current = pages[currentPage]; 
    let nextPageIndex = currentPage + direction;

  
    if (nextPageIndex >= pages.length) {
        nextPageIndex = 0; 
    } else if (nextPageIndex < 0) {
        nextPageIndex = pages.length - 1;
    }

    const next = pages[nextPageIndex]; 

    
    if (direction === 1) {
        current.classList.add('exit-left'); 
    } else {
        current.classList.add('exit-right'); 
    }

    
    setTimeout(() => {
        current.classList.remove('active', 'exit-left', 'exit-right'); // Dölj nuvarande
        next.classList.add('active'); // Gör nästa synlig efter övergången
        currentPage = nextPageIndex; // Uppdatera aktuell sida

        
        updateDots();
    }, 200); 
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPage);
    });
}


document.querySelector('.prev').addEventListener('click', () => changePage(-1));
document.querySelector('.next').addEventListener('click', () => changePage(1));

pages[currentPage].classList.add('active');
updateDots();



const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuLinks = document.querySelector('.menu-links');

hamburgerIcon.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
});


















