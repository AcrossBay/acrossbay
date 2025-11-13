import { getTiktokLink } from '../../lib/links';

export default function TiktokPage() {
  const url = 'https://www.tiktok.com/';
  const link = getTiktokLink(url);

  return (
    <main>
      <h1>TikTok · AcrossBay</h1>
      <p><a href={link} target="_blank">Vai su TikTok</a></p>
    </main>
  );
}
