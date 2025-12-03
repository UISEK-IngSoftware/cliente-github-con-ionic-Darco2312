import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <img alt="Silhouette of mountains" src="https://superclasica.com/wp/wp-content/uploads/2014/11/Daniela-Romo-sin-marco.png" />
          <IonCardHeader>
            <IonCardTitle>Daniela Romo</IonCardTitle>
            <IonCardSubtitle>Darco2312</IonCardSubtitle>
          </IonCardHeader>
           
           
          <IonCardContent>  Hola. Soy una desarrolladora de software. </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
