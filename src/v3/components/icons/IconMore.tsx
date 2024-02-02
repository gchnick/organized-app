import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconMore = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-more" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_3094_80306"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3094_80306)">
          <path
            d="M12 19.2692C11.5875 19.2692 11.2344 19.1223 10.9406 18.8286C10.6469 18.5348 10.5 18.1817 10.5 17.7692C10.5 17.3567 10.6469 17.0036 10.9406 16.7099C11.2344 16.4161 11.5875 16.2693 12 16.2693C12.4125 16.2693 12.7656 16.4161 13.0593 16.7099C13.3531 17.0036 13.5 17.3567 13.5 17.7692C13.5 18.1817 13.3531 18.5348 13.0593 18.8286C12.7656 19.1223 12.4125 19.2692 12 19.2692ZM12 13.5C11.5875 13.5 11.2344 13.3531 10.9406 13.0594C10.6469 12.7656 10.5 12.4125 10.5 12C10.5 11.5875 10.6469 11.2344 10.9406 10.9407C11.2344 10.6469 11.5875 10.5 12 10.5C12.4125 10.5 12.7656 10.6469 13.0593 10.9407C13.3531 11.2344 13.5 11.5875 13.5 12C13.5 12.4125 13.3531 12.7656 13.0593 13.0594C12.7656 13.3531 12.4125 13.5 12 13.5ZM12 7.73076C11.5875 7.73076 11.2344 7.58389 10.9406 7.29014C10.6469 6.9964 10.5 6.64329 10.5 6.23079C10.5 5.8183 10.6469 5.46519 10.9406 5.17144C11.2344 4.8777 11.5875 4.73083 12 4.73083C12.4125 4.73083 12.7656 4.8777 13.0593 5.17144C13.3531 5.46519 13.5 5.8183 13.5 6.23079C13.5 6.64329 13.3531 6.9964 13.0593 7.29014C12.7656 7.58389 12.4125 7.73076 12 7.73076Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconMore;
