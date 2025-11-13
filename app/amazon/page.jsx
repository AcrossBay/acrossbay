import { getAmazonLink } from '../../lib/links';

export default function AmazonPage() {
  // esempio base per mantenere la struttura esistente
  const url = 'https://www.amazon.co.uk/';
  const link = getAmazonLink(url);

  return (
    <main>
      <h1>Amazon · AcrossBay</h1>
      <p>
        <a href={link} target="_blank">Vai su Amazon</a>
      </p>
    </main>
  );
}
