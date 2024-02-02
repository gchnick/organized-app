import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconGithub = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-github" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2633_30340)">
          <path
            d="M12.0435 0.5C5.41346 0.5 0.043457 5.78 0.043457 12.292C0.043457 17.503 3.48146 21.922 8.24846 23.48C8.84846 23.591 9.06846 23.226 9.06846 22.913C9.06846 22.633 9.05846 21.891 9.05346 20.908C5.71546 21.619 5.01146 19.326 5.01146 19.326C4.46546 17.965 3.67646 17.601 3.67646 17.601C2.58946 16.87 3.76046 16.885 3.76046 16.885C4.96546 16.967 5.59846 18.1 5.59846 18.1C6.66846 19.903 8.40746 19.382 9.09346 19.081C9.20146 18.318 9.51046 17.799 9.85346 17.504C7.18846 17.209 4.38746 16.195 4.38746 11.677C4.38746 10.39 4.85246 9.338 5.62246 8.513C5.48746 8.215 5.08246 7.016 5.72746 5.392C5.72746 5.392 6.73246 5.076 9.02746 6.601C9.98746 6.339 11.0075 6.209 12.0275 6.203C13.0475 6.209 14.0675 6.339 15.0275 6.601C17.3075 5.076 18.3125 5.392 18.3125 5.392C18.9575 7.016 18.5525 8.215 18.4325 8.513C19.1975 9.338 19.6625 10.39 19.6625 11.677C19.6625 16.207 16.8575 17.204 14.1875 17.494C14.6075 17.848 14.9975 18.571 14.9975 19.676C14.9975 21.254 14.9825 22.522 14.9825 22.905C14.9825 23.214 15.1925 23.583 15.8075 23.465C20.6085 21.917 24.0435 17.495 24.0435 12.292C24.0435 5.78 18.6705 0.5 12.0435 0.5Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_2633_30340">
            <rect width="24" height="24" fill="white" transform="translate(0.043457)" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default IconGithub;
