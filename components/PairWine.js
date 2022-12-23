import { useState } from 'react'
import { PageHeader, Button } from '../components'

export default function PairWine() {
  const [category, setCategory] = useState('');
  const [btnText, setBtnText] = useState('');
  
  return (
    <div className='container is-fluid'>
      <PageHeader headerText={'Pair Wine With Food'}/>
      <div className='mt-3 has-text-centered'>
        <h3 className='is-size-4 is-size-3-desktop'>Select One</h3>
</div>
    </div>
  )
}
