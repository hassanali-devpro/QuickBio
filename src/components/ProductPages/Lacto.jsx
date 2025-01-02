import React from 'react';
import DetailPage from "../common/DetailPage";
import Header from "../common/header/Header";

const index = () => {
    const productDetails = [
        {
            title: "Product Details",
            title1: "Dairy Safety Redefined",
            items: [
                "Adulteration",
                "Antibiotic Residues",
                "Aflatoxin M1",
                "Pasteurization",
                "Melamine LactoQuick"
            ],
            image: "/images/blog/b1.png",
            description: [
                "Milk safety is critical due to concerns about antibiotic contamination, adulteration, mycotoxins, and pesticides. These issues can cause allergies and hypersensitivity in humans while hindering dairy processes such as yogurt and cheese production, potentially leading to significant financial losses for the industry.",
                "LactoQuick offers rapid strip tests for the dairy industry, ensuring safety by detecting contaminants, veterinary drug residues, mycotoxins, adulteration, and nutritional quality. As the dairy industry faces increasing challenges, QuickBio partners with farmers and processors to meet global testing requirements. We ensure that milk and dairy products are among the safest foods by testing for contaminants, pasteurization levels, and the sanitation of processing equipment.",
                "In addition to testing kits, QuickBio has developed portable, battery-operated incubators and readers for field use, providing immediate results and supporting dairy safety and quality assurance processes."
            ],
            
            images: [
                "/images/l2.png",
                "/images/l3.png",
                "/images/l4.png"
            ]
        }
    ];

    return (
        <div>
            <Header bgColor="bg-[#475F1F]" heroText="Quick Products for Life" />
            <DetailPage productDetails={productDetails[0]} />
        </div>
    );
}

export default index;
