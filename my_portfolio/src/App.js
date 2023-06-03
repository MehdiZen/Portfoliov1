import './App.css'
import ProjetCard from './projetCard'
import React, { useState, useRef, useEffect } from 'react';
import logo from "./assets/CV.jpg";
import vengeance from "./assets/hesvengeance.png";
import beam from "./assets/beam.png";
import audio from "./assets/INJAC.mp3"
import wallpaper from "./assets/Batman2.jpg"


import emailjs from "@emailjs/browser";
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
    "Type": "Php, HTML, CSS, JS",
    "Poster": "https://www.zupimages.net/up/23/22/ralh.png",
    "Git": "https://github.com/MehdiZen/meetic"


}
const movie4 = {
    "Title": "Pushswap (Algorithme de tri)",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "Php",
    "Poster": "https://i.ytimg.com/vi/y77GagH0qDg/maxresdefault.jpg",
    "Git": "https://github.com/MehdiZen/Pushswap"

}
const movie5 = {
    "Title": "Projet 5",
    "Year": "NoData",
    "imdbID": "tt1877830",
    "Type": "NoData",
    "Poster": "https://images.rtl.fr/~c/770v513/rtl/www/1450316-robert-pattinson-dans-the-batman.jpg"
}
const App = () => {
    const [activeDiv, setActiveDiv] = useState('Intro');
    const [backgroundImage, setBackgroundImage] = useState(null);

    const handleNavClick = (divId) => {
        setBackgroundImage(wallpaper);
        setActiveDiv(divId);

    };
    const form = useRef();
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
        alert("Votre message a bien été envoyé.");
        window.location.reload(false);

    };
    useEffect(() => {
        import(`./${activeDiv}-active.css`)
            .then((module) => {
                // Récupère le style du module CSS
                const styles = module.default;

                // Applique les styles au document ou à des éléments spécifiques
                // ...

            })
            .catch((error) => {
            });
    }, [activeDiv]);
    const [visibility, setVisibility] = useState(false);
    const [callVisibility, setCallVisibility] = useState(true);
    const audioRef = useRef(null);

    const handleClick = () => {
        setVisibility(true);
        setCallVisibility(false);
        audioRef.current.play();

    };
    
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
                    <h2>"It's not just a call.. It's a warning"</h2>
                    <div className='batimage'>
                        {visibility && <img id='ogbat' src={vengeance} alt='oui' width='auto' height='300em' />}
                        {visibility && <img id='beam' src={beam} alt='faisseau de lumière' />}
                    </div>
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
                    </div>

                </div>
            </div>
            <div className={activeDiv === 'CV' ? 'CV' : 'hidden'}>
                <div className='minwidth'>
                    <div className='imagecv'>
                        <a href="https://cvdesignr.com/p/62f939b4ee8b7" target="_blank"><img src={logo} width="40%" height="auto" alt="CV Mehdi Zenati Developpeur Web Fullstack" /></a></div>
                </div>
            </div >
            <div className={activeDiv === 'Contact' ? 'Contact' : 'hidden'}>
                <div className='minwidth'>
                    <form className='formularito' ref={form} onSubmit={sendEmail}>
                        <h2>Prenez donc contact avec le jeune prince que je représente</h2>
                        <label>Name</label>
                        <input type="text" name="name" />
                        <label>Email</label>
                        <input id="email" type="email" name="email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input id="pointclick" type="submit" value="Send" />
                    </form>
                    {/* LEZGONGUE -- C'est mon watermark */}

                </div>
            </div>
            <footer>
                <p>You thought it was a footer BUT IT WAS ME, DIO !</p><img src="https://www.zupimages.net/up/23/22/vi6m.png"
                    height="50px" width="auto" />
            </footer>
        </>
    )
}

export default App;