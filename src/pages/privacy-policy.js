// import React from "react";

// //internal import
// import Layout from "@layout/Layout";
// import useGetSetting from "@hooks/useGetSetting";
// import PageHeader from "@components/header/PageHeader";
// import CMSkeleton from "@components/preloader/CMSkeleton";
// import useUtilsFunction from "@hooks/useUtilsFunction";

// const PrivacyPolicy = () => {
//   const { storeCustomizationSetting, loading, error } = useGetSetting();
//   const { showingTranslateValue } = useUtilsFunction();
//   // console.log("data", storeCustomizationSetting);

//   return (
//     <Layout title="Privacy Policy" description="This is privacy policy page">

//       <div className="bg-white">
//       <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20px', fontSize:'1.5rem', fontWeight:'bold'}}><h2>Privacy Policy</h2></div>
        
//       </div>
//     </Layout>
//   );
// };

// export default PrivacyPolicy;



import React from "react";

// Internal imports
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import CMSkeleton from "@components/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";

const PrivacyPolicy = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  return (
    <Layout title="Privacy Policy" description="This is the privacy policy page">
      <div className="bg-white">
        {/* Title */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          <h2>Privacy Policy</h2>
        </div>

        {/* Privacy Policy Content */}
        <div className="max-w-screen-2xl mx-auto lg:py-10 py-10 px-4 sm:px-10">
          <p>
            Welcome to 	DropifyNetwork. We are committed to protecting your privacy
            while you shop on our site. This Privacy Policy explains how we collect, use, and protect
            your personal information.
          </p>
          <p>
            <strong>Information We Collect:</strong> When you visit our site, we collect personal
            information such as your name, shipping address, email, and payment details to process
            your orders. We also gather non-personal information like your IP address and browsing
            behavior to enhance your shopping experience.
          </p>
          <p>
            <strong>How We Use Your Information:</strong> We use your personal data to:
          </p>
          <ul>
            <li>Process and fulfill your orders.</li>
            <li>Send you updates about your purchases and special offers.</li>
            <li>Enhance your shopping experience with personalized product recommendations.</li>
            <li>Improve our website functionality and prevent fraud.</li>
          </ul>
          <p>
            <strong>Cookies:</strong> We use cookies to improve your browsing experience. Cookies
            allow us to remember your preferences, keep items in your cart, and personalize your
            visit. You can adjust your browser settings to control cookie usage.
          </p>
          <p>
            <strong>Data Security:</strong> We take the security of your personal data seriously.
            Your information is stored securely and protected with encryption during transactions. We
            use industry-standard security practices to ensure your data remains safe.
          </p>
          <p>
            <strong>Your Rights:</strong> You have the right to access, update, and delete the
            personal information we hold about you. You can also choose to opt-out of receiving
            marketing emails. If you have any questions or requests, please contact us at
            info@dropifynetwork.com.
          </p>
          <p>
            <strong>Third-Party Services:</strong> We do not share your personal data with third
            parties except when necessary to complete a transaction (e.g., payment processors or
            shipping companies).
          </p>
          <p>
            <strong>Changes to this Policy:</strong> We may update this Privacy Policy from time to
            time. Any changes will be posted on this page with an updated date.
          </p>
          <p>
            If you have any questions about how we handle your personal information, please feel
            free to contact us at info@	dropifynetwork.com.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
