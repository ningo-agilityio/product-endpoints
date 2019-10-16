const categories = [
  {
    id: 1,
    name: 'top',
    description: 'T-shirt, crop top,...'
  },
  {
    id: 2,
    name: 'dress',
    description: 'Skirt, dress,...'
  }
]

const products = [
  {
    id: '1571212293648',
    name: 'Classic Button down',
    quantity: 100,
    price: 265.00,
    thumbnail: 'https://cdn.shopify.com/s/files/1/0923/8036/products/babyco1_1296x.jpg?v=1443019234',
    description: 'The Classic Button Down from Jesse Kamm drapes gracefully across the form with enough structure to remain composed. Mandarin collar. Button placket closure at front. Breast pocket at left front. Color Sea Glass. 55% Cotton, 45% Lyocell. Made in U.S.A. Ashley is wearing an X-Small.',
    category: categories[0],
    color: 'White',
    size: 'XS'
  },
  {
    id: '1571212473025',
    name: 'Imperial Tunic',
    quantity: 100,
    price: 363.00,
    thumbnail: 'https://cdn.shopify.com/s/files/1/0923/8036/products/babyandco2_1296x.jpg?v=1443017523',
    description: 'A painters smock with a little extra length allowing it to be worn as a dress. Pin tucks at the collar stretch out into an easy volume that can be tied up with cotton trim at the center front. Jesse Kamm. Color White. 100% Cotton. Made in U.S.A. Ashley is wearing an X-Small.',
    category: categories[1],
    color: 'White',
    size: 'M'
  },
  {
    id: '1571213873045',
    name: 'Sailor Cardigan',
    quantity: 100,
    price: 293.00,
    thumbnail: 'https://cdn.shopify.com/s/files/1/0923/8036/products/babyandco2_1296x.jpg?v=1443017523',
    description: 'A painters smock with a little extra length allowing it to be worn as a dress. Pin tucks at the collar stretch out into an easy volume that can be tied up with cotton trim at the center front. Jesse Kamm. Color White. 100% Cotton. Made in U.S.A. Ashley is wearing an X-Small.',
    category: categories[0],
    color: 'Black',
    size: 'S'
  },
  {
    id: '1571213892330',
    name: 'Cape Dress',
    quantity: 100,
    price: 788.00,
    thumbnail: 'https://cdn.shopify.com/s/files/1/0923/8036/products/babyandco5_1296x.jpg?v=1443018006',
    description: 'The Cape Dress from Co. captivates. The waistless silhouette offers a flattering look. Invisible zip closure at side. 82% Triacetate, 18% Polyester. Made in China. Ashley is wearing an X-Small.',
    category: categories[1],
    color: 'Black',
    size: 'L'
  },
  {
    id: '1571213909689',
    name: 'Auralias Leather Top',
    quantity: 100,
    price: 698.00,
    thumbnail: 'https://cdn.shopify.com/s/files/1/0923/8036/products/2015-06-11-Ashley_Look5_50094_23460_copy_1296x.jpeg?v=1442346786',
    description: "Perforated crop top is perfect for layering or solo wear. By Malene Birger. Color Olive. 100% Lamb's Leather. Made in China. Ashley is wearing a European 36.",
    category: categories[0],
    color: 'Black',
    size: 'M'
  },
];

const customers = [
  {
    id: '1571214102435',
    username: 'ashley008',
    first_name: 'Ashley',
    last_name: 'Smith',
    avatar_url: 'https://cdn.shopify.com/s/files/1/0923/8036/products/2015-06-11-Ashley_Look5_50094_23464_1296x.jpeg?v=1442346786',
    gender: false
  },
  {
    id: '1571214193102',
    username: 'jthomp008',
    first_name: 'John',
    last_name: 'Thompson',
    avatar_url: 'https://cdn.shopify.com/s/files/1/0923/8036/products/2015-03-30_Jake_Look_17_23376_16560_1296x.jpeg?v=1442348489',
    gender: true
  },
]

const carts = []

module.exports = {
  products,
  categories,
  customers,
  carts
}
