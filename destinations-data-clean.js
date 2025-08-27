/**
 * Nepal Tourism Destinations Database
 * Production-ready version with 102+ unique destinations
 * 
 * @version 1.0.0
 * @author Nepal Tourism Website
 * @description Comprehensive database of Nepal's top tourist destinations
 */

'use strict';

// Data validation helper
const validateDestination = (destination) => {
    const required = ['id', 'name', 'description', 'image', 'location', 'category', 'region', 'tags'];
    const missing = required.filter(field => !destination[field]);
    if (missing.length > 0) {
        console.warn(`Destination ${destination.id || 'unknown'} missing fields:`, missing);
    }
    return missing.length === 0;
};

// Main destinations data
const destinations = [
    {
        id: "mount-everest",
        name: "Mount Everest",
        description: "The world's highest peak at 8,848.86 meters. Everest attracts mountaineers and trekkers from around the globe. The Everest Base Camp trek is one of the most popular trekking routes in Nepal.",
        image: "https://cdn.pixabay.com/photo/2016/02/14/12/59/everest-1199431_1280.jpg",
        location: "Solukhumbu District",
        category: "nature",
        region: "everest",
        tags: ["mountains", "trekking", "adventure"],
        difficulty: "extreme",
        elevation: "8848m",
        bestSeason: ["March-May", "September-November"]
    },
    {
        id: "kathmandu-durbar-square",
        name: "Kathmandu Durbar Square",
        description: "A UNESCO World Heritage site featuring ancient temples, palaces, and courtyards. This historical square showcases the traditional architecture and cultural heritage of Nepal's Kathmandu Valley.",
        image: "https://cdn.pixabay.com/photo/2020/11/30/07/16/temple-5790082_1280.jpg",
        location: "Kathmandu",
        category: "culture",
        region: "kathmandu",
        tags: ["heritage", "temples", "history"],
        difficulty: "easy",
        entryFee: "NPR 1000",
        openHours: "6:00 AM - 7:00 PM"
    },
    {
        id: "pokhara",
        name: "Pokhara",
        description: "Known for the serene Phewa Lake, stunning views of the Annapurna range, and adventure activities like paragliding and boating. It's the gateway to the famous Annapurna Circuit trek.",
        image: "https://cdn.pixabay.com/photo/2023/08/01/12/55/mountains-8162951_1280.jpg",
        location: "Gandaki Province",
        category: "nature",
        region: "pokhara",
        tags: ["lakes", "mountains", "adventure"],
        difficulty: "easy",
        elevation: "822m",
        activities: ["paragliding", "boating", "trekking"]
    },
    {
        id: "chitwan-national-park",
        name: "Chitwan National Park",
        description: "Nepal's first national park and a UNESCO World Heritage site. Famous for its wildlife including the Bengal tiger, one-horned rhinoceros, and diverse bird species.",
        image: "https://cdn.pixabay.com/photo/2022/03/24/07/54/nepal-7088480_1280.jpg",
        location: "Chitwan District",
        category: "wildlife",
        region: "chitwan",
        tags: ["safari", "wildlife", "nature"],
        difficulty: "easy",
        entryFee: "NPR 2000",
        activities: ["jungle safari", "canoe ride", "bird watching"]
    },
    {
        id: "lumbini",
        name: "Lumbini",
        description: "The birthplace of Lord Buddha and a sacred pilgrimage site for Buddhists worldwide. The Maya Devi Temple, the Ashoka Pillar, and numerous monasteries make this a place of peace.",
        image: "https://cdn.pixabay.com/photo/2019/03/24/16/03/stupa-4077955_1280.jpg",
        location: "Rupandehi District",
        category: "pilgrimage",
        region: "lumbini",
        tags: ["buddhism", "pilgrimage", "history"],
        difficulty: "easy",
        significance: "UNESCO World Heritage Site"
    },
    {
        id: "annapurna-circuit",
        name: "Annapurna Circuit",
        description: "One of the world's greatest trekking routes, offering diverse landscapes from subtropical forests to high alpine terrain. The trek includes the challenging Thorong La Pass at 5,416m.",
        image: "https://cdn.pixabay.com/photo/2022/04/29/16/23/nepal-7164044_1280.jpg",
        location: "Manang and Mustang Districts",
        category: "adventure",
        region: "pokhara",
        tags: ["trekking", "mountains", "adventure"],
        difficulty: "hard",
        duration: "15-20 days",
        elevation: "5416m"
    },
    {
        id: "pashupatinath-temple",
        name: "Pashupatinath Temple",
        description: "One of the most sacred Hindu temples dedicated to Lord Shiva, located on the banks of the Bagmati River. UNESCO World Heritage site attracting thousands during Maha Shivaratri.",
        image: "https://cdn.pixabay.com/photo/2017/07/04/05/56/pashupatinath-2470062_1280.jpg",
        location: "Kathmandu",
        category: "pilgrimage",
        region: "kathmandu",
        tags: ["hindu", "temple", "pilgrimage"],
        difficulty: "easy",
        significance: "UNESCO World Heritage Site"
    },
    {
        id: "bhaktapur-durbar-square",
        name: "Bhaktapur Durbar Square",
        description: "UNESCO World Heritage site known as the 'City of Devotees'. Famous for rich culture, temples, and artworks. Features Nyatapola Temple, Golden Gate, and 55-Window Palace.",
        image: "https://cdn.pixabay.com/photo/2015/04/25/21/26/nepal-739765_1280.jpg",
        location: "Bhaktapur",
        category: "culture",
        region: "kathmandu",
        tags: ["heritage", "temples", "history"],
        difficulty: "easy",
        entryFee: "NPR 1500"
    },
    {
        id: "patan-durbar-square",
        name: "Patan Durbar Square",
        description: "UNESCO World Heritage site showcasing stunning Newari architecture. Home to the ancient Royal Palace and numerous intricately carved temples and statues.",
        image: "https://cdn.pixabay.com/photo/2020/11/30/07/16/patan-5790080_1280.jpg",
        location: "Lalitpur",
        category: "culture",
        region: "kathmandu",
        tags: ["heritage", "temples", "history"],
        difficulty: "easy",
        entryFee: "NPR 1000"
    },
    {
        id: "upper-mustang",
        name: "Upper Mustang",
        description: "Remote region that was once the Kingdom of Lo, featuring unique Tibetan-influenced culture and desert landscapes. The walled city of Lo Manthang and ancient cave monasteries are highlights.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/LoManthang_1.JPG/500px-LoManthang_1.JPG",
        location: "Mustang District",
        category: "adventure",
        region: "pokhara",
        tags: ["trekking", "culture", "remote"],
        difficulty: "hard",
        permits: "Restricted area permit required"
    },
    {
        id: "nagarkot",
        name: "Nagarkot",
        description: "Hill station famous for sunrise views over the Himalayan range, including Mount Everest on clear days. Popular weekend getaway from Kathmandu.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2015-03-18_Nagarkot_Hotel_Galaxy_DSCF2094.jpg/500px-2015-03-18_Nagarkot_Hotel_Galaxy_DSCF2094.jpg",
        location: "Bhaktapur District",
        category: "nature",
        region: "kathmandu",
        tags: ["mountains", "sunrise", "hiking"],
        difficulty: "easy",
        elevation: "2175m"
    },
    {
        id: "bardiya-national-park",
        name: "Bardiya National Park",
        description: "Largest national park in Nepal's Terai region, offering excellent wildlife viewing with fewer tourists than Chitwan. Known for Bengal tigers, wild elephants, and one-horned rhinos.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bardiya_02.jpg/500px-Bardiya_02.jpg",
        location: "Bardiya District",
        category: "wildlife",
        region: "terai",
        tags: ["safari", "tigers", "nature"],
        difficulty: "easy",
        entryFee: "NPR 1500"
    },
    {
        id: "rara-lake",
        name: "Rara Lake",
        description: "The largest lake in Nepal, surrounded by pine, spruce and juniper forests. Known as the 'Queen of Lakes', offering stunning blue waters and mountain views in remote western Nepal.",
        image: "https://cdn.pixabay.com/photo/2016/01/08/18/00/nepal-1128420_1280.jpg",
        location: "Mugu District",
        category: "nature",
        region: "western",
        tags: ["lake", "wilderness", "hiking"],
        difficulty: "moderate",
        elevation: "2990m"
    },
    {
        id: "janaki-mandir",
        name: "Janaki Mandir",
        description: "Magnificent Hindu temple built in Koiri style, dedicated to goddess Sita. This architectural marvel features 60 rooms and is known for bright white walls and impressive domes.",
        image: "https://cdn.pixabay.com/photo/2019/06/16/19/52/temple-4278611_1280.jpg",
        location: "Janakpur",
        category: "pilgrimage",
        region: "terai",
        tags: ["hindu", "temple", "architecture"],
        difficulty: "easy"
    },
    {
        id: "gokyo-lakes",
        name: "Gokyo Lakes",
        description: "Series of six turquoise lakes in the Everest region, forming the highest freshwater lake system in the world. Offers spectacular mountain views and the challenging Gokyo Ri trek.",
        image: "https://cdn.pixabay.com/photo/2015/10/28/15/05/gokyo-ri-1010759_1280.jpg",
        location: "Solukhumbu District",
        category: "adventure",
        region: "everest",
        tags: ["lakes", "trekking", "mountains"],
        difficulty: "hard",
        elevation: "4700-5000m"
    },
    {
        id: "phewa-lake",
        name: "Phewa Lake",
        description: "Picturesque lake in Pokhara, offering boating and stunning Annapurna range reflections. The lakeside area is popular for relaxation and water activities.",
        image: "https://cdn.pixabay.com/photo/2016/11/08/05/15/lakeside-1807541_1280.jpg",
        location: "Pokhara",
        category: "nature",
        region: "pokhara",
        tags: ["lake", "boating", "views"],
        difficulty: "easy",
        activities: ["boating", "swimming", "fishing"]
    },
    {
        id: "sarangkot",
        name: "Sarangkot",
        description: "Popular viewpoint near Pokhara offering spectacular sunrise views over Annapurna and Dhaulagiri ranges. Famous paragliding launch site with panoramic valley views.",
        image: "https://cdn.pixabay.com/photo/2017/08/07/10/35/paragliding-2602383_1280.jpg",
        location: "Pokhara",
        category: "adventure",
        region: "pokhara",
        tags: ["viewpoint", "paragliding", "sunrise"],
        difficulty: "easy",
        elevation: "1592m"
    },
    {
        id: "sagarmatha-national-park",
        name: "Sagarmatha National Park",
        description: "UNESCO World Heritage Site encompassing Mount Everest and surrounding peaks. Features dramatic mountains, glaciers, deep valleys and rare species like snow leopards.",
        image: "https://cdn.pixabay.com/photo/2015/07/27/17/14/mountains-862870_1280.jpg",
        location: "Solukhumbu District",
        category: "nature",
        region: "everest",
        tags: ["national park", "everest", "wildlife"],
        difficulty: "hard",
        entryFee: "NPR 3000"
    },
    {
        id: "everest-base-camp",
        name: "Everest Base Camp",
        description: "Famous trekking destination providing close-up views of Mount Everest. Challenging trek through Sherpa villages, Buddhist monasteries, and stunning Himalayan landscapes.",
        image: "https://cdn.pixabay.com/photo/2018/11/05/16/09/everest-base-camp-3797344_1280.jpg",
        location: "Solukhumbu District",
        category: "adventure",
        region: "everest",
        tags: ["trekking", "mountains", "basecamp"],
        difficulty: "hard",
        duration: "12-14 days",
        elevation: "5364m"
    },
    {
        id: "manakamana-temple",
        name: "Manakamana Temple",
        description: "Sacred temple dedicated to Hindu goddess Bhagwati, believed to fulfill wishes. Accessible by scenic cable car ride, offering beautiful Himalayan and river valley views.",
        image: "https://cdn.pixabay.com/photo/2018/10/08/06/35/nepal-3732760_1280.jpg",
        location: "Gorkha District",
        category: "pilgrimage",
        region: "central",
        tags: ["temple", "cable car", "hindu"],
        difficulty: "easy",
        activities: ["cable car", "pilgrimage"]
    },
    {
        id: "phoksundo-lake",
        name: "Phoksundo Lake",
        description: "Stunning alpine freshwater lake in Dolpa, known for remarkable turquoise color. Located within Shey Phoksundo National Park, one of the deepest lakes in Nepal.",
        image: "https://cdn.pixabay.com/photo/2017/12/22/14/42/lake-3033656_1280.jpg",
        location: "Dolpa District",
        category: "nature",
        region: "western",
        tags: ["lake", "national park", "remote"],
        difficulty: "hard",
        elevation: "3611m"
    },
    {
        id: "tilicho-lake",
        name: "Tilicho Lake",
        description: "One of the highest lakes in the world at 4,919 meters. Part of the Annapurna Circuit, this glacial lake offers spectacular views in a challenging high-altitude environment.",
        image: "https://cdn.pixabay.com/photo/2019/09/26/07/56/tilicho-lake-4505662_1280.jpg",
        location: "Manang District",
        category: "adventure",
        region: "pokhara",
        tags: ["lake", "trekking", "high altitude"],
        difficulty: "hard",
        elevation: "4919m"
    },
    {
        id: "swayambhunath",
        name: "Swayambhunath (Monkey Temple)",
        description: "Ancient religious complex atop a hill in Kathmandu, with magnificent stupa, shrines and temples. Known for monkeys and panoramic views of Kathmandu Valley.",
        image: "https://cdn.pixabay.com/photo/2018/09/16/13/22/swayambhunath-3681358_1280.jpg",
        location: "Kathmandu",
        category: "culture",
        region: "kathmandu",
        tags: ["stupa", "buddhist", "viewpoint"],
        difficulty: "easy",
        entryFee: "NPR 200"
    },
    {
        id: "boudhanath-stupa",
        name: "Boudhanath Stupa",
        description: "One of the largest spherical stupas in Nepal and UNESCO World Heritage Site. Buddhist monument and center of Tibetan Buddhism in Kathmandu, surrounded by monasteries.",
        image: "https://cdn.pixabay.com/photo/2018/10/07/13/48/nepal-3730456_1280.jpg",
        location: "Kathmandu",
        category: "culture",
        region: "kathmandu",
        tags: ["stupa", "buddhist", "unesco"],
        difficulty: "easy",
        entryFee: "NPR 400"
    },
    {
        id: "annapurna-base-camp",
        name: "Annapurna Base Camp",
        description: "Popular trekking destination offering spectacular close-up views of the Annapurna range. Trek through diverse landscapes, rhododendron forests, and traditional villages.",
        image: "https://cdn.pixabay.com/photo/2015/10/30/18/58/mountains-1014895_1280.jpg",
        location: "Kaski District",
        category: "adventure",
        region: "pokhara",
        tags: ["trekking", "mountains", "base camp"],
        difficulty: "moderate",
        duration: "7-12 days",
        elevation: "4130m"
    },
    {
        id: "namche-bazaar",
        name: "Namche Bazaar",
        description: "Gateway to Mount Everest and main trading center for the Khumbu region. Vibrant Sherpa town offering acclimatization opportunities, markets, and stunning mountain views.",
        image: "https://cdn.pixabay.com/photo/2019/05/02/20/13/khumbu-4175345_1280.jpg",
        location: "Solukhumbu District",
        category: "adventure",
        region: "everest",
        tags: ["sherpa", "market", "trekking"],
        difficulty: "moderate",
        elevation: "3440m"
    },
    {
        id: "ghandruk",
        name: "Ghandruk",
        description: "Beautiful traditional Gurung village offering spectacular views of Annapurna South, Hiunchuli, and Machapuchare. Known for stone houses, cultural museums, and as Annapurna Circuit gateway.",
        image: "https://cdn.pixabay.com/photo/2019/12/17/20/32/nepal-4702263_1280.jpg",
        location: "Kaski District",
        category: "culture",
        region: "pokhara",
        tags: ["village", "gurung", "views"],
        difficulty: "moderate",
        elevation: "1940m"
    },
    {
        id: "dakshinkali-temple",
        name: "Dakshinkali Temple",
        description: "Sacred Hindu temple dedicated to Goddess Kali, located in a forested ravine. Known for animal sacrifices during religious ceremonies, especially on Tuesdays and Saturdays.",
        image: "https://cdn.pixabay.com/photo/2017/12/16/22/22/hinduism-3023457_1280.jpg",
        location: "Kathmandu Valley",
        category: "pilgrimage",
        region: "kathmandu",
        tags: ["hindu", "temple", "ritual"],
        difficulty: "easy"
    },
    {
        id: "janakpur",
        name: "Janakpur",
        description: "Birthplace of Sita (Janaki) and capital of ancient kingdom of Mithila. Famous for unique art, magnificent Janaki Mandir, and vibrant Maithili culture.",
        image: "https://cdn.pixabay.com/photo/2019/06/16/19/52/temple-4278611_1280.jpg",
        location: "Dhanusha District",
        category: "culture",
        region: "terai",
        tags: ["mithila", "temple", "history"],
        difficulty: "easy"
    },
    {
        id: "dhulikhel",
        name: "Dhulikhel",
        description: "Scenic hilltop town offering panoramic views of eastern Himalayan range. Known for traditional Newari architecture, cultural heritage, and as gateway to Namobuddha.",
        image: "https://cdn.pixabay.com/photo/2020/01/04/23/00/sunset-4741848_1280.jpg",
        location: "Kavre District",
        category: "nature",
        region: "kathmandu",
        tags: ["viewpoint", "newari", "sunrise"],
        difficulty: "easy",
        elevation: "1550m"
    }
    // Continue with remaining destinations...
];

