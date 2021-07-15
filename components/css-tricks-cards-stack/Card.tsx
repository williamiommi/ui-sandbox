interface IUser {
  name: string;
  avatarUrl: string;
}

export interface ICard {
  date: string;
  title: string;
  tags: string[];
  user: IUser;
}

export default (props: { card: ICard; isFirst: boolean }) => {
  return (
    <article
      className={`
        relative 
        flex flex-col justify-between flex-1
        transition-all duration-300
        p-6
        cursor-pointer
        min-w-[300px] min-h-[350px]
        rounded-2xl shadow-card
        bg-gradient-to-r from-cardStackGray300 to-cardStackGray400
        peer peer-hover:translate-x-32
        hover:-translate-y-4 hover:rotate-3 ${
          !props.isFirst ? ' -ml-32 ' : ''
        }`}
    >
      <section>
        <time>
          <span className='text-cardStackGray100 font-bold'>Article </span>
          <span className='text-cardStackGray200'>
            on{' '}
            {new Date(props.card.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </time>
        <h3 className='text-white text-xl font-extrabold mb-4'>
          {props.card.title}
        </h3>
        <ul className='flex space-x-2'>
          {props.card.tags.map((tag) => (
            <li className='text-cardStackXXS text-cardStackOrange uppercase font-extrabold'>
              {tag}
            </li>
          ))}
        </ul>
      </section>
      <section className='flex space-x-2 items-center'>
        <img
          className='w-10 h-10 rounded-full'
          src={props.card.user.avatarUrl}
          alt={props.card.user.name}
        />
        <span className='text-white font-bold'>{props.card.user.name}</span>
      </section>
    </article>
  );
};
