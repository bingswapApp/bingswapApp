import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 560 560" {...props}>
      <g>
        <g>
          <polygon
            points="295.192,233.703 268.112,229.768 256.001,205.229 243.89,229.768 216.81,233.703 236.405,252.804
			231.779,279.775 256.001,267.041 280.223,279.775 275.597,252.804 		"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M256.001,103.977c-31.586,15.374-78.494,33.789-135.975,43.166v69.861c0,47.249,15.049,92.153,43.521,129.859
			c23.945,31.71,55.826,55.983,92.454,70.456c36.629-14.473,68.509-38.747,92.454-70.456c28.472-37.706,43.521-82.61,43.521-129.859
			v-69.861C334.495,137.765,287.587,119.351,256.001,103.977z M307.831,263.278l12.235,71.337l-64.065-33.681l-64.065,33.681
			l12.235-71.337l-51.83-50.522l71.626-10.408l32.033-64.905l32.033,64.905l71.626,10.408L307.831,263.278z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M466.975,63.273c-61.242,0-112.931-15.548-145.509-28.59c-35.536-14.227-56.752-28.67-56.946-28.803L256.001,0
			l-8.521,5.881c-0.832,0.574-84.517,57.393-202.454,57.393h-15v153.73c0,33.548,5.452,66.603,16.205,98.249
			c10.494,30.882,25.799,59.764,45.492,85.843s43.282,48.708,70.111,67.253c27.493,19.005,57.794,33.298,90.06,42.482L256,512
			l4.106-1.169c32.267-9.184,62.568-23.477,90.06-42.482c26.83-18.546,50.418-41.174,70.111-67.253
			c19.693-26.08,34.999-54.962,45.492-85.843c10.753-31.645,16.205-64.701,16.205-98.249V63.273H466.975z M421.976,217.003
			c0,53.827-17.145,104.982-49.58,147.937c-28.548,37.807-67.015,66.339-111.244,82.513l-5.151,1.884l-5.151-1.884
			c-44.229-16.174-82.695-44.707-111.244-82.513c-32.436-42.955-49.58-94.11-49.58-147.937v-95.9h0l12.993-1.754
			c63.64-8.591,114.627-29.484,146.195-45.499l6.787-3.443l6.787,3.443c31.568,16.015,82.556,36.909,146.195,45.499l12.993,1.754
			V217.003z"
          />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
