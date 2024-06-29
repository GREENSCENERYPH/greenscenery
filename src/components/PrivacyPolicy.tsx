import React from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { closeCircleOutline } from 'ionicons/icons';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
            <div className='float-right'>
                <IonIcon onClick={onClose} className='fs-30 f-white' icon={closeCircleOutline} />
            </div>
            <IonTitle className='f-white'>Privacy Policy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          <h3>Information Collection and Use</h3>
          <p>
            We may collect personal information when you visit our website or use our services.
            This information may include your name, email address, and other contact details.
            We use this information to provide and improve our services, as well as for marketing purposes.
          </p>
          <h3>Information Sharing and Disclosure</h3>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.
            However, we may share your information with trusted third-party service providers who assist us in operating our website or servicing you.
          </p>
          <h3>Security</h3>
          <p>
            We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure.
            However, no method of transmission over the internet, or method of electronic storage, is 100% secure.
            Therefore, we cannot guarantee absolute security.
          </p>
          <h3>Changes to This Privacy Policy</h3>
          <p>
            We reserve the right to update or change our privacy policy at any time.
            Any changes will be effective immediately upon posting the updated policy on this page.
            We encourage you to periodically review this policy to stay informed about how we are protecting your information.
          </p>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default PrivacyPolicy;