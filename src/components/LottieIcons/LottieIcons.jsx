import Lottie from "react-lottie";

const LottieIcons = ({ animationData, width, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} width={width} height={height} />;
};

export default LottieIcons;
