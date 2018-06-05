import React from "react";

function LogoPin(props) {
  return (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 85 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84.9666 41.8992C84.9888 41.3647 85 40.8274 85 40.2878C85 18.0374 65.9721 0 42.5 0C19.0279 0 0 18.0374 0 40.2878C0 40.8274 0.0112305 41.3647 0.0333862 41.8992H0C0.0189819 42.0735 0.0385132 42.2478 0.0585938 42.4214C0.241211 45.7397 0.847412 48.9517 1.82697 52.0098C6.58997 70.3904 19.1092 86.0505 43.775 112C71.3621 80.802 82.4978 65.0178 84.7468 44.7112C84.7765 44.4529 84.8036 44.1941 84.8282 43.9346C84.895 43.2615 84.9521 42.5835 85 41.8992H84.9666ZM74.7745 42.021C74.7914 41.5979 74.7999 41.1729 74.7999 40.7456C74.7999 23.1375 60.3387 8.86328 42.4999 8.86328C24.6611 8.86328 10.2 23.1375 10.2 40.7456C10.2 41.1729 10.2085 41.5979 10.2253 42.021H10.2C10.2144 42.1592 10.2292 42.2969 10.2445 42.4343C10.3833 45.0598 10.8439 47.6013 11.5881 50.021C15.2078 64.5674 24.7224 76.9602 43.4689 97.4963C64.4383 72.8037 72.9008 60.3127 74.6082 44.2393C74.6303 44.0393 74.6505 43.8386 74.6688 43.6375C74.7198 43.1028 74.7634 42.5647 74.7999 42.021H74.7745ZM42.5 60.3079C52.932 60.3079 61.3889 51.8921 61.3889 41.5105C61.3889 31.1292 52.932 22.7134 42.5 22.7134C32.0679 22.7134 23.6111 31.1292 23.6111 41.5105C23.6111 51.8921 32.0679 60.3079 42.5 60.3079Z"
        fill="#FF6745"
      />
    </svg>
  );
}

LogoPin.defaultProps = {
  width: 50,
  height: 50
};

export default LogoPin;
