import React from "react";
import { observer } from "mobx-react-lite";
import SimpleKeyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const Keyboard = () => {
  const onKeyPress = (button: any) => {
    document.dispatchEvent(new KeyboardEvent("keypress", { key: button }));
  };

  return (
    <div className="w-3/4 md:w-1/2 mt-5">
      <SimpleKeyboard
        onKeyPress={onKeyPress}
        buttonTheme={[
          {
            class: `text-black`,
            buttons: "Q W E R T Y U I O P A S D F G H J K L Z X C V B N M"
          }
        ]}
        layout={{
          default: ["Q W E R T Y U I O P", "A S D F G H J K L", "Z X C V B N M"]
        }}
      />
    </div>
  );
};

export default observer(Keyboard);
