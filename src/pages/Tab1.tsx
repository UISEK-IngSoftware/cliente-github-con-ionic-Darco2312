import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import RepoItem from '../components/RepoItem';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <RepoItem 
          name="Repositorio 1" 
          imageUrl="https://cdn.worldvectorlogo.com/logos/android-6.svg" 
          />
          <RepoItem 
          name="Repositorio 2" 
          imageUrl="https://cdn.worldvectorlogo.com/logos/android-6.svg" 
          />
          <RepoItem 
          name="Repositorio 3" 
          imageUrl="https://cdn.worldvectorlogo.com/logos/android-6.svg" 
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
