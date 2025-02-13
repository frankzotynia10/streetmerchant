import { Store } from './store';

export const ModMyMods: Store = {
    currency: '$',
    labels: {
      inStock: {
        container: 'button.btn-cart:not([disabled])', // Button is enabled → in stock
        text: ['Add to Cart'],
      },
      outOfStock: {
        container: 'button.btn-cart[disabled]', // Button is disabled → out of stock
        text: [], // No text needed for disabled buttons
      },
  },
  links: [
    {
      brand: 'watercool',
      model: 'mo-ra-600-black',
      series: 'radiator',
      url: 'https://modmymods.com/watercool-mo-ra-iv-600-black-26600.html',
    },
    {
      brand: 'watercool',
      model: 'mo-ra-tank-d5',
      series: 'reservoir',
      url: 'https://modmymods.com/watercool-mo-ra-iv-tank-d5-expansion-26055.html',
    },
    {
      brand: 'watercool',
      model: 'mo-ra-tank-275',
      series: 'reservoir',
      url: 'https://modmymods.com/watercool-mo-ra-iv-passive-control-600-26083.html',
    },
    {
      brand: 'watercool',
      model: 'mo-ra-passive-control',
      series: 'radiator',
      url: '',
    },
  ],
  name: 'modmymods',
  country: 'US',
  waitUntil: 'domcontentloaded', // Ensures the page loads before scraping
};