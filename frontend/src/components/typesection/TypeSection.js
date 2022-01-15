import RefreshButton from './RefreshButton';
import TimeTracker from './TimeTracker';
import TypeBox from './TypeBox';
import TypeWord from './TypeWords';
import WPMTracker from './WPMTracker';

function handleChange() {
}

export default function TypeSection() {

  function refresh() {

  }

  return (
    <div>
      <div>
        <TypeWord />
      </div>
      <div>
        <TypeBox disabled={true} onChange={handleChange} />
        <WPMTracker />
        <TimeTracker />
        <RefreshButton onClick={refresh}/>
      </div>
    </div>
  );
}
