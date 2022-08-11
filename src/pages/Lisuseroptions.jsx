import ConfigurationMenu from "./ConfigurationMenu";

const Lisuseroptions = () => {
  return (
    <div className="block1">
      <ConfigurationMenu />
      <ul>
        <h3>LIS User Options</h3>

        <li>LIS Upload Enabled</li>
        <li>Warn About Missing ID</li>
        <li>LIS Auto Validation</li>
      </ul>
    </div>
  );
};

export default Lisuseroptions;
