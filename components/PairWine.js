import Image from 'next/image';
import { useState } from 'react';
import { PageHeader, Button } from '../components';
import { wineTypes, whiteWine } from '../utils/wineData';

export default function PairWine() {
  const [hideSection, setHideSection] = useState(false);
  const [isWhite, setIsWhite] = useState(false);
  const [isRed, setIsRed] = useState(false);

  return (
    <div className='container is-fluid'>
      <PageHeader headerText={'Pair Wine With Food'} />
      <div className='mt-3 has-text-centered'>
        <h3 className='is-size-4 is-size-3-desktop'>Select One</h3>
        <div className='mt-3 is-flex is-flex-direction-column wine-type-buttons'>
          {wineTypes.map((item) => (
            <Button
              key={item.id}
              buttonText={
                item.type.charAt(0).toUpperCase() + item.type.slice(1)
              }
              buttonClass={'mt-3'}
            />
          ))}
        </div>
        <h3 className='is-size-4 is-size-3-desktop'>Select One</h3>
        <div className='mx-auto mt-4'>
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
                <button className='button' key={item.id}>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
