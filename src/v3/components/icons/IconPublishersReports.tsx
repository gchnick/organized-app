import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconPublishersReports = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-publishers-reports" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2515_23851"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2515_23851)">
          <path
            d="M0.524678 4.423C0.431095 3.92428 0.528211 3.47492 0.816028 3.07492C1.10384 2.67492 1.49711 2.42813 1.99583 2.33455L12.2304 0.524922C12.7291 0.431339 13.1785 0.528457 13.5785 0.816273C13.9785 1.10409 14.2253 1.49736 14.3189 1.99607L14.5496 3.30762H13.0189L12.8247 2.21145C12.8118 2.14093 12.7734 2.08484 12.7093 2.04317C12.6452 2.00151 12.5746 1.98708 12.4977 1.9999L2.25928 3.81912C2.16953 3.83194 2.10222 3.87361 2.05735 3.94412C2.01247 4.01464 1.99644 4.09477 2.00928 4.18452L3.30738 11.5173V15.9729C3.05994 15.8422 2.8484 15.663 2.67275 15.4354C2.49712 15.2079 2.3843 14.9486 2.3343 14.6575L0.524678 4.423Z"
            fill={color}
          />
          <path
            d="M7.62395 20.685H16.3507V15.6652H21.3705V6.93841C21.3705 6.8483 21.3416 6.77428 21.2836 6.71635C21.2257 6.65842 21.1517 6.62946 21.0616 6.62946H7.62395C7.53385 6.62946 7.45983 6.65842 7.4019 6.71635C7.34397 6.77428 7.31501 6.8483 7.31501 6.93841V20.376C7.31501 20.4662 7.34397 20.5402 7.4019 20.5981C7.45983 20.656 7.53385 20.685 7.62395 20.685ZM7.62395 22.1909C7.12326 22.1909 6.69561 22.0136 6.34101 21.659C5.98639 21.3044 5.80908 20.8767 5.80908 20.376V6.93841C5.80908 6.43771 5.98639 6.01006 6.34101 5.65546C6.69561 5.30084 7.12326 5.12354 7.62395 5.12354H21.0616C21.5623 5.12354 21.9899 5.30084 22.3445 5.65546C22.6992 6.01006 22.8765 6.43771 22.8765 6.93841V16.3119L16.9975 22.1909H7.62395ZM9.76704 15.3948V13.8889H14.3428V15.3948H9.76704ZM9.76704 11.3983V9.89238H18.9185V11.3983H9.76704Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconPublishersReports;
