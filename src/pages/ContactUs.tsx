import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IonContent, IonHeader, IonPage, IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonInput, IonTextarea, IonItem } from '@ionic/react';
import { person, mail, call, chatbubble, paperPlane, cubeOutline, storefrontOutline, locationOutline } from 'ionicons/icons';
import Navigation from '../components/TopNavigation';
import MapSection from '../components/MapSection';
import FooterSection from '../components/FooterSection';
import './Contact.css';

import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha"


const ContactUs: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [captchaResponse, setCaptchaResponse] = useState('');

    const onCaptchaChange = (response: any) => {
        setCaptchaResponse(response);
      };

    const onSubmit = (data: any) => {
       
    if (captchaResponse === '') {
        return;
    }

    setIsLoading(true);
    const formData = {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        message: data.message
      };

    // Send the form data using EmailJS
    emailjs.send('service_625g8gz', 'template_7w27u0i', formData, 'G_aTUlLso8QYDq2ry')
    .then((response) => {
        console.log('Email sent successfully!', response.text);
    })
    .catch((error) => {
        console.error('Error sending email:', error);
    })
    .finally(() => {
        setIsLoading(false);
    });
    
    };

  return (
    <>
     
      <IonPage id="main-content">
        <IonHeader>
            <IonToolbar>
                <span className='store-open'>OPEN DAILY</span>
                <span className='store-call'><a href="tel:+6394290310001">CALL +63 919 007 5711</a></span>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen className="contact-page">
            <Navigation/>
            <div className='contact-header-img'/>
            <IonGrid className='ion-padding'>
                <IonRow>
                    <IonCol size-lg="4" offset-lg="1">
                        <div>
                            <IonIcon className='fs-30' icon={storefrontOutline} slot="end" />
                            <h3>Hours of Operation</h3>
                            <h5>Office hours: Weekdays from 7:00 am to 6:00 pm</h5>
                            <ul>
                                <li>Saturdays April-Sept 8:00am to 12noon by appointments only</li>
                                <li>Closed weekends and Saturday holidays</li>
                            </ul>
                            <IonIcon className='fs-30' icon={cubeOutline} slot="end" />
                            <h5>Pick-up hours: Weekdays from 8:00 am to 4:30 pm </h5>
                            <ul>
                                <li>All pickup orders must be pre-booked with 24 to 48 hours notice</li>
                            </ul>
                            <IonIcon className='fs-30' icon={locationOutline} slot="end" />
                            <h5>Delivery hours: Weekdays from 8:00 am to 5:00 pm </h5>
                            <ul>
                                <li>Please note that at least 48 to 72 hours notice is requried for deliveries</li>
                            </ul>
                        </div>
                    </IonCol>
                    <IonCol size-lg="4" offset-lg="1">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div>
                                    <IonItem>
                                        <IonIcon icon={person} slot="end" />
                                        <IonInput {...register('name', { required: true })} name="name" label="Name*" label-placement="floating" />
                                    </IonItem>
                                    {errors.name && <span>This field is required</span>}
                                </div>
                                <div>
                                    <IonItem>
                                        <IonIcon icon={mail} slot="end" />
                                        <IonInput {...register('email', { required: true, pattern: /^\S+@\S+$/i })} name="email" label="Email*" type="email" label-placement="floating" />
                                    </IonItem>
                                    {errors.email && <span>This field is required</span>}
                                    {errors.email?.type === 'pattern' && <span>Please enter a valid email address</span>}
                                </div>
                                <div>
                                    <IonItem>
                                        <IonIcon icon={call} slot="end" />
                                        <IonInput {...register('mobile', { required: true })} name="mobile" label="Mobile No.*" label-placement="floating" type="tel" />
                                    </IonItem>
                                    {errors.mobile && <span>This field is required</span>}
                                </div>
                                <div>
                                    <IonItem>
                                        <IonIcon icon={chatbubble} slot="end" />
                                        <IonTextarea {...register('message', { required: true })} name="What can we do for you?" label="What can we do for you?*" label-placement="floating" />
                                    </IonItem>
                                    {errors.message && <span>This field is required</span>}
                                </div>
                                <div className='mt-20'>
                                    <ReCAPTCHA sitekey="6Lep_fcpAAAAAJ2RXhpfW1bncp1nWcvweGZG1hKf" onChange={onCaptchaChange} />
                                </div>
                                <div className='mt-20'>
                                    <button className="cta-button width-full" type="submit">
                                        {isLoading ? 'Sending...' : (
                                            <>
                                                <IonIcon icon={paperPlane} /> Send
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <MapSection/>
                    </IonCol>
                </IonRow>
            </IonGrid>
            
            <FooterSection />
        </IonContent>
      </IonPage>
    </>
  );
};

export default ContactUs;