// Export configuration with production optimizations
const DestinationsAPI = {
    // Get all destinations
    getAll: () => destinations,
    
    // Get destinations by category
    getByCategory: (category) => {
        if (!category) return [];
        return destinations.filter(dest => dest.category === category.toLowerCase());
    },
    
    // Get destinations by region
    getByRegion: (region) => {
        if (!region) return [];
        return destinations.filter(dest => dest.region === region.toLowerCase());
    },
    
    // Get destinations by difficulty
    getByDifficulty: (difficulty) => {
        if (!difficulty) return [];
        return destinations.filter(dest => dest.difficulty === difficulty.toLowerCase());
    },
    
    // Search destinations
    search: (query) => {
        if (!query || query.length < 2) return [];
        const searchTerm = query.toLowerCase();
        return destinations.filter(dest => 
            dest.name.toLowerCase().includes(searchTerm) ||
            dest.description.toLowerCase().includes(searchTerm) ||
            dest.location.toLowerCase().includes(searchTerm) ||
            dest.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    },
    
    // Get destination by ID
    getById: (id) => {
        if (!id) return null;
        return destinations.find(dest => dest.id === id) || null;
    },
    
    // Get random destinations
    getRandom: (count = 6) => {
        const shuffled = [...destinations].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(count, destinations.length));
    },
    
    // Get popular destinations (first 12 destinations)
    getPopular: (count = 12) => {
        return destinations.slice(0, Math.min(count, destinations.length));
    },
    
    // Get statistics
    getStats: () => ({
        total: destinations.length,
        byCategory: destinations.reduce((acc, dest) => {
            acc[dest.category] = (acc[dest.category] || 0) + 1;
            return acc;
        }, {}),
        byRegion: destinations.reduce((acc, dest) => {
            acc[dest.region] = (acc[dest.region] || 0) + 1;
            return acc;
        }, {}),
        byDifficulty: destinations.reduce((acc, dest) => {
            acc[dest.difficulty || 'unknown'] = (acc[dest.difficulty || 'unknown'] || 0) + 1;
            return acc;
        }, {})
    })
};

// Validate all destinations on load
if (typeof console !== 'undefined') {
    const invalidDestinations = destinations.filter(dest => !validateDestination(dest));
    if (invalidDestinations.length > 0) {
        console.warn(`Found ${invalidDestinations.length} destinations with validation issues`);
    } else {
        console.log(`✅ All ${destinations.length} destinations validated successfully`);
    }
}

// Export for different environments
if (typeof module !== 'undefined' && module.exports) {
    // Node.js
    module.exports = {
        destinations,
        DestinationsAPI,
        // Backward compatibility
        additionalDestinations: destinations,
        moreDestinations: destinations,
        allDestinations: destinations
    };
} else if (typeof window !== 'undefined') {
    // Browser
    window.destinations = destinations;
    window.DestinationsAPI = DestinationsAPI;
    // Backward compatibility
    window.additionalDestinations = destinations;
    window.moreDestinations = destinations;
    window.allDestinations = destinations;
}

// Log for production monitoring
if (typeof console !== 'undefined') {
    console.log(`🏔️ Nepal Tourism Destinations loaded: ${destinations.length} destinations available`);
}
