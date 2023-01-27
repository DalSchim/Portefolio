function toggleList() {
    // Récupère l'élément de la liste
    var list = document.getElementById("list");

    // Vérifie si la liste est cachée ou visible
    if (list.classList.contains("hidden")) {
        // Affiche la liste
        list.classList.remove("hidden");
    } else {
        // Cache la liste
        list.classList.add("hidden");
    }
}


window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}
// Lorsque l'utilisateur clique sur le bouton, retourne en haut de la page
document.getElementById("topBtn").addEventListener("click", function(){
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});


function previewImage(image) {
    var displayedImage = document.getElementById("displayed-image");
    displayedImage.src = image.src;
}

function previewImage2(image2) {
    var displayedImage2 = document.getElementById("displayed-image2");
    displayedImage2.src = image2.src;
}



