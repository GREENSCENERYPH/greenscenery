import { IonContent, IonHeader, IonPage, IonToolbar, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import Navigation from '../components/TopNavigation';
import FooterSection from '../components/FooterSection';
import { colorWandOutline, heartCircleOutline, leafOutline, fingerPrintOutline, roseOutline } from 'ionicons/icons';
import './About.css';

const About: React.FC = () => {

  return (
    <>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <span className='store-open'>OPEN DAILY</span>
            <span className='store-call'><a href="tel:+6394290310001">CALL +63 919 007 5711</a></span>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <Navigation/>
            <div className='about-banner'/>
            <div className='spacer-50'/>
            <IonGrid>
                <IonRow>
                    <IonCol size-lg="4" size-md="12" size-sm="12" offset-lg="1">
                        <div className='text-center'>
                          <IonIcon className='fs-30' icon={heartCircleOutline} slot="end" />
                            <div className='ion-text-center'>
                                <h3>Who are we?</h3>
                            </div>
                        </div>
                        <div>
                            <p>
                              We have a lifelong passion for plants. We have been involved in growing, retailing, and wholesaling for over 40 years. Our plants are cultivated in our nurseries located in Calumpit, Bulacan. 
                            </p>
                        </div>
                    </IonCol>
                    <IonCol size-lg="6" size-md="12" size-sm="12">
                        <div className='ml-16'>
                            <div className='about-img-2'/>
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow className='mt-68'>
                    <IonCol size-lg="6" size-md="12" size-sm="12" offset-lg="1">
                        <div>
                            <div className='about-img-3'/>
                        </div>
                    </IonCol>
                    <IonCol size-lg="4" size-md="12" size-sm="12">
                      <div className='ml-24'>
                        <div className='text-center'>
                            <IonIcon className='fs-30' icon={colorWandOutline} slot="end" />
                            <h3>What do we do?</h3>
                          </div>
                          <div>
                              <p>
                                As a key player in the plant industry, we specialize in propagating and cultivating a diverse range of indoor and outdoor plants. Our cultivation process involves utilizing rice husk (ipa), ashes (abo), and mined garden soil as mediums, along with organic fertilizers. Additionally, we incorporate coconut husk and wood chips for specific indoor plants. We frequently travel to different countries, particularly Bangkok, to source new and unique plant varieties for cultivation and retail. Our commitment to excellence drives us to continually enhance our techniques and adopt new modern technologies to improve our plant-growing practices.
                              </p>
                          </div>
                      </div>
                    </IonCol>
                  </IonRow>
                  <IonRow className='mt-68'>
                    <IonCol size-lg="4" size-md="12" size-sm="12" offset-lg="1">
                          <div className='text-center'>
                            <IonIcon className='fs-30' icon={roseOutline} slot="end" />
                              <div className='ion-text-center'>
                                <h3>What do we believe in when it comes to the nature of business?</h3>
                              </div>
                          </div>
                          <div>
                              <p>
                                We firmly believe that the plant industry is an enduring source of beauty and health in our surroundings, continually inspiring people to invest in plants. We are confident that this business will thrive for generations to come. Furthermore, we recognize that ornamental decorative plants, with their minimal spoilage and increasing value as they grow larger, offer significant meaning and profitability opportunities.
                              </p>
                          </div>
                      </IonCol>
                    <IonCol size-lg="6" size-md="12" size-sm="12">
                          <div>
                              <div className='about-img-4'/>
                          </div>
                    </IonCol>
                  </IonRow>
                  <IonRow className='mt-68'>
                      <IonCol size-lg="6" size-md="12" size-sm="12" offset-lg="1">
                          <div>
                              <div className='about-img-5'/>
                          </div>
                      </IonCol>
                      <IonCol size-lg="4" size-md="12" size-sm="12">
                          <div className='ml-24'>
                            <div className='text-center'>
                              <IonIcon className='fs-30' icon={leafOutline} slot="end" />
                              <h3>Why plants?</h3>
                            </div>
                            <div>
                                <p>
                                Plants offer beauty, enhancing our environment with their natural charm. They also provide therapeutic benefits and present profitable opportunities. As plants grow, their value increases, making them an excellent investment.
                                </p>
                            </div>
                          </div>
                      </IonCol>
                  </IonRow>
                  <IonRow className='mt-68 mb-68'>
                    <IonCol size-lg="4" size-md="12" size-sm="12" offset-lg="1">
                          <div className='text-center'>
                          <IonIcon className='fs-30' icon={fingerPrintOutline} slot="end" />
                              <div className='ion-text-center'>
                              <h3>What sets us apart from the crowd?</h3>
                              </div>
                          </div>
                          <div>
                              <p>
                              Firstly, we prioritize quality, cultivating healthy and beautiful plants. Additionally, we can fulfill your requirements with our ample quantity of plants, offered at competitively low prices.
                              </p>
                          </div>
                      </IonCol>
                    <IonCol size-lg="6" size-md="12" size-sm="12">
                          <div>
                              <div className='about-img-6'/>
                          </div>
                    </IonCol>
                  </IonRow>
            </IonGrid>

            
            <FooterSection />

        </IonContent>
      </IonPage>
    </>
  );
};

export default About;
