import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function DemoSlide() {
    return (
        <>
            <div>데모</div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    );
}
export default DemoSlide;

<Swiper>
    <Swiper>Slide 1</Swiper>
    <Swiper>Slide 2</Swiper>
    <Swiper>Slide 3</Swiper>
    <Swiper>Slide 4</Swiper>
</Swiper>;
