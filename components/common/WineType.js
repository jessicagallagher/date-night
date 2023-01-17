export default function WineType({ wineSelection, clickHandler, selectionHandler, dataName }) {
  return (
    <>
      <div className='select is-hidden-tablet ml-2'>
        <select onChange={selectionHandler}>
          {wineSelection
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <option value={item.id} key={item.id}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </option>
            ))}
        </select>
      </div>
      <div className='buttons is-centered is-hidden-mobile'>
        {wineSelection
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item) => (
            <button
              className='button is-rounded'
              type='submit'
              key={item.id}
              value={item.id}
              onClick={clickHandler}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </button>
          ))}
      </div>
    </>
  );
}
