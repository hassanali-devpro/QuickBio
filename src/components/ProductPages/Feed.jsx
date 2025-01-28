import React from 'react';
import DetailPage from "../common/DetailPage";
import Header from "../common/header/Header";

const index = () => {
    const productDetails = [
        {
            title: "Test Parameters",
            title1: "Ensuring Quality and Safety in Every Bite with Trusted Feed Solutions",
            items: [
                "Nutrients",
                "Toxins",
                "Adulterants",
            ],
            image: "/images/blog/feed.png",
            description: [
                "Feed safety is a paramount concern in the agricultural and food industries due to risks of contamination from pathogens, mycotoxins, and other harmful substances. Ensuring the safety and quality of animal feed is essential for protecting the food chain and maintaining consumer health.",
                "The FeedQuick brand provides cutting-edge and rapid diagnostic solutions for feed safety, catering to a wide range of feed industries. By addressing challenges such as mycotoxin contamination, bacterial pathogens, and nutrient imbalances, FeedQuick ensures the highest standards of safety and quality in feed production.",
                "In addition to its diagnostic testing kits, FeedQuick offers advanced portable and battery-operated devices designed to streamline feed analysis processes. These innovative solutions are tailored to meet the needs of modern feed producers, enhancing efficiency and reliability in quality control."
            ],            
            images: [
                "/images/fe2.png",
                "/images/fe3.png",
                "/images/fe4.jpg"
            ]
        }
    ];

    return (
        <div>
            <Header bgColor="bg-[#964D22]" heroText="Quick Products for Life" />
            <DetailPage productDetails={productDetails[0]} />
        </div>
    );
}

export default index;
