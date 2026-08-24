const PIXELFORGE_WHATSAPP = "919045470925";

const categories = {

    business: {

        eyebrow: "FOR BRANDS & COMPANIES",

        title: "Business Websites",

        description:
            "Professional digital spaces designed to make your business look credible, modern and trustworthy.",

        options: [

            {
                name: "Corporate Website",
                type: "BUSINESS",
                description:
                    "A polished multi-section website for established companies and organisations.",
                price: "From ₹4,999"
            },

            {
                name: "Agency Website",
                type: "BUSINESS",
                description:
                    "A bold portfolio-focused website for creative, marketing and service agencies.",
                price: "From ₹4,999"
            },

            {
                name: "Startup Website",
                type: "STARTUP",
                description:
                    "Modern landing-style website for startups and new businesses.",
                price: "From ₹3,999"
            },

            {
                name: "Service Business",
                type: "SERVICES",
                description:
                    "Lead-focused website for local businesses and professional services.",
                price: "From ₹2,999"
            }

        ]

    },


    lifestyle: {

        eyebrow: "FOR LIFESTYLE BRANDS",

        title: "Lifestyle Websites",

        description:
            "Visual websites created for brands where aesthetics, personality and customer experience matter.",

        options: [

            {
                name: "Salon Website",
                type: "BEAUTY",
                description:
                    "Services, pricing, gallery, offers, appointment and WhatsApp enquiry.",
                price: "From ₹2,999"
            },

            {
                name: "Fashion Website",
                type: "FASHION",
                description:
                    "Editorial-style website for fashion, clothing and lifestyle brands.",
                price: "From ₹4,999"
            },

            {
                name: "Gym & Fitness",
                type: "FITNESS",
                description:
                    "Plans, trainers, facilities, transformation gallery and enquiry sections.",
                price: "From ₹3,999"
            },

            {
                name: "Beauty Studio",
                type: "BEAUTY",
                description:
                    "Premium aesthetic website for makeup artists, nail artists and beauty studios.",
                price: "From ₹2,999"
            }

        ]

    },


    hospitality: {

        eyebrow: "FOR HOSPITALITY",

        title: "Hospitality Websites",

        description:
            "Immersive websites designed to make visitors want to book, visit or experience your brand.",

        options: [

            {
                name: "Restaurant Website",
                type: "FOOD",
                description:
                    "Menu, gallery, location, timings, offers and reservation enquiry.",
                price: "From ₹3,999"
            },

            {
                name: "Café Website",
                type: "CAFE",
                description:
                    "Aesthetic café website with menu, ambience gallery and contact options.",
                price: "From ₹2,999"
            },

            {
                name: "Hotel Website",
                type: "STAY",
                description:
                    "Rooms, amenities, gallery, location and booking enquiry sections.",
                price: "From ₹5,999"
            },

            {
                name: "Resort Website",
                type: "TRAVEL",
                description:
                    "Premium visual experience for resorts and destination properties.",
                price: "From ₹6,999"
            }

        ]

    },


    property: {

        eyebrow: "FOR PROPERTY",

        title: "Property Websites",

        description:
            "High-converting websites for real estate agents, property firms and architecture businesses.",

        options: [

            {
                name: "Real Estate Agency",
                type: "REAL ESTATE",
                description:
                    "Agency profile, featured properties, locations, enquiries and WhatsApp.",
                price: "From ₹5,999"
            },

            {
                name: "Property Listing",
                type: "PROPERTY",
                description:
                    "Property cards, filters, detailed listings and enquiry functionality.",
                price: "From ₹6,999"
            },

            {
                name: "Architect Portfolio",
                type: "ARCHITECTURE",
                description:
                    "Elegant project-focused portfolio for architects and design studios.",
                price: "From ₹4,999"
            },

            {
                name: "Interior Studio",
                type: "INTERIORS",
                description:
                    "Image-led portfolio showcasing interiors, projects and services.",
                price: "From ₹4,999"
            }

        ]

    },


    professional: {

        eyebrow: "FOR PROFESSIONALS",

        title: "Professional Websites",

        description:
            "Personal digital spaces that build trust and turn your expertise into opportunities.",

        options: [

            {
                name: "Personal Portfolio",
                type: "PORTFOLIO",
                description:
                    "Projects, skills, experience and contact information in one elegant website.",
                price: "From ₹2,999"
            },

            {
                name: "Doctor / Clinic",
                type: "HEALTHCARE",
                description:
                    "Services, doctor profile, timings, location and appointment enquiry.",
                price: "From ₹3,999"
            },

            {
                name: "Consultant Website",
                type: "PROFESSIONAL",
                description:
                    "Authority-focused website for consultants and independent professionals.",
                price: "From ₹3,999"
            },

            {
                name: "Creator Website",
                type: "CREATOR",
                description:
                    "Personal brand website for creators, influencers and freelancers.",
                price: "From ₹3,999"
            }

        ]

    },


    commerce: {

        eyebrow: "FOR SELLING ONLINE",

        title: "E-commerce Websites",

        description:
            "Online stores designed to showcase products beautifully and make shopping simple.",

        options: [

            {
                name: "Fashion Store",
                type: "E-COMMERCE",
                description:
                    "Product catalogue, collections, product pages and shopping experience.",
                price: "From ₹7,999"
            },

            {
                name: "Boutique Store",
                type: "E-COMMERCE",
                description:
                    "Elegant online boutique for clothing, accessories and lifestyle products.",
                price: "From ₹7,999"
            },

            {
                name: "Product Landing Page",
                type: "PRODUCT",
                description:
                    "High-converting single-product website for campaigns and launches.",
                price: "From ₹3,999"
            },

            {
                name: "Online Shop",
                type: "STORE",
                description:
                    "Complete product-focused website for small and growing businesses.",
                price: "From ₹7,999"
            }

        ]

    }

};


function openCategory(categoryName) {

    const category = categories[categoryName];

    if (!category) {
        return;
    }

    const modal =
        document.getElementById("categoryModal");

    const eyebrow =
        document.getElementById("modalEyebrow");

    const title =
        document.getElementById("modalTitle");

    const description =
        document.getElementById("modalDescription");

    const options =
        document.getElementById("websiteOptions");


    eyebrow.textContent = category.eyebrow;

    title.textContent = category.title;

    description.textContent = category.description;


    options.innerHTML = "";


    category.options.forEach(function(item) {

        const card =
            document.createElement("div");

        card.className = "website-option";


        const message =
            "Hi PixelForge! I am interested in the " +
            item.name +
            " website.";


        card.innerHTML = `

            <span>${item.type}</span>

            <h3>${item.name}</h3>

            <p>${item.description}</p>

            <div class="option-bottom">

                <span class="option-price">
                    ${item.price}
                </span>

                <a
                    class="option-button"
                    href="https://wa.me/${PIXELFORGE_WHATSAPP}?text=${encodeURIComponent(message)}"
                    target="_blank"
                >
                    Get This →
                </a>

            </div>

        `;


        options.appendChild(card);

    });


    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeCategory() {

    const modal =
        document.getElementById("categoryModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeCategory();

    }

});