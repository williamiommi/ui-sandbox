import { useKeenSlider } from 'keen-slider/react';
import { IFeature } from './';
import TextComponent from './TextComponent';

export default (props: { features: IFeature[] }) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 1.5,
    spacing: 20,
    autoAdjustSlidesPerView: false,
    mode: 'free',
    resetSlide: true,
    breakpoints: {
      '(min-width:640px)': {
        slidesPerView: 2.5,
      },
      '(min-width:1024px)': {
        slidesPerView: 0,
      },
    },
  });
  return (
    <div className='px-4 lg:invisible lg:fixed lg:-translate-x-full'>
      <div className='keen-slider' ref={sliderRef}>
        {props.features.map((feature) => (
          <div className='keen-slider__slide max-w-[250px]'>
            <section className='flex flex-col'>
              <img src={feature.image} alt={feature.title} className='block' />
              <div className='flex flex-col p-3'>
                <TextComponent
                  title={feature.title}
                  paragraph={feature.paragraph}
                />
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};
