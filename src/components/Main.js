import React from 'react';
import SoDev from '../images/SoDev-logo.png';
import Teaching from '../images/teaching.jpg';

export default function () {
    return (
        <main>
            <h1>Schuster Braun</h1>
            <h2>Community driven Web Developer, passionate about building cool stuff for the web, and educating the next generation.</h2>
            <section className="SouthernDev">
                <div className="image">
                    <a target="_blank" rel="noreferrer noopener" href="https://southerndev.co">
                        <img src={SoDev} alt="Cool logo for Southern Dev Conference. Stylized url: SouthernDev.co" />
                    </a>
                </div>
                <p>Organize Southern Dev conference and monthly Developer Meetups.</p>
            </section>
            <section className="teaching">
                <div className="leftContainer">
                    <div className="orangeTriangle">
                    </div>
                    <p>Teach theClubhouse’s Code Boot Camp</p>
                </div>
                <div className="image">
                <a href="https://www.theclubhou.se" target="_blank" rel="noreferrer noopener" >
                <img src={Teaching} alt="I'm pointing out some broken code a student has." />
                </a>
                </div>
            </section>
        </main>
    )
}