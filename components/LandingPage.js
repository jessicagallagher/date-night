import Image from 'next/image'
import Link from 'next/link';
import hero from '../public/images/landing-hero.png'
import { Button, PageHeader } from '../components'

export default function LandingPage() {
  return (
    <div className='container is-fluid'>
      <PageHeader headerText={'Somm'} />
      <section className='hero is-small'>
        <Image
          src={hero}
          alt='wine glasses cheering'
          className='center hero-image pt-1'
        />
      </section>
      <div className='py-4'>
        <h1 className='accent-font is-size-2 has-text-centered is-size-1-desktop'>
          What are you looking for?
        </h1>
      </div>
      <div className='py-4 is-flex is-flex-direction-column is-justify-content-center landing-buttons'>
           <Button
              buttonText={'Pair wine with food'}
          buttonClass={'mb-5 is-size-5-desktop'}
          url={'/wine-with-food'}
            />
        <Button
          buttonText={'Pair food with wine'}
          buttonClass={'is-size-5-desktop'}
        />
      </div>
    </div>
  );
}
