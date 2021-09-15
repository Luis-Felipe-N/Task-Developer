import Image from 'next/image'

import styles from '../styles/pages/createtask.module.scss'

import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Createtask() {
    return (
        <main className={styles.createtaskContainer}>
            <h2>Task Creation</h2>
            <form>
                <section>
                <h4>Selecione uma rede social</h4>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <div className={styles.linkedin}>
                            <div>
                                <FaLinkedinIn />
                            </div> 
                                Linkedin
                        </div>
                        <input type="checkbox" name="socialMedia" id="socialMediaLinkedin" />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.instagram}>
                            <div >
                                <FaInstagram />
                            </div>    
                                Instagram
                        </div>
                        <input type="checkbox" name="socialMedia" id="socialMedia" />
                    </div>
                </div>
                </section>

                <section>
                <h4>Tipo da tarefa</h4>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <div>
                            <div style={{backgroundColor: "#FFCECE"}}>
                                <img alt="simbolo do coração" src="/card/heart.svg" />
                            </div> 
                                Likes
                        </div>
                        <input type="checkbox" name="socialMedia" id="socialMediaLinkedin" />
                    </div>
                    <div className={styles.item}>
                        <div >
                            <div style={{backgroundColor: "#F0DEFF"}}>
                                <img src="/people.svg" alt="simbolo de seguidores" />
                            </div>    
                                Seguidores
                        </div>
                        <input type="checkbox" name="socialMedia" id="socialMedia" />
                    </div>
                    <div className={styles.item}>
                        <div>
                            <div style={{backgroundColor: "#DEFFE5"}}>
                                <img src="/message-square.svg" alt="simbolo de mensagem" />
                            </div> 
                                Cometários
                        </div>
                        <input type="checkbox" name="socialMedia" id="socialMediaLinkedin" />
                    </div>
                    <div className={styles.item}>
                        <div>
                            <div style={{backgroundColor: "#FFF6DE"}}>
                                <img src="/eye.svg" alt="simbolo de um olho"/>
                            </div>    
                                Visualização
                        </div>
                        <input type="checkbox" name="socialMedia" id="socialMedia" />
                    </div>
                </div>
                </section>

                <section>
                    <h4>Link do projeto</h4>
                    <p>For example: https://dribbble.com/shots/Example-Name</p>
                    <div className={styles.container}>
                        <input type="text" placeholder="https://dribbble.com/shots/13967318-Dribbble-Promotion-Service-UI-Components"/>
                    </div>
                </section>

                <button className={styles.btnCreateTask} type="submit">
                    Criar Tarefa
                </button>
            </form>
        </main>
    )
}