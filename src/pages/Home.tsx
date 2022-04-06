import { IonAccordion, IonAccordionGroup, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { trash } from "ionicons/icons"
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <TestComp />
      </IonContent>
    </IonPage>
  );
};

export default Home;

const TestComp: React.FC = () => {
  const replicate = () => {
      const items = []
      for (let x = 0; x < 25; x++) {
          items.push(item(x + ''))
      }
      return items
  }

  const item = (key: string): JSX.Element =>
      <IonItemSliding key={key}>
          <IonItem>
              Item
          </IonItem>
          <IonItemOptions>
              <IonItemOption onClick={() => console.log('text button')}>
                  Click me
              </IonItemOption>
              <IonItemOption onClick={() => console.log('icon button')}>
                  <IonIcon slot="icon-only" icon={trash} />
              </IonItemOption>
          </IonItemOptions>
      </IonItemSliding>

  return (
      <IonAccordionGroup>
          <IonAccordion>
              <IonItem slot="header">
                  <IonLabel>Label</IonLabel>
              </IonItem>
              <IonList slot="content">
                  {replicate()}
              </IonList>
          </IonAccordion>
      </IonAccordionGroup>
  )
}