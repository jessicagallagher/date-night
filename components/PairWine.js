import Image from 'next/image';
import { useState } from 'react';
import { PageHeader, Button } from '../components';
import { whiteWine } from '../utils/wineData/white';

export default function PairWine() {
  const [btnText, setBtnText] = useState('');
  const wineNames = whiteWine.sort((a, b) => a.name - b.name)
  

  return (
    <div className='container is-fluid'>
      <PageHeader headerText={'Pair Wine With Food'} />
      <div className='mt-3 has-text-centered'>
        <h3 className='is-size-4 is-size-3-desktop'>Select One</h3>
        <div className='mt-3 is-flex is-flex-direction-column'>
          <Button buttonText={'White'} buttonClass={'mt-3'} />
          <Button buttonText={'Red'} buttonClass={'mt-3'} />
        </div>
        <h3 className='is-size-4 is-size-3-desktop'>Select One</h3>
        <div className='mx-auto mt-4'>
          <div className='select'>
            <select>
              {whiteWine.sort((a, b) => a.name.localeCompare(b.name)).map((item) => (
                <option value="" key={item.id}>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
