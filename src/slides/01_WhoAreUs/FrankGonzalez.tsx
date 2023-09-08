import { SlideLayout } from 'spectacle'
import Back from '../../assets/images/back.png'
import FrankGonzalezHernandez from '../../assets/images/FrankGonzalezHernandez.png'

export function FrankGonzalez() {
  return (
    <SlideLayout.VerticalImage
      backgroundImage={`url(${Back})`}
      src={FrankGonzalezHernandez}
      alt="Frank Gonzalez Hernandez"
      imgProps={{ style: { objectFit: 'none', minWidth: '0' } }}
      position="right"
      title="Frank González Hernández"
      titleProps={{ fontSize: '48px' }}
      listItems={[
        '🧑🏻‍🎓: Ingeniero Informática desde 2017',
        '🏁: Full-Stack Developer con afición por el Frontend',
        '🤝🏻: Consultor en Amaris para Amaris, SGS, GTT y Grupo MasMovil',
        '💪🏼: Senior Frontend Developer en Grupo MásMóvil desde finales 2021',
        'Linkedin: frankglezhdez',
        'Twitter: FrankGlezhdez',
        'Github: caox2110',
      ]}
    ></SlideLayout.VerticalImage>
  )
}
