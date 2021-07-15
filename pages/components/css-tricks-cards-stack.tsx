import Link from 'next/link';
import App from '../../components/css-tricks-cards-stack';

export default function _App() {
  return (
    <div className='min-h-screen bg-cardStackGray400'>
      <Link href='/'>
        <a className='block p-10'>&laquo;BACK</a>
      </Link>
      <App />
    </div>
  );
}
