export default function ButtonWithoutLink({ buttonClass, buttonText, buttonType, buttonValue, clickHandler }) {
  return (
    <button value={buttonValue} className={`button ${buttonClass}`} onClick={clickHandler}>
      {buttonText}
    </button>
  );
}
