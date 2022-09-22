type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70 11.3859C63.0452 11.3909 56.1872 13.0163 49.9699 16.1331C43.7525 19.2499 38.3469 23.7724 34.1817 29.342C30.0164 34.9116 27.2061 41.375 25.9736 48.2198C24.7411 55.0645 25.1204 62.1023 27.0813 68.775C27.5599 70.4052 28.6665 71.7786 30.1577 72.5929C31.649 73.4072 33.4026 73.5958 35.0328 73.1172C36.6631 72.6385 38.0364 71.5319 38.8507 70.0407C39.6651 68.5495 39.8536 66.7959 39.375 65.1656C38.0749 60.7718 37.7355 56.1496 38.3798 51.613C39.0242 47.0764 40.6371 42.7316 43.1092 38.8735C45.5813 35.0155 48.8546 31.7345 52.7069 29.2534C56.5593 26.7724 60.9003 25.1493 65.4354 24.4944C69.9705 23.8395 74.5934 24.1681 78.9903 25.458C83.3871 26.7478 87.4549 28.9687 90.9175 31.9697C94.3801 34.9708 97.1564 38.6818 99.0578 42.8508C100.959 47.0198 101.941 51.5491 101.938 56.1312C101.938 73.5219 88.0797 87.2484 69.7156 88.0687C65.9012 88.2045 62.1322 88.9428 58.5484 90.2562L65.4609 57.9687C65.8163 56.308 65.4974 54.5742 64.5743 53.1486C63.6513 51.723 62.1998 50.7225 60.5391 50.3672C58.8784 50.0118 57.1445 50.3307 55.7189 51.2538C54.2934 52.1768 53.2929 53.6283 52.9375 55.289L39.0469 120.072C38.8622 120.898 38.8433 121.753 38.9913 122.586C39.1392 123.42 39.4512 124.216 39.909 124.928C40.3668 125.64 40.9613 126.254 41.6582 126.735C42.3551 127.216 43.1405 127.553 43.9688 127.728C44.4107 127.824 44.8618 127.872 45.3141 127.87C46.7785 127.868 48.198 127.364 49.3362 126.443C50.4745 125.521 51.2629 124.238 51.5703 122.806L53.4625 114.056C55.65 105.033 60.8563 101.38 70.2844 100.931C95.2109 99.8375 114.734 80.15 114.734 56.2078C114.729 44.3372 110.016 32.9532 101.631 24.5512C93.2454 16.1492 81.8706 11.4149 70 11.3859Z"
          fill="black"
        />
        <path
          d="M70.0161 51.3654C73.9425 51.3654 77.1254 48.1824 77.1254 44.256C77.1254 40.3296 73.9425 37.1467 70.0161 37.1467C66.0897 37.1467 62.9067 40.3296 62.9067 44.256C62.9067 48.1824 66.0897 51.3654 70.0161 51.3654Z"
          fill="black"
        />
      </svg>

      {/* {AppConfig.site_name} */}
    </span>
  );
};

export { Logo };
