import "./testimonials.css";
import { testimonialsData } from "./testimonialsData";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {testimonialsData.map((val) => {
          const { id, name, review, avatar } = val;
          return (
            <SwiperSlide key={id} className="testimonials">
              <div className="clients__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
