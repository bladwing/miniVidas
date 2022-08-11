import ConfigurationMenu from "./ConfigurationMenu";

const SoundMenu = () => {
  return (
    <div className="block1">
      <ConfigurationMenu />
      <ul>
        <h3>Sound Menu</h3>

        <li>Keyclick Volume</li>
        <li>Beep Volume</li>
        <li>Initial Error Volume</li>
        <li>Final Error Volume</li>
        <li>Display Blinking</li>
      </ul>
    </div>
  );
};

export default SoundMenu;
