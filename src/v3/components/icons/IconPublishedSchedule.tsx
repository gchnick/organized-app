import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconPublishedSchedule = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-published-schedule" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_3113_63302"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3113_63302)">
          <path
            d="M4.3077 20.5C3.80257 20.5 3.375 20.325 3.025 19.975C2.675 19.625 2.5 19.1974 2.5 18.6923V5.3077C2.5 4.80257 2.675 4.375 3.025 4.025C3.375 3.675 3.80257 3.5 4.3077 3.5H19.6923C20.1974 3.5 20.625 3.675 20.975 4.025C21.325 4.375 21.5 4.80257 21.5 5.3077V18.6923C21.5 19.1974 21.325 19.625 20.975 19.975C20.625 20.325 20.1974 20.5 19.6923 20.5H4.3077ZM4.3077 19H19.6923C19.7692 19 19.8397 18.9679 19.9038 18.9038C19.9679 18.8397 20 18.7692 20 18.6923V5.3077C20 5.23077 19.9679 5.16024 19.9038 5.09613C19.8397 5.03203 19.7692 4.99998 19.6923 4.99998H4.3077C4.23077 4.99998 4.16024 5.03203 4.09613 5.09613C4.03202 5.16024 3.99998 5.23077 3.99998 5.3077V18.6923C3.99998 18.7692 4.03202 18.8397 4.09613 18.9038C4.16024 18.9679 4.23077 19 4.3077 19ZM5.25 16.75H9.74995V15.25H5.25V16.75ZM14.55 14.6442L19.1442 10.05L18.075 8.98078L14.55 12.5308L13.125 11.1058L12.0808 12.175L14.55 14.6442ZM5.25 12.75H9.74995V11.25H5.25V12.75ZM5.25 8.74995H9.74995V7.25H5.25V8.74995Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconPublishedSchedule;
