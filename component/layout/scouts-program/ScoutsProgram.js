import styles from '../../../styles/ScoutsProgram.module.css';
import Image from "next/image";
import Group37 from '../../../assets/Group 37.png';
import Program2 from '../../../assets/Program2.png';
import numberimg from '../../../assets/numberimg.png';
import Rectangle3 from '../../../assets/Rectangle (3).png';
// import Rectangle1 from '../../../assets/Rectangleab.png';
// import Rectangle2 from '../../../assets/Rectangle.png';
import Topography from '../../../assets/topography.png';
import Moshed from '../../../assets/moshed.png';


// const img = require('../../../public/Rectangle1.png');

function ScoutsProgram() {
    return (
        <div id='scoutsprogram' className={styles.content}>
            <div className='row'>
                <div className={['col-md-3 col-sm-2 col-2', styles.group37].join(' ')}>
                    <Image
                        src={Group37}
                        alt="group"
                        width={250}
                        height={300}
                    />
                </div>
                <div className={['col-md-6 col-sm-8 col-8', styles.text].join(' ')}>
                    <span>
                        <Image
                            src={Moshed}
                            alt="Moshed"
                        />
                    </span>
                    <h1 className='mb-5'>Scouts Program</h1>
                    <span>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                        cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
                        galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                        No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
                        quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset",
                        las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
                        como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </span>
                </div>
                <div className={['col-md-3 col-sm-2 col-2', styles.Program].join(' ')}>
                    <Image
                        src={Program2}
                        alt="program"
                        width={250}
                        height={300}
                    />
                </div>
            </div>
            <span className={styles.img}>
                <Image
                    src={numberimg}
                    alt="img"
                    height={200}
                />
            </span>
            <div className={styles.footer}>
                <span className={styles.topography}>
                    <Image
                        src={Topography}
                        alt="topography"
                    />
                </span>
            </div>
            <div className={['row', styles.Rectangle].join(' ')}>
                <img
                    src='Rectangle1.png'
                    alt='Rectangle2'
                />
                <Image
                    src={Rectangle3}
                    alt="Rectangle3"
                />
                <img
                    src='Rectangle.png'
                    alt="Rectangle2"
                />
            </div>
        </div>
    );
}

export default ScoutsProgram;