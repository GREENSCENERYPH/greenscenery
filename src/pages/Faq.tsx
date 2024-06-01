import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { cubeOutline, cartOutline, bagAddOutline, mailOutline, cardOutline, happyOutline } from 'ionicons/icons';
import Navigation from '../components/TopNavigation';
import FooterSection from '../components/FooterSection';
import './faq.css';

const Faq: React.FC = () => {

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
            <div className='faq-banner'/>
            <div className='spacer-50'/>
            <IonGrid className='ion-padding'>
                <IonRow>
                    <IonCol size-lg="4" size-sm="12" offset-lg="1">
                        <h3>FAQ (Frequently Asked Questions)</h3>
                        <div className='mt-20'>
                          <h5>How does it work?</h5>

                          <div className='pad-10 border-rad-8 bg-off-green'>
                            <p className='bold'>
                              <IonIcon className='fs-30 v-middle mr-8' icon={cartOutline} slot="start" />  
                              Step 1: Plant Shopping
                            </p>
                            <p>Browse through our selection of products posted on our Instagram or Facebook page, or visit our website.</p>
                          </div>
                         
                          <div className='pad-10'>
                            <p className='bold'>
                              <IonIcon className='fs-30 v-middle mr-8' icon={bagAddOutline} slot="start" />  
                              Step 2: Place Order
                            </p>

                            <p>
                              Place your order by sending us a message through Facebook (Green Scenery Nursery), Instagram (@greensceneryph), or email (greensceneryph@gmail.com). Alternatively, you can message us directly at +63 919 007 5711. Please provide the following details: <br/>
                              <ul>
                                <li>Your Name</li>
                                <li>Email and Phone Number</li>
                                <li>Instagram/Facebook Username</li>
                                <li>The plant/pot/garden soil you want to order and quantities</li>
                              </ul>
                            </p>
                          </div>

                          <div className='pad-10 border-rad-8 bg-off-green'>
                            <p className='bold'>
                              <IonIcon className='fs-30 v-middle mr-8' icon={mailOutline} slot="start" />  
                              Step 3: Receive Order Confirmation and Payment Details
                            </p>
                            <p>
                              We will send a confirmation of your order through your preferred mode of communication. Additionally, we will send you a form to fill in the necessary information required for delivery. Rest assured, all information will be kept private between the buyer and the company.
                            </p>
                          </div>
                          
                          <div className='pad-10'>
                            <p className='bold'>
                              <IonIcon className='fs-30 v-middle mr-8' icon={cardOutline} slot="start" />  
                              Step 4: Secure Payment
                            </p>
                            <p>
                              We accept payments through BPI and GCash. Please send us a screenshot of your proof of payment for verification.
                            </p>
                          </div>

                          <div className='pad-10 border-rad-8 bg-off-green'>
                            <p className='bold'>
                              <IonIcon className='fs-30 v-middle mr-8' icon={cubeOutline} slot="start" />  
                              Step 5: Order Preparation and Delivery Confirmation
                            </p>
                            <p>
                              Once payment is confirmed, we will prepare your ordered products. We will message you again when your order is ready to confirm the booking of a courier for delivery.
                            </p>
                          </div>

                          <div className='pad-10'>
                            <p className='bold'>
                              <IonIcon className='fs-30 v-middle mr-8' icon={happyOutline} slot="start" />  
                              Step 6: Receive Your Delivery
                            </p>
                            <p>
                              Please note that the shipping or delivery fee is shouldered by the buyer through courier options. Upon receiving your order, feel free to confirm with us. We would appreciate it if you could tag us at @greensceneryph and use #greensceneryph. We would love to feature you and see the plants in your project!
                            </p>
                          </div>

                        </div>
                        <div className='spacer-50'></div>
                        <div className='pad-10'>
                            <p className='bold'>
                              Can we visit your nursery and store?
                            </p>
                            <p>
                              Please visit our retail store to see first hand the plants we grow in our nursery at Bulacan. We are located at , you can visit our store. We are located at Green Scenery Nursery, Katipunan Ave, Quezon City, 1110 Metro Manila, Philippines.
                            </p>
                          </div>
                          <div className='pad-10'>
                            <p className='bold'>
                              Do you sell individual plants?
                            </p>
                            <p>
                              No, we offer wholesale pricing for bulk orders. The minimum number of plants varies depending on the plant type and size. Please see our catalog for more information and pricing details. Additionally, feel free to visit our store for purchasing plants in smaller quantities.
                            </p>
                          </div>
                          <div className='pad-10'>
                            <p className='bold'>
                              What forms of payment do you accept?
                            </p>
                            <p>
                              We accept payments via GCASH, bank deposit (BPI, BDO), and PayMaya. You can pay for your order online via BPI, BDO, GCASH, or PayMaya. Account details will be provided in the confirmation message.
                            </p>
                          </div>
                          <div className='pad-10'>
                            <p className='bold'>
                              What are your shipping options?
                            </p>
                            <p>
                              We use Lalamove and Transportify for shipping. Shipping costs depend on the arrangement with the client, and any additional charges incurred will be passed on to the client.
                            </p>
                          </div>
                          <div className='pad-10'>
                            <p className='bold'>
                              Do you ship internationally?
                            </p>
                            <p>
                              Yes, we offer international shipping to select destinations. Additional costs and restrictions apply, please contact us for more information.
                            </p>
                          </div>
                          <div className='pad-10'>
                            <p className='bold'>
                              Are deliveries affected by unexpected delays?
                            </p>
                            <p>
                              Yes, deliveries may be affected by unexpected delays such as storms, traffic, or accidents. These delays are beyond our control and may impact the timing of the shipment.
                            </p>
                          </div>
                          <div className='pad-10'>
                            <p className='bold'>
                              What is your return/refund policy?
                            </p>
                            <p>
                              Our return/refund policy allows returns within 24 hours of receipt. Please contact us immediately if you need to return or request a refund for your purchase.
                            </p>
                          </div>
                          <div className='pad-10'>
                            <p className='bold'>
                              Do you offer plant rental services?
                            </p>
                            <p>
                              No, we do not offer plant rental services at this time.
                            </p>
                          </div>
                          <div className='pad-10'>
                            <p className='bold'>
                              Can I place a special order for a specific plant variety?
                            </p>
                            <p>
                              Yes, we accept special orders for specific plant varieties that may not be listed on our website. Please contact us with your request, and we'll do our best to accommodate your needs.
                            </p>
                          </div>
                          <div className='pad-10'>
                            <p className='bold'>
                              What should I do if my plant arrives damaged or unhealthy?
                            </p>
                            <p>
                              If your plant arrives damaged or unhealthy, please contact us immediately. We will work with you to resolve the issue and ensure your satisfaction with your purchase.
                            </p>
                          </div>
                    </IonCol>
                    <IonCol size-lg="5" offset-lg="1" size-sm="12">
                        <div className='faq-img-1'/>
                        <div className='spacer-50'/>
                        <div className='faq-img-2'/>
                        <div className='spacer-50'/>
                        <div className='faq-img-3'/>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <div className='spacer-50'/>
            <FooterSection />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Faq;
