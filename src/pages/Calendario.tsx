import React, { useState, useEffect } from 'react';
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
  IonInput,
  IonIcon,
  IonFooter,
} from '@ionic/react';
import './Calendario.css';
import { balloonOutline, calendarOutline, arrowBackOutline, arrowForwardOutline, closeOutline } from 'ionicons/icons';

const Calendario = () => {
  const ArrMeses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const hoy = new Date();
  const [mes, setMes] = useState(hoy.getMonth());
  const [anio, setAnio] = useState(hoy.getFullYear());
  const [diasCalendario, setDiasCalendario] = useState<string[]>([]);
  const [diaHoy, setDiaHoy] = useState(hoy.getDate());
  const [fechaInput, setFechaInput] = useState('');
  const [arrEvents, setArrEventos] = useState<any[]>([]);
  const [nombreEvento, setNombreEvento] = useState('');
  const [inicioEvento, setInicioEvento] = useState('');
  const [terminoEvento, setTerminoEvento] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [diaEvento, setDiaEvento] = useState('');
  const [fechaEvento, setFechaEvento] = useState('');

  // Simulación de eventos
  const [arrEventos] = useState([
    { dia: 9, mes: 10, anio: 2024,inicio:"10:30", termino:"12:30", nombre: "Reserva 1" },
    { dia: 13, mes: 10, anio: 2024,inicio:"15:30", termino:"16:30", nombre: "Reserva 2" },
  ]);

  // Actualiza los días del calendario cada vez que se cambia el mes o año
  useEffect(() => {
    updateCalendario();
  }, [mes, anio]);

  const updateCalendario = () => {
    const primerDia = new Date(anio, mes, 1);
    const ultimoDia = new Date(anio, mes + 1, 0);
    const ultimoDiaPrevio = new Date(anio, mes, 0);
    const diasPrevio = ultimoDiaPrevio.getDate();
    const ultimaFecha = ultimoDia.getDate();
    const primerDiaSemana = primerDia.getDay();
    const siguientesDias = 7 - ultimoDia.getDay() - 1;

    let nuevosDias: string[] = [];

    // Agregar los días del mes anterior
    for (let i = primerDiaSemana; i > 0; i--) {
      nuevosDias.push(`<div class="dia previo">${diasPrevio - i + 1}</div>`);
    }

    // Agregar los días del mes actual
    for (let j = 1; j <= ultimaFecha; j++) {
      let evento = arrEventos.some(e => e.dia === j && e.mes === mes + 1 && e.anio === anio);
      if (j === diaHoy && anio === hoy.getFullYear() && mes === hoy.getMonth()) {
        // Día de hoy
        nuevosDias.push(evento ? `<div class="dia hoy evento seleccionado">${j}</div>` : `<div class="dia hoy seleccionado">${j}</div>`);
      } else {
        // Otros días
        nuevosDias.push(evento ? `<div class="dia evento">${j}</div>` : `<div class="dia">${j}</div>`);
      }
    }

    // Agregar los días del mes siguiente
    for (let k = 1; k <= siguientesDias; k++) {
      nuevosDias.push(`<div class="dia siguiente">${k}</div>`);
    }

    setDiasCalendario(nuevosDias);
  };

  const cambiarMes = (direccion: string) => {
    if (direccion === "prev") {
      if (mes === 0) {
        setMes(11);
        setAnio(anio - 1);
      } else {
        setMes(mes - 1);
      }
    } else {
      if (mes === 11) {
        setMes(0);
        setAnio(anio + 1);
      } else {
        setMes(mes + 1);
      }
    }
  };

  const handleFechaInputChange = (e: any) => {
    let value = e.target.value.replace(/[^0-9/]/g, ''); // Solo permitir números y '/'
    
    // Insertar el slash al escribir después de 2 caracteres
    if (value.length === 2 && !value.includes('/')) {
      value += '/';
    }

    // Limitar a 7 caracteres
    if (value.length > 7) {
      value = value.slice(0, 7);
    }

    // Si se elimina el slash, ajustar el valor
    if (e.inputType === 'deleteContentBackward' && value.length === 3) {
      value = value.slice(0, 2);
    }

    setFechaInput(value); // Actualizar el estado con la entrada formateada
  };

  // Función para ir a la fecha escrita
  const irFecha = () => {
    const arrFecha = fechaInput.split('/');
    if (arrFecha.length === 2) {
      const mesInput = parseInt(arrFecha[0], 10);
      const anioInput = parseInt(arrFecha[1], 10);
  
      // Validar el mes y año
      if (mesInput > 0 && mesInput < 13 && arrFecha[1].length === 4) {
        setMes(mesInput - 1); // El mes es 0-indexado
        setAnio(anioInput);
        updateCalendario(); // Actualizamos el calendario
        setFechaInput(''); // Vaciar el input después de usarlo
        return;
      }
    }
    alert('Fecha inválida');
  };

  // DERECHA

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleNombreInput = (e: any) => {
    const value = e.target.value.slice(0, 50);
    setNombreEvento(value);
  };

  const handleHoraInput = (e: any, setHora: React.Dispatch<React.SetStateAction<string>>) => {
    let value = e.target.value.replace(/[^0-9:]/g, '');
    if (value.length === 2) {
      value += ':';
    }
    if (value.length > 5) {
      value = value.slice(0, 5);
    }
    setHora(value);
  };

  const agregarEvento = () => {
    const nuevoEvento = {
      titulo: nombreEvento,
      hora: `${inicioEvento} - ${terminoEvento}`,
    };
    setArrEventos(prev => {
      const eventosDelDia = prev.find(evento => evento.dia === diaHoy && evento.mes === mes + 1 && evento.anio === anio);
      if (eventosDelDia) {
        eventosDelDia.eventos.push(nuevoEvento);
      } else {
        return [...prev, { dia: diaHoy, mes: mes + 1, anio, eventos: [nuevoEvento] }];
      }
      return prev;
    });
    toggleForm();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='logoBtn'>
            <IonButton routerLink="/"><IonImg className='logo' src='../assets/images/logo.png' /></IonButton>
          </IonTitle>
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
                  <IonButton onClick={() => cambiarMes("prev")}>
                    <IonIcon icon={arrowBackOutline}></IonIcon>
                  </IonButton>
                  <div className="fecha">{ArrMeses[mes]} {anio}</div>
                  <IonButton onClick={() => cambiarMes("next")}>
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
                  {/* Renderizamos los días dinámicamente */}
                  {diasCalendario.map((diaHtml, index) => {
                    // Convertimos la cadena de HTML en un objeto DOM temporal para extraer las clases y el contenido
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = diaHtml.trim();
                    const diaElement = tempDiv.firstChild as HTMLElement;

                    // Si el contenido del día no es válido, omitimos este paso
                    if (!diaElement) return null;

                    // Extraemos la clase y el texto del día
                    const diaClase = diaElement.className;
                    const diaTexto = diaElement.innerHTML;

                    // Renderizamos el día con la clase adecuada y el contenido correcto
                    return (
                      <div key={index} className={diaClase}>
                        {diaTexto}
                      </div>
                    );
                  })}
                </div>
                {/* Búsqueda de una fecha */}
                <div className="buscar-fecha">
                  <div className="cont-fecha">
                    <IonInput
                      placeholder="MM/AAAA"
                      value={fechaInput}
                      onIonInput={handleFechaInputChange}
                      className="fecha-input"
                    ></IonInput>
                    <IonButton className="ir-fecha" onClick={irFecha}>
                      Ver
                    </IonButton>
                  </div>
                  <IonButton className="btn-hoy" onClick={() => {
                    setMes(new Date().getMonth());
                    setAnio(new Date().getFullYear());
                    updateCalendario();
                  }}>
                    Hoy
                  </IonButton>
                </div>
              </div>
            </div>

            {/* Lado Derecho */}
            <div className="derecha">
              <div className="fecha-hoy">
                <div className="dia-evento">Vie</div>
                <div className="fecha-evento">18 Octubre 2024</div>
              </div>
              <div className="eventos">
                {arrEventos.map((evento, index) => (
                  <div className="evento" key={index}>
                    <div className="titulo">
                      <IonIcon icon={balloonOutline} />
                      <h3 className="titulo-evento">{evento.nombre}</h3>
                    </div>
                    <div className="hora-evento">{evento.inicio} - {evento.termino}</div>
                  </div>
                ))}
              </div>
              <div className="contenedor-aniadir-evento">
                {isOpen && (
                  <div className="agregar-evento">
                    <div className="agregar-titulo-evento">
                      <div className="titulo-evento">Agregar Evento</div>
                      <IonButton className='cerrarBtn' fill="clear" onClick={toggleForm}>
                        <IonIcon icon={closeOutline} />
                      </IonButton>
                    </div>
                    <div className="detalles-evento">
                      <div className="input-evento">
                        <IonInput 
                          placeholder="Nombre Reserva" 
                          className="nombre-evento" 
                          value={nombreEvento} 
                          onIonInput={handleNombreInput} 
                        />
                      </div>
                      <div className="input-evento">
                        <IonInput 
                          placeholder="Hora Inicio" 
                          className="inicio-evento" 
                          value={inicioEvento} 
                          onIonInput={(e: { target: { value: string; }; }) => handleHoraInput(e, setInicioEvento)} 
                        />
                      </div>
                      <div className="input-evento">
                        <IonInput 
                          placeholder="Hora Termino" 
                          className="termino-evento" 
                          value={terminoEvento} 
                          onIonInput={(e: { target: { value: string; }; }) => handleHoraInput(e, setTerminoEvento)} 
                        />
                      </div>
                    </div>
                    <div className="agregar-boton-evento">
                      <IonButton 
                        className="agregar-bt-evento" 
                        expand="full" 
                        onClick={agregarEvento}
                      >
                        Añadir Evento
                      </IonButton>
                    </div>
                  </div>
                )}
                <IonButton className="aniadir-evento" onClick={toggleForm}>
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

