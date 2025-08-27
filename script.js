// Nepal Destinations Data
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
    }
];

// Add more destinations to ensure we have enough content
const moreDestinations = [
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
        image: "https://cdn.pixabay.com/photo/2018/12/09/11/37/nepal-3865705_1280.jpg",
        location: "Solukhumbu District",
        category: "nature",
        region: "everest",
        tags: ["lakes", "trekking", "mountains"]
    },
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
        id: "namche-bazaar",
        name: "Namche Bazaar",
        description: "The gateway to Mount Everest and the main trading center for the Khumbu region. This vibrant Sherpa town offers acclimatization opportunities, markets, and stunning mountain views.",
        image: "https://cdn.pixabay.com/photo/2019/05/02/20/13/khumbu-4175345_1280.jpg",
        location: "Solukhumbu District",
        category: "adventure",
        region: "everest",
        tags: ["sherpa", "market", "trekking"]
    }
];

// Add more destinations to our main array
destinations.push(...moreDestinations);

// Add final set of destinations to reach 100 total
const finalDestinations = [
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
        id: "muktinath-temple",
        name: "Muktinath Temple",
        description: "A sacred site for both Hindus and Buddhists, located at an altitude of 3,710 meters. Famous for its 108 water spouts and natural gas flames that burn continuously.",
        image: "https://cdn.pixabay.com/photo/2019/06/30/10/15/nepal-4307597_1280.jpg",
        location: "Mustang District",
        category: "pilgrimage",
        region: "pokhara",
        tags: ["temple", "hindu", "buddhist"]
    },
    {
        id: "lo-manthang",
        name: "Lo Manthang",
        description: "The walled capital of the former Kingdom of Mustang. This medieval settlement preserves unique Tibetan culture, ancient monasteries, and cave temples dating back to the 15th century.",
        image: "https://cdn.pixabay.com/photo/2017/06/21/09/19/nepal-2426884_1280.jpg",
        location: "Mustang District",
        category: "culture",
        region: "pokhara",
        tags: ["tibetan", "walled city", "remote"]
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
        id: "kathmandu-valley",
        name: "Kathmandu Valley",
        description: "Home to seven UNESCO World Heritage Sites, including Durbar Squares, ancient temples and historic towns. The valley is the cultural heart of Nepal with a rich blend of Hindu and Buddhist traditions.",
        image: "https://cdn.pixabay.com/photo/2019/05/16/18/51/nepal-4207879_1280.jpg",
        location: "Bagmati Province",
        category: "culture",
        region: "kathmandu",
        tags: ["heritage", "temples", "history"]
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
        id: "khumbu-glacier",
        name: "Khumbu Glacier",
        description: "The world's highest glacier, located near Mount Everest. This dramatic landscape of ice seracs, melt ponds, and moraines showcases the effects of climate change and provides vital water resources.",
        image: "https://cdn.pixabay.com/photo/2016/05/02/13/53/glacier-1367104_1280.jpg",
        location: "Solukhumbu District",
        category: "nature",
        region: "everest",
        tags: ["glacier", "trekking", "ice"]
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
        id: "bardia-national-park-2",
        name: "Bardia National Park",
        description: "A less-touristy alternative to Chitwan, known for its Bengal tiger population. This pristine wilderness offers wildlife viewing in a more remote and authentic setting.",
        image: "https://cdn.pixabay.com/photo/2014/07/31/23/10/tiger-407030_1280.jpg",
        location: "Bardia District",
        category: "wildlife",
        region: "terai",
        tags: ["safari", "tigers", "wilderness"]
    }
];

// Add the final set of destinations to our main array
destinations.push(...finalDestinations);

