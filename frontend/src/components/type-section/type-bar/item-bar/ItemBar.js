import RefreshButton from "./RefreshButton";
import TimeTracker from "./TimeTracker";
import WPMTracker from "./WPMTracker";

export default function ItemBar(props) {
  return (
    <div>
      <WPMTracker />
      <TimeTracker />
      <RefreshButton />
    </div>
  );
}
