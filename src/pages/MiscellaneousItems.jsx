import ConfigurationMenu from "./ConfigurationMenu";


const MiscellaneousItems = () => {
    return (
      <div className="block1">

        <ConfigurationMenu/>
        <ul>
        <h3>Miscellaneous Items</h3>
          
          <li>Expired standards</li>
          <li>Halt Sections</li>
          <li>View Saved Error</li>
          <li>On / Off Line</li>
          <li>Section Counters</li>
        </ul>
      </div>
    );
  };

  export default MiscellaneousItems;