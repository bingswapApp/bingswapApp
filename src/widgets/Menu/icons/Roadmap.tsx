import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 560 560" {...props}>
      <g>
        <g>
          <path
            d="M325.478,433H79c-27.019,0-49-21.981-49-49c0-27.019,21.981-49,49-49h96c43.561,0,79-35.439,79-79
			c0-43.561-35.439-79-79-79h-52.478c0.963,4.854,1.478,9.867,1.478,15s-0.515,10.146-1.478,15H175c27.019,0,49,21.981,49,49
			s-21.981,49-49,49H79c-43.561,0-79,35.439-79,79c0,43.561,35.439,79,79,79h246.478c-0.963-4.854-1.478-9.867-1.478-15
			S324.515,437.854,325.478,433z"
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M401,401c-25.916,0-47,21.084-47,47s21.084,47,47,47s47-21.084,47-47S426.916,401,401,401z" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M143,17H47c-8.284,0-15,6.716-15,15c0,12.389,0,102.939,0,115.469C13.42,153.745,0,171.329,0,192
			c0,25.916,21.084,47,47,47s47-21.084,47-47c0-20.671-13.42-38.255-32-44.531V111h81c8.284,0,15-6.716,15-15V32
			C158,23.716,151.284,17,143,17z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M401,49c-61.206,0-111,49.794-111,111c0,33.051,14.399,63.844,39.626,85.015l58.01,113.797
			c5.556,10.899,21.173,10.898,26.728,0l58.01-113.797C497.601,223.844,512,193.051,512,160C512,98.794,462.206,49,401,49z M401,207
			c-25.916,0-47-21.084-47-47s21.084-47,47-47s47,21.084,47,47S426.916,207,401,207z"
          />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
