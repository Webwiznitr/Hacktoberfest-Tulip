import FadeIn from "../Components/Animators/FadeIn";
import SlideUp from "../Components/Animators/SlideUp";

const Home = () => {
    const ImageSrc = "https://res.cloudinary.com/dke9xzbl6/image/upload/v1698356804/Fake%20News%20Detector/2424701_wweamx.png";

    return (<div className="home">
        <div className="container">
            <div className="entity">
                <SlideUp delay={1} duration={1}>
                    <div className="title glow">
                        Fake News
                    </div>
                </SlideUp>
                <SlideUp delay={2} duration={1}>
                    <div className="title glow">
                        <span className="glitch" data-text="DetectoR.">DetectoR.</span>
                    </div>
                </SlideUp>
                <div className="heading">
                    <SlideUp delay={3} duration={1}>
                        Combat fake news with our fake news detector.
                    </SlideUp>
                    <SlideUp delay={4} duration={1}>Try it here.</SlideUp>
                </div>
            </div>
            <div className="entity">
                <FadeIn delay={5} duration={1}>
                    <img src={ImageSrc} alt="error"></img>
                </FadeIn>
            </div>
        </div>
    </div>)
}



export default Home;