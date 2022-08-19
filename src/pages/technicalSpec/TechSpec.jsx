import "./TechSpec.scss";
const TechSpec = () => {
  return (
    <div className="aboutDeviceContainer">
      <h1>Instrument Overview</h1>
      <ol>
        Analytical Unit : 2 sections of 6 slots <br />
        Pilot screen
      </ol>

      <img
        src="https://www.biomerieux-diagnostics.com/sites/clinic/files/minividas_system_overview.png"
        alt="deviceImage"
        className="deviceImage"
      />
      <h3>Technical Specifications</h3>

      <ol>
        <li>Weight : 88 lbs (40 kg)</li>
        <h3>Electrical requirements:</h3>
        <li>Voltage 100-240 VAC</li>
        <li>Electrical consumption 1.5 – 0.8 A</li>
        <li>Frequency 50-60Hz</li>
        <li>Power 150 Watts</li>
        <li>Heat emission approximately 512 Btu/hr</li>
      </ol>
      <h3>Instrument dimensions</h3>
      <img
        src="https://www.biomerieux-diagnostics.com/sites/clinic/files/mini_vidas.jpg"
        alt="deviceImage"
        className="deviceDimension"
      />
    </div>
  );
};
export default TechSpec;
