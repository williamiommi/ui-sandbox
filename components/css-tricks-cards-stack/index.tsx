import Card, { ICard } from './Card';
import { cards } from './data';

export default function App() {
  return (
    <div className='relative flex flex-row overflow-x-auto p-10'>
      {cards.map((card: ICard, index: number) => (
        <Card isFirst={index === 0} card={card} />
      ))}
    </div>
  );
}
