import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonInput, IonList, IonItem, IonLabel, IonFooter, IonCheckbox, IonPage, IonMenuButton, IonImg } from '@ionic/react';
import { searchOutline, listOutline, arrowBackOutline } from 'ionicons/icons';
import './Registrarse.css';

const Registrarse = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle className='logoBtn'><IonButton routerLink="/"><IonImg className='logo' src='../assets/images/logo.png'/></IonButton></IonTitle>
          <IonButtons slot='end'><IonMenuButton /></IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Formulario de Registro */}
        <div className="centrar-registrar">
          <section className="registrar">
            <form id="formRegistro">
              <h1>¡Regístrate!</h1>
              <IonLabel>Nombre</IonLabel>
              <div className="input-Registrarse">
                <IonInput type="text" id="nombre" required />
              </div>
              <IonLabel>Apellido(s)</IonLabel>
              <div className="input-Registrarse">
                <IonInput type="text" id="apellido" required />
              </div>
              <IonLabel>Nombre de Usuario</IonLabel>
              <div className="input-Registrarse">
                <IonInput type="text" id="nomUsuario" required />
              </div>
              <IonLabel>RUT</IonLabel>
              <div className="input-Registrarse">
                <IonInput type="text" id="rut" required />
              </div>
              <IonLabel>Región</IonLabel>
              <div className="input-Registrarse">
                <IonInput type="text" id="region" required />
              </div>
              <IonLabel>Comuna</IonLabel>
              <div className="input-Registrarse">
                <IonInput type="text" id="comuna" required />
              </div>
              <IonLabel>Email</IonLabel>
              <div className="input-Registrarse">
                <IonInput type="email" id="email" required />
              </div>
              <IonLabel>Contraseña</IonLabel>
              <div className="input-Registrarse">
                <IonInput type="password" id="password" required />
              </div>
              <IonLabel>Confirmar Contraseña</IonLabel>
              <div className="input-Registrarse">
                <IonInput type="password" id="confirmPassword" required />
              </div>

              <IonItem lines="none" className="check">
                <IonCheckbox id="tycCheckbox" />
                <IonLabel><a href="#tyc">Términos y condiciones</a></IonLabel>
              </IonItem>

              <IonButton expand="block" className="submit" type="submit">Ingresar</IonButton>
              <IonButton expand="block" className="logearse" routerLink="/Home">Iniciar sesion</IonButton>
            </form>
          </section>
        </div>

        {/* Footer */}
        <IonFooter>
          <IonToolbar>
            <p>@2024 hecho por Dylan Rodriguez</p>
          </IonToolbar>
        </IonFooter>
      </IonContent>

      {/* Botón Para Volver Atrás 
      <div className="btVolver">
        <IonButton id="BtnAtras" className="atras">
          <IonIcon icon={arrowBackOutline} />
        </IonButton>
      </div>*/}
    </IonPage>
  );
};

export default Registrarse;