// Add more unique destinations to complete our collection
const completeDestinations = [
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
    {
        id: "langtang-valley",
        name: "Langtang Valley",
        description: "A trekking destination known for its diverse flora and Tamang culture. This beautiful valley features rhododendron forests, alpine meadows, and traditional villages nestled beneath towering peaks.",
        image: "https://cdn.pixabay.com/photo/2019/05/05/16/13/nepal-4181164_1280.jpg",
        location: "Rasuwa District",
        category: "adventure",
        region: "langtang",
        tags: ["trekking", "tamang", "nature"]
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
        id: "namche-bazaar-2",
        name: "Namche Bazaar",
        description: "A Sherpa town serving as a gateway to the Everest region. Built in a horseshoe shape around the hillside, this vibrant market town is a crucial acclimatization point for trekkers heading to Everest.",
        image: "https://cdn.pixabay.com/photo/2019/05/02/20/13/khumbu-4175345_1280.jpg",
        location: "Solukhumbu District",
        category: "adventure",
        region: "everest",
        tags: ["sherpa", "market", "trekking"]
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
    }
];

// Add the complete set of destinations to our main array
destinations.push(...completeDestinations);

// Add the final batch of destinations to reach 100
const finalBatchDestinations = [
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
        id: "halesi-mahadev-temple",
        name: "Halesi Mahadev Temple",
        description: "A sacred cave temple dedicated to Lord Shiva in eastern Nepal. Located within a large limestone cave, this important pilgrimage site is revered by both Hindus and Buddhists.",
        image: "https://cdn.pixabay.com/photo/2020/01/31/07/53/temple-4807766_1280.jpg",
        location: "Khotang District",
        category: "pilgrimage",
        region: "eastern",
        tags: ["cave", "temple", "hindu"]
    },
    {
        id: "janaki-mandir",
        name: "Janaki Mandir",
        description: "A magnificent marble temple dedicated to Goddess Sita in Janakpur. Built in Mughal style with 60 rooms, this impressive white structure is one of the largest temples in Nepal.",
        image: "https://cdn.pixabay.com/photo/2018/04/16/11/06/janaki-mandir-3324969_1280.jpg",
        location: "Janakpur",
        category: "pilgrimage",
        region: "eastern",
        tags: ["temple", "hindu", "architecture"]
    },
    {
        id: "manakamana-temple-2",
        name: "Manakamana Temple",
        description: "A sacred temple accessible by cable car, dedicated to the wish-fulfilling goddess. Perched on a ridge with spectacular mountain views, this temple attracts thousands of pilgrims seeking blessings.",
        image: "https://cdn.pixabay.com/photo/2018/11/12/17/01/nepal-3811229_1280.jpg",
        location: "Gorkha District",
        category: "pilgrimage",
        region: "central",
        tags: ["cable car", "hindu", "pilgrimage"]
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
        id: "swyambhunath",
        name: "Swayambhunath",
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
    }
];

// Add the final batch of destinations to our main array
destinations.push(...finalBatchDestinations);

// Log the final count of destinations
console.log(`Final total number of destinations: ${destinations.length}`);

// Sample testimonials data
const testimonials = [
    {
        id: 1,
        text: "Trekking to Everest Base Camp was the most challenging yet rewarding experience of my life. The stunning mountain views and warm hospitality of the Sherpa people made this journey unforgettable.",
        author: "Emily Johnson",
        location: "United Kingdom",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        text: "Exploring the ancient temples of Kathmandu Valley was like stepping back in time. The intricate woodcarvings and architectural details are truly masterpieces. Nepal's cultural heritage is incredibly rich.",
        author: "Michael Chen",
        location: "Canada",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        id: 3,
        text: "The wildlife safari in Chitwan National Park was the highlight of our trip. We spotted rhinos, crocodiles, and numerous bird species. The canoe ride at sunrise was magical!",
        author: "Sophie Martinez",
        location: "Spain",
        image: "https://randomuser.me/api/portraits/women/28.jpg"
    }
];

// Current state
let currentDestinations = destinations.slice(0, 12); // Initial destinations to show
let currentTestimonialIndex = 0;

