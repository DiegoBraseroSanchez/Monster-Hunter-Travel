import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent conainer">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>Manten el contacto</small>
            <h2>Caza con nosotros</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text"  placeholder='Pon tu correo'/>
            <button data-aos='fade-up' className='btn flex' type='submit'>
               Mandar <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon'/> MonsterHunter.
              </a>
            </div>
            <div data-aos='fade-up' className="footerParagraph">
            La franquicia Monster Hunter (モンスターハンター Monsutā Hantā?, lit. Cazador de monstruos) es una serie de videojuegos de rol de acción con temática fantástica que comenzó con el videojuego Monster Hunter para PlayStation 2, lanzado en 2004. Los títulos han sido publicados en una variedad de plataformas, que incluyen computadoras personales, consolas domésticas, consolas portátiles y dispositivos móviles. La serie es desarrollada y publicada por Capcom.
            </div>

            <div data-aos='fade-up' className="footerSocials flex">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <BsFacebook className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">
            
             {/* //Grupo 1 */}
              <div data-aos='fade-up' data-aos-duration="3000" className="linkGroup">
                <span className='groupTitle'>
                  NUESTRA AGENCIA
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Servicios
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Seguro
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Agencia
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Rastreo
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Pago
                </li>

              </div>

               {/* //Grupo 2 */}
                 <div data-aos='fade-up'data-aos-duration="4000" className="linkGroup">
                <span className='groupTitle'>
                PATROCINIOS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Capcom
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Nintendo
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Playstation
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Xbox
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> Steam
                </li>

              </div> 

              {/* //Grupo 3 */}
              <div data-aos='fade-up' data-aos-duration="5000" className="linkGroup">
                <span className='groupTitle'>
                  SEDES
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> ESPAÑA
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> PORTUGAL
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> ARGENTINA
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> JAPON
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/> CANADA
                </li>

              </div>

          </div>

          <div className="footerDiv flex">
            <small>LA MEJOR WEB DE MONSTER-HUNTER</small>
            <small>DERECHOS RESERVADOS 2023</small>
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default Footer