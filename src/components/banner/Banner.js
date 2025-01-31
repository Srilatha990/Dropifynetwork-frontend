


// import Link from "next/link";
// import React from "react";

// // Internal import
// import useGetSetting from "@hooks/useGetSetting";
// import useUtilsFunction from "@hooks/useUtilsFunction";
// import { FiZap } from "react-icons/fi"; // Import the flash icon

// const Banner = () => {
//   const { storeCustomizationSetting } = useGetSetting();
//   const { showingTranslateValue } = useUtilsFunction();

//   // Manually setting the background image URL
//   const backgroundImage = "https://d14vpcucj0dct5.cloudfront.net/filters:form…nal_Category_-_Accessories_-_1920x552_TXp7ZkQ.png"; // replace with your image URL

//   // Banner styles including the background image
//   const bannerStyles = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "80px", // Adjust height as needed
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//   };

//   return (
//     <div className="relative" style={bannerStyles}>
//       {/* Title with flash icons */}
//       <h1 className="text-center text-white font-bold flex items-center space-x-3 z-10">
//         {/* Flash icon on the left */}
//         <FiZap className="text-white text-4xl" />

//         {/* Responsive text */}
//         <span
//           className="text-white"
//           style={{
//             fontSize: "clamp(0.8rem, 2vw, 1.3rem)", // Adjust font size based on screen width
//           }}
//         >
//           {showingTranslateValue(
//             storeCustomizationSetting?.home?.promotion_title
//           )}
//         </span>

//         {/* Flash icon on the right */}
//         <FiZap className="text-white text-4xl" />
//       </h1>
//     </div>
//   );
// };

// export default Banner;




import Link from "next/link";
import React from "react";

// Internal import
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { FiZap } from "react-icons/fi"; // Import the flash icon

const Banner = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  // Manually setting the background image URL
  const backgroundImage =
    "https://d14vpcucj0dct5.cloudfront.net/filters:form…nal_Category_-_Accessories_-_1920x552_TXp7ZkQ.png"; // replace with your image URL

  // Banner styles including the background image
  const bannerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60px", // Adjust height as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden", // Ensures content stays within the banner area
  };

  // Marquee styles
  const marqueeStyles = {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    animation: "marquee 10s linear infinite", // Marquee animation
  };

  // CSS for keyframes (inline style can’t handle this, so we need to inject it dynamically in the component)
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes marquee {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Clean up the added style
    };
  }, []);

  return (
    <div className="relative" style={bannerStyles}>
      {/* Scrolling container for marquee effect */}
      <div className="marquee-container" style={{ display: "flex", overflow: "hidden", width: "100%" }}>
        {/* Title with flash icons */}
        <h3
          className="text-center text-white font-bold flex items-center space-x-3 z-10"
          style={marqueeStyles}
        >
          {/* Flash icon on the left */}
          <FiZap className="text-white text-3xl" />

          {/* Responsive text */}
          <span
            className="text-white"
            style={{
              fontSize: "clamp(0.8rem, 2vw, 1.3rem)", // Adjust font size based on screen width
            }}
          >
            {showingTranslateValue(storeCustomizationSetting?.home?.promotion_title)}
          </span>

          {/* Flash icon on the right */}
          <FiZap className="text-white text-3xl" />
        </h3>
      </div>
    </div>
  );
};

export default Banner;
