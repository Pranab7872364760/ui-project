import styles from '../../../styles/Projects.module.css';
import Image from "next/image";
import redacted from '../../../assets/redacted.png';
import concave from '../../../assets/concave.png';
import debtdao from '../../../assets/debtdao.png';
import strudel from '../../../assets/strudel.png';
import bobaimg from '../../../assets/boba.png';
import Vedaoimg from '../../../assets/vedao.png';
import Batterfly from '../../../assets/battlefly.png';

export default function Home() {
    return (
        <div id='projects' className={styles.bgimage}>
            <h1 style={{ fontSize: 60, textAlign: 'center', color: 'white' }} className="defi-text" >PROJECTS</h1>
            <div className='container mt-5'>
                <div className='product-logo'>
                    <span className='pImageWrap'>
                        <Image
                            src={redacted}
                            alt="redacted"
                        />
                    </span>
                    <span className='pImageWrap'>
                        <Image
                            src={concave}
                            alt="concave"
                        />
                    </span>
                    <span className='pImageWrap'>
                        <Image
                            src={strudel}
                            alt="strudel"
                        />
                    </span>
                    <span className='pImageWrap'>
                        <Image
                            src={debtdao}
                            alt="debtdao"
                        />
                    </span>
                    <span className='pImageWrap'>
                        <Image
                            src={bobaimg}
                            alt="concave"
                        />
                    </span>
                    <span className='pImageWrap'>
                        <Image
                            src={Vedaoimg}
                            alt="debtdao"
                        />
                    </span>
                    <span className='pImageWrap'>
                        <Image
                            src={Batterfly}
                            alt="strudel"
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}