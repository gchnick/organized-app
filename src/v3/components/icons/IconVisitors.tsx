import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconVisitors = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-visitors" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2513_2635"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2513_2635)">
          <path
            d="M1.7981 19.3077V17.0846C1.7981 16.5693 1.93111 16.1093 2.19715 15.7049C2.46316 15.3004 2.81843 14.9857 3.26295 14.7608C4.2133 14.2959 5.16891 13.9376 6.1298 13.6856C7.0907 13.4337 8.14679 13.3078 9.29807 13.3078C10.4494 13.3078 11.5054 13.4337 12.4663 13.6856C13.4272 13.9376 14.3828 14.2959 15.3332 14.7608C15.7777 14.9857 16.133 15.3004 16.399 15.7049C16.665 16.1093 16.798 16.5693 16.798 17.0846V19.3077H1.7981ZM18.798 19.3077V16.9616C18.798 16.3052 18.6373 15.6796 18.3159 15.0848C17.9944 14.4901 17.5385 13.9798 16.9481 13.5539C17.6186 13.6539 18.2551 13.8087 18.8576 14.0183C19.4602 14.228 20.0352 14.4757 20.5826 14.7616C21.0993 15.0372 21.4983 15.3621 21.7797 15.7362C22.0611 16.1103 22.2018 16.5188 22.2018 16.9616V19.3077H18.798ZM9.29807 11.6923C8.33559 11.6923 7.51164 11.3496 6.82622 10.6642C6.1408 9.97879 5.7981 9.15484 5.7981 8.19236C5.7981 7.22986 6.1408 6.40591 6.82622 5.72051C7.51164 5.03509 8.33559 4.69238 9.29807 4.69238C10.2606 4.69238 11.0845 5.03509 11.7699 5.72051C12.4553 6.40591 12.798 7.22986 12.798 8.19236C12.798 9.15484 12.4553 9.97879 11.7699 10.6642C11.0845 11.3496 10.2606 11.6923 9.29807 11.6923ZM17.9326 8.19236C17.9326 9.15484 17.5899 9.97879 16.9045 10.6642C16.2191 11.3496 15.3951 11.6923 14.4326 11.6923C14.3198 11.6923 14.1762 11.6795 14.0019 11.6539C13.8275 11.6282 13.6839 11.6 13.5711 11.5693C13.9655 11.0951 14.2686 10.5692 14.4803 9.99133C14.6921 9.4135 14.798 8.81344 14.798 8.19116C14.798 7.56889 14.69 6.97122 14.474 6.39813C14.258 5.82507 13.957 5.29751 13.5711 4.81546C13.7147 4.76418 13.8583 4.73084 14.0019 4.71546C14.1455 4.70008 14.289 4.69238 14.4326 4.69238C15.3951 4.69238 16.2191 5.03509 16.9045 5.72051C17.5899 6.40591 17.9326 7.22986 17.9326 8.19236ZM3.29807 17.8077H15.2981V17.0846C15.2981 16.8757 15.2458 16.6898 15.1413 16.5269C15.0368 16.3641 14.8711 16.2218 14.6442 16.1C13.8211 15.6757 12.9737 15.3542 12.1019 15.1356C11.2301 14.917 10.2955 14.8077 9.29807 14.8077C8.30064 14.8077 7.36602 14.917 6.49422 15.1356C5.62244 15.3542 4.775 15.6757 3.95192 16.1C3.725 16.2218 3.5593 16.3641 3.4548 16.5269C3.35031 16.6898 3.29807 16.8757 3.29807 17.0846V17.8077ZM9.29807 10.1924C9.84807 10.1924 10.3189 9.99653 10.7106 9.60486C11.1022 9.21319 11.2981 8.74236 11.2981 8.19236C11.2981 7.64236 11.1022 7.17153 10.7106 6.77986C10.3189 6.38819 9.84807 6.19236 9.29807 6.19236C8.74807 6.19236 8.27724 6.38819 7.88557 6.77986C7.4939 7.17153 7.29807 7.64236 7.29807 8.19236C7.29807 8.74236 7.4939 9.21319 7.88557 9.60486C8.27724 9.99653 8.74807 10.1924 9.29807 10.1924Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconVisitors;