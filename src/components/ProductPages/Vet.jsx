import React from 'react';
import DetailPage from "../common/DetailPage";
import Header from "../common/header/Header";

const index = () => {
    const productDetails = [
        {
            title: "Product Details",
            title1: "Protecting Animal Health with Expert Veterinary Care and Solutions",
            items: [
                "Bovine",
                "Pets",
                "Avian",
            ],
            image: "/images/blog/b3.jpg",
            description: [
                "VetQuick specializes in rapid testing kits for bovine, sheep, poultry, and pets, embodying our vision of 'Innovate with Animal Health and Well-Being.'",
                "We provide advanced Rapid-ELISA and PCR products for quick and reliable results.",
                "Trust VetQuick for efficient solutions in animal health diagnostics."
            ],
            
            images: [
                "/images/v2.png",
                "/images/v3.png",
                "/images/v4.png"
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
