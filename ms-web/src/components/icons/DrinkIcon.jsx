import React from "react";

function DrinkIcon(props) {
  return (
    <svg className={props.className} width={props.size} height={props.size} viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="46" cy="46" r="47.5" transform="translate(3 3)" stroke={props.fill ? "#30A5CA" : "#C4C4C4"} stroke-width="3"/>
      <path d="M17.7143 9.51351C17.7143 13.5968 14.264 17.027 9.85714 17.027C5.45028 17.027 2 13.5968 2 9.51351C2 5.43021 5.45028 2 9.85714 2C14.264 2 17.7143 5.43021 17.7143 9.51351Z" transform="translate(61 45)" stroke={props.fill ? "#30A5CA" : "#C4C4C4"} stroke-width="4"/>
      <rect width="41" height="4" rx="1.5" transform="translate(28 69)" fill={props.fill ? "#30A5CA" : "#C4C4C4"}/>
      <path d="M2.67929 0C7.54839 3.54745 6.64224 7.64706 2.67929 10C-1.28366 12.3529 -0.479936 16.2532 2.67929 20" transform="translate(35 14.2537) rotate(-12.0604)" stroke={props.fill ? "#30A5CA" : "#C4C4C4"} stroke-width="3"/>
      <path d="M2.67929 0C7.54839 3.54745 6.64224 7.64706 2.67929 10C-1.28366 12.3529 -0.479936 16.2532 2.67929 20" transform="translate(44.0232 14.6597) rotate(-12.0604)" stroke={props.fill ? "#30A5CA" : "#C4C4C4"} stroke-width="3"/>
      <path d="M2.67929 0C7.54839 3.54745 6.64224 7.64706 2.67929 10C-1.28366 12.3529 -0.479936 16.2532 2.67929 20" transform="translate(52.0232 14.6597) rotate(-12.0604)" stroke={props.fill ? "#30A5CA" : "#C4C4C4"} stroke-width="3"/>
      <path d="M41.1429 0H0C0 15.4845 2.84531 24.2222 11.2156 30.9501C11.719 31.3547 12.3538 31.5655 12.9996 31.5713C20.3604 31.6373 20.4269 31.6537 27.3295 31.5736C27.9485 31.5665 28.5581 31.3699 29.051 30.9955C37.8846 24.2872 41.1429 15.8631 41.1429 0Z" transform="translate(28 39)" fill={props.fill ? "#30A5CA" : "#C4C4C4"} stroke={props.fill ? "#30A5CA" : "#C4C4C4"} stroke-width="4"/>
    </svg>
  );
}

DrinkIcon.defaultProps = {
  size: 50
};

export default DrinkIcon;
