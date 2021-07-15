import Link from 'next/link';
import App from '../../components/features-list';

export default function _App() {
  return (
    <div className='min-h-screen'>
      <Link href='/'>
        <a className='block p-10'>&laquo;BACK</a>
      </Link>
      <App />
    </div>
  );
}
