import React from 'react';
import DetailPage from "../common/DetailPage";
import Header from "../common/header/Header";

const index = () => {
    const productDetails = [
        {
            title: "Product Details",
            items: [
                "Adulteration",
                "Antibiotic Residues",
                "Aflatoxin M1",
                "Pasteurization",
                "Melamine LactoQuick"
            ],
            image: "/images/blog/b4.png",
            description: [
                "Milk safety is critical due to concerns about antibiotic contamination, adulteration, mycotoxins, and pesticides.",
                "LactoQuick offers rapid strip tests for the dairy industry.",
                "In addition to testing kits, QuickBio has developed portable, battery-operated incubators."
            ],
            images: [
                "/images/m1.jpg",
                "/images/m2.jpg",
                "/images/m3.jpg"
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
