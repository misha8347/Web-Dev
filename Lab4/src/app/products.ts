export interface Product{
    id: number,
    image?: string;
    name: string;
    cost: number;
    description: string;
    rating: number;
    link?: string;
}

export const products = [
    {
        id: 1,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h98/h29/63821026099230.jpg?format=preview-medium",
        name: "Чай Tess Pleasure листовой 100 пакетиков",
        cost: 2429,
        description: "черный чай, фруктовый, листовой, шиповник, яблоко, Россия, хранить в сухом прохладном месте",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/chai-tess-pleasure-listovoi-100-paketikov-100210901/?c=750000000#!/item"
    },
    {
        id: 2,
        image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h44/he9/61944956485662/coca-cola-classic-1-l-100208096-1-Container.jpg",
        name: "Coca-Cola Classic газированный напиток 1 л",
        cost: 385,
        description: "Газированный напиток, без сахара, кола, Казахстан, хранить в сухом месте при температуре от 0°С до +20°С, избегая прямого попадания солнечных лучей",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000#!/item"
    },
    {
        id: 3,
        image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1f/h70/32012831064094/fanta-apelsin-2-l-100208121-1-Container.jpg",
        name: "Fanta газированный напиток 2 л",
        cost: 365,
        description: "Газированный напиток, без сахара, вкус апельсин, Россия, хранить при температуре от 0 до +30 °C в темном и прохладном месте",
        rating: 4.8,
        link: "https://kaspi.kz/shop/p/fanta-gazirovannyi-napitok-2-l-100208121/?c=750000000#!/item"
    },
    {
        id: 4,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h55/46119896055838/maxi-klubnika-1-2-l-100234972-1-Container.jpg",
        name: "Холодный чай Maxi чай черный клубника 1200 мл",
        cost: 445,
        description: "черный чай, клубника, Казахстан, хранить при t от 0 до +18'С, беречь от воздействия прямого солнечного света. Срок годности см. на бутылке",
        rating: 4.9, 
        link: "https://kaspi.kz/shop/p/holodnyi-chai-maxi-chai-chernyi-klubnika-1200-ml-100234972/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHClaKg4K4vf_L-QZWKBnjzdkddbGDhHQd5QAXSAKvOAwNSj1VsJ_AxoCHXoQAvD_BwE#!/item"
    },
    {   
        id: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h67/hd4/49067827888158/fuse-tea-mango-i-romaska-1-l-101004192-1-Container.jpg",
        name: "Холодный чай Fuse-tea манго-ромашка 1 л",
        cost: 379,
        description: "черный чай, манго, Казахстан, хранить при температуре от 0 до 30 градусов. Открытую упаковку при температуре от 2 до 6 градусов употребить в течение 6 часов",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/holodnyi-chai-fuse-tea-mango-romashka-1-l-101004192/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHClaKg4K4vf_L-QZWKBnjzdkddbGDhHQd5QAXSAKvOAwNSj1VsJ_AxoCHXoQAvD_BwE#!/item"
    },
    {
        id: 6,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h0d/50322783961118/voda-tassay-stolovaya-negazirovannaya-1-5-l-100236255-1.jpg",
        name: "Вода TASSAY питьевая негазированная 1.5 л",
        cost: 284,
        description: "питьевая вода, Казахстан, хранить при температуре от 0'С до +20'С и относительной влажности воздуха не более 75%",
        rating: 5.0, 
        link: "https://kaspi.kz/shop/p/voda-tassay-pit-evaja-negazirovannaja-1-5-l-100236255/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHClaKg4K4vf_L-QZWKBnjzdkddbGDhHQd5QAXSAKvOAwNSj1VsJ_AxoCHXoQAvD_BwE#!/item"
    },
    {
        id: 7,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hc4/31508617396254/voda-borjomi-mineral-naya-sil-nogazirovannaya-butylka-plastikovaya-1-25-l-100210995-1.jpg",
        name: "Вода Borjomi минеральная, лечебно-столовая газированная 1.25 л",
        cost: 687,
        description: "минеральная, лечебно-столовая, Грузия, хранить при температуре от +5°C до +20°С",
        rating: 4.98,
        link: "https://kaspi.kz/shop/p/voda-borjomi-mineral-naja-lechebno-stolovaja-gazirovannaja-1-25-l-100210995/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHClaKg4K4vf_L-QZWKBnjzdkddbGDhHQd5QAXSAKvOAwNSj1VsJ_AxoCHXoQAvD_BwE#!/item"
    },
    {
        id: 8,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/h9d/51899451506718/gracio-sok-granat-0-95-l-100219115-1.jpg",
        name: "Gracio сок гранат 0.95 л",
        cost: 744,
        description: "сок, фруктовый, без мякоти, гранат, Казахстан",
        rating: 4.8,
        link: "https://kaspi.kz/shop/p/gracio-sok-granat-0-95-l-100219115/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHClaKg4K4vf_L-QZWKBnjzdkddbGDhHQd5QAXSAKvOAwNSj1VsJ_AxoCHXoQAvD_BwE#!/item"
    },
    {
        id: 9,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hce/hd3/31575751852062/voda-asem-ai-mineral-naya-srednegazirovannaya-butylka-plastikovaya-1-l-100211080-1.jpg",
        name: "Вода Асем-Ай Сарыагаш минеральная, лечебно-столовая газированная 1 л",
        cost: 192,
        description: "минеральная, лечебно-столовая вода, Казахстан, хранить при температуре от +1°C до +20°С",
        rating: 5.0,
        link: "https://kaspi.kz/shop/p/voda-asem-ai-saryagash-mineral-naja-lechebno-stolovaja-gazirovannaja-1-l-100211080/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHClaKg4K4vf_L-QZWKBnjzdkddbGDhHQd5QAXSAKvOAwNSj1VsJ_AxoCHXoQAvD_BwE#!/item"
    },
    {
        id: 10,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd0/h8d/46690687320094/natahtari-saperavi-1-l-101208894-1-Container.jpg",
        name: "Натахтари Саперави 1 л",
        cost: 799,
        description: "лимонад, с сахаром, виноград, Грузия",
        rating: 4.99,
        link: "https://kaspi.kz/shop/p/natahtari-saperavi-1-l-101208894/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHClaKg4K4vf_L-QZWKBnjzdkddbGDhHQd5QAXSAKvOAwNSj1VsJ_AxoCHXoQAvD_BwE#!/item"
    }
    

];