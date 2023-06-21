

type Props = {
  img: string;
  name: string;
  desc: string;
};

const Classes = ({ img, name, desc }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center itemspace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 `;
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{desc}</p>
      </div>
      <img src={img} alt="img1" />
    </li>
  );
};

export default Classes;
