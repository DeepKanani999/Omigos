// Dynamic Destination Details Handler
const destinationData = {
    thailand: {
        hashtag: "#Thailand",
        title: "Explore Thailand for more fun!",
        shortDescription: "Discover the magic of Thailand, where golden temples, tropical beaches, and bustling street markets await you.",
        longDescription: "Thailand is a land of smiles, culture, and adventure. Explore ancient temples, cruise through floating markets, and relax on white sandy beaches. Savor authentic Thai cuisine, experience warm hospitality, and discover why Thailand is one of the world's favorite travel destinations.",
        detailedDescription: "Thailand is a traveler's paradise filled with adventure, culture, and relaxation. Visit ancient temples, cruise through floating markets, trek lush green forests, and savor mouthwatering Thai cuisine. Whether you're seeking vibrant nightlife, peaceful beaches, or cultural wonders, Thailand has something for everyone.",
        heroImage: "assets/images/destination/destination-details-thumb.jpg",
        galleryImages: [
            "assets/images/destination/destination-details-gallery1.jpg",
            "assets/images/destination/destination-details-gallery2.jpg"
        ],
        blogTitle: "Thailand Beyond Beaches: Culture & Traditions",
        blogImage: "assets/images/blog/blog-three-thumb3.jpg",
        blogAuthor: "Rohan .H",
        places: [
            { name: "Explore Bangkok", rating: "04 Star" },
            { name: "Explore Pattaya", rating: "05 Star" }
        ]
    },
    vietnam: {
        hashtag: "#Vietnam",
        title: "Discover Vietnam's Hidden Treasures!",
        shortDescription: "Experience the beauty of Vietnam, from stunning Ha Long Bay to bustling Ho Chi Minh City and ancient Hoi An.",
        longDescription: "Vietnam is a country of breathtaking landscapes, rich history, and incredible cuisine. From the emerald waters of Ha Long Bay to the bustling streets of Hanoi, Vietnam offers unforgettable experiences for every traveler.",
        detailedDescription: "Vietnam captivates visitors with its diverse landscapes, from mountain terraces in the north to the Mekong Delta in the south. Explore ancient temples, cruise through limestone karsts, sample pho and banh mi, and immerse yourself in a culture that beautifully blends tradition with modernity.",
        heroImage: "assets/images/destination/destination-details-thumb.jpg",
        galleryImages: [
            "assets/images/destination/vietnam-destination-details-thumb1.jpg",
            "assets/images/destination/vietnam-destination-details-thumb2.jpg"
        ],
        blogTitle: "Vietnam's Hidden Treasures: A Traveler's Guide",
        blogImage: "assets/images/blog/blog-three-thumb2.jpg",
        blogAuthor: "Meera .K",
        places: [
            { name: "Explore Hanoi", rating: "04 Star" },
            { name: "Explore Ho Chi Minh", rating: "05 Star" }
        ]
    },
    dubai: {
        hashtag: "#Dubai",
        title: "Experience Dubai's Luxury & Adventure!",
        shortDescription: "Discover Dubai's perfect blend of modern luxury, traditional culture, and thrilling adventures in the desert and city.",
        longDescription: "Dubai is a dazzling metropolis where futuristic skyscrapers meet traditional souks, and luxury shopping coexists with desert adventures. Experience world-class dining, stunning architecture, and warm Arabian hospitality.",
        detailedDescription: "Dubai offers an extraordinary mix of experiences - from shopping in world's largest malls to exploring traditional gold and spice souks, from dining at Michelin-starred restaurants to enjoying desert safaris. The city's iconic skyline, pristine beaches, and cultural attractions make it a must-visit destination.",
        heroImage: "assets/images/destination/destination-details-thumb.jpg",
        galleryImages: [
            "assets/images/destination/dubai-destination-details-thumb1.jpg",
            "assets/images/destination/dubai-destination-details-thumb2.jpg"
        ],
        blogTitle: "Unveiling the Hidden Magic of Dubai Nights",
        blogImage: "assets/images/blog/blog-three-thumb1.jpg",
        blogAuthor: "Aarav .H",
        places: [
            { name: "Explore Downtown Dubai", rating: "05 Star" },
            { name: "Explore Dubai Marina", rating: "05 Star" }
        ]
    }
};

// Function to get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to get destination from localStorage (fallback)
function getDestinationFromStorage() {
    return localStorage.getItem('selectedDestination') || 'thailand';
}

// Function to update page content
function updateDestinationContent() {
    // Get destination from URL parameter or localStorage
    let destination = getUrlParameter('destination') || getDestinationFromStorage();
    destination = destination.toLowerCase();
    
    // Default to Thailand if destination not found
    if (!destinationData[destination]) {
        destination = 'thailand';
    }
    
    const data = destinationData[destination];
    
    // Update page title
    document.title = `${data.title} - Travelor`;
    
    // Update hashtag
    const hashtagElement = document.querySelector('.destination-details-user');
    if (hashtagElement) {
        hashtagElement.textContent = data.hashtag;
    }
    
    // Update main title
    const titleElement = document.querySelector('.char-animation');
    if (titleElement) {
        titleElement.textContent = data.title;
    }
    
    // Update short description
    const shortDescElements = document.querySelectorAll('p');
    if (shortDescElements.length > 0) {
        // Find the paragraph that contains the short description
        for (let p of shortDescElements) {
            if (p.textContent.includes('Discover the magic') || p.textContent.includes('Experience the beauty') || p.textContent.includes('Discover Dubai')) {
                p.textContent = data.shortDescription;
                break;
            }
        }
    }
    
    // Update long descriptions
    const longDescElements = document.querySelectorAll('.destination-details-paragraph');
    if (longDescElements.length >= 1) {
        longDescElements[0].textContent = data.longDescription;
    }
    if (longDescElements.length >= 2) {
        longDescElements[1].textContent = data.detailedDescription;
    }
    
    // Update blog section
    const blogTitleElement = document.querySelector('.blog-three-title a');
    if (blogTitleElement) {
        blogTitleElement.textContent = data.blogTitle;
    }
    
    const blogImageElement = document.querySelector('.blog-three-thumb img');
    if (blogImageElement) {
        blogImageElement.src = data.blogImage;
    }
    
    const blogAuthorElement = document.querySelector('.blog-three-meta li');
    if (blogAuthorElement) {
        blogAuthorElement.innerHTML = `<span class="tw-text-xl text-main-600 d-inline-block lh-1"><i class="ph ph-user-circle"></i></span> ${data.blogAuthor}`;
    }
    
    // Update places list
    const placesList = document.querySelector('.destination-details-list ul');
    if (placesList && data.places) {
        placesList.innerHTML = '';
        data.places.forEach(place => {
            const listItem = document.createElement('li');
            listItem.className = 'tw-mb-6';
            listItem.innerHTML = `
                <a class="d-flex align-items-center justify-content-between text-body" href="#">
                    ${place.name}
                </a>
            `;
            placesList.appendChild(listItem);
        });
    }
    
    // Update breadcrumb
    const breadcrumbTitle = document.querySelector('.breadcrumb-title');
    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = destination.charAt(0).toUpperCase() + destination.slice(1);
    }
}

// Function to set destination and navigate
function setDestinationAndNavigate(destination) {
    localStorage.setItem('selectedDestination', destination);
    window.location.href = `destination-details.html?destination=${destination}`;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateDestinationContent();
});

// Export function for use in other scripts
window.setDestinationAndNavigate = setDestinationAndNavigate;
