import {Store} from './store';

export const Ncased: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'button.add-to-cart:not([disabled])',
      text: ['Add to Cart'],
    },
    outOfStock: {
      container: 'button.add-to-cart[disabled]',
      text: [],
    },
  },
    links: [
    {
      brand: 'ncased',
      model: 'window-kit',
      series: 'm2-accessories',
      url: 'https://ncased.com/collections/m2-accessories/products/window-kit?variant=48725701165224',
    },
  ],
  name: 'ncased',
  country: 'US',
};
