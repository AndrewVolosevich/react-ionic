import React from 'react';
import {IonCard, IonCardContent, IonRow, IonCol} from "@ionic/react";

const BmiResult = (props: {
  value: number
}) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className={'ion-text-center'}>
            <h2>{'Your body mass index'}</h2>
            <h3>{props.value.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
  </IonRow>);
};

export default BmiResult;
