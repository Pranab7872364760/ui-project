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
            <div className={styles.text}>
                <h1 className='mt-5'>Project</h1>
            </div>
            <div className='row'>
                <div className='col-md-3'>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-2 text-center'></div>
                        <div className='col-md-2 text-center'>
                            <Image
                                src={redacted}
                                alt="redacted"
                            />
                        </div>
                        <div className='col-md-2 mt-3 text-center'>
                            <Image
                                src={concave}
                                alt="concave"
                            />
                        </div>
                        <div className='col-md-2 text-center'>
                            <Image
                                src={debtdao}
                                alt="debtdao"
                            />
                        </div>
                        <div className='col-md-2 text-center'>
                            <Image
                                src={strudel}
                                alt="strudel"
                            />
                        </div>
                        <div className='col-md-2 text-center'></div>
                        <div className='col-md-3 text-center'>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                </div>
            </div>
            <div className='row '>
                <div className='col-md-4 text-center'>
                </div>
                <div className='col-md-1 mt-5 text-center'>
                    <Image
                    src={bobaimg}
                    alt="img"
                    />
                </div>
                <div className={['col-md-2 mt-5 text-center', styles.text].join(' ')}>
                    <Image
                    src={Vedaoimg}
                    alt="img"
                    />
                </div>
                <div className='col-md-1 mt-5 text-center'>
                    <Image
                    src={Batterfly}
                    alt="img"
                    />
                </div>
                <div className='col-md-4 text-center'>
                </div>
            </div>
        </div>
    )
}