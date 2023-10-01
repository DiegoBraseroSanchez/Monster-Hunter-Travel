import React,{useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import{ImClipboard} from 'react-icons/im'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.webp'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.webp'
import img8 from '../../Assets/img8.webp'
import img9 from '../../Assets/img9.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle:'TIGREX ティガレックス (Tigarekkusu)',
    location:'Desierto y Montañas nevadas',
    grade: 'Alocado y arriesgado',
    fees:' 700€',
    desciption: 'El Tigrex es un wyvern cuadrúpedo con poderosas alas convertidas en patas, dotadas de grandes garras, posee una coloración naranja-amarillo brillante con rayas azules. Su cabeza es maciza y tiene fuertes mandíbulas y un par de orejas puntiagudas. Su cola es dentada y está segmentada.'

  },

  {
    id:2,
    imgSrc: img2,
    destTitle:'Nargacuga ナルガクルガ (Narugakuruga)',
    location:'Junglas y Gran Bosques',
    grade: 'Frenetico',
    fees:' 600€',
    desciption:'Su aspecto recuerda al de una pantera negra, el Nargacuga es un wyvern cuadrúpedo con un pelaje azul oscuro y gris, sus alas funcionan como patas y poseen bordes duros y afilados como cuchillas. Sus orejas son puntiagudas con zonas rojizas que se extienden hasta los ojos y su hocico es un pico ganchudo. Su musculosa cola como un látigo oculta afiladas escamas retráctiles que puede lanzar..'

  },

  {
    id:3,
    imgSrc: img3,
    destTitle:'Astalos ライゼクス (Raizekusu)',
    location:'Valle putrefacto y Tierras destino',
    grade: 'Wyvern Brutal',
    fees:' 700€',
    desciption:'Es un wyvern volador con una coraza espinosa de color verde oscuro, caracterizado por su cuerno en forma de hacha y sus alas translúcidas que le dan apariencia de insecto. Sus patas son finas, al igual que su cuerpo, y su larga cola termina en dos tijeras de tono morado. Cuando está cargado eléctricamente, algunas partes de su cuerpo brillan de un tono verde neón.',
  },

  {
    id:4,
    imgSrc: img4,
    destTitle:'Yian Kut-Ku イャンクック (Iyankukku)',
    location:'Bosque y colinas',
    grade: 'Plaga de fuego',
    fees:' 400€',
    desciption:'El Yian Kut-Ku posee la estructura de un wyvern típico, con un cuerpo más bien delgado. Sus escamas son de color rosa y sus orejas, pico y membranas son amarillentas. Posee una cola larga y fina con una pequeña púa en la punta, unas patas fuertes con notables garras y un enorme pico macizo. Su parte más destacable son sus orejas extensibles como abanicos..',
  },

  {
    id:5,
    imgSrc: img5,
    destTitle:'Uragaan ウラガンキン (Uragankin) y Bazelgeuse バゼルギウス (Bazerugiusu)',
    location:'Arena',
    grade: 'Arena Mortal',
    fees:' 1600€',
    desciption:'Caza al Wyvern Martillo Explosivo Furia del Volcán y al Wyvern Escama Bomba en una Arena donde estaras tu solo contras estas dos grandes bestias ',
  },

  
  {
    id:6,
    imgSrc: img6,
    destTitle:'CTeostra テオ・テスカトル (Teo Tesukatoru)',
    location:'Viejo volcan',
    grade: 'Dragon Anciano',
    fees:' 940€',
    desciption:'Posee la estructura de un dragón, con cuatro patas armadas con fuertes garras y dos grandes alas. Su caparazón es de tonos rojizos y amarillos. Al igual que lunastra se asemeja a un gran león, con una gran melena roja y grandes colmillos. En la cabeza posee dos grandes cuernos y su cola termina en un mechón de pelo rojo.',
  },

  {
    id:7,
    imgSrc: img7,
    destTitle:'Anjanath アンジャナフ (Anjanafu)',
    location:'Bosque Primigenio',
    grade: 'Jurassic Park',
    fees:' 790€',
    desciption:'El Anjanath se asemeja al Deviljho, pues ambos están basados en un tiranosaurio. Su piel es rosada, y la parte superior de su cuerpo está cubierto de un plumaje oscuro. Su boca está armada con grandes colmillos que sobresalen desde la mandíbula inferior, y su nariz puede inflarse como un globo para poder captar mejor los olores. Cuando se enfurece, puede extender dos velas espinosas sobre su lomo para intimidar a sus enemigos.',
  },

  {
    id:8,
    imgSrc: img8,
    destTitle:'Diablos ディアブロス (Diaburosu)',
    location:'Desierto y Yermo de Agujas',
    grade: 'Perfora Cascos',
    fees:' 900€',
    desciption:'Es un robusto wyvern de gran tamaño, de color marrón claro, cubierto con unas conchas muy densas, duras y pesadas. Sus alas están más adaptadas a excavar que a volar, con unas fuertes garras. Su característica más notable son los dos grandes cuernos retorcidos de su cabeza, que se parecen mucho a los cuernos de un toro, aunque a veces les puede faltar uno, además poseen dos grandes colmillos y un pequeño collarín dentado. Su cola termina en una pesada maza.',
  },

  {
    id:9,
    imgSrc: img9,
    destTitle:'Zinogre ジンオウガ (Jinouga)',
    location:'Monte Cielo y Cumbres Borrascosas',
    grade: 'Relanpago Azul',
    fees:' 1000€',
    desciption:'El Zinogre es un gran wyvern cuadrúpedo de apariencia canina. Posee un cuerpo musculoso con fuertes patas delanteras y un gran torso, su cabeza es pequeña y posee dos duros cuernos rectos. Sus grandes garras delanteras poseen espolones que en realidad son vestigios alares. Su cola es larga y ancha. El Zinogre posee escamas de azul intenso, conchas y cuernos amarillentos y varios mechones de largo pelaje blanco.',
  },


]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos="fade-right" className='title'>
          Las cazas mas famosas
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle , location, grade, fees, desciption})=>{
                return(
                  <div key={id}  data-aos='fade-up' className="singleDestination">

                    <div className='imageDiv'>
                    <img src={imgSrc} alt={destTitle} />
                    </div>

                    <div className="cardInfo">
                      <h4 className="detTitle">{destTitle}</h4>

                      <span className="continent flex">
                        <HiOutlineLocationMarker className='icon'/>
                        <span className="name">{location}</span>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>

                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{desciption}</p>
                      </div>
                      <button className='btn flex'>
                        DETALLES <ImClipboard className="icon"/>
                      </button>
                    </div>
                  </div>
                )
          })
        }
      </div>

    </section>
  )
}

export default Main