// Helper functions
function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function getCategoryName(category) {
    const categories = {
        'nature': 'Nature',
        'culture': 'Cultural',
        'adventure': 'Adventure',
        'pilgrimage': 'Pilgrimage',
        'wildlife': 'Wildlife'
    };
    return categories[category] || category;
}

// Function to create destination cards
function createDestinationCard(destination) {
    return `
        <div class="destination-card" data-id="${destination.id}" data-category="${destination.category}" data-region="${destination.region}">
            <span class="category-badge">${getCategoryName(destination.category)}</span>
            <img src="${destination.image}" alt="${destination.name}" class="destination-image" loading="lazy" onerror="this.onerror=null; this.src='https://cdn.pixabay.com/photo/2014/09/17/16/50/nepal-449823_1280.jpg';">
            <div class="destination-info">
                <h3>${destination.name}</h3>
                <p>${truncateText(destination.description, 120)}</p>
                <p><strong>Location:</strong> ${destination.location}</p>
                <div class="destination-meta">
                    <div class="meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${destination.region.charAt(0).toUpperCase() + destination.region.slice(1)}</span>
                    </div>
                    <button class="btn primary-btn view-details-btn">View Details</button>
                </div>
            </div>
        </div>
    `;
}

// Function to load destinations
function loadDestinations() {
    const container = document.getElementById('destinationContainer');
    if (!container) return;

    const destinationHTML = currentDestinations.map(createDestinationCard).join('');
    container.innerHTML = destinationHTML;
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.destination-card');
            const destinationId = card.dataset.id;
            showDestinationDetails(destinationId);
        });
    });
    
    // Update count message
    let message = document.querySelector('.results-message');
    if (!message) {
        message = document.createElement('p');
        message.className = 'results-message';
        container.parentNode.insertBefore(message, container);
    }
    message.textContent = `Showing ${currentDestinations.length} of ${destinations.length} destinations`;
    
    // Show or hide load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = currentDestinations.length < destinations.length ? 'block' : 'none';
    }
}

// Function to show destination details
function showDestinationDetails(destinationId) {
    const destination = destinations.find(d => d.id === destinationId);
    if (!destination) return;

    const featuredContent = document.getElementById('featuredDestinationContent');
    if (!featuredContent) return;

    featuredContent.innerHTML = `
        <div class="featured-box">
            <div class="featured-image">
                <img src="${destination.image}" alt="${destination.name}" onerror="this.onerror=null; this.src='https://cdn.pixabay.com/photo/2014/09/17/16/50/nepal-449823_1280.jpg';">
            </div>
            <div class="featured-details">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <p><strong>Location:</strong> ${destination.location}</p>
                <p><strong>Category:</strong> ${getCategoryName(destination.category)}</p>
                <div class="tags">
                    ${destination.tags.map(tag => `<span class="tag">#${tag}</span>`).join(' ')}
                </div>
                <a href="#" class="btn primary-btn">Plan Your Visit</a>
            </div>
        </div>
    `;

    document.getElementById('featured-destination').scrollIntoView({ behavior: 'smooth' });
}

function displayRandomDestination() {
    if (!Array.isArray(destinations) || destinations.length === 0) return;

    const randomIndex = Math.floor(Math.random() * destinations.length);
    const randomDestination = destinations[randomIndex];
    showDestinationDetails(randomDestination.id);
}

document.addEventListener('DOMContentLoaded', displayRandomDestination);


// Function to load more destinations
function loadMoreDestinations() {
    const currentCount = currentDestinations.length;
    const moreDestinations = destinations.slice(currentCount, currentCount + 10);
    
    if (moreDestinations.length > 0) {
        // Show loading indicator
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'flex';
        }
        
        // Simulate loading delay
        setTimeout(() => {
            currentDestinations = [...currentDestinations, ...moreDestinations];
            loadDestinations();
            
            if (loadingIndicator) {
                loadingIndicator.style.display = 'none';
            }
        }, 800);
    }
}

// Function to load testimonials
function loadTestimonials() {
    const slider = document.getElementById('testimonialSlider');
    if (!slider) return;
    
    slider.innerHTML = '';
    
    // Create testimonial slides
    testimonials.forEach((testimonial, index) => {
        const testimonialHTML = `
            <div class="testimonial ${index === 0 ? 'active' : ''}">
                <div class="testimonial-quote">
                    <i class="fas fa-quote-left"></i>
                </div>
                <div class="testimonial-content">
                    <p class="testimonial-text">${testimonial.text}</p>
                    <div class="testimonial-author">
                        <img src="${testimonial.image}" alt="${testimonial.author}" class="author-image" onerror="this.onerror=null; this.src='https://cdn.pixabay.com/photo/2014/09/17/16/50/nepal-449823_1280.jpg';">
                        <div class="author-info">
                            <h4>${testimonial.author}</h4>
                            <p>${testimonial.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        slider.innerHTML += testimonialHTML;
    });
    
    // Set up testimonial controls
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showTestimonial(currentTestimonialIndex - 1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showTestimonial(currentTestimonialIndex + 1);
        });
    }
}

