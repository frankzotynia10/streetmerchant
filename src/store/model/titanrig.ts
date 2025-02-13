import { Store } from './store';

export const TitanRig: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'button#product-addtocart-button:not([style*="display: none"])',
      text: ['Add to Cart'],
    },
    outOfStock: {
      container: 'button#product-addtocart-button[style*="display: none"]',
      text: [],
    },
  },
  links: [
    {
      brand: 'watercool',
      model: 'mo-ra-600-black',
      series: 'radiator',
      url: 'https://www.titanrig.com/watercool-mo-ra-iv-600-radiator-9x200mm-0330wc014600xx.html?color=158',
    },
    {
        brand: 'watercool',
        model: 'mo-ra-tank-d5',
        series: 'reservoir',
        url: 'https://www.titanrig.com/watercool-mo-ra-iv-tank-d5-expansion-0340wc014101on.html',
      },
      {
        brand: 'watercool',
        model: 'mo-ra-tank-275',
        series: 'reservoir',
        url: 'https://www.titanrig.com/watercool-mo-ra-iv-tank-275-d5-reservoir-and-pump-mount-0345wc011101on.html',
      },
  ],
  name: 'titanrig',
  country: 'US',
};