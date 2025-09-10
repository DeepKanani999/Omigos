// Dynamic Blog Details Handler
const blogDetailsData = {
    dubai: {
        title: "Unveiling the Hidden Magic of Dubai Nights",
        author: "Aarav .H",
        date: "25 january 2021",
        readTime: "3 min Read",
        comments: "03",
        mainImage: "assets/images/blog/blog-details-thumb1.jpg",
        content: {
            mainTitle: "Discover the Wonders of Dubai",
            intro: "Dubai is a city where innovation meets tradition — a dazzling destination of futuristic skyscrapers, golden deserts, and rich cultural heritage. Known as the \"City of Dreams,\" Dubai offers travelers a unique blend of luxury, adventure, and unforgettable experiences.",
            paragraph1: "From world-famous landmarks like the Burj Khalifa and Palm Jumeirah to vibrant souks, cultural festivals, desert safaris, and spectacular fireworks shows — every moment in Dubai feels extraordinary.",
            paragraph2: "Whether you're exploring fashion events, global fairs, sporting spectacles, or breathtaking parades, Dubai never fails to amaze. Each day here is like a blank canvas, filled with opportunities to create lasting memories."
        },
        packages: [
            { name: "Luxury Dubai Package", rating: "05 Star" },
            { name: "Desert Safari Tour", rating: "04 Star" },
            { name: "Dubai City Explorer", rating: "04 Star" },
            { name: "Marina & Downtown", rating: "05 Star" }
        ],
        relatedBlog: {
            image: "assets/images/blog/blog-three-thumb1.jpg",
            author: "Aarav .H",
            title: "Unveiling the Hidden Magic of Dubai Nights"
        },
        tags: ["Dubai", "Luxury", "Desert", "Adventure", "Culture"]
    },
    vietnam: {
        title: "Vietnam's Hidden Treasures: A Traveler's Guide",
        author: "Meera .K",
        date: "20 january 2021",
        readTime: "4 min Read",
        comments: "05",
        mainImage: "assets/images/blog/blog-details-thumb1.jpg",
        content: {
            mainTitle: "Explore Vietnam's Rich Heritage",
            intro: "Vietnam captivates visitors with its diverse landscapes, from mountain terraces in the north to the Mekong Delta in the south. This Southeast Asian gem offers a perfect blend of ancient traditions and modern vibrancy.",
            paragraph1: "From the emerald waters of Ha Long Bay to the bustling streets of Ho Chi Minh City, Vietnam provides unforgettable experiences. Sample authentic pho and banh mi, explore ancient temples, and cruise through limestone karsts.",
            paragraph2: "Immerse yourself in a culture that beautifully blends French colonial influences with traditional Vietnamese heritage. Every corner tells a story of resilience, beauty, and timeless charm."
        },
        packages: [
            { name: "Ha Long Bay Cruise", rating: "05 Star" },
            { name: "Hanoi Heritage Tour", rating: "04 Star" },
            { name: "Mekong Delta Explorer", rating: "04 Star" },
            { name: "Hoi An Ancient Town", rating: "05 Star" }
        ],
        relatedBlog: {
            image: "assets/images/blog/blog-three-thumb2.jpg",
            author: "Meera .K",
            title: "Vietnam's Hidden Treasures: A Traveler's Guide"
        },
        tags: ["Vietnam", "Culture", "Heritage", "Food", "Adventure"]
    },
    thailand: {
        title: "Thailand Beyond Beaches: Culture & Traditions",
        author: "Rohan .H",
        date: "18 january 2021",
        readTime: "5 min Read",
        comments: "07",
        mainImage: "assets/images/blog/blog-details-thumb1.jpg",
        content: {
            mainTitle: "Discover Thailand's Cultural Wonders",
            intro: "Thailand is much more than pristine beaches and tropical paradise. This land of smiles offers a rich tapestry of cultural experiences, ancient traditions, and spiritual journeys that captivate every traveler.",
            paragraph1: "Explore magnificent temples like Wat Pho and Wat Arun, experience traditional Thai festivals, and witness the intricate art of Thai dance and music. From bustling floating markets to serene meditation retreats, Thailand's cultural depth is endless.",
            paragraph2: "Savor authentic Thai cuisine beyond the tourist trails, learn traditional crafts from local artisans, and participate in Buddhist ceremonies. Thailand's cultural heritage provides a transformative travel experience that goes far beyond its famous beaches."
        },
        packages: [
            { name: "Bangkok Temple Tour", rating: "04 Star" },
            { name: "Cultural Immersion", rating: "05 Star" },
            { name: "Traditional Crafts", rating: "03 Star" },
            { name: "Spiritual Journey", rating: "05 Star" }
        ],
        relatedBlog: {
            image: "assets/images/blog/blog-three-thumb3.jpg",
            author: "Rohan .H",
            title: "Thailand Beyond Beaches: Culture & Traditions"
        },
        tags: ["Thailand", "Culture", "Temples", "Tradition", "Spirituality"]
    }
};

