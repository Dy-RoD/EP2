import React from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonFooter,
  IonInput,
  IonIcon,
} from '@ionic/react';
import './Calendario.css';
import { balloonOutline, calendarOutline, arrowBackOutline, arrowForwardOutline  } from 'ionicons/icons';


const Calendario = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='logoBtn'><IonButton routerLink="/"><IonImg className='logo' src='../assets/images/logo.png'/></IonButton></IonTitle>
          <IonButtons slot='end'><IonMenuButton /></IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1 className="psicologo">Lupita Rodriguez - Psicóloga</h1>

        {/* Calendario */}
        <div className="body-calendario">
          <div className="container-calendario">
            {/* Lado Izquierdo */}
            <div className="izquierda">
              <div className="calendario">
                <div className="mes">
                  <IonButton>
                    <IonIcon icon={arrowBackOutline}></IonIcon>
                  </IonButton>
                  <div className="fecha">Septiembre 2024</div>
                  <IonButton>
                  <IonIcon icon={arrowForwardOutline}></IonIcon>
                  </IonButton>
                </div>
                <div className="semana">
                  <div>dom</div>
                  <div>lun</div>
                  <div>mar</div>
                  <div>mie</div>
                  <div>jue</div>
                  <div>vie</div>
                  <div>sab</div>
                </div>
                <div className="dias">
                <div className="dia previo">30</div>
                        <div className="dia previo">31</div>
                        <div className="dia hoy">1</div>
                        <div className="dia">2</div>
                        <div className="dia">3</div>
                        <div className="dia">4</div>
                        <div className="dia">5</div>
                        <div className="dia">6</div>
                        <div className="dia">7</div>
                        <div className="dia">8</div>
                        <div className="dia evento seleccionado">9</div>
                        <div className="dia">10</div>
                        <div className="dia">11</div>
                        <div className="dia">12</div>
                        <div className="dia evento">13</div>
                        <div className="dia">14</div>
                        <div className="dia">15</div>
                        <div className="dia">16</div>
                        <div className="dia">17</div>
                        <div className="dia">18</div>
                        <div className="dia">19</div>
                        <div className="dia">20</div>
                        <div className="dia evento">21</div>
                        <div className="dia">22</div>
                        <div className="dia">23</div>
                        <div className="dia">24</div>
                        <div className="dia">25</div>
                        <div className="dia">26</div>
                        <div className="dia">27</div>
                        <div className="dia">28</div>
                        <div className="dia">29</div>
                        <div className="dia">30</div>
                        <div className="dia">31</div>
                        <div className="dia siguiente">1</div>
                        <div className="dia siguiente">2</div>
                </div>
                <div className="buscar-fecha">
                  <div className="cont-fecha">
                    <IonInput placeholder="mm/yyyy" className="fecha-input"></IonInput>
                    <IonButton className="ir-fecha">Ver</IonButton>
                  </div>
                  <IonButton className="btn-hoy">Hoy</IonButton>
                </div>
              </div>
            </div>

            {/* Lado Derecho */}
            <div className="derecha">
              <div className="fecha-hoy">
                <div className="dia-evento">Mie</div>
                <div className="fecha-evento">9 Septiembre 2024</div>
              </div>
              <div className="eventos">
                <div className="evento">
                  <div className="titulo">
                    <IonIcon icon={balloonOutline} />
                    <h3 className="titulo-evento">Reserva 1</h3>
                  </div>
                  <div className="hora-evento">09:30AM - 10:30AM</div>
                </div>
                <div className="evento">
                  <div className="titulo">
                    <IonIcon icon={balloonOutline} />
                    <h3 className="titulo-evento">Reserva 2</h3>
                  </div>
                  <div className="hora-evento">11:30AM - 12:30AM</div>
                </div>
                <div className="evento">
                  <div className="titulo">
                    <IonIcon icon={balloonOutline} />
                    <h3 className="titulo-evento">Reserva 3</h3>
                  </div>
                  <div className="hora-evento">14:30AM - 15:30AM</div>
                </div>
                {/* Repetir para más reservas */}
              </div>

              {/* Botón para añadir reservas */}
              <div className="contenedor-aniadir-evento">
                <IonButton className="aniadir-evento">
                    <IonIcon icon={calendarOutline} />
                </IonButton>
              </div>
            </div>
          </div>
        </div>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <p>@2024 hecho por Dylan Rodriguez</p>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Calendario;
