import React, {useRef, useState} from 'react';
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonItem,
  IonAlert,
  IonCard,
  IonCardContent,
} from '@ionic/react';
/* Core CSS required for Ionic components to work properly */

import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';

import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';

import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';
import BmiResult from "./components/bmi-result";
import BmiButtons from "./components/bmi-buttons";
import BmiSwitcher from "./components/bmi-switcher";

const App: React.FC = () => {
  const [result, setResult] = useState<number | null>()
  const [showAlert, setShowAlert] = useState<string>('')
  const weight = useRef<HTMLIonInputElement>(null)
  const height = useRef<HTMLIonInputElement>(null)

  const handleBmg = () => {
    const enteredWeight = weight.current!.value;
    const enteredHeight = height.current!.value;
    if (!enteredWeight || !enteredHeight || +enteredWeight <=0 || +enteredHeight <=0) {
      setShowAlert('This is wrong values, try one more time')
      return
    }
    setResult(+enteredWeight / (+enteredHeight * +enteredHeight))
  }
  const handleReset = () => {
    weight.current!.value = ''
    height.current!.value = ''
    setResult(null)
  }

  return (
    <>
      <IonApp>
        <IonHeader>
          <IonToolbar color={'primary'}>
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className={'ion-padding'}>
          <IonGrid>
            <IonRow>
              <IonCol size-sm={'8'} offset-sm={'2'} size-md={'6'} offset-md={'3'}>
                <IonCard>
                  <IonCardContent>
                    <IonGrid className={'ion-no-padding'}>
                      <IonRow>
                        <IonCol>
                          <BmiSwitcher />
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonItem>
                            <IonLabel position={'floating'}>Height</IonLabel>
                            <IonInput type={'number'} ref={height}/>
                          </IonItem>
                        </IonCol>
                      </IonRow>
                      <IonRow className={'ion-margin-bottom'}>
                        <IonCol>
                          <IonItem>
                            <IonLabel position={'floating'}>Weight</IonLabel>
                            <IonInput type={'number'} ref={weight}/>
                          </IonItem>
                        </IonCol>
                      </IonRow>
                      <BmiButtons calc={handleBmg} refresh={handleReset} />
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                {result && <BmiResult value={result} />}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonApp>
      <IonAlert
        isOpen={!!showAlert}
        onDidDismiss={() => setShowAlert('')}
        cssClass='my-custom-class'
        header={'Ooops'}
        message={showAlert}
        buttons={['OK', 'Cancel']}
      />
    </>
  )
};

export default App;
