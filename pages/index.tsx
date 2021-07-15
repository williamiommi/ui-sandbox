import Link from 'next/link';
import pages from '../pages';

export default function Home() {
  return (
    <ul>
      {pages.map((page) => (
        <li>
          <Link href={page.path}>
            <a>{page.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
