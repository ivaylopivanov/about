import Ember from 'ember';

export default Ember.Controller.extend({
  esrol: false,
  travel: false,
  eConsole: false,
  travelItems: [
    {
      src: 'images/travel/home-flights.png',
      w: 1200,
      h: 600,
      title: 'Home page - Search for flights'
    },
    {
      src: 'images/travel/home-hotels.png',
      w: 1200,
      h: 600,
      title: 'Home page - Search for hotels'
    },
    {
      src: 'images/travel/home-cars.png',
      w: 1200,
      h: 600,
      title: 'Home page - Search for cars'
    },
    {
      src: 'images/travel/home-events.png',
      w: 1200,
      h: 600,
      title: 'Home page - Search for events'
    },
    {
      src: 'images/travel/home-restaurants.png',
      w: 1200,
      h: 600,
      title: 'Home page - Search for restaurants'
    },
    {
      src: 'images/travel/home-clubs.png',
      w: 1200,
      h: 600,
      title: 'Home page - Search for clubs'
    },
    {
      src: 'images/travel/home-page-bottom.png',
      w: 1200,
      h: 600,
      title: 'Home page - Bottom content'
    },
    {
      src: 'images/travel/login-form.png',
      w: 1200,
      h: 600,
      title: 'Login form'
    },
    {
      src: 'images/travel/registration-form.png',
      w: 1200,
      h: 600,
      title: 'Registration form'
    },
    {
      src: 'images/travel/restaurant-view.png',
      w: 1200,
      h: 600,
      title: 'View restaurant'
    },
    {
      src: 'images/travel/restaurants-menu.png',
      w: 1200,
      h: 600,
      title: 'View menu'
    },
    {
      src: 'images/travel/reviews-tab.png',
      w: 1200,
      h: 600,
      title: 'Reviews view'
    },
    {
      src: 'images/travel/write-review.png',
      w: 1200,
      h: 600,
      title: 'Write review'
    },
    {
      src: 'images/travel/entity-map.png',
      w: 1200,
      h: 600,
      title: 'Find it on the map'
    },
    {
      src: 'images/travel/results-clubs.png',
      w: 1200,
      h: 600,
      title: 'Results for clubs'
    },
    {
      src: 'images/travel/results-flights.png',
      w: 1200,
      h: 600,
      title: 'Results for flights'
    },
    {
      src: 'images/travel/results-hotels.png',
      w: 1200,
      h: 600,
      title: 'Results for hotels'
    },
    {
      src: 'images/travel/entity-page-bottom.png',
      w: 1200,
      h: 600,
      title: 'Service landing page'
    },
    {
      src: 'images/travel/checkout-flights.png',
      w: 1200,
      h: 600,
      title: 'Checkout - Flights'
    },
    {
      src: 'images/travel/checkout-success.png',
      w: 1200,
      h: 600,
      title: 'Checkout - Success'
    },
    {
      src: 'images/travel/profile.png',
      w: 1200,
      h: 600,
      title: 'Profile'
    },
    {
      src: 'images/travel/profile-bookings.png',
      w: 1200,
      h: 600,
      title: 'Profile - Bookings info'
    },
    {
      src: 'images/travel/profile-favorites.png',
      w: 1200,
      h: 600,
      title: 'Profile - Favorites info'
    },
    {
      src: 'images/travel/admin-hotels.png',
      w: 1200,
      h: 600,
      title: 'Admin - Hotels view'
    },
    {
      src: 'images/travel/edit-entity.png',
      w: 1200,
      h: 600,
      title: 'Admin - Edit record'
    },
    {
      src: 'images/travel/add-record.png',
      w: 1200,
      h: 600,
      title: 'Admin - Add record'
    },
    {
      src: 'images/travel/add-images-uploaded.png',
      w: 1200,
      h: 600,
      title: 'Admin - Uploaded images'
    },
    {
      src: 'images/travel/add-images.png',
      w: 1200,
      h: 600,
      title: 'Admin - Upload image'
    },
    {
      src: 'images/travel/gallery-upload.png',
      w: 1200,
      h: 600,
      title: 'Admin - Gallery for images'
    },
    {
      src: 'images/travel/language-manager.png',
      w: 1200,
      h: 600,
      title: 'Admin - Languages view'
    },
    {
      src: 'images/travel/edit-language.png',
      w: 1200,
      h: 600,
      title: 'Admin - Edit language'
    },
    {
      src: 'images/travel/edit-user.png',
      w: 1200,
      h: 600,
      title: 'Admin - Edit User'
    },
    {
      src: 'images/travel/emails.png',
      w: 1200,
      h: 600,
      title: 'Admin - Extract emails'
    },

    {
      src: 'images/travel/maintenance.png',
      w: 1200,
      h: 600,
      title: 'Admin - Maintenance mode'
    },
    {
      src: 'images/travel/pick-location.png',
      w: 1200,
      h: 600,
      title: 'Admin - Get latitude and longitude'
    },
    {
      src: 'images/travel/bookings-clubs.png',
      w: 1200,
      h: 600,
      title: 'Admin - Bookings for clubs'
    },
    {
      src: 'images/travel/booking-club.png',
      w: 1200,
      h: 600,
      title: 'Admin - Club booking'
    },
    {
      src: 'images/travel/bookings-flights.png',
      w: 1200,
      h: 600,
      title: 'Admin - Bookings flights'
    },
    {
      src: 'images/travel/booking-flight.png',
      w: 1200,
      h: 600,
      title: 'Admin - Flight booking'
    },
  ],
  eShipItems: [
    {
      src: 'images/e-ship/login.png',
      w: 1200,
      h: 600,
      title: 'Login page'
    },
    {
      src: 'images/e-ship/orders-grid.png',
      w: 1200,
      h: 600,
      title: 'Orders grid'
    },
    {
      src: 'images/e-ship/filters.png',
      w: 1200,
      h: 600,
      title: 'Filters'
    },
    {
      src: 'images/e-ship/processed-orders.png',
      w: 1200,
      h: 600,
      title: 'Processed orders'
    },
    {
      src: 'images/e-ship/manifest.png',
      w: 1200,
      h: 600,
      title: 'Get manifest'
    },
  ],
  eConsoleItems: [
    {
      src: 'images/e-console/login.png',
      w: 1200,
      h: 600,
      title: 'Login page'
    },
    {
      src: 'images/e-console/order-create.png',
      w: 1200,
      h: 600,
      title: 'Create order'
    },
    {
      src: 'images/e-console/orders-grid.png',
      w: 1200,
      h: 600,
      title: 'Orders grid'
    },
    {
      src: 'images/e-console/order-view.png',
      w: 1200,
      h: 600,
      title: 'Order view'
    },
    {
      src: 'images/e-console/stock.png',
      w: 1200,
      h: 600,
      title: 'Items'
    },
    {
      src: 'images/e-console/stock-info.png',
      w: 1200,
      h: 600,
      title: 'Stock level'
    },
  ],
  items: [],
  actions: {
    show(project) {
      let items = this.get(project + 'Items');
      this.items.clear();
      items.forEach((item) => {
        this.items.pushObject(item);
      });
      this.get('myGallery').init();
    }
  }
});