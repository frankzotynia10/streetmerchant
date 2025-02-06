import {Store} from './store';

export const OptimusPC: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.product-form__add-button',
      text: ['add to cart'],
    },
    outOfStock: {
      container: '.product-form__add-button',
      text: ['sold out', 'out of stock'],
    },
    maxPrice: {
      container: '.product__price',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'optimus',
      model: 'signature v3',
      series: 'silver nickel',
      url: 'https://optimuspc.com/products/signature-v3-cpu-block-amd?variant=41014759129171',
    },
    {
        brand: 'optimus',
        model: 'signature v3',
        series: 'silver copper',
        url: 'https://optimuspc.com/products/signature-v3-cpu-block-amd?variant=41014759161939',
      },
    {
        brand: 'optimus',
        model: 'signature v3',
        series: 'black nickel',
        url: 'https://optimuspc.com/products/signature-v3-cpu-block-amd?variant=41014759063635',
      },
      {
        brand: 'optimus',
        model: 'signature v3',
        series: 'black copper',
        url: 'https://optimuspc.com/products/signature-v3-cpu-block-amd?variant=41014759096403',
      },
      {
        brand: 'optimus',
        model: 'foundation',
        series: 'silver nickel',
        url: 'https://optimuspc.com/products/foundation-cpu-block-amd?variant=16111866019889',
      },
      {
        brand: 'optimus',
        model: 'foundation',
        series: 'silver copper',
        url: 'https://optimuspc.com/products/foundation-cpu-block-amd?variant=16111865987121',
      },
      {
        brand: 'optimus',
        model: 'foundation',
        series: 'black nickel',
        url: 'https://optimuspc.com/products/foundation-cpu-block-amd?variant=31139815751763',
      },
      {
        brand: 'optimus',
        model: 'foundation',
        series: 'black copper',
        url: 'https://optimuspc.com/products/foundation-cpu-block-amd?variant=31139815718995',
      },
  ],
  name: 'OptimusPC',
  country: 'US',
};
