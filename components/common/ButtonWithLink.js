import Link from 'next/link';

export default function ButtonWithLink({ buttonClass, buttonText, url }) {
  return (
    <button className={`button ${buttonClass}`}>
      <Link href={`${url}`}>{buttonText}</Link>
    </button>
  );
}
