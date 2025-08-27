// More destinations for Nepal Tourism website
const moreDestinations = [
    {
        id: "namche-bazaar",
        name: "Namche Bazaar",
        description: "The gateway to Mount Everest and the main trading center for the Khumbu region. This vibrant Sherpa town offers acclimatization opportunities, markets, and stunning mountain views.",
        image: "https://cdn.pixabay.com/photo/2019/05/02/20/13/khumbu-4175345_1280.jpg",
        location: "Solukhumbu District",
        category: "adventure",
        region: "everest",
        tags: ["sherpa", "market", "trekking"]
    },
    {
        id: "ghandruk",
        name: "Ghandruk",
        description: "A beautiful traditional Gurung village offering spectacular views of Annapurna South, Hiunchuli, and Machapuchare. Known for its stone houses, cultural museums, and as a gateway to the Annapurna Circuit.",
        image: "https://cdn.pixabay.com/photo/2019/12/17/20/32/nepal-4702263_1280.jpg",
        location: "Kaski District",
        category: "culture",
        region: "pokhara",
        tags: ["village", "gurung", "views"]
    },
    {
        id: "bardia-national-park",
        name: "Bardia National Park",
        description: "Nepal's largest and most undisturbed wilderness area, home to endangered Royal Bengal tigers, rhinos, elephants, and many bird species. A paradise for wildlife enthusiasts seeking an authentic jungle experience.",
        image: "https://cdn.pixabay.com/photo/2014/07/31/23/10/tiger-407030_1280.jpg",
        location: "Bardia District",
        category: "wildlife",
        region: "terai",
        tags: ["safari", "tigers", "wilderness"]
    },
    {
        id: "dakshinkali-temple",
        name: "Dakshinkali Temple",
        description: "A sacred Hindu temple dedicated to Goddess Kali, located in a forested ravine. Known for animal sacrifices performed during religious ceremonies, especially on Tuesdays and Saturdays.",
        image: "https://cdn.pixabay.com/photo/2017/12/16/22/22/hinduism-3023457_1280.jpg",
        location: "Kathmandu Valley",
        category: "pilgrimage",
        region: "kathmandu",
        tags: ["hindu", "temple", "ritual"]
    },
    {
        id: "janakpur",
        name: "Janakpur",
        description: "The birthplace of Sita (Janaki) and capital of the ancient kingdom of Mithila. Famous for its unique art, the magnificent Janaki Mandir, and vibrant Maithili culture.",
        image: "https://cdn.pixabay.com/photo/2019/06/16/19/52/temple-4278611_1280.jpg",
        location: "Dhanusha District",
        category: "culture",
        region: "terai",
        tags: ["mithila", "temple", "history"]
    },
    {
        id: "dhulikhel",
        name: "Dhulikhel",
        description: "A scenic hilltop town offering panoramic views of the eastern Himalayan range. Known for its traditional Newari architecture, cultural heritage, and as a gateway to Namobuddha.",
        image: "https://cdn.pixabay.com/photo/2020/01/04/23/00/sunset-4741848_1280.jpg",
        location: "Kavre District",
        category: "nature",
        region: "kathmandu",
        tags: ["viewpoint", "newari", "sunrise"]
    },
    {
        id: "lo-manthang",
        name: "Lo Manthang",
        description: "The walled capital of the former Kingdom of Lo in Upper Mustang. This medieval settlement preserves unique Tibetan culture, ancient monasteries, and cave temples dating back to the 15th century.",
        image: "https://cdn.pixabay.com/photo/2017/06/21/09/19/nepal-2426884_1280.jpg",
        location: "Mustang District",
        category: "culture",
        region: "pokhara",
        tags: ["tibetan", "walled city", "remote"]
    },
    {
        id: "bhaktapur",
        name: "Bhaktapur",
        description: "An ancient Newari city known as the 'City of Devotees'. Famous for its rich cultural heritage, wood and stone craftsmanship, pottery squares, and traditional lifestyle.",
        image: "https://cdn.pixabay.com/photo/2019/05/01/11/44/nepal-4171438_1280.jpg",
        location: "Bhaktapur District",
        category: "culture",
        region: "kathmandu",
        tags: ["newari", "heritage", "pottery"]
    },
    {
        id: "shivapuri-national-park",
        name: "Shivapuri National Park",
        description: "A protected area on the northern fringe of Kathmandu Valley, offering diverse flora and fauna, hiking trails, and bird watching opportunities. Home to the Budhanilkantha temple and Shivapuri peak.",
        image: "https://cdn.pixabay.com/photo/2016/11/14/03/34/forest-1822640_1280.jpg",
        location: "Kathmandu District",
        category: "nature",
        region: "kathmandu",
        tags: ["hiking", "birdwatching", "forest"]
    },
    {
        id: "poon-hill",
        name: "Poon Hill",
        description: "A famous viewpoint in the Annapurna region offering spectacular sunrise views over the Himalayas. Part of the popular Ghorepani Poon Hill trek, accessible for various fitness levels.",
        image: "https://cdn.pixabay.com/photo/2017/08/11/08/01/poon-hill-2630567_1280.jpg",
        location: "Myagdi District",
        category: "nature",
        region: "pokhara",
        tags: ["viewpoint", "sunrise", "trekking"]
    },
    {
        id: "makalu-base-camp",
        name: "Makalu Base Camp",
        description: "A challenging trek to the base of the world's fifth highest mountain. This remote trail offers pristine wilderness, diverse ecosystems, and authentic cultural experiences in eastern Nepal.",
        image: "https://cdn.pixabay.com/photo/2017/08/06/12/52/mountains-2592611_1280.jpg",
        location: "Sankhuwasabha District",
        category: "adventure",
        region: "eastern",
        tags: ["trekking", "remote", "mountain"]
    },
    {
        id: "halesi-mahadev-temple",
        name: "Halesi Mahadev Temple",
        description: "A sacred cave temple dedicated to Lord Shiva, significant to both Hindus and Buddhists. Located inside a massive limestone cave, it's often called the 'Pashupatinath of Eastern Nepal'.",
        image: "https://cdn.pixabay.com/photo/2017/02/12/15/08/cave-2060390_1280.jpg",
        location: "Khotang District",
        category: "pilgrimage",
        region: "eastern",
        tags: ["cave", "hindu", "buddhist"]
    },
    {
        id: "gosainkunda-pass",
        name: "Gosainkunda Pass",
        description: "A challenging high-altitude pass connecting the Langtang and Helambu regions. The trek offers breathtaking alpine scenery and passes sacred lakes important in Hindu mythology.",
        image: "https://cdn.pixabay.com/photo/2015/04/30/09/53/nepal-746358_1280.jpg",
        location: "Rasuwa District",
        category: "adventure",
        region: "langtang",
        tags: ["trekking", "pass", "alpine"]
    },
    {
        id: "dolpa",
        name: "Dolpa",
        description: "One of Nepal's most remote and least developed regions, offering pristine landscapes and ancient cultures. Home to Shey Phoksundo National Park and the Bon religious tradition.",
        image: "https://cdn.pixabay.com/photo/2015/07/14/19/20/monastery-845258_1280.jpg",
        location: "Dolpa District",
        category: "adventure",
        region: "western",
        tags: ["remote", "culture", "wilderness"]
    },
    {
        id: "lumbini-peace-park",
        name: "Lumbini Peace Park",
        description: "A sacred garden surrounding the birthplace of Buddha, featuring monasteries built by various Buddhist countries, the Mayadevi Temple, and the Ashoka Pillar.",
        image: "https://cdn.pixabay.com/photo/2019/07/19/05/26/nepal-4347851_1280.jpg",
        location: "Rupandehi District",
        category: "pilgrimage",
        region: "lumbini",
        tags: ["buddhist", "peace", "garden"]
    },
    {
        id: "khumbu-glacier",
        name: "Khumbu Glacier",
        description: "The highest glacier in the world and part of the route to Mount Everest. This dramatic landscape of ice seracs, melt ponds, and moraines showcases the effects of climate change.",
        image: "https://cdn.pixabay.com/photo/2016/01/02/02/38/glacier-1117446_1280.jpg",
        location: "Solukhumbu District",
        category: "nature",
        region: "everest",
        tags: ["glacier", "trekking", "ice"]
    },
    {
        id: "deboche",
        name: "Deboche",
        description: "A serene village in the Everest region, home to a historic monastery for Buddhist nuns. Located in a beautiful rhododendron forest with magnificent views of Ama Dablam.",
        image: "https://cdn.pixabay.com/photo/2018/05/20/13/57/himalayas-3415936_1280.jpg",
        location: "Solukhumbu District",
        category: "pilgrimage",
        region: "everest",
        tags: ["monastery", "forest", "peaceful"]
    },
    {
        id: "thame",
        name: "Thame",
        description: "A traditional Sherpa village off the main Everest Base Camp route, birthplace of Tenzing Norgay. Known for its ancient monastery, traditional culture, and as part of the old salt trading route to Tibet.",
        image: "https://cdn.pixabay.com/photo/2017/12/10/15/54/nepal-3010502_1280.jpg",
        location: "Solukhumbu District",
        category: "culture",
        region: "everest",
        tags: ["sherpa", "monastery", "traditional"]
    },
    {
        id: "jomsom",
        name: "Jomsom",
        description: "The administrative headquarters of Mustang district, situated along the Kali Gandaki River. Known for its apple orchards, traditional Thakali cuisine, and as a gateway to Upper Mustang and Muktinath.",
        image: "https://cdn.pixabay.com/photo/2019/05/05/15/59/nepal-4181126_1280.jpg",
        location: "Mustang District",
        category: "culture",
        region: "pokhara",
        tags: ["thakali", "apple", "valley"]
    },
    {
        id: "kumari-ghar",
        name: "Kumari Ghar",
        description: "A historic building in Kathmandu where the living goddess Kumari resides. This ornately carved wooden palace symbolizes Nepal's unique tradition of worshipping a young girl as a living deity.",
        image: "https://cdn.pixabay.com/photo/2020/01/14/13/43/nepal-4765004_1280.jpg",
        location: "Kathmandu",
        category: "culture",
        region: "kathmandu",
        tags: ["living goddess", "tradition", "newari"]
    }
];

// Make the array available globally
if (typeof window !== 'undefined') {
    // For browser environments
    window.moreDestinations = moreDestinations;
} else if (typeof module !== 'undefined' && module.exports) {
    // For Node.js environments
    module.exports = { moreDestinations };
} 