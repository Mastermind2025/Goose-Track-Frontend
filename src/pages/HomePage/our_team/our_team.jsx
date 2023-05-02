import styles from './team.module.scss';

import ph01 from '../assets/img/ph01.jpg';
import ph02 from '../assets/img/ph02.jpg';
import ph03 from '../assets/img/ph03.jpg';
import ph04 from '../assets/img/ph04.jpg';
import ph05 from '../assets/img/ph05.jpg';
import ph06 from '../assets/img/ph06.jpg';
import ph07 from '../assets/img/ph07.jpg';
import ph09 from '../assets/img/ph09.jpg';
import ph10 from '../assets/img/ph10.jpg';
// icons
import icoLi from '../assets/img/li.png';
import icoGi from '../assets/img/gi.png';

// OUR TEAM

// Alieksieiev Vladyslav
const GitZes = 'https://github.com/Zestiko';
const LinZes = 'https://www.linkedin.com/in/vladyslav-alieksieiev/';
// Averkin Maksym  
const GitMax = 'https://github.com/Maxoverking';
const LinMax = 'https://www.linkedin.com/in/maksym-averkin/';
// Vyshnevska Maryna
const GitVys = 'https://github.com/MarynaVyshnevska';
const LinVys = 'https://www.linkedin.com/in/maryna-vyshnevska/';
// Pysarenko Tetiana
const GitTan = 'https://github.com/TetianaVielkova';
const LinTan = 'https://www.linkedin.com/in/tetiana-pysarenko/';
// Podolianko Aleksandr
const GitPod = 'https://github.com/BlackyHat';
const LinPod = 'https://www.linkedin.com/in/oleksandr-vp/';
// Yurov Igor
const GitYur = 'https://github.com/Mastermind2025';
const LinYur = 'https://www.linkedin.com/in/igor-yurovsky-6111b6239/';
// Lipchanskyi Pavlo
const GitLip = 'https://github.com/Pablo-Lipchanskyi';
const LinLip = 'https://www.linkedin.com/in/pavel-lypchanskiy';
// Ivan
const GitIv = 'https://github.com/Ivan-GoIT';
const LinIv = 'https://www.linkedin.com/in/ivan-koshel/';
// Litvin Serhii
const GitLit = 'https://github.com/Serhii0406';
const LinLit = 'https://www.linkedin.com/in/serhii-lytvyn-458592260/';

