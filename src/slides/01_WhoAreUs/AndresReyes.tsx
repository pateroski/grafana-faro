import { SlideLayout } from 'spectacle'
import Back from '../../assets/images/back.png'
import AndresReyesNavas from '../../assets/images/AndresReyesNavas.png'

export function AndresReyes() {
  return (
    <SlideLayout.VerticalImage
      backgroundImage={`url(${Back})`}
      src={AndresReyesNavas}
      alt="Andres Reyes Navas"
      imgProps={{ style: { objectFit: 'none', minWidth: '0' } }}
      position="left"
      title="Andrés Reyes Navas"
      titleProps={{ fontSize: '48px', textAlign: 'left' }}
      listItems={[
        '🧑🏻‍🎓: Ingeniero de Teleco: Telemática',
        '🏁: Frontend Developer desde el 2015',
        '🤝🏻: Clientes: BBVA, Mapfre, Redexis, Randstad, Edenred...',
        '🙌🏻: Frontend Chapter Lead en Grupo MásMóvil desde finales 2021',
        'Linkedin: andresreyesnavas',
        'Twitter: pateroski',
        'Github: pateroski',
      ]}
    ></SlideLayout.VerticalImage>
  )
}
