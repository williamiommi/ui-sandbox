import { memo, useEffect, useState } from 'react';
import { IFeature } from './';
import TextComponent from './TextComponent';

const App = (props: { features: IFeature[] }) => {
  const [enhancedFeatures, setEnhancedFeatures] = useState<IFeature[]>(
    props.features
  );
  const handleClick = (clickedIndex: number) => {
    setEnhancedFeatures(
      enhancedFeatures.map((feature, index) => {
        feature.active = clickedIndex === index;
        return feature;
      })
    );
  };
  useEffect(() => {
    console.log('rendering...');
  });
  return (
    <div className='hidden lg:max-w-[1920px] lg:mx-auto lg:grid lg:grid-cols-2 '>
      <div className='aspect-w-1 aspect-h-1'>
        {enhancedFeatures.map((feature) => (
          <img
            src={feature.image}
            alt={feature.title}
            className={`transition-opacity p-5 ${
              feature.active ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <ul className='flex flex-col items-center justify-center max-w-[70%] mx-auto'>
        {enhancedFeatures.map((feature, index) => {
          const isLast = index === enhancedFeatures.length - 1;
          return (
            <li
              className={`cursor-pointer ${
                !isLast ? 'pb-5 mb-5 border-b' : ''
              }`}
              onClick={() => handleClick(index)}
            >
              <div
                className={`${feature.active ? 'opacity-100' : 'opacity-40'}`}
              >
                <TextComponent
                  title={feature.title}
                  paragraph={feature.paragraph}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(App);