export const Team = () => {
    return (
<section id="team" className={styles.box}>
       
    <div className={styles}>
        <h2 className={styles.foot__title}>MEET OUR TEAM</h2>
    </div>	
            
    <div className={styles.container}>            
    
    <div className={styles.main}>
              
	<div className={styles.square}>
	<div className={styles.box_position}>
        <img
            className={styles.img__style}
            // Alieksieiev Vladyslav
            src={ph01}
            alt="team"
        />
    <a href={LinZes}>
        <img
            className={styles.link_icon_Li}
            src={icoLi}
            alt="Icon of LinkedIn"
        />
    </a>
                            
    <a href={GitZes}>                        
        <img
            className={styles.link_icon_Gi}
            src={icoGi}
            alt="Icon of GitHub"
        />
    </a>
                            
    </div>
    <div className={styles.block__prof}>
        <h3 className={styles.name__of}>Alieksieiev Vladyslav</h3>
        <span className={styles.profession}>Team-Lead</span>
    </div>
	</div>		
            
    <div className={styles.square}>
    <div className={styles.box_position}>
    <img
        className={styles.img__style}
        // Averkin Maksym                        
        src={ph02}
        alt="team"
    />
                            
    <a href={LinMax}>
        <img
            className={styles.link_icon_Li}
            src={icoLi}
            alt="Icon of LinkedIn"
        />
    </a>
                            
    <a href={GitMax}>                        
        <img
            className={styles.link_icon_Gi}
            src={icoGi}
            alt="Icon of GitHub"
        />
    </a>                        
						
	</div>
	
    <div className={styles.block__prof}>
        <h3 className={styles.name__of}>Averkin Maksym</h3>
        <span className={styles.profession}>Scrum master</span>
	</div>
	</div>	
                
    <div className={styles.square}>
    <div className={styles.box_position}>
                            
    <img
        className={styles.img__style}
        // Vyshnevska Maryna
        src={ph03}
        alt="team"
    />
                            
    <a href={LinVys}>
        <img
            className={styles.link_icon_Li}
            src={icoLi}
            alt="Icon of LinkedIn"
        />
    </a>
                            
    <a href={GitVys}>                        
        <img
            className={styles.link_icon_Gi}
            src={icoGi}
            alt="Icon of GitHub"
        />
    </a>                        
						
    </div>
        <div className={styles.block__prof}>
            <h3 className={styles.name__of}>Vyshnevska Maryna</h3>
            <span className={styles.profession}>Developer</span>
        </div>
    </div>	
                
    <div className={styles.square}>
	<div className={styles.box_position}>
        <img
            className={styles.img__style}
            // Pysarenko Tetiana
            src={ph04}
            alt="team"
        />
                            
    <a href={LinTan}>
        <img
            className={styles.link_icon_Li}
            src={icoLi}
            alt="Icon of LinkedIn"
        />
    </a>
                            
    <a href={GitTan}>                        
        <img
            className={styles.link_icon_Gi}
            src={icoGi}
            alt="Icon of GitHub"
        />
    </a>         

    </div>
    <div className={styles.block__prof}>
        <h3 className={styles.name__of}>Pysarenko Tetiana</h3>
        <span className={styles.profession}>Developer</span>
    </div>
	</div>	

    <div className={styles.square}>
	<div className={styles.box_position}>
        <img
            className={styles.img__style}
            // Podolianko Aleksandr
            src={ph05}
            alt="team"
        />

    <a href={LinPod}>
        <img
            className={styles.link_icon_Li}
            src={icoLi}
            alt="Icon of LinkedIn"
        />
    </a>
                            
    <a href={GitPod}>                        
        <img
            className={styles.link_icon_Gi}
            src={icoGi}
            alt="Icon of GitHub"
        />
    </a>                                 

    </div>
                        
    <div className={styles.block__prof}>
        <h3 className={styles.name__of}>Podolianko Aleksandr</h3>
        <span className={styles.profession}>Developer</span>
    </div>
	</div>	   

    <div className={styles.square}>
	<div className={styles.box_position}>
        <img
            className={styles.img__style}
            // Yurov Igor
            src={ph06}
            alt="team"
        />

    <a href={LinYur}>
        <img
            className={styles.link_icon_Li}
            src={icoLi}
            alt="Icon of LinkedIn"
        />
    </a>
                            
    <a href={GitYur}>                        
        <img
            className={styles.link_icon_Gi}
            src={icoGi}
            alt="Icon of GitHub"
        />
    </a>                                 

    </div>
                        
    <div className={styles.block__prof}>
        <h3 className={styles.name__of}>Yurov Igor</h3>
        <span className={styles.profession}>Developer</span>
    </div>
	</div>	   

    <div className={styles.square}>
	<div className={styles.box_position}>
        <img
            className={styles.img__style}
            // Lipchanskyi Pavlo
            src={ph07}
            alt="team"
        />

    <a href={LinLip}>
        <img
            className={styles.link_icon_Li}
            src={icoLi}
            alt="Icon of LinkedIn"
        />
    </a>
                            
    <a href={GitLip}>                        
        <img
            className={styles.link_icon_Gi}
            src={icoGi}
            alt="Icon of GitHub"
        />
    </a>         

    </div>
    <div className={styles.block__prof}>
        <h3 className={styles.name__of}>Lipchanskyi Pavlo</h3>
        <span className={styles.profession}>Developer</span>
    </div>
	</div>	
                    
    <div className={styles.square}>
	<div className={styles.box_position}>
        <img
            className={styles.img__style}
            // Ivan
            src={ph09}
            alt="team"
        />

    <a href={LinIv}>
        <img
            className={styles.link_icon_Li}
            src={icoLi}
            alt="Icon of LinkedIn"
        />
    </a>
                            
    <a href={GitIv}>                        
        <img
            className={styles.link_icon_Gi}
            src={icoGi}
            alt="Icon of GitHub"
        />
    </a>                                 

    </div>
    <div className={styles.block__prof}>
        <h3 className={styles.name__of}>Ivan</h3>
        <span className={styles.profession}>Developer</span>
    </div>
    </div>

    <div className={styles.square}>
	<div className={styles.box_position}>
        <img
            className={styles.img__style}
            // Litvin Serhii                    
            src={ph10}
            alt="team"
        />

    <a href={LinLit}>
        <img
            className={styles.link_icon_Li}
            src={icoLi}
            alt="Icon of LinkedIn"
        />
    </a>
                            
    <a href={GitLit}>                        
        <img
            className={styles.link_icon_Gi}
            src={icoGi}
            alt="Icon of GitHub"
        />
    </a>          

    </div>
    <div className={styles.block__prof}>
        <h3 className={styles.name__of}>Litvin Serhii</h3>
        <span className={styles.profession}>Developer</span>
    </div>
    </div>

   	</div>
    </div>	
            
</section>

    );
}