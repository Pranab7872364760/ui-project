import Navbar from './navbar/navbar';
import Banner from './banner/Banner';
import Expertise from './Expertise/Expertise';
import Projects from './projects/Projects';
import Image from "next/image";
import Group36 from '../../assets/Group 36.png';
import styles from '../../styles/Layout.module.css';
import ScoutsProgram from './scouts-program/ScoutsProgram';
import Services from './services/Services';
import Contact from './contact/Contact';


export default function Layout({ Children }) {
    return (
        <div>
            <div>
                <Navbar />
                <div>
                    <div className={styles.footer}>
                        <div className={styles.content}>
                            <Banner />
                            <span className={styles.span}>
                                <Image
                                    src={Group36}
                                    alt="group36"
                                    height={100}
                                    width={80}
                                />
                            </span>
                        </div>
                        <Projects />
                    </div>
                    <Expertise />
                    <Services />
                    <ScoutsProgram />
                    <Contact />
                </div>
            </div>
            <main>
                {Children}
            </main>
        </div>
    )
}