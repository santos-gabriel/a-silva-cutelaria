import styles from '../styles/components/HomeRaffles.module.css';

export function HomeRaffles () {

    return (
    
        <div id="raffles" className={`row`}>
            <div className={styles.homeRaffles}>
                <div>
                    <img src="/Img_Raffles.svg" alt="" />
                </div>
                <div className={styles.phoneImg}>
                    <img src="/Phone_md.svg" alt="" />
                </div>

                <div>
                    <h1>Rifas do cuteleiro</h1>
                    <h4>Entre no grupo do<br/>WhatsApp e fique atento!</h4>
                    <p>Regularmente o cuteleiro realiza rifas de alguma(s) de suas peças, entre no grupo e fique por dentro!</p>
                    <p> Você pode participar do grupo no WhatsApp e ficar por dentro 
                        de todas as atualizações dos eventos de rifas de peças do 
                        cuteleiro. O acesso e permanência ao grupo é gratuito, leia o 
                        regulamento da participação das rifas <a href="https://api.whatsapp.com/send/?phone=5562981252225">aqui</a>.
                    </p>
                    <a href="https://api.whatsapp.com/send/?phone=5562981252225">Entre agora mesmo</a>
                </div>
            </div>
        </div>
    );

}