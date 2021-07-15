interface ITextComponent {
  title: string;
  paragraph: string;
}
export default ({ title, paragraph }: ITextComponent) => {
  return (
    <>
      <h4 className='text-black font-bold text-base'>{title}</h4>
      <p className='text-black font-thin text-sm'>{paragraph}</p>
    </>
  );
};
