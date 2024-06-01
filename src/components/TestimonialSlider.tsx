import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonIcon } from '@ionic/react';
import testimonialData from '../data/testimonials.json';

import { star } from 'ionicons/icons';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';

interface ContainerProps { }

const TestimonialSlider: React.FC<ContainerProps> = () => {
  const testimonials = testimonialData.testimonials;

  return (
    <Swiper
      modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      keyboard={true}
      pagination={true}
      scrollbar={true}
      zoom={true}
      effect="fade"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide className="ion-padding-start ion-padding-end" key={index}>
          <IonCard className="testimonial-card bg-white bs-0">
            <div className="avatar">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <IonCardHeader>
              <h4 className="mb-0">{testimonial.name}</h4>
              <IonCardSubtitle>{testimonial.business}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="m-pad-bot-0">
              <div className="ratings">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <IonIcon icon={star} key={index} />
                ))}
              </div>
              <p style={{ fontStyle: 'italic' }}>{testimonial.testimonial}</p>
            </IonCardContent>
          </IonCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
