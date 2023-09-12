import { SlideLayout, Image } from 'spectacle'
import Back from '../../assets/images/back.png'
import GrafanaLogo from '../../assets/images/GrafanaLogo.svg'
import OpenTelemetryLogo from '../../assets/images/OpenTelemetryLogo.png'
import WebVitals from '../../assets/images/WebVitals.png'
import React from '../../assets/icons/React-icon.svg'
import Prometheus from '../../assets/icons/Prometheus.svg'

export function AdvantagesOfUse() {
  return (
    <SlideLayout.List
      backgroundImage={`url(${Back})`}
      title="Ventajas"
      animateListItems
      titleProps={{ fontSize: '48px', textAlign: 'left' }}
      items={[
        <>
          <Image width="30px" src={GrafanaLogo}></Image> Adopción dentro de la cultura tecnológica de la empresa de Grafana Cloud
        </>,
        <>
          <Image width="30px" src={OpenTelemetryLogo}></Image> Integración y uso de OpenTelemetry
        </>,
        <>
          <Image width="35px" src={WebVitals}></Image> Tipos de métricas de rendimiento, registros,
          excepciones, eventos y seguimientos. Ejemplo: Core Web Vitals, User Journey
        </>,
        '🤸 Flexibilidad de personalizar los paneles de Grafana',
        '🏠 Centralización de la monitorización',
        <>
          <Image width="30px" src={React}></Image> Integración con React y uso de componentes adhoc
          para el manejo de errores, rutas
        </>,
        <>
          <Image width="30px" src={Prometheus}></Image> Integración de alertas con prometheus
        </>,
      ]}
    ></SlideLayout.List>
  )
}
