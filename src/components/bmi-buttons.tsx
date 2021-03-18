import React from 'react';
import {IonButton, IonCol, IonIcon, IonRow} from "@ionic/react";
import {calculatorOutline, refreshOutline} from "ionicons/icons";

const BmiButtons = (props: {
  calc: () => void;
  refresh: () => void;
}) => {
  return (
    <IonRow>
      <IonCol size={'12'} sizeMd={'6'} className={'ion-text-center'}>
        <IonButton
          className={'ion-text-center'}
          onClick={props.calc}
        >
          <IonIcon icon={calculatorOutline} slot={'start'}/>
          Calculate
        </IonButton>
      </IonCol>
      <IonCol size={'12'} sizeMd={'6'} className={'ion-text-center'}>
        <IonButton
          onClick={props.refresh}
          className={'ion-text-center'}
        >
          <IonIcon icon={refreshOutline} slot={'start'}/>
          Refresh
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiButtons;