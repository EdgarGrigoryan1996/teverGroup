import React from 'react';
import g from "../../globalStyles.module.css"
import s from "./Industries.module.css"
import {AiFillNotification, AiOutlineDollarCircle} from "react-icons/ai";
import {GiProgression} from "react-icons/gi";
import {SiMicrostrategy} from "react-icons/si";
import {MdComputer} from "react-icons/md";
import {BiHealth} from "react-icons/bi";

function Industries(props) {
    return (
        <section className={s.industries}>
            <div className={g.sectionTitle}>
                <h2>Our Industries</h2>
            </div>
            <div className={s.industriesContent}>
                <div className={s.industriesItem}>
                    <div className={s.industieLogo}><AiOutlineDollarCircle /></div>
                    <div className={s.industrieContent}>
                        <h4>Corporate Finance</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae doloremque, error ex excepturi necessitatibus officia porro quasi quo repellat totam unde vero voluptas! Amet blanditiis eveniet non quod rerum?
                        </p>
                    </div>
                    </div>


            <div className={s.industriesItem}>
                <div className={s.industieLogo}><GiProgression/></div>
                <div className={s.industrieContent}>
                    <h4>Corporate Finance</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae doloremque, error ex excepturi necessitatibus officia porro quasi quo repellat totam unde vero voluptas! Amet blanditiis eveniet non quod rerum?
                    </p>
                </div>
            </div>

            <div className={s.industriesItem}>
                <div className={s.industieLogo}><AiFillNotification/></div>
                <div className={s.industrieContent}>
                    <h4>Corporate Finance</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae doloremque, error ex excepturi necessitatibus officia porro quasi quo repellat totam unde vero voluptas! Amet blanditiis eveniet non quod rerum?
                    </p>
                </div>
            </div>

            <div className={s.industriesItem}>
                <div className={s.industieLogo}><SiMicrostrategy/></div>
                <div className={s.industrieContent}>
                    <h4>Corporate Finance</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae doloremque, error ex excepturi necessitatibus officia porro quasi quo repellat totam unde vero voluptas! Amet blanditiis eveniet non quod rerum?
                    </p>
                </div>
            </div>

            <div className={s.industriesItem}>
                <div className={s.industieLogo}><MdComputer/></div>
                <div className={s.industrieContent}>
                    <h4>Corporate Finance</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae doloremque, error ex excepturi necessitatibus officia porro quasi quo repellat totam unde vero voluptas! Amet blanditiis eveniet non quod rerum?
                    </p>
                </div>
            </div>

            <div className={s.industriesItem}>
                <div className={s.industieLogo}><BiHealth/></div>
                <div className={s.industrieContent}>
                    <h4>Corporate Finance</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae doloremque, error ex excepturi necessitatibus officia porro quasi quo repellat totam unde vero voluptas! Amet blanditiis eveniet non quod rerum?
                    </p>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Industries;