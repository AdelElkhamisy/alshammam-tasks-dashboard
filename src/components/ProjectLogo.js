import React from "react";
import { fixImgPath } from "../utils/helpers";

const ProjectLogo = ({ src, size }) => {
  const style = React.useMemo(
    () => ({ width: size || 30, height: size || 30, borderRadius: 20 }),
    [size]
  );

  return (
    <img
      src={fixImgPath(src) || require("../images/logo.png")}
      alt=""
      style={{
        width: 60,
        height: 60,
      }}
      // style={style}
    />
  );
};

export default ProjectLogo;