// Function to show a specific testimonial
function showTestimonial(index) {
    const testimonialElems = document.querySelectorAll('.testimonial');
    if (!testimonialElems.length) return;
    
    // Handle index wraparound
    if (index < 0) index = testimonialElems.length - 1;
    if (index >= testimonialElems.length) index = 0;
    
    // Update current index
    currentTestimonialIndex = index;
    
    // Hide all testimonials and show the current one
    testimonialElems.forEach((elem, i) => {
        elem.classList.remove('active');
        if (i === index) elem.classList.add('active');
    });
}

// Function to handle scroll to top
function handleScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    if (!scrollButton) return;
    
    // Show or hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Form submission handling
function setupFormHandlers() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Subscribe form submission
    const subscribeForm = document.getElementById('subscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
}

// Function to handle category clicks
function setupCategoryCards() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            const categoryFilter = document.getElementById('categoryFilter');
            if (categoryFilter) {
                categoryFilter.value = category;
                filterDestinations();
            }
            document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Expanded init function to set up all UI interactions
function setupUIInteractions() {
    // Handle scroll to top
    handleScrollToTop();
    
    // Setup form handlers
    setupFormHandlers();
    
    // Setup category cards
    setupCategoryCards();
    
    // Set up popular destination links in footer
    document.querySelectorAll('a[data-destination]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const destinationId = this.dataset.destination;
            showDestinationDetails(destinationId);
        });
    });
    
    // Set up smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip if it's a destination link
            if (this.dataset.destination) return;
            
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if open
                const navLinks = document.getElementById('navLinks');
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    // Handle header styling on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                header.style.backgroundColor = 'white';
                header.style.boxShadow = 'none';
            }
        }
    });
}

