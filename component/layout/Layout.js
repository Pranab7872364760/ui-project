import Navbar from './navbar/navbar';
import Banner from './banner/Banner';
import Expertise from './Expertise/Expertise';
import Projects from './projects/Projects';
import Image from "next/image";
import Group36 from '../../assets/moshed2.png';
import styles from '../../styles/Layout.module.css';
import ScoutsProgram from './scouts-program/ScoutsProgram';
import Services from './services/Services';
import Contact from './contact/Contact';
// import SliderTab from './SliderTab';


export default function Layout({ Children }) {
    return (
        <div>
            <div>
                <Navbar />
                <div>
                    <div className={styles.footer}>
                        <div className='content'>
                            <Banner />
                            <span className="layout-img">
                                <Image
                                    src={Group36}
                                    alt="group36"
                                    // height={120}
                                    // width={120}
                                />
                            </span>
                        </div>
                        <Projects />
                    </div>
                    <Expertise />
                    <Services />
                    <ScoutsProgram />
                    <Contact />
                    {/* <SliderTab/> */}
                </div>
            </div>
            <main>
                {Children}
            </main>
        </div>
    )
}