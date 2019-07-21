import React from 'react';
import SoDev from '../images/SoDev-logo.png';
import Teaching from '../images/teaching.jpg';

export default function () {
    return (
        <main>
            <h1>Schuster Braun</h1>
            <h2>I am a web developer, teacher, community advocate, VetsWhoCode alumni, Navy veteran.</h2>
            <section className="SouthernDev">
                <div className="image">
                    <a href="https://southerndev.co">
                        <img src={SoDev} alt="Cool logo for Southern Dev Conference. Stylized url: SouthernDev.co" />
                    </a>
                </div>
                <p>Community Advocate: Southern Dev conference and the monthly Developer Meetups.</p>
            </section>
            <section className="teaching">
                <div className="leftContainer">
                    <div className="orangeTriangle">
                    </div>
                    <p>Teacher: theClubhouse’s Code Boot Camp</p>
                </div>
                <div className="image">
                <img src={Teaching} alt="I'm pointing out some broken code a student has." />
                </div>
            </section>
        </main>
    )
}