import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonList, IonItem, IonLabel, IonMenuToggle } from '@ionic/react';

interface ContainerProps { }

const Navigation: React.FC<ContainerProps> = () => {
  return (
    <>
      <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <img className='logo' src="../assets/images/logo-no-bg.png"/> 
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonList>
              <IonItem routerLink="/home">
                <IonLabel>Home</IonLabel>
              </IonItem>
              <IonItem routerLink="/Products">
                <IonLabel>Products</IonLabel>
              </IonItem>
            <IonItem routerLink="/About">
              <IonLabel>About Us</IonLabel>
            </IonItem>
            <IonItem routerLink="/Contact">
              <IonLabel>Contact</IonLabel>
            </IonItem>
          </IonList>
      </IonContent>
      </IonMenu>
    </>  
  );
};

export default Navigation;
