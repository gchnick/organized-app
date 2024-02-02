import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconInvite = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-invite" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_3170_54712"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3170_54712)">
          <path
            d="M1.73071 22.2691L3.48839 16.2615C3.17172 15.5846 2.92781 14.891 2.75666 14.1806C2.5855 13.4703 2.49991 12.7434 2.49991 12C2.49991 10.6858 2.74925 9.45082 3.24791 8.295C3.74658 7.13917 4.42333 6.13375 5.27816 5.27875C6.13301 4.42375 7.13825 3.74688 8.29389 3.24813C9.4495 2.74938 10.6843 2.5 11.9982 2.5C13.3121 2.5 14.5472 2.74933 15.7033 3.248C16.8595 3.74667 17.8651 4.42342 18.7204 5.27825C19.5756 6.1331 20.2527 7.13834 20.7515 8.29398C21.2504 9.44959 21.4999 10.6844 21.4999 11.9983C21.4999 13.3122 21.2505 14.5473 20.7517 15.7034C20.253 16.8595 19.5761 17.8652 18.7211 18.7204C17.8661 19.5757 16.8607 20.2527 15.7049 20.7516C14.549 21.2505 13.3141 21.5 11.9999 21.5C11.2565 21.5 10.5296 21.4144 9.81926 21.2432C9.10891 21.0721 8.41528 20.8281 7.73836 20.5115L1.73071 22.2691ZM3.94989 20.05L7.14989 19.1C7.39604 19.0333 7.63354 19.0051 7.86239 19.0154C8.09124 19.0256 8.32041 19.0872 8.54989 19.2C9.08322 19.4666 9.64155 19.6666 10.2249 19.8C10.8082 19.9333 11.3999 20 11.9999 20C14.2332 20 16.1249 19.225 17.6749 17.675C19.2249 16.125 19.9999 14.2333 19.9999 12C19.9999 9.76664 19.2249 7.87498 17.6749 6.32498C16.1249 4.77498 14.2332 3.99998 11.9999 3.99998C9.76655 3.99998 7.87489 4.77498 6.32489 6.32498C4.77489 7.87498 3.99989 9.76664 3.99989 12C3.99989 12.6 4.06655 13.1916 4.19989 13.775C4.33322 14.3583 4.53322 14.9166 4.79989 15.45C4.91655 15.6666 4.98065 15.8958 4.99219 16.1375C5.00374 16.3791 4.97297 16.6166 4.89989 16.85L3.94989 20.05ZM11.2499 15.75H12.7499V12.75H15.7499V11.25H12.7499V8.25H11.2499V11.25H8.24991V12.75H11.2499V15.75Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconInvite;
