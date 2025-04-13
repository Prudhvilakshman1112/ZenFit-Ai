document.addEventListener('DOMContentLoaded', () => {
    const introPage = document.getElementById('intro-page');
    const mainPage = document.getElementById('main-page');
    const selectionPage = document.getElementById('selection-page');
    const getStartedButton = document.getElementById('get-started');

    // Intro page click handler
    introPage.addEventListener('click', () => {
        introPage.style.transform = 'scale(1.5)';
        introPage.style.opacity = '0';
        
        setTimeout(() => {
            introPage.classList.remove('active');
            mainPage.classList.add('active');
            
            // Animate content entrance
            const physicalSide = document.querySelector('.split.physical');
            const mentalSide = document.querySelector('.split.mental');
            
            physicalSide.style.animation = 'slideInLeft 1s ease-out forwards';
            mentalSide.style.animation = 'slideInRight 1s ease-out forwards';
        }, 500);
    });

    // Get Started button click handler
    getStartedButton.addEventListener('click', () => {
        mainPage.style.transform = 'scale(0.8)';
        mainPage.style.opacity = '0';
        
        setTimeout(() => {
            mainPage.classList.remove('active');
            selectionPage.classList.add('active');
            
            // Animate cards entrance
            const cards = document.querySelectorAll('.bot-card');
            cards.forEach((card, index) => {
                card.style.animation = `fadeInScale 0.5s ease-out ${index * 0.2}s forwards`;
            });
        }, 500);
    });

    // Add hover effect to feature list items
    const featureItems = document.querySelectorAll('.feature-list li');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });

    // Add hover effect to bot cards
    const botCards = document.querySelectorAll('.bot-card');
    botCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05) translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) translateY(0)';
        });
    });
});