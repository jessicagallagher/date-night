import { PageHeader, WineSelections } from '../components';

export default function PairWine() {
  return (
    <div className='container is-fluid'>
      <PageHeader
        headerText={'Pair Wine With Food'}
        headerClass={'has-text-primary pt-6'}
      />
      <div className='has-text-centered pt-6'>
        <h3 className='is-size-4 is-size-3-desktop'>Select One</h3>
<WineSelections />
      </div>
    </div>
  );
}
