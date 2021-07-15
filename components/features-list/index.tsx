import 'keen-slider/keen-slider.min.css';
import data from './data';
import MobileFeature from './MobileFeature';
import DesktopFeature from './DesktopFeature';

export interface IFeature {
  image: string;
  title: string;
  paragraph: string;
  active: boolean;
}

export default () => {
  return (
    <div className='flex flex-col'>
      <header className='flex flex-col items-center text-center px-3 mx-auto mb-5 lg:max-w-[50%]'>
        <h2 className='text-black text-4xl font-bold mb-2'>{data.title}</h2>
        <p className='text-black text-base'>{data.subtitle}</p>
      </header>
      <MobileFeature features={data.features} />
      <DesktopFeature features={data.features} />
    </div>
  );
};
