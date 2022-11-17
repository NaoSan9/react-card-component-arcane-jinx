import React from 'react';
import '../styles/card.scss';
import image from "../assets/arcane-image-jinx.jpeg";
import logo from "../assets/arcane-logo-jinx.svg";
import graff1 from "../assets/arcane-icon-graff-1.png";
import graff2 from "../assets/arcane-icon-graff-2.png";




const Card = () => {
    return (
        <div className='cardSection'>
            <div className='card'>

                <div className='image'><img src={image} alt="Jinx Portrait" /><img className='logo' src={logo} alt="Jinx Signature" /></div>
                <div className='text'>
                    <div className='tagSection'>
                        <div className='tagDetail'><p>Role:</p><p className='tag'>Marksman</p></div>
                        <div className='tagDetail'><p>Region:</p><p className='tag'>Zaun</p></div>
                    </div>
                    <div className='shortBiography'>
                        <p>A maniac and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake. Jinx despises boredom, and gleefully brings her own chaotic brand of pandemonium wherever she goes.</p>
                    </div>
                    <div className='quote'>
                        <h2>“Volatile explosives are a girl’s best friend!”<span> ~ Jinx</span></h2>
                    </div>
                </div>
            </div>
            <div className='animatedBorder'><span></span></div>
            <div className='graff'><img className='graff1' src={graff1} alt="Graff Arcane 1" /><img className='graff2' src={graff2} alt="Graff Arcane 2" /></div>
        </div>
    );
};

export default Card;