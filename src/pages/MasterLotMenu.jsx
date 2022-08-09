import MainPage from "./MainPage";

const MasterLotMenu = () => {
    return (
      <div className="block1">

        <MainPage/>
        <ul>
        <h3>Master Lot Menu</h3>
          <li>Scan Master Lot</li>
          <li>Read Master Lot</li>
          <li>Manual Master Lot entry</li>
          <li>List Stored Standards</li>
          <li>List Master Lots</li>
        </ul>
      </div>
    );
  };

  export default MasterLotMenu;