import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import {
  wineTypes,
  whiteWine,
  redWine,
  dessertWine,
  sparklingWine,
  sherry,
  vermouth,
} from '../utils/wineData';
import { ButtonWithoutLink, WineType } from '../components';

export default function WineSelections() {
  const [hideTypeSection, setHideTypeSection] = useState(false);
  const [showWhite, setShowWhite] = useState(false);
  const [showRed, setShowRed] = useState(false);
  const [showDessert, setShowDessert] = useState(false);
  const [showSparkling, setShowSparkling] = useState(false);
  const [showSherry, setShowSherry] = useState(false);
  const [showVermouth, setShowVermouth] = useState(false);
  const [data, setData] = useState([]);
  const [wineName, setWineName] = useState('');
  const [searchResults, setSearchResults] = useState([])

  const handleClick = (e) => {
    e.preventDefault();
    setHideTypeSection(true);

    switch (e.target.value) {
      case 'white':
        setShowWhite(true);
        break;

      case 'red':
        setShowRed(true);
        break;

      case 'dessert wine':
        setShowDessert(true);
        break;

      case 'sparkling wine':
        setShowSparkling(true);
        break;

      case 'sherry':
        setShowSherry(true);
        break;

      case 'vermouth':
        setShowVermouth(true);
        break;

      default:
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
    setData(null);
  };

  const handleChange = (e) => {
    e.preventDefault();

    setWineName(e.target.value);

    axios
      .get(`/api/wineWithFood?wine=${e.target.value}`, {
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        setData(res.data.data.pairings);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(data)
    const foodName = data
    // console.log(foodName)
    foodName.map((foodName) => {
      axios
        .get(`/api/getFoodImages?foodName=${foodName}`, {
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then((res) => {
          // console.log(res.data.data.searchResults);
          setSearchResults(res.data.data.searchResults)
        })
        .catch((error) => {
          console.log(error);
        });
    })
    const results = searchResults;

    const obj = results
    Object.values(obj)[0];
    console.log(typeof obj[0].results)
    const firstResult = obj[0].results // should firstResult be a state?

    // data.map((foodName) => {
    //   console.log(foodName);
    //   axios.get(`/api/getFoodImages?foodName=${foodName}`, {
    //     headers: {
    //       Accept: 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   });
    // });
  };

  // console.log(data)

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
          <WineType
            wineSelection={whiteWine}
            clickHandler={handleChange}
            selectionHandler={handleChange}
          />
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
          <WineType
            wineSelection={redWine}
            clickHandler={handleChange}
            selectionHandler={handleChange}
          />
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
          <WineType
            wineSelection={dessertWine}
            clickHandler={handleChange}
            selectionHandler={handleChange}
          />
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
          <WineType
            wineSelection={sparklingWine}
            clickHandler={handleChange}
            selectionHandler={handleChange}
          />
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
          <WineType
            wineSelection={sherry}
            clickHandler={handleChange}
            selectionHandler={handleChange}
          />
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
          <WineType
            wineSelection={vermouth}
            clickHandler={handleChange}
            selectionHandler={handleChange}
          />
        </div>
      )}

      {data && (
        <div>
          <h3 className='mt-6 is-size-4 is-size-3-desktop'>
            {wineName.charAt(0).toUpperCase() +
              wineName.slice(1).replace(/_/g, ' ')}
          </h3>
          {data.map((item, index) => (
            <li key={index}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <Image
                src={`https://spoonacular.com/cdn/ingredients_100x100/${item}.jpg`}
                width={150}
                height={150}
                alt={'image of food'}
              />
            </li>
          ))}
        </div>
      )}
      {!data && data !== null && (
        <div>
          <h3 className='mt-6 is-size-4 is-size-3-desktop'>
            Oops! No pairings were found.
          </h3>
        </div>
      )}
    </>
  );
}
