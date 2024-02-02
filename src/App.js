import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import Fullstack from './img/full-stack-javascript-developer.jpg'
import Data from './img/iStock-1221293664-1-1-1.jpg'
import Python from './img/python-logo-1.jpg'
import './App.css'

function App() {
  const coordinates = {
    location: {
      address: "GoMyCode, Point E, Dakar",
      lat: 14.696915190636549,
      lng: -17.456928251785076,
    },
    zoom: 17,
  };

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

  return (
    <div className='home'>
         <header className="header">
        <div className="logo">
            <h2 style={{fontSize : '20px', color: '#f33030'}}>GomyCode</h2>
        </div>
        <nav className="navigation">
            <a href="#"><span id="Doc">Qui sommes-nous</span></a>
            <a href="#">Nos formation</a>
            <a href="#">contactez-nous</a>
        </nav>
    </header>

    <div className="content">
      <h2>Bienvenue chez GomyCode</h2>
      <div className='content_p'>Bienvenue sur notre plateforme de formation, l'endroit idéal pour explorer et maîtriser les compétences informatiques les plus recherchées. <br /> Choisissez la formation qui vous convient le mieux </div>
      <div className='formation'>
          <div>
            <h3>Fullstack JS</h3>
            <img className='img' src={Fullstack} alt="" />
           </div>
          <div>
            <h3>Data Scientist</h3>
            <img className='img' src={Data} alt="" />
          </div>
          <div>
            <h3>Python</h3>
            <img className='img' src={Python} alt="" />
            </div>
      </div>
      <div className='content_p1'> Définissez votre nouvelles carrière à travers nos parcours de formations <br /> Venez visiter nos locaux et obtenir réponse à toutes vos questions <br /> <br /> Aidez vous de la carte pour nous localiser  </div>

    </div>
      

      <div className="map">
      <GoogleMapReact
        className="map_iframe"
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates.location}
        defaultZoom={coordinates.zoom}
      >
        <LocationPin
          lat={coordinates.location.lat}
          lng={coordinates.location.lng}
          text={coordinates.location.address}
        />
      </GoogleMapReact>
     </div>
        <footer>
          <div className="link">
          <a href="">Facebook</a>
                <a href="">Tweeter</a>
                <a href="">Instagram</a> 
          </div> 
        </footer>
    </div>
    
  );
}

export default App;
