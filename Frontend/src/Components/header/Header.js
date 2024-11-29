

import ResponsiveAppBar from "./navbar/NavbarMain";
import Image1 from "../graphics/Image1.jpeg";
import Image2 from "../graphics/bg3.jpg";
import Image3 from "../graphics/bg1.jpg";
import Image4 from "../graphics/bg2.jpg";
import BackgroundSlider from 'react-background-slider'

import FancyButton from "./foreground/FancyButton"


function Header() {
  return (
    <div id="header">
      <ResponsiveAppBar />
      <BackgroundSlider
        images={[Image1, Image2, Image3, Image4]}
        // duration={3}
        // transition={2}
      />
      <FancyButton />
    </div>
  );
}

export default Header;