// Expanded function to handle all filtering
function filterDestinations() {
    const searchInput = document.getElementById('searchInput');
    const regionFilter = document.getElementById('regionFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (!searchInput || !regionFilter || !categoryFilter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const region = regionFilter.value;
    const category = categoryFilter.value;
    
    const filtered = destinations.filter(destination => {
        const matchesSearch = searchTerm === '' || 
            destination.name.toLowerCase().includes(searchTerm) || 
            destination.description.toLowerCase().includes(searchTerm) ||
            destination.location.toLowerCase().includes(searchTerm);
            
        const matchesRegion = region === 'all' || destination.region === region;
        const matchesCategory = category === 'all' || destination.category === category;
        
        return matchesSearch && matchesRegion && matchesCategory;
    });
    
    // Update current destinations
    currentDestinations = filtered.slice(0, 12);
    
    // Update the destination container
    loadDestinations();
    
    // If no results, show a message
    const container = document.getElementById('destinationContainer');
    if (filtered.length === 0 && container) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No destinations found</h3>
                <p>Try adjusting your search criteria</p>
                <button id="resetFiltersBtn" class="btn primary-btn">Reset Filters</button>
            </div>
        `;
        
        document.getElementById('resetFiltersBtn').addEventListener('click', resetFilters);
    }
}

// Function to reset filters
function resetFilters() {
    const searchInput = document.getElementById('searchInput');
    const regionFilter = document.getElementById('regionFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (searchInput) searchInput.value = '';
    if (regionFilter) regionFilter.value = 'all';
    if (categoryFilter) categoryFilter.value = 'all';
    
    currentDestinations = destinations.slice(0, 12);
    loadDestinations();
}

// Initialize the application when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM ready - Initializing application with " + destinations.length + " destinations");
    
    // Load initial destinations
    loadDestinations();
    
    // Load testimonials
    loadTestimonials();
    
    // Update count in the header
    const destinationCountElement = document.getElementById('destinationCount');
    if (destinationCountElement) {
        destinationCountElement.textContent = destinations.length;
    }
    
    // Set up load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreDestinations);
    }
    
    // Set up search button
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', filterDestinations);
    }
    
    // Set up search input for enter key
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') filterDestinations();
        });
    }
    
    // Set up filter dropdowns
    const regionFilter = document.getElementById('regionFilter');
    if (regionFilter) {
        regionFilter.addEventListener('change', filterDestinations);
    }
    
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterDestinations);
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
    }
    
    // Setup all remaining UI interactions
    setupUIInteractions();
}); 


//script for home page slideshow 
let currentSlide = 0;
let slideInterval = null;
const slides = [];
const indicators = [];
let slideInfo = null;
let slideLocation = null;

const locations = [
    'Annapurna Circuit Tea House',
    'Sacred Mountain Peaks',
    'Pokhara Lake District',
    'Himalayan Sunrise',
    
    'Ancient Temples of Kathmandu'

];

function initializeSlideshow() {
    // Get all DOM elements
    const slideElements = document.querySelectorAll('.slide');
    const indicatorElements = document.querySelectorAll('.indicator-dot');
    slideInfo = document.querySelector('.slide-info');
    slideLocation = document.getElementById('slideLocation');
    
    // Convert NodeLists to arrays
    slideElements.forEach(slide => slides.push(slide));
    indicatorElements.forEach(indicator => indicators.push(indicator));
    
    console.log('Slideshow initialized with', slides.length, 'slides');
    
    // Add click handlers to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            console.log('Clicked indicator', index);
            goToSlide(index);
        });
    });
    
    // Start slideshow immediately
    startSlideshow();
    
    // Show slide info after a delay
    setTimeout(() => {
        if (slideInfo) {
            slideInfo.classList.add('show');
        }
    }, 1000);
    
    // Add hover pause functionality
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mouseenter', pauseSlideshow);
        hero.addEventListener('mouseleave', startSlideshow);
    }
}

function goToSlide(slideIndex) {
    console.log('Going to slide', slideIndex, 'from', currentSlide);
    
    // Remove active classes from current slide
    if (slides[currentSlide]) {
        slides[currentSlide].classList.remove('active');
    }
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.remove('active');
    }
    
    // Update current slide index
    currentSlide = slideIndex;
    
    // Add active classes to new slide
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
    }
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
    }
    
    // Update location text
    if (slideLocation && locations[currentSlide]) {
        slideLocation.textContent = locations[currentSlide];
    }
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    console.log('Auto advancing to slide', nextIndex);
    goToSlide(nextIndex);
}

function startSlideshow() {
    // Clear any existing interval
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    
    // Start new interval
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000); // 5 seconds
    
    console.log('Slideshow started');
}

function pauseSlideshow() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
        console.log('Slideshow paused');
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing slideshow');
    initializeSlideshow();
    
    // Add smooth scrolling for the CTA button
    const exploreBtn = document.querySelector('.primary-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#destinations');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

//script to disp