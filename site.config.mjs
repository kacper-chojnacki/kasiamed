/**
 * Deployment settings — the only file to edit when moving to a custom domain.
 *
 * GitHub Pages preview:  site 'https://kacper-chojnacki.github.io', base '/kasiamed', indexable false
 * Production domain:     site 'https://kasiamed.pl',                base '/',         indexable true
 *                        (and add public/CNAME containing "kasiamed.pl")
 */
export const siteConfig = {
  site: 'https://kacper-chojnacki.github.io',
  base: '/kasiamed',

  /** Allow search engines to index the site. Keep false on the temporary github.io address. */
  indexable: false,

  /**
   * Web3Forms access key (https://web3forms.com). Not a secret — it is visible in the page source by design.
   * Leave empty to run the contact form in preview mode.
   */
  web3formsAccessKey: '',
};
