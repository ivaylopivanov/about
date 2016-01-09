import Ember from 'ember';

export default Ember.Controller.extend({
  esrol: false,
  travel: false,
  eConsole: false,
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
      items.forEach((item, index) => {
        this.items.pushObject(item);
      });
      this.get('myGallery').init();
    }
  }
});