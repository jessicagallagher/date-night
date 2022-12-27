import Image from 'next/image';
import { useState } from 'react';
import { PageHeader, ButtonWithoutLink } from '../components';
import { wineTypes, whiteWine, redWine } from '../utils/wineData';

export default function PairWine() {
  const [hideTypeSection, setHideTypeSection] = useState(false);
  const [showWhite, setShowWhite] = useState(false);
  const [showRed, setShowRed] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    switch (e.target.value) {
      case 'white':
        setHideTypeSection(true);
        setShowWhite(true);
        break;

      case 'red':
        setHideTypeSection(true);
        setShowRed(true);
        break;

      default:
        console.log('error');
        setHideTypeSection(false);
    }
  };

  const handleStartOver = (e) => {
    e.preventDefault();

    setShowWhite(false);
    setShowRed(false);
    setHideTypeSection(false);
  }

  return (
    <div className='container is-fluid'>
      <PageHeader
        headerText={'Pair Wine With Food'}
        headerClass={'has-text-primary pt-6'}
      />
      <div className='has-text-centered pt-6'>
        <h3 className='is-size-4 is-size-3-desktop'>Select One</h3>
        {!hideTypeSection && (
          <div className='mt-6 is-flex is-flex-direction-column wine-type-buttons'>
            {wineTypes.map((item) => (
              <ButtonWithoutLink
                key={item.id}
                buttonValue={item.type}
                buttonText={
                  item.type.charAt(0).toUpperCase() + item.type.slice(1)
                }
                buttonClass={'mt-3 is-rounded'}
                clickHandler={handleClick}
              />
            ))}
          </div>
        )}

        {/* white wine */}
        {showWhite && (
          <div className='mx-auto mt-4'>
            <ButtonWithoutLink
              buttonText={'Start over'}
              buttonClass={'mb-6 is-danger is-rounded'}
              clickHandler={handleStartOver}
            />
            <div className='select is-hidden-tablet'>
              <select>
                {whiteWine
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <option value='' key={item.id}>
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </option>
                  ))}
              </select>
            </div>
            <div className='buttons is-centered is-hidden-mobile'>
              {whiteWine
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <button className='button is-rounded' key={item.id}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* red wine */}
        {showRed && (
          <div className='mx-auto mt-4'>
            <ButtonWithoutLink
              buttonText={'Start over'}
              buttonClass={'mb-6 is-danger is-rounded'}
              clickHandler={handleStartOver}
            />
            <div className='select is-hidden-tablet'>
              <select>
                {redWine
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <option value='' key={item.id}>
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </option>
                  ))}
              </select>
            </div>
            <div className='buttons is-centered is-hidden-mobile'>
              {redWine
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <button className='button is-rounded' key={item.id}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
