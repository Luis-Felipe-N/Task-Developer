import Input from '../../components/Input'
import styles from '../../styles/pages/profile.module.scss'

export default function User() {
    
    return (
        <main className={styles.profileContainer}>
            <h3>Profile</h3>
            <div className={styles.sections}>
                <section>
                    <div className={styles.cardAvatar}>
                        <img src="/avatar.png" alt="Imagem do user" />
                        <button>+ Envie uma foto</button>
                    </div>
                    <form className={styles.form__socialMedia}>
                        <h4>Rede social</h4>
                        <div>
                            <div className={styles.item}>
                                <div>
                                    <div style={{backgroundColor: "#DEFFE5"}}>
                                        <img src="/message-square.svg" alt="simbolo de mensagem" />
                                    </div> 
                                        Cometários
                                </div>
                                <input type="checkbox" name="socialMedia" id="socialMediaLinkedin" />
                            </div>
                        </div>
                    </form>
                </section>
                <form >
                    <div>
                        <Input type="text" label="Dribbble Link" placeholder="https://dribbble.com/alexander-herzog"/>
                        <Input type="text" label="instagram" placeholder="https://www.instagram.com/luis_felipenc17/"/>
                        <Input type="text" label="email" placeholder="email@mail.com"/>
                    </div>
                    <div className={styles.sections__password}>
                        <h4>Senha</h4>
                        <Input type="password" label="Senha atual" placeholder="https://dribbble.com/alexander-herzog"/>
                        <Input type="password" label="Nova senha" placeholder="https://dribbble.com/alexander-herzog"/>
                        <Input type="password" label="Comfirmar senha" placeholder="https://dribbble.com/alexander-herzog"/>
                    </div>

                    <button className="btn">
                        Salvar mudanças
                    </button>
                </form>
                <section>
                    <h4>Estatística pessoal</h4>
                    <div className={styles.itemStatistc}>
                        <div>
                            <div className={styles.img} style={{backgroundColor: "#DEFFE5"}}>
                                <img src="/message-square.svg" alt="simbolo de mensagem" />
                            </div> 
                            <div className={styles.text}>
                                <span>2 540</span>
                                <span>Comentários</span>
                            </div>
                        </div>
                        <div>
                            <div className={styles.img} style={{backgroundColor: "#DEFFE5"}}>
                                <img src="/question-mark.svg" alt="simbolo de mensagem" />
                            </div> 
                            <div className={styles.text}>
                                <span>40</span>
                                <span>Curtidas</span>
                            </div>
                        </div>
                        <div>
                            <div className={styles.img} style={{backgroundColor: "#DEFFE5"}}>
                                <img src="/eye.svg" alt="Imagem de um olho" />
                            </div> 
                            <div className={styles.text}>
                                <span>10</span>
                                <span>View</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}