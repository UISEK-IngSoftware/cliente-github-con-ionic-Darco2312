import {IonItem, IonLabel, IonThumbnail} from '@ionic/react'
import './RepoItem.css';
import { RepositoryItem } from '../interfaces/RepositoryItem';

const RepoItem: React.FC<{repo:RepositoryItem}> = ({repo}) => {
  return (
    <IonItem>
        <IonThumbnail slot= "start">
            <img src={repo.imageUrl || "https://images.vexels.com/media/users/3/291896/isolated/preview/3c9d3fd3047e7fbfa09ae3c8fcef59d9-lindo-patito-de-goma.png" } 
              alt={repo.name} />
        </IonThumbnail>
        <IonLabel>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          <p>Propietario:{repo.owner}</p>
          <p>Lenguaje:{repo.language}</p>
        </IonLabel>
    </IonItem>
  );
};

export default RepoItem;