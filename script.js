const shareIconOne = document.querySelector('.share-icon-one');
const bottomDiv = document.querySelector('.bottom-div');
const socialMediaDiv = document.querySelector('.social-media-div');

function toggleSocialMedia() {
    if (window.matchMedia('(max-width: 500px)').matches) {
        
        if (socialMediaDiv.classList.contains('show')) {
            socialMediaDiv.classList.remove('show');
            bottomDiv.style.display = 'flex';  
        } else {
            socialMediaDiv.classList.add('show');
            bottomDiv.style.display = 'none';  
        }
    }
}


shareIconOne.addEventListener('click', toggleSocialMedia);

// Aseguramos que si el mouse sale del div de social media, se oculte
socialMediaDiv.addEventListener('mouseout', () => {
    socialMediaDiv.classList.remove('show');
    bottomDiv.style.display = 'flex';  // Reaparecer el bottom div
});

// Para la versión desktop: cuando el mouse está sobre el shareIconOne, mostramos el socialMediaDiv
function showSocialMedia() {
    if (window.matchMedia('(min-width: 601px)').matches) {
        socialMediaDiv.classList.add('show');
    }
}

function hideSocialMedia() {
    if (window.matchMedia('(min-width: 600px)').matches) {
        socialMediaDiv.classList.remove('show');
    }
}

shareIconOne.addEventListener('mouseover', showSocialMedia);
shareIconOne.addEventListener('mouseout', hideSocialMedia);

socialMediaDiv.addEventListener('mouseout', hideSocialMedia);
socialMediaDiv.addEventListener('mouseover', showSocialMedia);


