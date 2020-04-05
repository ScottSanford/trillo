/**
 * Mock Data. This should come from an API.
 * Sometimes it's great to work backwards and start with the components with some fake data.
 * Once you have some data, then you can start to build out the API.
 */
export const hotelData = {
  name: 'Hotel Las Palmas',
  location: 'Albufeira, Portugal',
  overallRatingAvg: 8.6,
  overallRatingCount: 429,
  hotelImages: [
    { img: 'img/hotel-1.jpg', description: 'Hotel Nightlife', caption: 'Vibrant Nightlife' },
    { img: 'img/hotel-2.jpg', description: 'Hotel Pools', caption: 'Luxury Pools' },
    { img: 'img/hotel-3.jpg', description: 'Amazing Views', caption: 'Stunning Views' },
  ],
  benefits: [
    'Close to the beach',
    'Breakfast included',
    'Free airport shuttle',
    'Free wifi in all rooms',
    'Air conditioning and heating',
    'Pets allowed',
    'We speak all languages',
    'Perfect for families',
  ],
  recommended: [
    { img: 'img/user-3.jpg', name: 'Friend 1' },
    { img: 'img/user-4.jpg', name: 'Friend 2' },
    { img: 'img/user-5.jpg', name: 'Friend 3' },
    { img: 'img/user-6.jpg', name: 'Friend 4' },
  ],
  reviews: [
    {
      firstName: 'Nick',
      id: '32fqp9jakf',
      lastName: 'Smith',
      profileImg: 'img/user-1.jpg',
      rating: '7.8',
      reviewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officiaex.',
      reviewDate: 'Feb 23rd, 2020',
    },
    {
      firstName: 'Mary',
      id: '2e09ijaadd',
      lastName: 'Thomas',
      profileImg: 'img/user-2.jpg',
      rating: '9.3',
      reviewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.',
      reviewDate: 'Feb 23rd, 2020',
    }
  ]
}