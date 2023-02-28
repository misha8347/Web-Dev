export class Product{
    static currentId: number = 1;
    id: number;
    category: string;
    image?: string;
    name: string;
    cost: number;
    description: string;
    rating: number;
    link?: string;
    likesAmount: number = 0;
    isDeleted: boolean;

    constructor(category: string, image: string, name: string, cost: number, description: string, rating: number, link: string){
        this.id = Product.currentId++;
        this.category = category;
        this.image = image;
        this.name = name;
        this.cost = cost;
        this.description = description;
        this.rating = rating;
        this.link = link;
        this.likesAmount = 0;
        this.isDeleted = false;
    }
}

export const products = [
    {
        id: 1,
        category: "Drink",
        image: "https://resources.cdn-kaspi.kz/img/m/p/h98/h29/63821026099230.jpg?format=preview-medium",
        name: "Чай Tess Pleasure листовой 100 пакетиков",
        cost: 2429,
        description: "черный чай, фруктовый, листовой, шиповник, яблоко, Россия, хранить в сухом прохладном месте",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/chai-tess-pleasure-listovoi-100-paketikov-100210901/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 2,
        category: "Drink",
        image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h44/he9/61944956485662/coca-cola-classic-1-l-100208096-1-Container.jpg",
        name: "Coca-Cola Classic газированный напиток 1 л",
        cost: 385,
        description: "Газированный напиток, без сахара, кола, Казахстан, хранить в сухом месте при температуре от 0°С до +20°С, избегая прямого попадания солнечных лучей",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 3,
        category: "Drink",
        image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1f/h70/32012831064094/fanta-apelsin-2-l-100208121-1-Container.jpg",
        name: "Fanta газированный напиток 2 л",
        cost: 365,
        description: "Газированный напиток, без сахара, вкус апельсин, Россия, хранить при температуре от 0 до +30 °C в темном и прохладном месте",
        rating: 4.8,
        link: "https://kaspi.kz/shop/p/fanta-gazirovannyi-napitok-2-l-100208121/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 4,
        category: "Drink",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h55/46119896055838/maxi-klubnika-1-2-l-100234972-1-Container.jpg",
        name: "Холодный чай Maxi чай черный клубника 1200 мл",
        cost: 445,
        description: "черный чай, клубника, Казахстан, хранить при t от 0 до +18'С, беречь от воздействия прямого солнечного света. Срок годности см. на бутылке",
        rating: 4.9, 
        link: "https://kaspi.kz/shop/p/holodnyi-chai-maxi-chai-chernyi-klubnika-1200-ml-100234972/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHClaKg4K4vf_L-QZWKBnjzdkddbGDhHQd5QAXSAKvOAwNSj1VsJ_AxoCHXoQAvD_BwE#!/item",
        likesAmount: 0,
        isDeleted: false
        
    },
    {   
        id: 5,
        category: "Drink",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h67/hd4/49067827888158/fuse-tea-mango-i-romaska-1-l-101004192-1-Container.jpg",
        name: "Холодный чай Fuse-tea манго-ромашка 1 л",
        cost: 379,
        description: "черный чай, манго, Казахстан, хранить при температуре от 0 до 30 градусов. Открытую упаковку при температуре от 2 до 6 градусов употребить в течение 6 часов",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/holodnyi-chai-fuse-tea-mango-romashka-1-l-101004192/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHClaKg4K4vf_L-QZWKBnjzdkddbGDhHQd5QAXSAKvOAwNSj1VsJ_AxoCHXoQAvD_BwE#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 6,
        category: "Smartphone",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5a/h4e/62948779425822/apple-iphone-14-pro-max-128gb-fioletovyj-106363344-1.jpg",
        name: "Смартфон Apple iPhone 14 Pro Max 512Gb фиолетовый",
        cost: 842300,
        description: "Есть технология NFC, фиолетовый, OLED, Super Retina XDR экран, 6.7 дюйм, 6ГБ ОЗУ, процессор 6-ядерный Apple A16 Bionic, 512ГБ",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-512gb-fioletovyi-106363344/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 7,
        category: "Smartphone",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd9/h19/63073984446494/apple-iphone-14-pro-128gb-zolotistyj-106363313-1.jpg",
        name: "Смартфон Apple iPhone 14 Pro 512Gb золотистый",
        cost: 821535,
        description: "Есть технология NFC, золотистый, OLED, Super Retina XDR экран, 6.1 дюйм, 6ГБ ОЗУ, процессор 6-ядерный Apple A16 Bionic, 512ГБ",
        rating: 4.95,
        link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-512gb-zolotistyi-106363313/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 8,
        category: "Smartphone",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/ha3/63072545734686/apple-iphone-14-128gb-sirenevyj-106363117-1.jpg",
        name: "Смартфон Apple iPhone 14 128Gb сиреневый",
        cost: 421680,
        description: "Есть технология NFC, сиреневый,  OLED, Super Retina XDR экран, 6.1 дюйм, 6ГБ ОЗУ, процессор 6-ядерный Apple A15 Bionic, 128 ГБ",
        rating: 4.97,
        link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-sirenevyi-106363117/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 9,
        category: "Smartphone",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/h97/63073056096286/apple-iphone-14-128gb-goluboj-106363155-1.jpg",
        name: "Смартфон Apple iPhone 14 256Gb голубой",
        cost: 487355,
        description: "Есть технология NFC, голубой,  OLED, Super Retina XDR экран, 6.1 дюйм, 6 ГБ ОЗУ, процессор 6-ядерный Apple A15 Bionic, 256 ГБ",
        rating: 4.96,
        link: "https://kaspi.kz/shop/p/apple-iphone-14-256gb-goluboi-106363155/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 10,
        category: "Smartphone",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/h20/68538744537118/samsung-galaxy-s23-ultra-5g-12-gb-512-gb-zelenyi-108714425-1.jpg",
        name: "Смартфон Samsung Galaxy S23 Ultra 5G",
        cost: 749890,
        description: "Есть технология NFC, зеленый, экран Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+, 6.8 дюйм, 12 ГБ ОЗУ, процессор 8-ядерный Snapdragon 8 Gen 2, 512 ГБ",
        rating: 4.97,
        link: "https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-5g-12-gb-512-gb-zelenyi-podarok-108714425/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 11,
        category: "earphones",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h72/h1c/50133412315166/samsung-galaxy-buds-pro-sm-r190nzsacis-serebristyj-100956033-1-Container.jpg",
        name: "Наушники Samsung Galaxy Buds Pro серебристый",
        cost: 79980,
        description: "гарнитура, внутриканальные, беспроводное, без крепления, с шумоподавлением, с микрофоном",
        rating: 4.89,
        link: "https://kaspi.kz/shop/p/samsung-galaxy-buds-pro-sm-r190nzsacis-serebristyi-100956033/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 12,
        category: "earphones",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he8/h89/61856696467486/samsung-sm-r510nlvacis-fioletovyj-106128757-1.jpg",
        name: "Наушники Samsung Galaxy Buds2 Pro фиолетовый",
        cost: 68900,
        description: "гарнитура, внутриканальные, беспроводное, без крепления, с шумоподавлением, с микрофоном",
        rating: 4.95,
        link: "https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510nlvacis-fioletovyi-106128757/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 13,
        category: "earphones",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h62/61857930084382/samsung-sm-r510nzaacis-cernyj-106128763-1.jpg",
        name: "Наушники Samsung Galaxy Buds2 Pro черный",
        cost: 69100,
        description: "гарнитура, внутриканальные, беспроводное, без крепления, с шумоподавлением, с микрофоном",
        rating: 4.98,
        link: "https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510nzaacis-chernyi-106128763/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 14,
        category: "earphones",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hf8/62281477259294/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg",
        name: "Наушники Apple AirPods Pro 2nd generation белый",
        cost: 121798,
        description: "наушники, внутриканальные, беспроводное, закрытые, с шумоподавлением, с микрофоном",
        rating: 5.00,
        link: "https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 15,
        category: "earphones",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h12/46719106023454/apple-airpods-3-belyj-102667744-1.jpg",
        name: "Наушники Apple AirPods 3 белый",
        cost: 95570,
        description: "наушники, внутриканальные, беспроводное, закрытые, без шумоподавления, с микрофоном",
        rating: 4.90,
        link: "https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 16,
        category: "mouse",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h14/62277553881118/logitech-g703-lightspeed-cernyj-9101031-1-Container.jpg",
        name: "Мышь Logitech G703 Lightspeed черный",
        cost: 38900,
        description: "беспроводная, оптическая светодиодная, USB интерфейс, для правой руки, 25600 dpi",
        rating: 4.91,
        link: "https://kaspi.kz/shop/p/logitech-g703-lightspeed-chernyi-9101031/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 17,
        category: "mouse",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/hf5/32601801916446/kingston-hyperx-hx-mc005b-pulsefire-raid-cernyj-100183603-1-Container.jpg",
        name: "Мышь HyperX HX-MC005B Pulsefire Raid черный",
        cost: 25774,
        description: "проводная, оптическая светодиодная, USB интерфейс, для правой руки, 16000 dpi",
        rating: 4.90,
        link: "https://kaspi.kz/shop/p/hyperx-hx-mc005b-pulsefire-raid-chernyi-100183603/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 18,
        category: "mouse",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h21/50604524273694/hyperx-pulsefire-surge-cernyj-102538808-1.jpg",
        name: "Мышь HyperX Pulsefire Surge черный",
        cost: 25600,
        description: "проводная, оптическая светодиодная, USB интерфейс, для правой руки, 16000 dpi",
        rating: 5.00,
        link: "https://kaspi.kz/shop/p/hyperx-pulsefire-surge-chernyi-102538808/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 19,
        category: "mouse",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h3d/50515178946590/logitech-lightspeed-g305-910-006022-101058059-1-Container.jpg",
        name: "Мышь Logitech Lightspeed G305 фиолетовый",
        cost: 22900,
        description: "беспроводная, оптическая светодиодная, USB интерфейс, для правой руки, 12000 dpi",
        rating: 5.00,
        link: "https://kaspi.kz/shop/p/logitech-lightspeed-g305-910-006022-fioletovyi-101058059/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    },
    {
        id: 20,
        category: "mouse",
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/h59/51130661339166/logitech-g-pro-x-wireless-superlight-cernyj-101948870-1-Container.jpg",
        name: "Мышь Logitech Pro X Superlight черный",
        cost: 65709,
        description: "беспроводная, оптическая светодиодная, USB интерфейс, для правой руки, 25600 dpi",
        rating: 4.96,
        link: "https://kaspi.kz/shop/p/logitech-pro-x-superlight-chernyi-101948870/?c=750000000#!/item",
        likesAmount: 0,
        isDeleted: false
    }

];