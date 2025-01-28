import React from 'react';
import DetailPage from "../common/DetailPage";
import Header from "../common/header/Header";

const index = () => {
    const productDetails = [
        {
            title: "Test Parameters",
            title1: "Ensuring Safety from Farm to Table",
            items: [
                "Adulteration",
                "Antibiotic Residues",
                "Aflatoxin M1",
                "Pasteurization",
                "Melamine Testing"
            ],
            image: "/images/blog/food.png",
            description: [
                "Food safety is paramount due to risks like contamination, spoilage, and allergens that can compromise the health and well-being of consumers. Ensuring the safety of food products is critical for maintaining public health and trust in the food supply chain.",
                "FoodQuick provides state-of-the-art diagnostic solutions for rapid and accurate testing in the food industry, empowering manufacturers and suppliers to meet the highest safety standards. These solutions are designed to detect contaminants, allergens, and other risks efficiently and reliably.",
                "In addition to its comprehensive range of testing kits, FoodQuick has introduced portable and easy-to-use battery-operated devices for on-the-go testing. These devices are perfect for use in field conditions, laboratories, or production lines, ensuring that food safety remains uncompromised at every step of the process."
            ],            
            images: [
                "/images/f2.png",
                "/images/f3.png",
                "/images/f4.png"
            ]
        }
    ];

    return (
        <div>
            <Header bgColor="bg-[#FAA41A]" heroText="Quick Products for Life" />
            <DetailPage productDetails={productDetails[0]} />
        </div>
    );
}

export default index;
