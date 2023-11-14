export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

export const AppleproductData = [
  {
    imageurl: "https://res.cloudinary.com/dbcydazok/image/upload/v1698247754/apple_iphone_15_pro_max_256gb_Natural_titanium_qd0gyu.webp",
    name:"Apple Iphone 15 Pro Max 256GB (Natural Titanium)",
    price:"$2199",
    rate: "HOT"
  },
  {
    imageurl: "https://res.cloudinary.com/dbcydazok/image/upload/v1698247543/apple_iphone_15_256gb_Black_a0czfk.webp",
    name:"Apple Iphone 15 256GB (Black)",
    price:"$1699",
    rate: "HOT"

  },
  {
    imageurl: "https://res.cloudinary.com/dbcydazok/image/upload/v1698244244/samsung_galazy_S23_ultra_5G_256gb_levender_klh14o.webp",
    name: "Samsung Galazy S23 ultra 5G 256GB (Levender)",
    price: "$1949",
    rate: "HOT"
  }
]


export const OfferproductData = [
  {
    imageurl: "https://res.cloudinary.com/dbcydazok/image/upload/v1698244363/samsung_galazy_S23_5G_256gb_cream_b7gl6m.webp",
    name: "Samsung Galaxy S23+ 5G 256GB (Cream)",
    price: "$1649"
  },
  {
    imageurl: "https://res.cloudinary.com/dbcydazok/image/upload/v1698070648/apple_iphone_14_pro_max_1TB_gold_stidi9.webp",
    name:"Apple Iphone 14 Pro Max 1TB (Gold)",
    price:"$2769"
  },
  {
    imageurl: "https://res.cloudinary.com/dbcydazok/image/upload/v1698244779/goole_pixel_6a_5G_128GB_charcoal_lzknw5.webp",
    name: "Google Pixel 6a 5G 128GB (Charcoal)",
    price: "$599",
    rate: "25% OFF"
  },
  {
    imageurl: "https://res.cloudinary.com/dbcydazok/image/upload/v1698245994/vivo_v29_zyih7l.png",
    name: "Vivo V29",
    price: "$759"
  },  
  {
    imageurl: "https://res.cloudinary.com/dbcydazok/image/upload/v1698247843/apple_iphone_SE_5G_64gb_q3muzt.webp",
    name:"Apple Iphone 11 SE 64GB",
    price:"$719",
    rate: "50% OFF"
  },
  {
    imageurl: "https://res.cloudinary.com/dbcydazok/image/upload/v1698244145/samsung_galazy_S23_FE_5G_256gb_purple_vy1plq.webp",
    name: "Samsung Galazy S23 FE 5G 256GB (Purple)",
    price: "$999"
  }
]


/*Testimonial*/
export const Testimonial = [
  {
    id:1,
    image: require('./Home_component/testimonial_images/cyrion.jpg'),
    description: "The service is very convenient, with doorstep collection of phone, and immediate cash payment. The rates offered also are very competitive in the market.",
    name: 'Mr. Cyrion',
    position: 'CEO of Press Perfect'
  },
  {
    id:2,
    image: require('./Home_component/testimonial_images/gaelle.jpg'),
    description: "It was a smooth transaction. The store manager was very helpful and the process was simple. Nice experience. Payment was very instant and the whole process was quick. Will recommend it.",
    name: 'Madam Kongni Gaelle',
    position: 'Manager of FINEX'
  },
  {
    id:3,
    image: require('./Home_component/testimonial_images/manager.jpg'),
    description: "Well trained staff. Overall a positive experience in buying my phone at HTMobile. No complaints, bought my phone very easily here. Definitely worth a try.",
    name: 'Mr. Willy',
    position: 'Manager of FANCO'
  },
  {
    id:4,
    image: require('./Home_component/testimonial_images/prudencia.jpg'),
    description: "HTMobile is a fantastic and one of a kind service. It has helped me to buy qaulity phones in a hassle free manner.",
    name: 'Madam Prudencia Foyabo',
    position: 'Lab TEchnician'
  },
  {
    id:5,
    image: require('./Home_component/testimonial_images/kingley.jpg'),
    description: "My friends have had to fight their parents for their first phone because their choices were costly. But I got the same phone as them at 25% cost because I bought from HTMobile",
    name: 'Mr. Ambe Kingley',
    position: "CEO of King's Cafe"
  }
]

/*About*/
export const AboutPeople = [
  {
    id:1,
    image:require('./About_component/about_image/personel-4.jpg'),
    name: 'Tafon Hubert',
    position: "Founder"
  },
  {
    id:2,
    image:require('./About_component/about_image/personel-1.jpg'),
    name: 'Hortensia Tabeh',
    position: "Co-Founder"
  },
  {
    id:3,
    image: require('./About_component/about_image/personel-2.jpg'),
    name: 'Cynthia Tabeh',
    position: "Co-Founder, Chief Marketing Officer"
  },
  {
    id:4,
    image:require('./About_component/about_image/personel-3.jpg'),
    name: 'Lebga Lesly',
    position: "Co-Founder, Chief Business Officer"
  }

]