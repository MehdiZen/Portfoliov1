import './App.css'
import ProjetCard from './projetCard'
import React, { useState, useRef, useEffect } from 'react';
import logo from "./assets/CV.jpg";
import vengeance from "./assets/hesvengeance.png";
import beam from "./assets/beam.png";
import audio from "./assets/INJAC.mp3"
import wallpaper from "./assets/Batman2.jpg"
import sups from "./assets/sups.png"
import emailjs from "@emailjs/browser";
import CV from "./assets/CV.pdf"
import batmanp3 from "./assets/versionmehdi.mp3"
import mustwingo from "./assets/twingo.mp3"
import batcavex from "./assets/batcave.mp3"
import batlogo from "./assets/batlogo.png"
import shrek from "./assets/shrek.png"
import AIEaud from "./assets/AIE.mp3"
import cryboard from "./assets/cry.png"
import messagex from "./assets/message.mp3"
var message = new Audio(messagex)
var AIE = new Audio(AIEaud);
var batcave = new Audio(batcavex);
var musique = new Audio(batmanp3);
var twingo = new Audio(mustwingo);

//  musique('./assets/Batman.mp3')
// dfae76a9

const movie1 = {

    "Title": "My Shreknema (Cinema)",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "PHP, SQL",
    "Poster": "https://www.zupimages.net/up/23/22/hkj9.png",
    "Git": "https://github.com/MehdiZen/my_cinema"

}
const movie2 = {
    "Title": "Deadbird (Twitter)",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "PHP, SQL, HTML, CSS, JS, Ajax",
    "Poster": "https://www.zupimages.net/up/23/22/oygn.png",
    "Git": "https://github.com/MehdiZen/Twitter"
}
const movie3 = {
    "Title": "Internenet (meetic)",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "Php, HTML, CSS, JS, SQL",
    "Poster": "https://www.zupimages.net/up/23/22/ralh.png",
    "Git": "https://github.com/MehdiZen/meetic"


}
const movie4 = {
    "Title": "Pushswap (Algorithme de tri)",
    "Year": "2023",
    "imdbID": "tt1877830",
    "Type": "Php",
    "Poster": "https://i.ytimg.com/vi/y77GagH0qDg/maxresdefault.jpg",
    "Git": "https://github.com/MehdiZen/Pushswap"

}
const movie5 = {
    "Title": "Puissance 14 (Puissance 4)",
    "Year": "2023",
    "imdbID": "tt1877830",
    "Type": "HTML, JS",
    "Poster": "https://www.zupimages.net/up/23/23/r85q.png"
}
const movie6 = {
    "Title": "Portfolioception",
    "Year": "2023",
    "imdbID": "tt1877830",
    "Type": "React, JS, HTML, CSS",
    "Poster": "https://www.zupimages.net/up/23/23/le28.png"
}
const App = () => {
    const [activeDiv, setActiveDiv] = useState('Intro');
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [visibility, setVisibility] = useState(false);
    const [callVisibility, setCallVisibility] = useState(true);
    const audioRef = useRef(null);
    const form = useRef();
    const [isHidden, setIsHidden] = useState(false);
    const [musicTitle, setMusicTitle] = useState("The Batman theme song - Michael Giacchino (2022)");
    const [clickCount, setClickCount] = useState(1);
    const [showImage, setShowImage] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [submitted, setSubmitted] = useState(false);

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    const handleNavClick = (divId) => {
        musique.loop = true;
        batcave.play();
        const logoImage = document.createElement('img');
        logoImage.src = batlogo;
        logoImage.id = 'batlogo';
        document.body.appendChild(logoImage);

        setTimeout(() => {
            const batLogo = document.getElementById('batlogo');
            if (batLogo) {
                document.body.removeChild(batLogo);
            }
        }, 1000);

        setTimeout(() => {
            setBackgroundImage(wallpaper);
            setActiveDiv(divId);
        }, 700);
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_f66rkrd", "template_7ejax6f", form.current, "zOK_WEK0qwxSqpj2b").then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        message.play();
        setSubmitted(true);
        message.onended = () => {
            window.location.reload(false);
        }        

    };


    useEffect(() => {
        import(`./${activeDiv}-active.css`)
            .then((module) => {
                const styles = module.default;
            })
            .catch((error) => {
            });
    }, [activeDiv]);

    const handleKeyDown = () => {
        AIE.play();
        setShowImage(true);
        setTimeout(() => {
            setShowImage(false);
        }, 1000);
    };

    const handleClick = () => {
        setVisibility(true);
        setCallVisibility(false);
        audioRef.current.play();
        audioRef.current.onended = () => {
            handleNavClick('app');
        }

    };
    const handleButtonClick = () => {
        setIsHidden(true);
    };
    const handleSkipButtonClick = () => {
        setActiveDiv('app');
        setVisibility(true);
    };
    const cantstopthemusic = () => {
        musique.pause();
    }
    const etjeremetleson = () => {
        musique.play();
    }
    const swapper = () => {
        var swap = musique;
        musique = twingo;
        twingo = swap;
        musique.currentTime = 0
        musique.play();
        twingo.pause();
        if (clickCount % 2 === 0) {
            setMusicTitle("The Batman theme song - Mehdi Zenati (2023)");
        } else {
            setMusicTitle("Merci Twingo ! - Anthony McBazooka");
        }
        setClickCount(clickCount + 1);

    }
    const handlemousePosition = () => {
        var e = window.event;

        var posX = e.clientX;
        var posY = e.clientY;
        console.log(posY)
        console.log(posX)
    }
    
    console.log("Partez d'ici il n'y a rien à voir.");
    return (
        <>

            {visibility && <div className="NavBar">
                <ul>
                    {/* <li onClick={() => handleNavClick('Intro')}>Introduction</li> */}

                    <li onClick={() => handleNavClick('app')}>Projets</li>
                    <li onClick={() => handleNavClick('CV')}>CV</li>
                    <li onClick={() => handleNavClick('Contact')}>Contact</li>
                </ul>
            </div>}
            <div className={activeDiv === 'Intro' ? 'Intro' : 'hidden'}>
                <div className='ecran'>
                    {callVisibility && (
                        <p id='call' onClick={handleClick}>
                            Cliquez ici pour lancer un appel au développeur...
                        </p>
                    )}             <audio ref={audioRef} src={audio} />
                    <div className="quote">
                        {visibility && <p id='q1'>'We have a <span className="underline">signla</span> now👁👄👁,</p>}
                        {visibility && <p id='q2'>For when i'm needed🥷🥷,</p>}
                        {visibility && <p id='q3'>But when that <span className="underlineb">lite</span> hits the sky💡✨,</p>}
                        <h2>"It's not just a call.. It's a warning"</h2>
                        {visibility && <p id='q4'>To them...👪👨‍👩‍👧‍👧👩‍👩‍👧‍👧</p>}
                        {visibility && <p id='q5'>Fear...🦇👨‍🦲😨</p>}
                        {visibility && <p id='q6'>Is a tool.🛠️🪕🇿🇦🦓🍠'</p>}
                    </div>
                    <div className='batimage'>
                        {visibility && <img id='ogbat' src={vengeance} alt='oui' width='auto' height='300em' />}
                        {visibility && <div className='venjens'>

                            <p>"je suis la venjense" - batmon</p>
                            <p>"im batman" - batmon</p>
                            <p>"gotham est à moi" - medi</p>
                            <p>"SWEAR TO ME" - batmon</p>
                            <p>"papa me manque" - medi</p>
                            <p>"you're like a son to me robin" - batmon</p>
                            <p>"au uno pas de Joker" - medi</p>
                            <p>"T'as pensé à prendre de l'oignon" - medi</p>
                            <p>"Pardon? t'as perdu ton moignon?" - batmon</p>
                            <p>"non de l'oignon pour la compoté" - medi</p>
                            <p>"super film le chat potté" - batmon</p>
                            <p>"rien à voir" - medi</p>
                            <p>"j'aime me beurrer la biscotte" - ubert</p>
                            <p>"je dois faire la responsive" - medi</p>
                            <p>"Et ce Joker il est dans la pièce avec nous?" - psy de medi</p>
                        </div>}

                        {visibility && <img id='beam' src={beam} alt='faisseau de lumière' />}
                    </div>
                    {callVisibility && <button className="skip-button" onClick={handleSkipButtonClick}>
                        &#60;Skip intro&#62;
                    </button>}
                </div>
            </div>
            <div className={activeDiv === 'app' ? 'app' : 'hidden'}>
                <h1>Mehdi Zenati</h1>

                <div className="search">
                    <input placeholder="Rechercher un projet (feature en projet)" value="" onChange={() => { }}
                    />
                </div>
                <div className='minwidth'>
                    <div className="container">
                        {/* c'est là qu'on va mettre tous les projets ok bg ? */}
                        <ProjetCard movie1={movie1} />
                        <ProjetCard movie1={movie2} />
                        <ProjetCard movie1={movie3} />
                        <ProjetCard movie1={movie4} />
                        <ProjetCard movie1={movie5} />
                        <ProjetCard movie1={movie6} />
                    </div>
                    <div className='moi'>
                        {/* <button>Aller à l'essentiel</button> */}
                        <h3>A propos de moi</h3>
                        <p className={isHidden ? 'lie hiddenz' : 'lie'}>
                            Après la mort de mes parents à la sortie du film Zorro au cinéma, j'ai eu un déclic qui m'a poussé à devenir la meilleure version de moi-même. C'est pour cela que je me suis instruit dans bien des domaines.                        </p>
                        <p>
                            Passionné de{' '}
                            <p className={isHidden ? 'lie hiddenz' : 'lie'}>lecture, danse contemporaine,</p> jeux-vidéo et cinéma, j'ai toujours eu un attrait pour l'informatique dans son sens large.
                        </p>
                        <p>
                            Après plusieurs années passées{' '}
                            <p className={isHidden ? 'lie hiddenz' : 'lie'}>à entraîner mon chi dans un monastère tibétain et</p> à faire des jobs alimentaires, j'ai décidé de suivre une formation de dev web à{' '}
                            <p className={isHidden ? 'lie hiddenz' : 'lie'}>Epitech,</p> la Web@cademie
                        </p>
                        <p>
                            <p className={isHidden ? 'lie hiddenz' : 'lie'}>Étant quelqu'un d'excessivement sérieux,</p>
                            <p>Je </p>
                            <p className={isHidden ? 'lie hiddenz' : 'lie'}>ne</p>
                            <p>‏‏‎ ‎suis<p className={isHidden ? 'lie hiddenz' : 'lie'}>ni</p> reconnu pour ma créativité, <p className={isHidden ? 'lie hiddenz' : 'lie'}>ni pour</p> mon originalité ou mes capacités à ramener mes idées farfelues à la vie.</p>
                        </p>
                        <p>
                            <p className={isHidden ? 'lie hiddenz' : 'lie'}>J'ai encore beaucoup de choses à dire à mon sujet, cependant le temps nous est compté, je dois donc rester bref.</p>
                            <p>Je vous jure, je suis saint d'esprit.</p>
                        </p><p>
                            <p className={isHidden ? 'lie hiddenz' : 'lie'}>Ne</p><p>fuyez</p><p className={isHidden ? 'lie hiddenz' : 'lie'}>pas</p><p>!</p>
                        </p>
                    </div>
                </div>
                <button className={isHidden ? 'boutbout hiddenz' : 'boutbout button-64'} onClick={handleButtonClick}>  <span>Supprimer les mensonges ?</span>
                </button>
                <div className="Services">
                    <h2>This looks like a job for... ME<img src={sups} alt="Logo de Superman" width="3%" height="auto" /></h2>
                    <img src="https://i.pinimg.com/originals/82/71/ed/8271eddf1b4731a38c4c4af72c1f1180.gif" alt="Superman qui se met en costume" />
                    <div className="servicesp">
                        <p>Vous cherchez un développeur web compétent en freelance ou en CDI ? Je suis là pour vous !</p>
                        <p> Avec une expérience solide et une expertise dans les technologies web modernes, je peux créer des sites web conviviaux et performants. </p>
                        <p><a id="contactezmoi" onClick={() => handleNavClick('Contact')}>Contactez-moi</a> dès maintenant pour discuter de vos besoins et commencer à travailler ensemble vers la réussite de votre projet.</p>
                        <p className="rainbow-text-loop">[Message produit par CHAT GPT]</p>
                    </div>
                </div>
            </div>
            <div className={activeDiv === 'CV' ? 'CV' : 'hidden'}>
                <div className='minwidth'>
                    <div className='imagecv'>
                        <img src={logo} width="40%" height="auto" alt="CV Mehdi Zenati Developpeur Web Fullstack" />
                        <a href={CV} download>
                            <i className="fa-solid fa-download downloadex"></i>
                        </a>
                    </div>
                </div>
            </div >
            <div className={activeDiv === 'Contact' ? 'Contact' : 'hidden'}>
                <div className='minwidth'>
                    <form className='formularito' ref={form} onSubmit={sendEmail}>
                        <h2>"Because he's the developer the company needs,<br /> but not the one it deserves right now"<br /> ou quelque chose comme ça <br />
                            <img src={shrek} alt="Tête de shrek" height="50em" width="auto" draggable="false" />
                        </h2>
                        <label>Nom</label>
                        <input onKeyDown={handleKeyDown} id="name" type="text" name="name" placeholder='FRAPPEZ sur votre clavier votre nom' autocomplete="off" required />
                        <label>E-mail</label>
                        <input onKeyDown={handleKeyDown} id="email" type="email" name="email" placeholder="FRAPPEZ sur votre clavier votre adresse mail" autocomplete="off" required />
                        <label>Message</label>
                        <textarea onKeyDown={handleKeyDown} name="message" autocomplete="off" required minLength={5} placeholder='Veuillez TAPER votre message ici' />
                        <input id="pointclick" type="submit" value="Send" />
                    </form>
                    {submitted && <p id="money">"It's not about  money, it's about sending a message"</p>}
                    {submitted && <p className="success">Message envoyé avec succès, rédirection...</p>}
                    <div>
                        {showImage && (
                            <img
                                src={cryboard}
                                alt="cryboard"
                                style={{
                                    position: "fixed",
                                    pointerEvents: "none",
                                    left: `${mousePosition.x}px`,
                                    top: `${mousePosition.y}px`,
                                    width: "auto",
                                    height: "40%",
                                    zIndex: 9999,
                                }}
                            />
                        )}
                    </div>
                    {/* LEZGONGUE -- C'est mon watermark */}
                </div>
            </div>
            {visibility && <footer>
                                    <div className='Player'>
                                        <i className="fa-solid fa-play fababy" onClick={etjeremetleson} ></i><i className="fa-solid fa-pause fababy" onClick={cantstopthemusic}></i><i class="fa-solid fa-forward-fast fababy" onClick={swapper}></i>
                                        <div className="music-info">
                                            <marquee behavior="scroll" direction="left">
                                                {musicTitle}
                                            </marquee>
                                        </div>
                                    </div>
                <p>You thought it was a footer BUT IT WAS ME, DIO !</p><img src="https://www.zupimages.net/up/23/22/vi6m.png"
                    height="50px" width="auto" />
            </footer>}
        </>
    )
}

export default App;