import React, { useState } from 'react';
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
                </div >
                <div className='cardBack'>
                    <div className='text' >
                        <p className='story1'>
                            While most look at Jinx and see only a mad woman wielding an array of dangerous weapons, a few remember her as a relatively innocent girl from Zaun—a tinkerer with big ideas who never quite fit in. No one knows for certain what happened to turn that sweet young child into a wildcard, infamous for her wanton acts of destruction. But once Jinx exploded onto the scene in Piltover, her unique talent for sowing anarchy instantly became the stuff of legend.
                            <br /><br />
                            Jinx first gained notoriety through her anonymous “pranks” on the citizens of Piltover… particularly those with connections to the wealthy merchant clans. These pranks ranged from the moderately annoying to the criminally dangerous. She blocked streets on Progress Day, with a stampede of exotic animals freed from Count Mei’s menagerie. She disrupted trade for weeks when she lined the city’s iconic bridges with adorably destructive flame chompers. Once, she even managed to move every street sign in town to new and utterly confusing locations.
                            <br /><br />
                            Though this unknown troublemaker’s targets...
                        </p>
                        <p className='story2'>
                            While most look at Jinx and see only a mad woman wielding an array of dangerous weapons, a few remember her as a relatively innocent girl from Zaun—a tinkerer with big ideas who never quite fit in. No one knows for certain what happened to turn that sweet young child into a wildcard, infamous for her wanton acts of destruction. But once Jinx exploded onto the scene in Piltover, her unique talent for sowing anarchy instantly became the stuff of legend.
                            <br /><br />
                            Jinx first gained notoriety through her anonymous “pranks” on the citizens of Piltover… particularly those with connections to the wealthy merchant clans. These pranks ranged from the moderately annoying to the criminally dangerous. She blocked streets on Progress Day...
                        </p>

                        <a href='https://universe.leagueoflegends.com/en_US/story/champion/jinx/' target="blank" type='button' role='button'>
                            <p>Read the full story</p>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4 0.7C12.3 0.4 12.1 0.2 11.8 0.1C11.7 0 11.5 0 11.4 0H1C0.7 0.1 0.5 0.2 0.3 0.4C0.1 0.6 0 0.8 0 1.1C0 1.4 0.1 1.6 0.3 1.8C0.5 2 0.7 2.1 1 2.1H8.9L0.3 10.7C0.2 10.8 0.1 10.9 0.1 11C0 11.1 0 11.3 0 11.4C0 11.5 0 11.7 0.1 11.8C0.2 11.9 0.2 12 0.3 12.1C0.4 12.2 0.5 12.3 0.6 12.3C0.7 12.4 0.9 12.4 1 12.4C1.1 12.4 1.3 12.4 1.4 12.3C1.5 12.4 1.6 12.3 1.7 12.2L10.3 3.6V11.5C10.3 11.8 10.4 12 10.6 12.2C10.8 12.4 11.1 12.5 11.3 12.5C11.5 12.5 11.8 12.4 12 12.2C12.2 12 12.3 11.7 12.3 11.5V1.1C12.4 1 12.4 0.8 12.4 0.7V0.7Z" fill="white" />
                            </svg>
                        </a>

                    </div>
                </div>
                <div className='animatedBorder'><span></span></div>
            </div >
            <div className='graff'><img className='graff1' src={graff1} alt="Graff Arcane 1" /><img className='graff2' src={graff2} alt="Graff Arcane 2" /></div>
        </div >
    );
};

export default Card;