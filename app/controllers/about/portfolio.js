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
      title: ''
    },
    {
      src: 'images/travel/home-hotels.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/home-cars.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/home-events.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/home-restaurants.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/home-clubs.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/home-page-bottom.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/login-form.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/registration-form.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/restaurant-view.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/restaurants-menu.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/reviews-tab.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/write-review.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/entity-map.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/results-clubs.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/results-flights.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/results-hotels.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/entity-page-bottom.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/checkout-flights.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/checkout-success.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/profile-bookings.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/profile-favorites.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/admin-hotels.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/edit-entity.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/add-record.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/add-images-uploaded.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/add-images.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/gallery-upload.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/edit-language.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/edit-user.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/emails.png',
      w: 1200,
      h: 600,
      title: ''
    },

    {
      src: 'images/travel/language-manager.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/maintenance.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/pick-location.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/bookings-clubs.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/booking-club.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/bookings-flights.png',
      w: 1200,
      h: 600,
      title: ''
    },
    {
      src: 'images/travel/booking-flight.png',
      w: 1200,
      h: 600,
      title: ''
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