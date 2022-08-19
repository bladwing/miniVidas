import StatusSection from "./StatusSection";

const Temperature = () => {
  return (
    <div className="Temperature">
      <StatusSection />

      <ul className="DisplayTemp">
        <h3>Temperature</h3>
        <li>Tray SPR</li>
        <li>A 37.1 37.1</li>
        <li>B 37.1 37.1</li>
      </ul>
    </div>
  );
};

export default Temperature;
