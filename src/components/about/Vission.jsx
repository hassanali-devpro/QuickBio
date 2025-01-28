import "./Vission.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    let settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className="testimonials py-16 bg-[#BCD5AB] ">
            <div className="container mx-auto">
                <div className="text-center">
                    <Slider {...settings}>
                        {/* Static Testimonial 1 */}
                        <div className="text-gray-600 max-w-xl mx-auto">
                            <p className="uppercase font-bold text-4xl text-[#71B543] tracking-wider">VISION</p>
                            <p className=" text-xl my-5">
                                To be the premier provider of innovative and
                                reliable diagnostics solutions in agri-food
                                safety, veterinary and human health sectors,
                                contributing to a healthier and safer world.</p>
                        </div>

                        {/* Static Testimonial 2 */}
                        <div className=" text-gray-600 max-w-xl mx-auto">
                            <p className="uppercase font-bold text-4xl text-red-500 tracking-wider">MISSION</p>
                            <p className="text-xl my-5">
                                QuickBio is committed to    
                                advancing quick diagnostic through
                                cutting-edge technology and
                                uncompromising quality standards. We
                                strive to provide accurate, rapid and
                                cost-effective testing solutions to ensure
                                the well-being of humans and animals.</p>
                        </div>

                        {/* Static Testimonial 3 */}
                        <div className=" text-gray-600 max-w-xl mx-auto">
                            <p className="uppercase font-bold text-4xl text-[#00ADD3] tracking-wider">Core Values</p>
                            <div className="grid sm:grid-cols-2 justify-center">
                                <ul className="list-disc list-inside flex-col text-start custom-bullet">
                                    <li className="text-xl my-5">Innovation</li>
                                    <li className="text-xl my-5">Quality</li>
                                    <li className="text-xl my-5">Integrity</li>
                                </ul>
                                <ul className="list-disc list-inside flex-col text-start custom-bullet">
                                    <li className="text-xl my-5">Customer Focus</li>
                                    <li className="text-xl my-5">Collaboration</li>
                                    <li className="text-xl my-5">Sustainability</li>
                                </ul>
                            </div>

                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
