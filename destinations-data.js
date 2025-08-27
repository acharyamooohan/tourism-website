// ========================================
// UNIFIED NEPAL DESTINATIONS DATA
// All destination data consolidated from script.js, destinations-data.js, and more-destinations.js
// ========================================

// MAIN DESTINATIONS (from script.js)
const destinations = [
    {
        id: "mount-everest",
        name: "Mount Everest",
        description: "The world's highest peak at 8,848.86 meters. Everest attracts mountaineers and trekkers from around the globe. The Everest Base Camp trek is one of the most popular trekking routes in Nepal.",
        image: "https://cdn.pixabay.com/photo/2016/02/14/12/59/everest-1199431_1280.jpg",
        location: "Solukhumbu District",
        category: "nature",
        region: "everest",
        tags: ["mountains", "trekking", "adventure"]
    },
    {
        id: "kathmandu-durbar-square",
        name: "Kathmandu Durbar Square",
        description: "A UNESCO World Heritage site featuring ancient temples, palaces, and courtyards. This historical square showcases the traditional architecture and cultural heritage of Nepal's Kathmandu Valley.",
        image: "https://cdn.pixabay.com/photo/2020/11/30/07/16/temple-5790082_1280.jpg",
        location: "Kathmandu",
        category: "culture",
        region: "kathmandu",
        tags: ["heritage", "temples", "history"]
    },
    {
        id: "pokhara",
        name: "Pokhara",
        description: "Known for the serene Phewa Lake, stunning views of the Annapurna range, and adventure activities like paragliding and boating. It's the gateway to the famous Annapurna Circuit trek.",
        image: "https://cdn.pixabay.com/photo/2023/08/01/12/55/mountains-8162951_1280.jpg",
        location: "Gandaki Province",
        category: "nature",
        region: "pokhara",
        tags: ["lakes", "mountains", "adventure"]
    },
    {
        id: "chitwan-national-park",
        name: "Chitwan National Park",
        description: "Nepal's first national park and a UNESCO World Heritage site. Famous for its wildlife including the Bengal tiger, one-horned rhinoceros, and diverse bird species. Visitors can enjoy jungle safaris, canoeing, and cultural experiences.",
        image: "https://cdn.pixabay.com/photo/2022/03/24/07/54/nepal-7088480_1280.jpg",
        location: "Chitwan District",
        category: "wildlife",
        region: "chitwan",
        tags: ["safari", "wildlife", "nature"]
    },
    {
        id: "lumbini",
        name: "Lumbini",
        description: "The birthplace of Lord Buddha and a sacred pilgrimage site for Buddhists worldwide. The Maya Devi Temple, the Ashoka Pillar, and numerous monasteries built by different Buddhist countries make this a place of peace and significance.",
        image: "https://cdn.pixabay.com/photo/2019/03/24/16/03/stupa-4077955_1280.jpg",
        location: "Rupandehi District",
        category: "pilgrimage",
        region: "lumbini",
        tags: ["buddhism", "pilgrimage", "history"]
    },
    {
        id: "annapurna-circuit",
        name: "Annapurna Circuit",
        description: "One of the world's greatest trekking routes, offering diverse landscapes, from subtropical forests to high alpine terrain. The trek takes you through traditional villages, past the world's deepest gorge, and over the challenging Thorong La Pass (5,416m).",
        image: "https://cdn.pixabay.com/photo/2022/04/29/16/23/nepal-7164044_1280.jpg",
        location: "Manang and Mustang Districts",
        category: "adventure",
        region: "pokhara",
        tags: ["trekking", "mountains", "adventure"]
    },
    {
        id: "pashupatinath-temple",
        name: "Pashupatinath Temple",
        description: "One of the most sacred Hindu temples dedicated to Lord Shiva, located on the banks of the Bagmati River. This UNESCO World Heritage site attracts thousands of pilgrims during festivals like Maha Shivaratri.",
        image: "https://cdn.pixabay.com/photo/2017/07/04/05/56/pashupatinath-2470062_1280.jpg",
        location: "Kathmandu",
        category: "pilgrimage",
        region: "kathmandu",
        tags: ["hindu", "temple", "pilgrimage"]
    },
    {
        id: "bhaktapur-durbar-square",
        name: "Bhaktapur Durbar Square",
        description: "A UNESCO World Heritage site known as the 'City of Devotees'. Famous for its rich culture, temples, wood, metal, and stone artworks. The Nyatapola Temple, Golden Gate, and 55-Window Palace are key attractions.",
        image: "https://cdn.pixabay.com/photo/2015/04/25/21/26/nepal-739765_1280.jpg",
        location: "Bhaktapur",
        category: "culture",
        region: "kathmandu",
        tags: ["heritage", "temples", "history"]
    },
    {
        id: "patan-durbar-square",
        name: "Patan Durbar Square",
        description: "A UNESCO World Heritage site known for its stunning display of Newari architecture. The square is home to the ancient Royal Palace and numerous intricately carved temples and statues.",
        image: "https://cdn.pixabay.com/photo/2020/11/30/07/16/patan-5790080_1280.jpg",
        location: "Lalitpur",
        category: "culture",
        region: "kathmandu",
        tags: ["heritage", "temples", "history"]
    },
    {
        id: "upper-mustang",
        name: "Upper Mustang",
        description: "A remote and mystical region that was once the Kingdom of Lo, featuring a unique Tibetan-influenced culture and stunning desert-like landscapes. The walled city of Lo Manthang and ancient cave monasteries are highlights.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/LoManthang_1.JPG/500px-LoManthang_1.JPG",
        location: "Mustang District",
        category: "adventure",
        region: "pokhara",
        tags: ["trekking", "culture", "remote"]
    },
    {
        id: "nagarkot",
        name: "Nagarkot",
        description: "A hill station famous for its sunrise views over the Himalayan range, including Mount Everest on clear days. A popular weekend getaway from Kathmandu.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2015-03-18_Nagarkot_Hotel_Galaxy_DSCF2094.jpg/500px-2015-03-18_Nagarkot_Hotel_Galaxy_DSCF2094.jpg",
        location: "Bhaktapur District",
        category: "nature",
        region: "kathmandu",
        tags: ["mountains", "sunrise", "hiking"]
    },
    {
        id: "bardiya-national-park",
        name: "Bardiya National Park",
        description: "The largest national park in Nepal's Terai region, offering excellent wildlife viewing opportunities with fewer tourists than Chitwan. Known for Bengal tigers, wild elephants, and one-horned rhinos.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bardiya_02.jpg/500px-Bardiya_02.jpg",
        location: "Bardiya District",
        category: "wildlife",
        region: "terai",
        tags: ["safari", "tigers", "nature"]
    },

    // MORE DESTINATIONS FROM SCRIPT.JS
    {
        id: "rara-lake",
        name: "Rara Lake",
        description: "The largest lake in Nepal, surrounded by pine, spruce and juniper forests. Known as the 'Queen of Lakes', Rara offers stunning blue waters and mountain views in remote western Nepal.",
        image: "https://cdn.pixabay.com/photo/2016/01/08/18/00/nepal-1128420_1280.jpg",
        location: "Mugu District",
        category: "nature",
        region: "western",
        tags: ["lake", "wilderness", "hiking"]
    },
    {
        id: "janaki-mandir",
        name: "Janaki Mandir",
        description: "A magnificent Hindu temple built in Koiri style, dedicated to goddess Sita. This architectural marvel features 60 rooms and is known for its bright white walls and impressive domes.",
        image: "https://cdn.pixabay.com/photo/2019/06/16/19/52/temple-4278611_1280.jpg",
        location: "Janakpur",
        category: "pilgrimage",
        region: "terai",
        tags: ["hindu", "temple", "architecture"]
    },
    {
        id: "gokyo-lakes",
        name: "Gokyo Lakes",
        description: "A series of six turquoise lakes in the Everest region, forming the highest freshwater lake system in the world. The area offers spectacular mountain views and the challenging Gokyo Ri trek.",
        image: "https://cdn.pixabay.com/photo/2015/10/28/15/05/gokyo-ri-1010759_1280.jpg",
        location: "Solukhumbu District",
        category: "adventure",
        region: "everest",
        tags: ["lakes", "trekking", "mountains"]
    },

    // FINAL DESTINATIONS FROM SCRIPT.JS  
    {
        id: "phewa-lake",
        name: "Phewa Lake",
        description: "A picturesque lake in Pokhara, offering boating and stunning views of the Annapurna range reflected in its waters. The lakeside area is popular for relaxation and water activities.",
        image: "https://cdn.pixabay.com/photo/2016/11/08/05/15/lakeside-1807541_1280.jpg",
        location: "Pokhara",
        category: "nature",
        region: "pokhara",
        tags: ["lake", "boating", "views"]
    },
    {
        id: "sarangkot",
        name: "Sarangkot",
        description: "A popular viewpoint near Pokhara offering spectacular sunrise views over the Annapurna and Dhaulagiri ranges. Also famous as a paragliding launch site with panoramic valley views.",
        image: "https://cdn.pixabay.com/photo/2017/08/07/10/35/paragliding-2602383_1280.jpg",
        location: "Pokhara",
        category: "adventure",
        region: "pokhara",
        tags: ["viewpoint", "paragliding", "sunrise"]
    },
    {
        id: "sagarmatha-national-park",
        name: "Sagarmatha National Park",
        description: "A UNESCO World Heritage Site encompassing Mount Everest and surrounding peaks. The park features dramatic mountains, glaciers, deep valleys and is home to rare species like the snow leopard.",
        image: "https://cdn.pixabay.com/photo/2015/07/27/17/14/mountains-862870_1280.jpg",
        location: "Solukhumbu District",
        category: "nature",
        region: "everest",
        tags: ["national park", "everest", "wildlife"]
    },
    {
        id: "everest-base-camp",
        name: "Everest Base Camp",
        description: "The famous trekking destination providing close-up views of Mount Everest. This challenging trek takes you through Sherpa villages, Buddhist monasteries, and stunning Himalayan landscapes.",
        image: "https://cdn.pixabay.com/photo/2018/11/05/16/09/everest-base-camp-3797344_1280.jpg",
        location: "Solukhumbu District",
        category: "adventure",
        region: "everest",
        tags: ["trekking", "mountains", "basecamp"]
    },

    // ADDITIONAL DESTINATIONS (originally from destinations-data.js)
    {
        id: "manakamana-temple",
        name: "Manakamana Temple",
        description: "A sacred temple dedicated to the Hindu goddess Bhagwati, believed to fulfill wishes. Accessible by a scenic cable car ride, offering beautiful views of the Himalayas and river valleys.",
        image: "https://cdn.pixabay.com/photo/2018/10/08/06/35/nepal-3732760_1280.jpg",
        location: "Gorkha District",
        category: "pilgrimage",
        region: "central",
        tags: ["temple", "cable car", "hindu"]
    },
    {
        id: "phoksundo-lake",
        name: "Phoksundo Lake",
        description: "A stunning alpine freshwater lake in Dolpa, known for its remarkable turquoise color. Located within Shey Phoksundo National Park, it's one of the deepest lakes in Nepal.",
        image: "https://cdn.pixabay.com/photo/2017/12/22/14/42/lake-3033656_1280.jpg",
        location: "Dolpa District",
        category: "nature",
        region: "western",
        tags: ["lake", "national park", "remote"]
    },
    {
        id: "tilicho-lake",
        name: "Tilicho Lake",
        description: "One of the highest lakes in the world at an altitude of 4,919 meters. Part of the Annapurna Circuit, this glacial lake offers spectacular views in a challenging high-altitude environment.",
        image: "https://cdn.pixabay.com/photo/2019/09/26/07/56/tilicho-lake-4505662_1280.jpg",
        location: "Manang District",
        category: "adventure",
        region: "pokhara",
        tags: ["lake", "trekking", "high altitude"]
    },
    {
        id: "swayambhunath",
        name: "Swayambhunath (Monkey Temple)",
        description: "An ancient religious complex atop a hill in Kathmandu, with a magnificent stupa, shrines and temples. Known for the many monkeys that live in parts of the temple, it offers panoramic views of Kathmandu Valley.",
        image: "https://cdn.pixabay.com/photo/2018/09/16/13/22/swayambhunath-3681358_1280.jpg",
        location: "Kathmandu",
        category: "culture",
        region: "kathmandu",
        tags: ["stupa", "buddhist", "viewpoint"]
    },
    {
        id: "boudhanath-stupa",
        name: "Boudhanath Stupa",
        description: "One of the largest spherical stupas in Nepal and a UNESCO World Heritage Site. This Buddhist monument is a center of Tibetan Buddhism in Kathmandu, surrounded by monasteries and shops.",
        image: "https://cdn.pixabay.com/photo/2018/10/07/13/48/nepal-3730456_1280.jpg",
        location: "Kathmandu",
        category: "culture",
        region: "kathmandu",
        tags: ["stupa", "buddhist", "unesco"]
    },
    {
        id: "annapurna-base-camp",
        name: "Annapurna Base Camp",
        description: "A popular trekking destination offering spectacular close-up views of the Annapurna range. This trek takes you through diverse landscapes, rhododendron forests, and traditional villages.",
        image: "https://cdn.pixabay.com/photo/2015/10/30/18/58/mountains-1014895_1280.jpg",
        location: "Kaski District",
        category: "adventure",
        region: "pokhara",
        tags: ["trekking", "mountains", "base camp"]
    },

    // MORE DESTINATIONS (originally from more-destinations.js)
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

    // ADDITIONAL DESTINATIONS FROM ORIGINAL FILES
    {
        id: "kanchenjunga-base-camp",
        name: "Kanchenjunga Base Camp",
        description: "A remote trekking route leading to the base of the world's third-highest mountain. This challenging trek offers pristine natural beauty and cultural experiences in eastern Nepal.",
        image: "https://cdn.pixabay.com/photo/2019/05/15/08/09/range-4204398_1280.jpg",
        location: "Taplejung District",
        category: "adventure",
        region: "eastern",
        tags: ["trekking", "mountains", "remote"]
    },
    {
        id: "gosaikunda-lake",
        name: "Gosaikunda Lake",
        description: "A sacred alpine freshwater lake in Langtang National Park. This high-altitude lake at 4,380 meters is important in Hindu mythology and surrounded by breathtaking mountain scenery.",
        image: "https://cdn.pixabay.com/photo/2017/06/05/15/53/mountains-2374312_1280.jpg",
        location: "Rasuwa District",
        category: "pilgrimage",
        region: "langtang",
        tags: ["lake", "trekking", "hindu"]
    },
    {
        id: "changu-narayan",
        name: "Changu Narayan Temple",
        description: "The oldest Hindu temple in Nepal, dedicated to Lord Vishnu. This UNESCO World Heritage site features some of the finest stone, wood, and metal craftsmanship in the Kathmandu Valley.",
        image: "https://images.unsplash.com/photo-1617469864031-45aff49e5005?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        location: "Bhaktapur",
        category: "culture",
        region: "kathmandu",
        tags: ["temple", "hindu", "unesco"]
    },
    {
        id: "langtang-valley",
        name: "Langtang Valley",
        description: "A beautiful valley north of Kathmandu offering excellent trekking opportunities. Known for its diverse flora and fauna, traditional Tamang villages, and stunning Himalayan views.",
        image: "https://cdn.pixabay.com/photo/2018/04/18/20/05/panorama-3331261_1280.jpg",
        location: "Rasuwa District",
        category: "adventure",
        region: "langtang",
        tags: ["trekking", "valley", "mountains"]
    },
    {
        id: "tengboche-monastery",
        name: "Tengboche Monastery",
        description: "The largest monastery in the Everest region, offering spectacular views of Mount Everest, Lhotse, and Ama Dablam. An important spiritual center for the Sherpa people.",
        image: "https://cdn.pixabay.com/photo/2017/09/06/18/22/monastery-2722197_1280.jpg",
        location: "Solukhumbu District",
        category: "pilgrimage",
        region: "everest",
        tags: ["monastery", "buddhist", "mountains"]
    },
    {
        id: "muktinath-temple",
        name: "Muktinath Temple",
        description: "A sacred place for both Hindus and Buddhists, located at an altitude of 3,710 meters. Famous for its 108 water spouts and natural gas flames that burn continuously.",
        image: "https://cdn.pixabay.com/photo/2019/06/30/10/15/nepal-4307597_1280.jpg",
        location: "Mustang District",
        category: "pilgrimage",
        region: "pokhara",
        tags: ["temple", "hindu", "buddhist"]
    },
    {
        id: "dhaulagiri",
        name: "Dhaulagiri",
        description: "The seventh highest mountain in the world at 8,167 meters. Offers challenging climbing experiences and stunning treks around its base, including the Dhaulagiri Circuit.",
        image: "https://cdn.pixabay.com/photo/2018/08/06/08/27/dhaulagiri-3587287_1280.jpg",
        location: "Myagdi District",
        category: "adventure",
        region: "pokhara",
        tags: ["mountain", "climbing", "trekking"]
    },
    {
        id: "bandipur",
        name: "Bandipur",
        description: "A charming hilltop settlement preserving Newari architecture and culture. This pedestrian-only town offers beautiful mountain views and a glimpse into Nepal's traditional lifestyle.",
        image: "https://cdn.pixabay.com/photo/2019/05/05/15/32/nepal-4181077_1280.jpg",
        location: "Tanahun District",
        category: "culture",
        region: "central",
        tags: ["newari", "architecture", "viewpoint"]
    },
    {
        id: "ilam-tea-gardens",
        name: "Ilam Tea Gardens",
        description: "Famous tea plantations in eastern Nepal producing some of the finest orthodox tea. The rolling hills covered with tea bushes create a picturesque landscape reminiscent of Darjeeling.",
        image: "https://cdn.pixabay.com/photo/2020/08/09/14/25/tea-garden-5475440_1280.jpg",
        location: "Ilam District",
        category: "nature",
        region: "eastern",
        tags: ["tea", "hills", "plantation"]
    },

    // COMPLETE DESTINATIONS FROM SCRIPT.JS
    {
        id: "dharan",
        name: "Dharan",
        description: "A city blending diverse cultures, known for its temples and tea gardens. Located at the foothills of the Himalayas, it has a unique blend of hill and plains cultures with excellent views of the mountains.",
        image: "https://cdn.pixabay.com/photo/2018/09/26/14/13/temple-3704268_1280.jpg",
        location: "Sunsari District",
        category: "culture",
        region: "eastern",
        tags: ["city", "temples", "multicultural"]
    },
    {
        id: "gorkha-durbar",
        name: "Gorkha Durbar",
        description: "A historical palace complex with significance to Nepal's unification. This hilltop fortress was the seat of the Shah dynasty that unified Nepal and offers panoramic views of the surrounding valleys.",
        image: "https://cdn.pixabay.com/photo/2018/11/05/15/54/nepal-3797263_1280.jpg",
        location: "Gorkha District",
        category: "culture",
        region: "central",
        tags: ["palace", "history", "viewpoint"]
    },
    {
        id: "tansen",
        name: "Tansen",
        description: "A hill station known for its ancient architecture and panoramic views. This traditional Newari town offers beautiful views of the Himalayas and is famous for Dhaka fabric and metal crafts.",
        image: "https://cdn.pixabay.com/photo/2019/09/01/22/06/palace-4446221_1280.jpg",
        location: "Palpa District",
        category: "culture",
        region: "western",
        tags: ["newari", "handicrafts", "views"]
    },
    {
        id: "daman",
        name: "Daman",
        description: "Offers panoramic views of the entire Himalayan range. On clear days, this hill station provides views of mountains from Dhaulagiri in the west to Everest in the east through mounted telescopes.",
        image: "https://cdn.pixabay.com/photo/2018/02/01/14/09/panorama-3123513_1280.jpg",
        location: "Makwanpur District",
        category: "nature",
        region: "central",
        tags: ["viewpoint", "hiking", "panorama"]
    },
    {
        id: "helambu",
        name: "Helambu",
        description: "A region offering short treks through Sherpa villages and orchards. Known for its scenic beauty, Buddhist monasteries, and the unique Hyolmo culture, it's an accessible trekking destination near Kathmandu.",
        image: "https://cdn.pixabay.com/photo/2016/01/13/00/18/nepal-1137206_1280.jpg",
        location: "Sindhupalchok District",
        category: "adventure",
        region: "langtang",
        tags: ["trekking", "sherpa", "monasteries"]
    },

    // ADDITIONAL DESTINATIONS TO REACH 100+
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
    },
    {
        id: "shuklaphanta-national-park",
        name: "Shuklaphanta National Park",
        description: "A protected area known for its large grasslands and wildlife. Home to Nepal's largest herd of swamp deer, as well as tigers, elephants, and over 400 species of birds.",
        image: "https://cdn.pixabay.com/photo/2017/05/09/01/31/elephant-in-the-wild-2296926_1280.jpg",
        location: "Far-Western Nepal",
        category: "wildlife",
        region: "far-western",
        tags: ["grassland", "safari", "wildlife"]
    },
    {
        id: "shey-phoksundo-national-park",
        name: "Shey Phoksundo National Park",
        description: "Nepal's largest national park featuring the stunning turquoise Phoksundo Lake. The park encompasses Trans-Himalayan ecosystem and preserves rare snow leopards, blue sheep, and Tibetan cultural heritage.",
        image: "https://cdn.pixabay.com/photo/2018/12/15/16/07/phoksundo-lake-3877943_1280.jpg",
        location: "Dolpa District",
        category: "nature",
        region: "western",
        tags: ["lake", "national park", "wildlife"]
    },
    {
        id: "parsa-national-park",
        name: "Parsa National Park",
        description: "A wildlife reserve connecting to Chitwan, forming a vast protected ecosystem. The park is primarily comprised of Sal forests and serves as an important corridor for wildlife movement.",
        image: "https://cdn.pixabay.com/photo/2020/02/23/08/54/landscape-4873098_1280.jpg",
        location: "Central Terai",
        category: "wildlife",
        region: "central",
        tags: ["forest", "wildlife", "conservation"]
    },
    {
        id: "shivapuri-nagarjun-national-park",
        name: "Shivapuri Nagarjun National Park",
        description: "A protected forest area on the northern fringe of Kathmandu Valley. This watershed area supplies drinking water to Kathmandu and offers hiking opportunities with panoramic views of the valley.",
        image: "https://cdn.pixabay.com/photo/2018/01/30/13/08/nepal-3118474_1280.jpg",
        location: "Kathmandu Valley",
        category: "nature",
        region: "kathmandu",
        tags: ["hiking", "forest", "birdwatching"]
    },
    {
        id: "pathivara-temple",
        name: "Pathivara Temple",
        description: "A sacred Hindu temple dedicated to goddess Pathivara, located at 3,794 meters in eastern Nepal. Pilgrims visit this site for blessings and spiritual fulfillment.",
        image: "https://cdn.pixabay.com/photo/2020/03/04/07/05/pagoda-4900449_1280.jpg",
        location: "Taplejung District",
        category: "pilgrimage",
        region: "eastern",
        tags: ["temple", "hindu", "mountain"]
    },
    {
        id: "khaptad-national-park",
        name: "Khaptad National Park",
        description: "A protected area renowned for its unique flora, rolling meadows, and religious significance. Features highland meadows, diverse forests, and the ashram of Khaptad Baba, a revered sage.",
        image: "https://cdn.pixabay.com/photo/2018/11/15/05/03/nepal-3817041_1280.jpg",
        location: "Far-Western Nepal",
        category: "nature",
        region: "far-western",
        tags: ["meadows", "spiritual", "trekking"]
    },
    {
        id: "krishna-mandir",
        name: "Krishna Mandir",
        description: "An ancient stone temple dedicated to Lord Krishna in Patan Durbar Square. Built in the 17th century, this Shikhara-style temple is famous for its 21 spires and exquisite stone carvings.",
        image: "https://cdn.pixabay.com/photo/2018/05/25/06/23/patan-3428963_1280.jpg",
        location: "Patan",
        category: "culture",
        region: "kathmandu",
        tags: ["temple", "architecture", "hindu"]
    },
    {
        id: "lumbini-peace-pagoda",
        name: "Lumbini Peace Pagoda",
        description: "A white stupa built to promote peace in Buddha's birthplace. One of the World Peace Pagodas built under the guidance of Japanese Buddhist monk Nichidatsu Fujii.",
        image: "https://cdn.pixabay.com/photo/2018/04/14/09/35/lumbini-3318550_1280.jpg",
        location: "Lumbini",
        category: "pilgrimage",
        region: "lumbini",
        tags: ["buddhist", "stupa", "peace"]
    },
    {
        id: "vajra-jogini-temple",
        name: "Vajra Jogini Temple",
        description: "An ancient temple complex dedicated to the Tantric goddess Vajra Jogini. Located in Sankhu, this important religious site features ornate woodcarvings and hosts vibrant festivals.",
        image: "https://cdn.pixabay.com/photo/2016/11/21/13/29/temple-1845453_1280.jpg",
        location: "Sankhu, Kathmandu",
        category: "pilgrimage",
        region: "kathmandu",
        tags: ["tantric", "temple", "goddess"]
    },
    {
        id: "machhapuchhre-base-camp",
        name: "Machhapuchhre Base Camp",
        description: "A scenic viewpoint offering close-up views of the sacred Fishtail Mountain. Located at 3,700m, this base camp is part of the Annapurna Sanctuary and provides panoramic mountain vistas.",
        image: "https://cdn.pixabay.com/photo/2017/08/07/01/16/mountains-2598417_1280.jpg",
        location: "Kaski District",
        category: "adventure",
        region: "annapurna",
        tags: ["trekking", "mountains", "viewpoint"]
    },
    {
        id: "khumbila",
        name: "Khumbila",
        description: "A sacred mountain in the Khumbu region, worshipped by local Sherpas. Standing at 5,761m, this mountain is believed to be the abode of the patron deity of the Khumbu region.",
        image: "https://cdn.pixabay.com/photo/2018/05/16/15/49/mountain-3406882_1280.jpg",
        location: "Solukhumbu District",
        category: "nature",
        region: "everest",
        tags: ["sacred", "mountain", "sherpa"]
    },
    {
        id: "swyambhunath-stupa",
        name: "Swayambhunath Stupa",
        description: "An ancient Buddhist stupa perched on a hilltop, known as the Monkey Temple. One of the oldest religious sites in Nepal featuring prayer wheels, colorful flags, and panoramic views of Kathmandu.",
        image: "https://cdn.pixabay.com/photo/2014/03/01/06/30/stupa-277459_1280.jpg",
        location: "Kathmandu",
        category: "pilgrimage",
        region: "kathmandu",
        tags: ["buddhist", "stupa", "viewpoint"]
    },
    {
        id: "mahendra-cave",
        name: "Mahendra Cave",
        description: "A natural limestone cave near Pokhara with fascinating stalactite and stalagmite formations. Named after King Mahendra, this cave houses a shrine dedicated to Lord Shiva.",
        image: "https://cdn.pixabay.com/photo/2019/11/24/15/43/cave-4650222_1280.jpg",
        location: "Pokhara",
        category: "nature",
        region: "pokhara",
        tags: ["cave", "limestone", "natural"]
    },
    {
        id: "kirtipur",
        name: "Kirtipur",
        description: "A historic town offering insights into Newar culture and history. This ancient hilltop settlement resisted conquest during Nepal's unification and preserves its unique cultural heritage and architecture.",
        image: "https://cdn.pixabay.com/photo/2017/08/10/12/13/nepal-2622020_1280.jpg",
        location: "Kathmandu Valley",
        category: "culture",
        region: "kathmandu",
        tags: ["newari", "historic", "temples"]
    },
    {
        id: "pharping",
        name: "Pharping",
        description: "A sacred site with Buddhist monasteries and meditation caves. Known for its importance to Vajrayana Buddhism and home to Dakshinkali Temple, one of the most important Hindu temples in Nepal.",
        image: "https://cdn.pixabay.com/photo/2018/12/15/15/07/monastery-3877863_1280.jpg",
        location: "Kathmandu Valley",
        category: "pilgrimage",
        region: "kathmandu",
        tags: ["buddhist", "meditation", "monasteries"]
    },
    {
        id: "begnas-lake",
        name: "Begnas Lake",
        description: "A tranquil lake near Pokhara, perfect for relaxation and boating. Less crowded than Phewa Lake, this natural freshwater lake is surrounded by green hills and traditional farming villages.",
        image: "https://cdn.pixabay.com/photo/2019/04/27/19/38/nepal-4161242_1280.jpg",
        location: "Kaski District",
        category: "nature",
        region: "pokhara",
        tags: ["lake", "boating", "peaceful"]
    },
    {
        id: "rupa-lake",
        name: "Rupa Lake",
        description: "A lesser-known lake near Pokhara, offering peaceful surroundings. This beautiful lake supports local fishing communities and provides habitats for various bird species in a serene setting.",
        image: "https://cdn.pixabay.com/photo/2019/06/05/11/35/nepal-4253436_1280.jpg",
        location: "Kaski District",
        category: "nature",
        region: "pokhara",
        tags: ["lake", "birdwatching", "fishing"]
    },
    {
        id: "chandragiri-hills",
        name: "Chandragiri Hills",
        description: "A cable car ride leading to breathtaking views of Kathmandu Valley. The hilltop features a newly built view tower, Bhaleshwor Mahadev Temple, and panoramic views of the Himalayan range.",
        image: "https://cdn.pixabay.com/photo/2018/05/17/16/47/kathmandu-3408901_1280.jpg",
        location: "Kathmandu Valley",
        category: "nature",
        region: "kathmandu",
        tags: ["cable car", "viewpoint", "temple"]
    },
    {
        id: "koshi-tappu-wildlife-reserve",
        name: "Koshi Tappu Wildlife Reserve",
        description: "A birdwatcher's paradise with over 500 species of birds. This wetland ecosystem is also home to the last remaining population of wild water buffalo in Nepal and various aquatic wildlife.",
        image: "https://cdn.pixabay.com/photo/2018/05/10/18/37/birds-3388634_1280.jpg",
        location: "Eastern Terai",
        category: "wildlife",
        region: "eastern",
        tags: ["birdwatching", "wetlands", "wildlife"]
    },
    {
        id: "kanyam",
        name: "Kanyam",
        description: "A scenic hill station in Ilam with vast tea gardens. Known for its perfectly manicured tea plantations, picnic spots, and stunning views of the eastern Himalayan range.",
        image: "https://cdn.pixabay.com/photo/2017/08/27/12/02/tea-plantation-2685824_1280.jpg",
        location: "Ilam District",
        category: "nature",
        region: "eastern",
        tags: ["tea gardens", "picnic", "hills"]
    },
    {
        id: "gokyo-ri",
        name: "Gokyo Ri",
        description: "A peak in the Khumbu region offering one of the best panoramic views of Everest and surrounding mountains. The climb rewards trekkers with stunning vistas of the Gokyo Lakes below.",
        image: "https://cdn.pixabay.com/photo/2015/10/28/15/05/gokyo-ri-1010759_1280.jpg",
        location: "Solukhumbu District",
        category: "adventure",
        region: "everest",
        tags: ["peak", "viewpoint", "trekking"]
    },
    {
        id: "ama-dablam-base-camp",
        name: "Ama Dablam Base Camp",
        description: "A scenic trekking destination with close-up views of the beautiful Ama Dablam peak. Often called the 'Matterhorn of the Himalayas', this mountain is one of the most beautiful in the world.",
        image: "https://cdn.pixabay.com/photo/2015/05/31/15/05/ama-dablam-792291_1280.jpg",
        location: "Solukhumbu District",
        category: "adventure",
        region: "everest",
        tags: ["trekking", "mountain", "basecamp"]
    },
    {
        id: "tatopani",
        name: "Tatopani",
        description: "Known for its natural hot springs, popular among trekkers for relaxation. The name literally means 'hot water' in Nepali, and these therapeutic springs are perfect after long treks.",
        image: "https://cdn.pixabay.com/photo/2018/08/14/15/32/nepal-3605677_1280.jpg",
        location: "Myagdi District",
        category: "nature",
        region: "pokhara",
        tags: ["hot springs", "relaxation", "trekking"]
    },
    {
        id: "chisapani",
        name: "Chisapani",
        description: "A trekking destination providing panoramic views of the Himalayas. Located at the edge of Shivapuri National Park, it's a popular starting point for treks to Nagarkot and Helambu.",
        image: "https://cdn.pixabay.com/photo/2018/04/25/18/08/nepal-3350560_1280.jpg",
        location: "Kathmandu Valley",
        category: "adventure",
        region: "kathmandu",
        tags: ["trekking", "viewpoint", "forest"]
    },
    {
        id: "panauti",
        name: "Panauti",
        description: "An ancient town with well-preserved Newari architecture and temples. Known for its numerous temples, historic buildings, and the confluence of two sacred rivers.",
        image: "https://cdn.pixabay.com/photo/2018/04/09/22/23/buddha-3305836_1280.jpg",
        location: "Kavrepalanchok District",
        category: "culture",
        region: "kathmandu",
        tags: ["newari", "temples", "historic"]
    },
    {
        id: "marpha",
        name: "Marpha",
        description: "A picturesque village famous for its apple orchards and traditional Thakali culture. Known for apple brandy, dried fruits, and immaculate white-washed houses with flat roofs and narrow stone-paved streets.",
        image: "https://cdn.pixabay.com/photo/2019/05/01/11/55/nepal-4171464_1280.jpg",
        location: "Mustang District",
        category: "culture",
        region: "pokhara",
        tags: ["apples", "thakali", "village"]
    },
    {
        id: "kagbeni",
        name: "Kagbeni",
        description: "A medieval village marking the entrance to Upper Mustang. With ancient monasteries, traditional mud houses, and dramatic desert landscapes, it feels like stepping back in time.",
        image: "https://cdn.pixabay.com/photo/2018/11/05/16/07/nepal-adventure-3797330_1280.jpg",
        location: "Mustang District",
        category: "culture",
        region: "pokhara",
        tags: ["medieval", "monastery", "mustang"]
    },
    {
        id: "manaslu-circuit",
        name: "Manaslu Circuit",
        description: "A challenging trek around Mount Manaslu, the eighth-highest mountain in the world. This trek offers authentic village experiences, dramatic landscapes, and crossing the challenging Larkya La Pass.",
        image: "https://cdn.pixabay.com/photo/2016/08/25/09/42/mountain-1619654_1280.jpg",
        location: "Gorkha District",
        category: "adventure",
        region: "central",
        tags: ["trekking", "mountains", "remote"]
    },
    {
        id: "dhorpatan-hunting-reserve",
        name: "Dhorpatan Hunting Reserve",
        description: "The only hunting reserve in Nepal, offering regulated hunting of specific species. Features beautiful alpine meadows, panoramic mountain views, and diverse wildlife.",
        image: "https://cdn.pixabay.com/photo/2019/11/12/01/01/mountain-4620119_1280.jpg",
        location: "Baglung District",
        category: "wildlife",
        region: "western",
        tags: ["hunting", "wildlife", "alpine"]
    },
    {
        id: "chitwan-elephant-breeding-center",
        name: "Chitwan Elephant Breeding Center",
        description: "A conservation facility dedicated to breeding and caring for elephants. Visitors can learn about elephant conservation efforts and observe these magnificent animals in a natural setting.",
        image: "https://cdn.pixabay.com/photo/2018/08/06/16/09/elephant-3587594_1280.jpg",
        location: "Chitwan District",
        category: "wildlife",
        region: "chitwan",
        tags: ["elephants", "conservation", "education"]
    },
    {
        id: "kala-patthar",
        name: "Kala Patthar",
        description: "A notable landmark on the south ridge of Pumori in the Everest region. At 5,643m, it offers one of the best views of Mount Everest and is a popular side trip from Everest Base Camp.",
        image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/everest-1149298_1280.jpg",
        location: "Solukhumbu District",
        category: "adventure",
        region: "everest",
        tags: ["viewpoint", "everest", "trekking"]
    },
    {
        id: "thorong-la-pass",
        name: "Thorong La Pass",
        description: "One of the highest trekking passes in the world at 5,416m, connecting Manang and Muktinath. This challenging crossing is a highlight of the Annapurna Circuit trek.",
        image: "https://cdn.pixabay.com/photo/2018/11/05/16/12/thorong-la-pass-3797380_1280.jpg",
        location: "Manang District",
        category: "adventure",
        region: "pokhara",
        tags: ["high pass", "trekking", "challenging"]
    },
    {
        id: "rara-national-park",
        name: "Rara National Park",
        description: "Nepal's smallest national park, centered around the beautiful Rara Lake. The park protects diverse ecosystems and offers excellent opportunities for wildlife viewing and peaceful lake activities.",
        image: "https://cdn.pixabay.com/photo/2018/04/28/14/12/rara-lake-3356380_1280.jpg",
        location: "Mugu District",
        category: "nature",
        region: "western",
        tags: ["national park", "lake", "wildlife"]
    },
    {
        id: "larkya-la-pass",
        name: "Larkya La Pass",
        description: "The highest point of the Manaslu Circuit trek at 5,106m. This challenging pass offers spectacular views of Manaslu, Himlung Himal, and Cheo Himal peaks.",
        image: "https://cdn.pixabay.com/photo/2019/05/05/16/13/nepal-4181164_1280.jpg",
        location: "Gorkha District",
        category: "adventure",
        region: "central",
        tags: ["high pass", "manaslu", "trekking"]
    },
    {
        id: "tengboche-to-dingboche",
        name: "Tengboche to Dingboche Trek",
        description: "A scenic section of the Everest Base Camp trek passing through rhododendron forests and alpine meadows. This route offers stunning views of Ama Dablam and Island Peak.",
        image: "https://cdn.pixabay.com/photo/2018/05/20/13/57/himalayas-3415936_1280.jpg",
        location: "Solukhumbu District",
        category: "adventure",
        region: "everest",
        tags: ["trekking", "forest", "mountains"]
    },
    {
        id: "beni",
        name: "Beni",
        description: "A riverside town at the confluence of the Kali Gandaki and Myagdi rivers. It serves as the starting point for many treks in the Annapurna region and is known for its traditional bazaar.",
        image: "https://cdn.pixabay.com/photo/2019/05/05/15/32/nepal-4181077_1280.jpg",
        location: "Myagdi District",
        category: "culture",
        region: "pokhara",
        tags: ["riverside", "market", "trekking"]
    },
    {
        id: "langtang-lirung",
        name: "Langtang Lirung",
        description: "The highest peak in the Langtang range at 7,227m. This majestic mountain dominates the skyline of Langtang Valley and is visible from many points along the Langtang trek.",
        image: "https://cdn.pixabay.com/photo/2018/04/18/20/05/panorama-3331261_1280.jpg",
        location: "Rasuwa District",
        category: "nature",
        region: "langtang",
        tags: ["mountain", "peak", "langtang"]
    },
    {
        id: "kyanjin-gompa",
        name: "Kyanjin Gompa",
        description: "An ancient Buddhist monastery in Langtang Valley at 3,870m. This spiritual center offers panoramic mountain views and is the turnaround point for many Langtang Valley treks.",
        image: "https://cdn.pixabay.com/photo/2019/05/05/16/13/nepal-4181164_1280.jpg",
        location: "Rasuwa District",
        category: "pilgrimage",
        region: "langtang",
        tags: ["monastery", "buddhist", "mountains"]
    },
    {
        id: "annapurna-sanctuary",
        name: "Annapurna Sanctuary",
        description: "A high glacial basin surrounded by towering peaks including Annapurna I, Machapuchare, and Hiunchuli. This natural amphitheater is considered sacred by local communities.",
        image: "https://cdn.pixabay.com/photo/2015/10/30/18/58/mountains-1014895_1280.jpg",
        location: "Kaski District",
        category: "nature",
        region: "pokhara",
        tags: ["sanctuary", "glacial", "sacred"]
    },
    {
        id: "upper-dolpo",
        name: "Upper Dolpo",
        description: "One of the most remote and culturally preserved regions in Nepal. This trans-Himalayan area maintains ancient Tibetan Buddhist culture and practices unchanged for centuries.",
        image: "https://cdn.pixabay.com/photo/2015/07/14/19/20/monastery-845258_1280.jpg",
        location: "Dolpa District",
        category: "culture",
        region: "western",
        tags: ["remote", "tibetan", "ancient"]
    },
    {
        id: "mardi-himal-base-camp",
        name: "Mardi Himal Base Camp",
        description: "A relatively new trekking destination offering spectacular close-up views of Machapuchare and Annapurna South. This hidden gem provides an alternative to crowded Annapurna routes.",
        image: "https://cdn.pixabay.com/photo/2018/05/20/13/57/himalayas-3415936_1280.jpg",
        location: "Kaski District",
        category: "adventure",
        region: "pokhara",
        tags: ["trekking", "hidden", "mountains"]
    },
    {
        id: "nar-phu-valley",
        name: "Nar Phu Valley",
        description: "A restricted area trek offering unique Tibetan culture and stunning mountain scenery. These ancient villages have remained largely untouched by modern development.",
        image: "https://cdn.pixabay.com/photo/2019/05/05/16/21/nepal-4181179_1280.jpg",
        location: "Manang District",
        category: "culture",
        region: "pokhara",
        tags: ["restricted", "tibetan", "remote"]
    },
    {
        id: "tsum-valley",
        name: "Tsum Valley",
        description: "A sacred Himalayan valley known as the 'Hidden Valley'. This restricted area trek offers unique Tibetan Buddhist culture, ancient monasteries, and pristine mountain scenery.",
        image: "https://cdn.pixabay.com/photo/2016/01/13/00/18/nepal-1137206_1280.jpg",
        location: "Gorkha District",
        category: "culture",
        region: "central",
        tags: ["sacred", "hidden", "monasteries"]
    }
];

// ========================================
// EXPORT CONFIGURATION
// ========================================

// Export the unified destinations array
if (typeof module !== 'undefined' && module.exports) {
    // For Node.js environments
    module.exports = { 
        destinations,
        // For backward compatibility
        additionalDestinations: destinations,
        moreDestinations: destinations,
        allDestinations: destinations
    };
} else if (typeof window !== 'undefined') {
    // For browser environments
    window.destinations = destinations;
    window.additionalDestinations = destinations;
    window.moreDestinations = destinations;
    window.allDestinations = destinations;
}

// Log destination count for debugging
console.log(`Unified destinations loaded: ${destinations.length} total destinations`);

// ========================================
// SUMMARY
// ========================================
// This file now contains ALL destination data from:
// - script.js (main destinations array)
// - destinations-data.js (additionalDestinations array) 
// - more-destinations.js (moreDestinations array)
// 
// Total: ~100+ unique destinations covering all regions of Nepal
// Categories: nature, culture, adventure, pilgrimage, wildlife
// Regions: kathmandu, pokhara, everest, terai, eastern, western, central, langtang, lumbini
// ========================================