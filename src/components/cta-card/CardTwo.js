


// import React from "react";
// import Image from "next/image";

// // Internal import
// import useGetSetting from "@hooks/useGetSetting";

// const CardTwo = () => {
//   const { storeCustomizationSetting } = useGetSetting();

//   // Use local images (ensure they are placed inside the 'public' folder in the root)
//   const topImage = "/cta/banner1.webp"; // Top section image
//   const bottomImage = "/cta/banner2.avif"; // Bottom section image

//   return (
//     <div className="flex justify-between gap-4 w-full" style={{ height: "390px" }}>
//       {/* 40% width section divided into two parts */}
//       <div className="w-full lg:w-4/12 rounded-lg overflow-hidden flex flex-col gap-4">
//         {/* Top section */}
//         <div className="w-full h-1/2 relative">
//           <Image
//             src={topImage} // Top section image
//             alt="Top Image"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>
//         {/* Bottom section */}
//         <div className="w-full h-1/2 relative">
//           <Image
//             src={bottomImage} // Bottom section image
//             alt="Bottom Image"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>
//       </div>

//       {/* 60% width section with image from storeCustomizationSetting */}
//       <div className="w-full lg:w-8/12 rounded-lg overflow-hidden relative">
//         <Image
//           src={storeCustomizationSetting?.home?.quick_delivery_img || "/images/delivery-boy.png"} // Fallback image if not found
//           alt="Quick Delivery Image"
//           width={2000} // Adjust width as needed
//           height={450} // Adjust height as needed
//           objectFit="cover" // Ensure the image covers the entire div
//           className="w-full h-full rounded-lg" // Optional: round corners for styling
//         />
//       </div>
//     </div>
//   );
// };

// export default CardTwo;


// import React from "react";
// import Image from "next/image";

// // Internal import
// import useGetSetting from "@hooks/useGetSetting";

// const CardTwo = () => {
//   const { storeCustomizationSetting } = useGetSetting();

//   // Use local images (ensure they are placed inside the 'public' folder in the root)
//   const topImage = "/cta/beauty2.avif"; // Single image for the top section

//   return (
//     <div className="flex  justify-between gap-4 w-full" style={{ height: "390px" }}>
//       {/* 40% width section with single image */}
//       <div className="w-full lg:w-4/12 h-full relative rounded-lg overflow-hidden">
//         <Image
//           src={topImage} // Single image for this section
//           alt="Top Image"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg"
//         />
//       </div>

//       {/* 60% width section with image from storeCustomizationSetting */}
//       <div className="w-full lg:w-8/12 h-full relative rounded-lg overflow-hidden">
//         <Image
//           src={storeCustomizationSetting?.home?.quick_delivery_img || "/images/delivery-boy.png"} // Fallback image if not found
//           alt="Quick Delivery Image"
//           layout="fill"
//           objectFit="cover"
//           className="w-full h-full rounded-lg" // Optional: round corners for styling
//         />
//       </div>
//     </div>
//   );
// };

// export default CardTwo;









import React from "react";
import Image from "next/image";

// Internal import
import useGetSetting from "@hooks/useGetSetting";

const CardTwo = () => {
  const { storeCustomizationSetting } = useGetSetting();

  // Use local images (ensure they are placed inside the 'public' folder in the root)
  const topImage = "/cta/beauty2.avif"; // Single image for the top section

  return (
    <div className="flex justify-between gap-4 w-full" style={{ height: "390px" }}>
      {/* First section with single image, always full width on mobile */}
      <div className="w-full h-full relative rounded-lg overflow-hidden lg:w-4/12">
        <Image
          src={topImage} // Single image for this section
          alt="Top Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Second section with store customization image, hidden on mobile */}
      <div className="w-full lg:w-8/12 h-full relative rounded-lg overflow-hidden lg:block hidden">
        <Image
          src={storeCustomizationSetting?.home?.quick_delivery_img || "/images/delivery-boy.png"} // Fallback image if not found
          alt="Quick Delivery Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full rounded-lg" // Optional: round corners for styling
        />
      </div>
    </div>
  );
};

export default CardTwo;
