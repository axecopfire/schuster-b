import React from 'react';
import SoDev from '../images/SoDev-logo.png';
import Teaching from '../images/teaching.jpg';

export default function () {
    return (
        <main>
            <h1>Schuster Braun</h1>
            <h2>I am a web developer, teacher, community advocate, VetsWhoCode alumni, Navy veteran.</h2>
            <section className="SouthernDev">
                <img src={SoDev} alt="Cool logo for Southern Dev Conference. Stylized url: SouthernDev.co" />
                <p>Community Advocate: Southern Dev conference and the monthly Developer Meetups.</p>
            </section>
            <section className="teaching">
                <div className="orange-triangle">
                </div>
                <p>Teacher: theClubhouse’s Code Boot Camp</p>
                <img src={Teaching} alt="I'm pointing out some broken code a student has." />
            </section>
        </main>
    )
}