import Link from "next/link";

type NextButtonProps = {
  type?: 'link' | 'button';
  href?: string;
  onClick?: () => void;
};
const NextButton = ({ type = 'button', onClick, href }: NextButtonProps) => {
  if (type === 'link') {
    return (
      <Link href={href ?? ''} className="rounded-xl px-4 py-1.5 bg-white text-brown-text text-lg shadow-md">ถัดไป</Link>
    )
  }
  return (
    <button onClick={onClick} className="rounded-xl px-4 py-1.5 bg-white text-brown-text text-lg shadow-md">ถัดไป</button>
  )
};

export default NextButton;