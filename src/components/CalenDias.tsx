import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

const CalendarioDias = () => {
  const [hoy] = useState(new Date());
  const [diaHoy, setDiaHoy] = useState("");
  const [mes, setMes] = useState(hoy.getMonth());
  const [anio, setAnio] = useState(hoy.getFullYear());
  const [arrEventos, setArrEventos] = useState([]);
  const [diasCalendario, setDiasCalendario] = useState("");
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);

  const ArrMeses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  useEffect(() => {
    // Cargar eventos desde JSON o localStorage
    cargarEventos();
    updateCalendario();
  }, [mes, anio, arrEventos]);

  const cargarEventos = async () => {
    try {
      const response = await fetch('../eventos.json');
      const data = await response.json();
      setArrEventos(data);
    } catch (error) {
      console.error("Error al cargar los eventos:", error);
    }
  };

  const updateCalendario = () => {
    const primerDia = new Date(anio, mes, 1);
    const ultimoDia = new Date(anio, mes + 1, 0);
    const ultimoDiaPrevio = new Date(anio, mes, 0);
    const diasPrevio = ultimoDiaPrevio.getDate();
    const ultimaFecha = ultimoDia.getDate();
    const diaSemana = primerDia.getDay();
    const siguientesDias = 7 - ultimoDia.getDay() - 1;

    // Crear la estructura de los días del calendario
    let diasCalendarioTemp = "";

    // Días del mes anterior
    for (let i = diaSemana; i > 0; i--) {
      diasCalendarioTemp += `<div class="dia previo">${diasPrevio - i + 1}</div>`;
    }

    // Días del mes actual
    for (let j = 1; j <= ultimaFecha; j++) {
      let evento = arrEventos.some(evento => 
        evento.dia === j && evento.mes === mes + 1 && evento.anio === anio
      );
      
      if (j === hoy.getDate() && anio === hoy.getFullYear() && mes === hoy.getMonth()) {
        setDiaHoy(j);
        diasCalendarioTemp += `<div class="dia hoy ${evento ? 'evento' : ''} seleccionado">${j}</div>`;
      } else {
        diasCalendarioTemp += `<div class="dia ${evento ? 'evento' : ''}">${j}</div>`;
      }
    }

    // Días del siguiente mes
    for (let k = 1; k <= siguientesDias; k++) {
      diasCalendarioTemp += `<div class="dia siguiente">${k}</div>`;
    }

    setDiasCalendario(diasCalendarioTemp);
  };

  const irMesPrevio = () => {
    setMes(prev => prev === 0 ? 11 : prev - 1);
    if (mes === 0) setAnio(prev => prev - 1);
  };

  const irMesSiguiente = () => {
    setMes(prev => prev === 11 ? 0 : prev + 1);
    if (mes === 11) setAnio(prev => prev + 1);
  };

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{ArrMeses[mes]} {anio}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonGrid>
        <IonRow>
          <IonCol>
            <IonButton onClick={irMesPrevio}>Mes Anterior</IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={irMesSiguiente}>Mes Siguiente</IonButton>
          </IonCol>
        </IonRow>

        <div className="dias" dangerouslySetInnerHTML={{ __html: diasCalendario }}></div>
      </IonGrid>
    </IonContent>
  );
};

export default CalendarioDias;
