import React from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import { quizState } from "../../state/quizState";
import { themeState } from "../../state/themeState";

const Hint = () => {
  return (
    <div
      className={cx(
        `text-3xl md:text-4xl leading-regular mb-16 md:mb-24`,
        { "text-black": themeState.theme === "light" },
        { "text-white": themeState.theme === "dark" }
      )}
    >
      {quizState.currentQuiz.hint}
    </div>
  );
};

export default observer(Hint);
