// import React from "react";

// //internal import
// import Layout from "@layout/Layout";
// import useGetSetting from "@hooks/useGetSetting";
// import PageHeader from "@components/header/PageHeader";
// import CMSkeleton from "@components/preloader/CMSkeleton";
// import useUtilsFunction from "@hooks/useUtilsFunction";

// const TermAndConditions = () => {
//   const { storeCustomizationSetting, loading, error } = useGetSetting();
//   const { showingTranslateValue } = useUtilsFunction();

//   return (
//     <Layout
//       title="Terms & Conditions"
//       description="This is terms and conditions page"
//     >
//       <div className="bg-white">
//       <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             marginTop: "20px",
//             fontSize: "1.5rem",
//             fontWeight: "bold",
//           }}
//         >
//           <h2>Terms And Conditions</h2>
//         </div>
//         <div className="max-w-screen-2xl mx-auto lg:py-10 py-10 px-3 sm:px-10">
         
         
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default TermAndConditions;



import React from "react";

// Internal imports
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import CMSkeleton from "@components/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";

const TermAndConditions = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  return (
    <Layout
      title="Terms & Conditions"
      description="This is terms and conditions page"
    >
      <div className="bg-white">
        {/* Title Section */}
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
          <h2>Terms And Conditions</h2>
        </div>

        {/* Content Section */}
        <div className="max-w-screen-2xl mx-auto lg:py-10 py-10 px-3 sm:px-10">
         
            <h3>Introduction</h3>
            <p>
              Welcome to 	DropifyNetwork! These Terms and Conditions
              ("Terms") govern your use of our website, located at
              [info@	dropifynetwork.com], and the services we provide through our
              e-commerce platform. By accessing and using this website, you
              agree to comply with and be bound by these Terms. If you do not
              agree with these Terms, please refrain from using our services.
            </p>

            <h3>Cookies</h3>
            <p>
              We use cookies to enhance your experience on our website. By
              continuing to use our website, you consent to the use of cookies
              as described in our Privacy Policy. Cookies are small data files
              stored on your device that help us recognize your preferences and
              improve your user experience.
            </p>

            <h3>License</h3>
            <p>
              Unless otherwise stated, 	DropifyNetwork and/or its licensors
              own the intellectual property rights for all material on this
              website. All intellectual property rights are reserved. You are
              granted a limited, non-exclusive, and non-transferable license to
              access and use the content on the website for personal, non-commercial
              purposes. You must not:
            </p>
            <ul>
              <li>Reproduce, modify, or distribute the content without permission.</li>
              <li>Create derivative works based on the website's materials.</li>
              <li>Use any content from the website for commercial purposes unless expressly permitted.</li>
            </ul>

            <h3>Products and Services</h3>
            <p>
              We offer mobile phones, accessories, and related products for sale
              through our website. We reserve the right to modify, update, or
              discontinue any product or service offered on the website at our
              sole discretion. While we aim to provide accurate descriptions and
              images of our products, we cannot guarantee the accuracy,
              completeness, or reliability of any information provided.
            </p>

            <h3>Order Acceptance and Payments</h3>
            <p>
              By placing an order on our website, you agree to pay for the
              products or services ordered, including applicable taxes, shipping
              fees, and other charges. We may require payment at the time of
              purchase, and we accept various payment methods as described on
              our checkout page. Orders are subject to acceptance and availability.
              If we are unable to fulfill your order, we will notify you and
              issue a refund if necessary.
            </p>

            <h3>User Comments and Reviews</h3>
            <p>
              We allow users to post reviews, comments, and other content on our
              website, provided that such content is not illegal, defamatory,
              obscene, or infringes on the rights of others. We do not pre-screen
              or approve user-generated content, but we reserve the right to
              remove content that violates these Terms. By posting content, you
              grant us the right to use, display, and distribute your submissions
              without compensation.
            </p>

            <h3>Content Liability</h3>
            <p>
              We are not responsible for any content posted on external websites
              or linked to from our website. If you choose to link to external
              sites, you do so at your own risk. You agree to indemnify and hold
              DropifyNetwork harmless against any claims, damages, or
              liabilities arising from the content of such external sites.
            </p>

            <h3>Your Privacy</h3>
            <p>
              Please review our Privacy Policy to understand how we collect, use,
              and protect your personal information. Your use of this website
              signifies your consent to the Privacy Policy.
            </p>

            <h3>Reservation of Rights</h3>
            <p>
              We reserve the right to request that you remove any link to our
              website at any time, at our discretion. Upon our request, you agree
              to immediately remove any such link. We also reserve the right to
              modify, update, or amend these Terms and Conditions at any time.
              By continuing to use our website after these changes are made, you
              agree to be bound by the updated Terms.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, 	DropifyNetwork excludes
              all warranties, representations, and conditions concerning the
              website and the services provided. We are not liable for any indirect,
              incidental, or consequential damages arising from your use of the
              website. This includes, but is not limited to, damages from errors
              or omissions in content, loss of data, or issues with product delivery.
            </p>

            <h3>Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless DropifyNetwork, its directors, officers, employees, and agents from any and
              all claims, damages, liabilities, costs, or expenses arising from
              your violation of these Terms, your use of the website, or any content
              that you post on the website.
            </p>

            <h3>Governing Law</h3>
            <p>
              These Terms and Conditions are governed by and construed in accordance
              with the laws of India. Any disputes related to these Terms
              will be resolved in the courts of India.
            </p>

            <h3>Contact Information</h3>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <ul>
              <li>Email: info@dropifynetwork.com</li>
              <li>Phone: +099949343</li>
            </ul>
          </div>
        </div>
    
    </Layout>
  );
};

export default TermAndConditions;
