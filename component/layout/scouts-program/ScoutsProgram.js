import styles from '../../../styles/ScoutsProgram.module.css';
import Image from "next/image";
import moshed3 from '../../../assets/moshed3.png';
import Program2 from '../../../assets/moshed4.png';
import numberimg from '../../../assets/number.png';
// import Rectangle1 from '../../../assets/Rectangleab.png';
// import Rectangle2 from '../../../assets/Rectangle.png';
import Topography from '../../../assets/topography.png';
import Moshed1 from '../../../assets/moshed1.png';


// const img = require('../../../public/Rectangle1.png');

function ScoutsProgram() {
    return (
        <div id='scoutsprogram'>
            <div className='container-fluid relative'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="programwrap">
                                <p className='text-center'>
                                    <Image
                                        src={Moshed1}
                                        alt="Moshed"
                                    />
                                </p>
                                <h1 className='text-center mb-5 defi-text scout-text' style={{ fontSize: '10ch' }}>Scouts Program</h1>
                                <li className='scout-text' style={{ fontSize: '3ch', display:'inline-block' }}>
                                    The Scouts Program was created to enable exceptional individuals to
                                    become part of the Information Token community without holding an
                                    information token for ongoing contributions to the DAO
                                </li>
                                <br />
                                <h2 className='expert-text'>Benefits</h2>
                                <ul className='program-text' style={{ fontSize: '3ch' }}>
                                    <li className='scout-text'>
                                        Full access to our private discord and community membership,including alpha and access to pooled trading or investment opportunities
                                    </li>
                                    <li className='scout-text'>
                                        Allocation in seed investments
                                    </li>
                                    <li className='scout-text'>
                                        Compensation from revenue-producing projects
                                    </li>
                                    <li className='scout-text'>
                                        Current scouts contribute in many areas, including deal flow.consulting expertise, development. fund management. marketing, and other areas.
                                    </li>
                                </ul>
                                <br />
                                <h3 className='expert-text'>
                                    Scouts season 2 is now open for new applicants.Please 
                                    <a href='#'> apply here.</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='group-img'>
                    <Image
                        src={moshed3}
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
                <span className='number-img'>
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