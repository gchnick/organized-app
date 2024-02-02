import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconNoConnection = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-no-connection" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2515_24470"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2515_24470)">
          <path
            d="M19.827 21.9846L10.9848 13.0923C10.086 13.2051 9.23668 13.4545 8.43666 13.8404C7.63666 14.2263 6.94114 14.7295 6.35011 15.35L4.78861 13.7577C5.37964 13.1667 6.046 12.6551 6.78766 12.2231C7.52935 11.791 8.3143 11.4667 9.14251 11.25L6.18091 8.28843C5.45911 8.61278 4.74629 9.0147 4.04244 9.4942C3.33859 9.97369 2.69114 10.5089 2.10011 11.1L0.557861 9.5077C1.15529 8.91027 1.79279 8.3686 2.47036 7.8827C3.14793 7.3968 3.83095 6.97821 4.51941 6.62693L2.32326 4.43075L3.37709 3.37695L20.9309 20.9307L19.827 21.9846ZM12.0001 20.7115C11.4347 20.7115 10.9569 20.5137 10.5665 20.1182C10.1761 19.7227 9.98091 19.2474 9.98091 18.6923C9.98091 18.1269 10.1761 17.649 10.5665 17.2587C10.9569 16.8683 11.4347 16.6731 12.0001 16.6731C12.5655 16.6731 13.0434 16.8683 13.4337 17.2587C13.8241 17.649 14.0193 18.1269 14.0193 18.6923C14.0193 19.2474 13.8241 19.7227 13.4337 20.1182C13.0434 20.5137 12.5655 20.7115 12.0001 20.7115ZM17.9001 15.05L13.9079 11.0578C14.8668 11.1911 15.8056 11.4863 16.7242 11.9433C17.6427 12.4004 18.4719 12.9987 19.2116 13.7385L17.9001 15.05ZM21.9001 11.1C20.6168 9.81665 19.1293 8.81248 17.4376 8.08748C15.7459 7.36248 13.9334 6.99998 12.0001 6.99998C11.6501 6.99998 11.3078 7.01248 10.9732 7.03748C10.6386 7.06248 10.3142 7.09998 10.0001 7.14998L8.08476 5.23463C8.67066 5.07951 9.28668 4.96317 9.93281 4.8856C10.579 4.80804 11.2681 4.76925 12.0001 4.76925C14.2578 4.76925 16.3636 5.19009 18.3174 6.03175C20.2712 6.87342 21.986 8.03207 23.4616 9.5077L21.9001 11.1Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconNoConnection;
