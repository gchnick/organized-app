import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconAssigned = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-assigned" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2457_21223"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2457_21223)">
          <path
            d="M10.5807 15.723L17.3038 8.99998L16.25 7.94615L10.5807 13.6154L7.73075 10.7654L6.67693 11.8192L10.5807 15.723ZM5.3077 20.5C4.80898 20.5 4.38302 20.3233 4.02982 19.9701C3.67661 19.6169 3.5 19.191 3.5 18.6923V5.3077C3.5 4.80898 3.67661 4.38302 4.02982 4.02982C4.38302 3.67661 4.80898 3.5 5.3077 3.5H9.7577C9.82052 2.94488 10.0628 2.47278 10.4846 2.08368C10.9064 1.69456 11.4115 1.5 12 1.5C12.5948 1.5 13.1032 1.69456 13.525 2.08368C13.9468 2.47278 14.1859 2.94488 14.2423 3.5H18.6923C19.191 3.5 19.6169 3.67661 19.9701 4.02982C20.3233 4.38302 20.5 4.80898 20.5 5.3077V18.6923C20.5 19.191 20.3233 19.6169 19.9701 19.9701C19.6169 20.3233 19.191 20.5 18.6923 20.5H5.3077ZM5.3077 19H18.6923C18.7692 19 18.8397 18.9679 18.9038 18.9038C18.9679 18.8397 19 18.7692 19 18.6923V5.3077C19 5.23077 18.9679 5.16024 18.9038 5.09613C18.8397 5.03203 18.7692 4.99998 18.6923 4.99998H5.3077C5.23077 4.99998 5.16024 5.03203 5.09612 5.09613C5.03202 5.16024 4.99997 5.23077 4.99997 5.3077V18.6923C4.99997 18.7692 5.03202 18.8397 5.09612 18.9038C5.16024 18.9679 5.23077 19 5.3077 19ZM12 4.34613C12.2166 4.34613 12.3958 4.27529 12.5375 4.13363C12.6791 3.99196 12.75 3.81279 12.75 3.59613C12.75 3.37946 12.6791 3.20029 12.5375 3.05863C12.3958 2.91696 12.2166 2.84613 12 2.84613C11.7833 2.84613 11.6041 2.91696 11.4625 3.05863C11.3208 3.20029 11.25 3.37946 11.25 3.59613C11.25 3.81279 11.3208 3.99196 11.4625 4.13363C11.6041 4.27529 11.7833 4.34613 12 4.34613Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconAssigned;
