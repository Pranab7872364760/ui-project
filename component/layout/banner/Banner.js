import Image from "next/image";
import group32 from '../../../assets/Group 32.png';
import LOGO from '../../../assets/LOGO.png';
import telecope from '../../../assets/telecope hydra.png';
import styles from '../../../styles/Banner.module.css';
import AngelBook from '../../../assets/AngelBook.png';
import Group35 from '../../../assets/Group 35.png';
import FlowerPrayWoman from '../../../assets/FlowerPrayWoman.png';
import Woman from '../../../assets/flowerpraylayer.png';
import Fly from '../../../assets/fly.png';

export default function Home() {
    return (
        <div id="banner" className={styles.background}>
            <div className="row">
                <div className="col-md-3 col-sm-3 col-2">
                    <Image src={group32}
                        alt="group"
                    />
                </div>
                <div className={["col-md-6 col-sm-6 col-8", styles.logo].join(' ')}>
                    <span className={styles.fly}>
                        <Image
                            src={Fly}
                            alt="fly"
                        />
                    </span>
                    <span className="pl-2 pl-sm-4 pl-md-5">
                        <h4>How much is information worth to you?</h4>
                    </span>
                    <Image src={LOGO}
                        alt="logo"
                    />
                    <span className={styles.h6}>
                        <h4>How much is information worth to you</h4>
                        <h4 className="w-75 mx-auto">Es un hecho establecido hace demasiado tiempo que un lector se
                            distraerá con el contenido del texto de un sitio mientras que
                            mira su diseño. El punto de usar Lorem Ipsum es que tiene </h4>
                    </span>
                </div>
                <div className="col-md-3 col-sm-3 col-2 mt-3">
                    <Image src={telecope}
                        alt="telecop"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 col-sm-2 col-2">
                    <Image
                        src={AngelBook}
                        alt="angelsBook"
                    />
                </div>
                <div className="col-md-8 col-sm-8 col-8">
                    <div className="row">
                        <div className={["col-md-6 col-sm-6 col-6", styles.Woman].join(' ')}>
                            <Image
                                src={Woman}
                                alt='Woman'
                            />
                        </div>
                        <div className={["col-md-6 col-sm-6 col-6", styles.flowerPray].join(' ')}>
                            <Image
                                src={FlowerPrayWoman}
                                alt='flowerPrayWoman'
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-2">
                    <Image
                        src={Group35}
                        alt="Group35"
                    />
                </div>
            </div>
        </div>
    )
}