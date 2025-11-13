import { getEbayLink } from '../../lib/links';

export default function EbayPage() {
  const url = 'https://www.ebay.co.uk/';
  const link = getEbayLink(url);

  return (
    <main>
      <h1>eBay · AcrossBay</h1>
      <p><a href={link} target="_blank">Vai su eBay</a></p>
    </main>
  );
}
