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
        <div id='scoutsprogram'>
            {/* <div className='row'>
                <div className='col-md-4 col-sm-3 col-3 program-img' style={{ textAlign: 'end', marginTop: '100px' }}>
                    <span className='positionfor-inmobile'>
                        <Image
                            src={Group37}
                            alt="group"
                            width={300}
                            height={500}
                        />
                    </span>
                </div>
                <div className='col-md-4 col-sm-6 col-6'>
                    <div style={{ textAlign: 'center' }}>
                        <span>
                            <Image
                                src={Moshed}
                                alt="Moshed"
                            />
                        </span>
                    </div>
                    <h1 className='mb-5' style={{ fontSize: '10ch', textAlign: 'center' }}>Scouts Program</h1>
                    <div className='container'>
                        <span>
                            <h4>
                                The Scouts Program was created to enable exceptional individuals to
                                become part of the Information Token community without holding an
                                information token for ongoing contributions to the DAO
                            </h4>
                        </span>
                        <span>
                            <h3>Benefits</h3>
                            <ul className={styles.li}>
                                <li>
                                    <h4>
                                        Full access to our private discord and community membership,
                                        including alpha and access to pooled trading or investment opportunities
                                    </h4>
                                </li>
                                <li>
                                    <h4>
                                        Allocation in seed investments
                                    </h4>
                                </li>
                                <li>
                                    <h4>
                                        Compensation from revenue-producing projects
                                    </h4>
                                </li>
                                <li>
                                    <h4>
                                        Current scouts contribute in many areas, including deal flow.
                                        consulting expertise, development. fund management. marketing, and other areas.
                                    </h4>
                                </li>
                            </ul>
                            <h4>
                                Scouts season 2 is now open for new applicants.<br/>
                                <a href='#'>Please apply here.</a> 
                            </h4>
                        </span>
                    </div>
                </div>
                <div className='col-md-4 col-sm-3 col-3 program-img' style={{ marginTop: '100px' }}>
                    <span className='position-inmobile'>
                        <Image
                            src={Program2}
                            alt="program"
                            width={100}
                            height={500}
                        />
                    </span>
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
                    height={50}
                />
                <Image
                    src={Rectangle3}
                    alt="Rectangle3"
                    height={150}
                />
                <img
                    src='Rectangle.png'
                    alt="Rectangle2"
                    height={50}
                />
            </div> */}
            <div className='container-fluid relative'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="programwrap">
                                <p className='text-center'>
                                    <Image
                                        src={Moshed}
                                        alt="Moshed"
                                    />
                                </p>
                                <h1 className='text-center mb-5' style={{ fontSize: '10ch' }}>Scouts Program</h1>
                                <h4>
                                    The Scouts Program was created to enable exceptional individuals to
                                    become part of the Information Token community without holding an
                                    information token for ongoing contributions to the DAO
                                </h4>
                                <br />
                                <h3>Benefits</h3>
                                <ul className='program-text' style={{ fontSize: '3ch' }}>
                                    <li>
                                        Full access to our private discord and community membership,including alpha and access to pooled trading or investment opportunities
                                    </li>
                                    <li>
                                        Allocation in seed investments
                                    </li>
                                    <li>
                                        Compensation from revenue-producing projects
                                    </li>
                                    <li>
                                        Current scouts contribute in many areas, including deal flow.consulting expertise, development. fund management. marketing, and other areas.
                                    </li>
                                </ul>
                                <br />
                                <h4>
                                    Scouts season 2 is now open for new applicants.Please 
                                    <a href='#'> apply<br/> here.</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='group-img'>
                    <Image
                        src={Group37}
                        alt="group"
                        width={250}
                        height={400}
                    />
                </span>
                <span className='program-img'>
                    <Image
                        src={Program2}
                        alt="program"
                        width={250}
                        height={400}
                    />
                </span>
                <span className='topography-img'>
                    <Image
                        src={Topography}
                        alt="topography"
                    />
                </span>
                <span className='number-ing'>
                    <Image
                        src={numberimg}
                        alt="img"
                        width={150}
                    />
                </span>
            </div>
        </div>
    );
}

export default ScoutsProgram;