// Function to get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to get blog from localStorage (fallback)
function getBlogFromStorage() {
    return localStorage.getItem('selectedBlog') || 'dubai';
}

// Function to update blog details content
function updateBlogDetailsContent() {
    // Get blog from URL parameter or localStorage
    let blog = getUrlParameter('blog') || getBlogFromStorage();
    blog = blog.toLowerCase();
    
    // Default to Dubai if blog not found
    if (!blogDetailsData[blog]) {
        blog = 'dubai';
    }
    
    const data = blogDetailsData[blog];
    
    // Update page title
    document.title = `${data.title} - Travelor`;
    
    // Update breadcrumb
    const breadcrumbTitle = document.querySelector('.breadcrumb-title');
    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = 'Blog Details';
    }
    
    // Update main blog content
    const mainTitle = document.querySelector('.blog-details-area h3');
    if (mainTitle) {
        mainTitle.textContent = data.content.mainTitle;
    }
    
    // Update content paragraphs
    const contentParagraphs = document.querySelectorAll('.blog-details-area .fw-medium');
    if (contentParagraphs.length >= 3) {
        contentParagraphs[0].textContent = data.content.intro;
        contentParagraphs[1].textContent = data.content.paragraph1;
        contentParagraphs[2].textContent = data.content.paragraph2;
    }
    
    // Update packages section
    const packagesList = document.querySelector('.catagori-link');
    if (packagesList && data.packages) {
        packagesList.innerHTML = '';
        data.packages.forEach(pkg => {
            const listItem = document.createElement('li');
            listItem.className = 'tw-mb-13';
            listItem.innerHTML = `
                <a class="d-flex align-items-center justify-content-between text-body" href="#">
                    ${pkg.name} <span>${pkg.rating}</span>
                </a>
            `;
            packagesList.appendChild(listItem);
        });
    }
    
    // Update related blog section
    const relatedBlogImage = document.querySelector('.blog-three-thumb img');
    if (relatedBlogImage) {
        relatedBlogImage.src = data.relatedBlog.image;
    }
    
    const relatedBlogAuthor = document.querySelector('.blog-three-meta li');
    if (relatedBlogAuthor) {
        relatedBlogAuthor.innerHTML = `
            <span class="tw-text-xl text-main-600 d-inline-block lh-1">
                <i class="ph ph-user-circle"></i>
            </span>
            ${data.relatedBlog.author}
        `;
    }
    
    const relatedBlogTitle = document.querySelector('.blog-three-title a');
    if (relatedBlogTitle) {
        relatedBlogTitle.textContent = data.relatedBlog.title;
    }
    
    // Update tags section
    const tagsContainer = document.querySelector('.sidebar-tag .d-flex.align-items-center.flex-wrap');
    if (tagsContainer && data.tags) {
        // Keep existing tags and add blog-specific ones
        const existingTags = tagsContainer.innerHTML;
        const blogTags = data.tags.map(tag => 
            `<a href="blog.html" class="tw-px-5 tw-py-2 bg-white border border-neutral-100 hover-bg-main-600 tw-rounded-lg hover-border-main-600 hover-text-white text-main-600 tw-text-sm text-capitalize fw-medium">${tag}</a>`
        ).join('');
        
        // Replace first few tags with blog-specific ones
        tagsContainer.innerHTML = blogTags;
    }
}

// Function to set blog and navigate
function setBlogAndNavigate(blog) {
    localStorage.setItem('selectedBlog', blog);
    window.location.href = `blog-details.html?blog=${blog}`;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateBlogDetailsContent();
});

// Export function for use in other scripts
window.setBlogAndNavigate = setBlogAndNavigate;
