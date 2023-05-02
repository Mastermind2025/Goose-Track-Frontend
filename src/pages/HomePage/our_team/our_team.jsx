import styles from './team.module.scss';

import ph01 from '../assets/img/ph01.jpg';
import ph02 from '../assets/img/ph02.jpg';
import ph03 from '../assets/img/ph03.jpg';
import ph04 from '../assets/img/ph04.jpg';
import ph05 from '../assets/img/ph05.jpg';
import ph06 from '../assets/img/ph06.jpg';
import ph07 from '../assets/img/ph07.jpg';
// import ph08 from '../assets/img/ph08.jpg';
import ph09 from '../assets/img/ph09.jpg';
import ph10 from '../assets/img/ph10.jpg';
// import ph11 from '../assets/img/ph11.jpg';

export const Team = () => {
    return (
<section id="team" className={styles.box}>
       
    <div className={styles}>
        <h2 className={styles.foot__title}>MEET OUR TEAM</h2>
    </div>	
            
    <div className={styles.container}>            
    
    <div className={styles.main}>
              
	<div className={styles.square}>
	<div className={styles}>
        <img
            className={styles.img__style}
            src={ph01}
            alt="team"
        />
						
    </div>
    <div className={styles}>
        <h3 className={styles.name__of}>Alieksieiev Vladyslav</h3>
        <span className={styles}>Team-Lead</span>
    </div>
	</div>		
            
    <div className={styles.square}>
    <div className={styles}>
    <img
        className={styles.img__style}
        src={ph02}
        alt="team"
    />
						
	</div>
	
    <div className={styles}>
        <h3 className={styles.name__of}>Averkin Maksym</h3>
        <span className={styles}>Scrum master</span>
	</div>
	</div>	
                
    <div className={styles.square}>
    <div className={styles}>
                            
    <img
        className={styles.img__style}
        src={ph03}
        alt="team"
    />
						
    </div>
        <div className={styles}>
            <h3 className={styles.name__of}>Vyshnevska Maryna</h3>
            <span className={styles}>Developer</span>
        </div>
    </div>	
                
    <div className={styles.square}>
	<div className={styles}>
        <img
            className={styles.img__style}
            src={ph04}
            alt="team"
        />
    </div>
    <div className={styles}>
        <h3 className={styles.name__of}>Pysarenko Tetiana</h3>
        <span className={styles}>Developer</span>
    </div>
	</div>	

    <div className={styles.square}>
	<div className={styles}>
        <img
            className={styles.img__style}
            src={ph05}
            alt="team"
        />
						
    </div>
                        
    <div className={styles}>
        <h3 className={styles.name__of}>Podolianko Aleksandr</h3>
        <span className={styles}>Developer</span>
    </div>
	</div>	   

    <div className={styles.square}>
	<div className={styles}>
        <img
            className={styles.img__style}
            src={ph06}
            alt="team"
        />
						
    </div>
                        
    <div className={styles}>
        <h3 className={styles.name__of}>Yurov Igor</h3>
        <span className={styles}>Developer</span>
    </div>
	</div>	   

    <div className={styles.square}>
	<div className={styles}>
        <img
            className={styles.img__style}
            src={ph07}
            alt="team"
        />
						
    </div>
    <div className={styles}>
        <h3 className={styles.name__of}>Lipchanskyi Pavlo</h3>
        <span className={styles}>Developer</span>
    </div>
	</div>	
                    
    <div className={styles.square}>
	<div className={styles}>
        <img
            className={styles.img__style}
            src={ph09}
            alt="team"
        />
						
    </div>
    <div className={styles}>
        <h3 className={styles.name__of}>Ivan</h3>
        <span className={styles}>Developer</span>
    </div>
    </div>

    <div className={styles.square}>
	<div className={styles}>
        <img
            className={styles.img__style}
            // Litvin Serhii                    
            src={ph10}
            alt="team"
        />
						
    </div>
    <div className={styles}>
        <h3 className={styles.name__of}>Litvin Serhii</h3>
        <span className={styles}>Developer</span>
    </div>
    </div>

   	</div>
    </div>	
            
</section>

    );
}