import { useState } from 'react';
import axios from 'axios';
import {
  wineTypes,
  whiteWine,
  redWine,
  dessertWine,
  sparklingWine,
  sherry,
  vermouth
} from '../utils/wineData';
import { ButtonWithoutLink } from '../components';

export default function WineSelections() {
  const [hideTypeSection, setHideTypeSection] = useState(false);
  const [showWhite, setShowWhite] = useState(false);
  const [showRed, setShowRed] = useState(false);
  const [showDessert, setShowDessert] = useState(false);
  const [showSparkling, setShowSparkling] = useState(false);
  const [showSherry, setShowSherry] = useState(false);
  const [showVermouth, setShowVermouth] = useState(false);
  const [data, setData] = useState([])

  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const url = process.env.NEXT_PUBLIC_BASE_URL

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

      case 'dessert wine':
        setHideTypeSection(true);
        setShowDessert(true);
        break;

      case 'sparkling wine':
        setHideTypeSection(true);
        setShowSparkling(true);
        break;
      
      case 'sherry':
        setHideTypeSection(true);
        setShowSherry(true);
        break;
      
      case 'vermouth':
        setHideTypeSection(true);
        setShowVermouth(true);
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
    setShowDessert(false);
    setShowSparkling(false);
    setShowSherry(false);
    setShowVermouth(false);
    setHideTypeSection(false);
  };

  const handleChange = (e) => {
    e.preventDefault();

    axios.get(`${url}food/wine/dishes?wine=${e.target.value}&apiKey=${apiKey}`).then((res) => {
      setData(res.data.pairings)
    })
      .catch((error) => {
        console.log(error.toJSON())
        setData(null)
      })
  }

  console.log(data)

  return (
    <>
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

      {/* white */}
      {showWhite && (
        <div className='mx-auto mt-4'>
          <ButtonWithoutLink
            buttonText={'Start over'}
            buttonClass={'mb-6 is-danger is-rounded'}
            clickHandler={handleStartOver}
          />
          <div className='select is-hidden-tablet ml-2'>
            <select onChange={handleChange}>
              {whiteWine
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </option>
                ))}
            </select>
          </div>
          <div className='buttons is-centered is-hidden-mobile'>
            {whiteWine
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
                <button
                  className='button is-rounded'
                  key={item.id}
                  value={item.id}
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </button>
              ))}
          </div>
        </div>
      )}

      {/* red */}
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
                  <option value={item.id} key={item.id}>
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

      {/* dessert */}
      {showDessert && (
        <div className='mx-auto mt-4'>
          <ButtonWithoutLink
            buttonText={'Start over'}
            buttonClass={'mb-6 is-danger is-rounded'}
            clickHandler={handleStartOver}
          />
          <div className='select is-hidden-tablet'>
            <select>
              {dessertWine
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </option>
                ))}
            </select>
          </div>
          <div className='buttons is-centered is-hidden-mobile'>
            {dessertWine
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
                <button className='button is-rounded' key={item.id}>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </button>
              ))}
          </div>
        </div>
      )}

      {/* sparkling */}
      {showSparkling && (
        <div className='mx-auto mt-4'>
          <ButtonWithoutLink
            buttonText={'Start over'}
            buttonClass={'mb-6 is-danger is-rounded'}
            clickHandler={handleStartOver}
          />
          <div className='select is-hidden-tablet'>
            <select>
              {sparklingWine
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </option>
                ))}
            </select>
          </div>
          <div className='buttons is-centered is-hidden-mobile'>
            {sparklingWine
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
                <button className='button is-rounded' key={item.id}>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </button>
              ))}
          </div>
        </div>
      )}

      {/* sherry */}
      {showSherry && (
        <div className='mx-auto mt-4'>
          <ButtonWithoutLink
            buttonText={'Start over'}
            buttonClass={'mb-6 is-danger is-rounded'}
            clickHandler={handleStartOver}
          />
          <div className='select is-hidden-tablet'>
            <select>
              {sherry
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </option>
                ))}
            </select>
          </div>
          <div className='buttons is-centered is-hidden-mobile'>
            {sherry
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
                <button className='button is-rounded' key={item.id}>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </button>
              ))}
          </div>
        </div>
      )}

      {/* vermouth */}
      {showVermouth && (
        <div className='mx-auto mt-4'>
          <ButtonWithoutLink
            buttonText={'Start over'}
            buttonClass={'mb-6 is-danger is-rounded'}
            clickHandler={handleStartOver}
          />
          <div className='select is-hidden-tablet'>
            <select>
              {vermouth
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </option>
                ))}
            </select>
          </div>
          <div className='buttons is-centered is-hidden-mobile'>
            {vermouth
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
                <button className='button is-rounded' key={item.id}>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </button>
              ))}
          </div>
        </div>
      )}
      {data && (
        <div>
          {data.map((item, index) => (
            <li key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
          ))}
        </div>
      )}
      {!data && (
        <div>
          <h1>Oops! No pairings were found.</h1>
        </div>
      )}
    </>
  );
}
