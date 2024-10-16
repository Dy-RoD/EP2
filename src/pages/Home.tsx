import { IonContent, IonHeader, IonToolbar, IonImg, IonTitle, IonButtons, IonButton, IonIcon, IonMenu, IonInput, IonList, IonItem, IonLabel, IonFooter, IonPage, IonMenuButton } from '@ionic/react';
import { searchOutline, listOutline, arrowBackOutline } from 'ionicons/icons';
import './Home.css';

const Home = () => {
  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='logoBtn'><IonButton routerLink="/"><IonImg className='logo' src='../assets/images/logo.png'/></IonButton></IonTitle>
          <IonButtons slot='end'><IonMenuButton /></IonButtons>
        </IonToolbar>
      </IonHeader>
      {/**/}
      <IonContent > 
        <div className="centrar-login">
          <section className="login">
            <form id="formLogin">
              <h1>Inicia Sesión!</h1>
              <IonLabel>Email:</IonLabel>
              <div className="input-Login">
                <IonInput type='email'></IonInput>
              </div>
              <IonLabel>Contraseña:</IonLabel>
              <div className="input-Login">
                <IonInput type='password'></IonInput>
              </div>
              <IonButton expand="block" className="ingresar">Ingresar</IonButton>
              <IonButton expand="block" className="registrarse" routerLink="/Registrarse">¡Regístrate!</IonButton>
            </form>
          </section>
        </div>
        <IonFooter>
          <IonToolbar>
            <p>@2024 hecho por Dylan Rodriguez</p>
          </IonToolbar>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
