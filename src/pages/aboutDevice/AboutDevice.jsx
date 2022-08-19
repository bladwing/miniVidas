import "./aboutDevice.scss"

const AboutDevice = () => {
  return (
    <div className="aboutDeviceContainer">
      <h1>MINI VIDAS®</h1>
      <h3> Compact multiparametric immunoanalyzer </h3>
      <p>
        MINI VIDAS® is a compact automated immunoassay system based on the
        Enzyme Linked Fluorescent Assay (ELFA) principles. Convenient and
        user-friendly, it provides accurate on-demand test results.
      </p>
      <ol>
        <li>Robust and reliable: MTBF > 1 100 days</li>
        <li>Up to 36 tests per hour</li>
        <li>
          Broad menu: over 100 parameters available in single-test ready-to-use
          format
        </li>
        <li>Adapted to STAT testing</li>
      </ol>
      <p>
        MINI VIDAS® is greatly appreciated worldwide for its simplicity,
        flexibility, reliability and 24/7 availability. It processes single
        sample and batch tests for all types of analysis: serology,
        immunochemistry, antigen detection. Ten different analytes can be used
        simultaneously. All enzyme immunoassay reaction stages are performed
        automatically in minimal space: pipetting, incubating, washing, reading,
        and results are sent immediately to the integrated printer.
      </p>
      <h3>Compact instrument</h3>
      <ol>
        <li> Completely self-contained unit: </li>

        
          Analytical module with 12 test positions / 2 independent 6-test
          compartments
       
        <li>Integrated monitor, keyboard and printer</li>

        <li> Fits easily into your laboratory:</li>
        Light weight: only 88 lbs (40kg) <br />
       Small dimensions
      </ol>

      <img src="https://www.biomerieux-diagnostics.com/sites/clinic/files/mini_vidas-small.jpg" alt="deviceImage" className="deviceImage"/>
    </div>
  );
};

export default AboutDevice;
