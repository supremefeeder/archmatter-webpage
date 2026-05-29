/**
 * Local waitlist testing — copy to waitlist.config.js in this folder:
 *
 *   cp waitlist.config.example.js waitlist.config.js
 *
 * On production, waitlist.config.js is generated at deploy from the
 * NFORMS_ACCESS_KEY GitHub secret (never committed).
 */
window.ARCHMATTER_WAITLIST = {
  enabled: true,
  endpoint: 'https://api.nforms.eu/f/YOUR_NFORMS_ACCESS_KEY',
};
