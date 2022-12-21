export default function Button({ buttonClass, buttonText }) {
  return (
    <button className={`button ${buttonClass}`}>
      {buttonText}
    </button>
  )
}
