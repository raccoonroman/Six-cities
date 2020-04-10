export const mapOfferToClient = (data) => ({
  id: data['id'],
  title: data['title'],
  previewImage: data['preview_image'],
  price: data['price'],
  rating: data['rating'],
  type: data['type'],
  bedrooms: data['bedrooms'],
  maxAdults: data['max_adults'],
  isFavorite: data['is_favorite'],
  isPremium: data['is_premium'],
  location: {
    latitude: data['location']['latitude'],
    longitude: data['location']['longitude'],
    zoom: data['location']['zoom'],
  },
  city: {
    name: data['city']['name'],
    location: {
      latitude: data['city']['location']['latitude'],
      longitude: data['city']['location']['longitude'],
      zoom: data['city']['location']['zoom'],
    }
  },
  description: data['description'],
  goods: data['goods'],
  hostAvatarUrl: data['host']['avatar_url'],
  hostId: data['host']['id'],
  hostIsPro: data['host']['is_pro'],
  hostName: data['host']['name'],
  images: data['images'],
});

export const mapCommentToClient = (data) => ({
  commentId: data['id'],
  text: data['comment'],
  date: data['date'],
  rating: data['rating'],
  userAvatarUrl: data['user']['avatar_url'],
  userId: data['user']['id'],
  isUserPro: data['user']['is_pro'],
  userName: data['user']['name'],
});
