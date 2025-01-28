import Header from "../common/header/Header";
import Vertical from "./Vertical";

const Index = () => {
    const messageText = [
        {
            title: "Meat Veterinary",
            text: "Ensure the quality and safety of meat products with advanced veterinary testing kits, designed to detect diseases and contaminants effectively.",
            image: "/images/meat.jpeg",
        },
        {
            title: "Feed & Grains",
            text: "Maintain the nutritional value and safety of feed and grains with testing kits that identify toxins, contaminants, and quality parameters.",
            image: "/images/feed.jpeg", 
        },
        {
            title: "Dairy Water",
            text: "Test the purity and safety of water used in dairy processes with specialized kits, ensuring compliance with health standards.",
            image: "/images/dairy.jpeg",
        },
        {
            title: "Oil & Ghee",
            text: "Assess the quality and composition of oils and ghee using testing kits that ensure purity and adherence to industry standards.",
            image: "/images/oil.jpeg",
        },
        {
            title: "Honey",
            text: "Guarantee the authenticity and quality of honey with testing kits that detect adulteration and ensure compliance with purity standards.",
            image: "/images/honey.jpeg",
        },
        {
            title: "Food & Beverages",
            text: "Enhance the safety and quality of food and beverages with testing kits that identify contaminants, ensure freshness, and validate nutritional claims.",
            image: "/images/food.jpeg",
        },
    ];

    return (
        <>
            <Header bgColor="bg-[#F4A261]" heroText="Industries we serve" />
            {messageText.map((item, index) => (
                <Vertical
                    key={index}
                    title={item.title}
                    text={item.text}
                    image={item.image}
                    isEven={index % 2 === 0}
                />
            ))}
        </>
    );
};

export default Index;
