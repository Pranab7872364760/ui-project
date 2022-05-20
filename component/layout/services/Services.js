import styles from '../../../styles/Services.module.css';
import Image from "next/image";
import image8 from '../../../assets/moshed.png';
import Bust from '../../../assets/bust.png';
import Bust1 from '../../../assets/bust1.png';



function Services() {
    return (
        <div id='services' className="service-content">
            <h1 className="text-center text-white mt-5 defi-text" style={{ fontSize: 60, marginBottom: '50px' }}>Services</h1>
            {/* <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3'>
                    <span className='bust-img'>
                        <Image
                            src={Bust}
                            alt='bust'
                            height={600}
                            width={600}
                        />
                    </span>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6'>
                    <div className={['row', styles.content].join(' ')}>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                            <span className='text-white'><h2 className='defi-text'>Ventures</h2></span>
                            <span className={styles.text}><p style={{ fontSize: 18 }}>
                                We actively invest in early-stage projects,
                                looking for talented builders in the Defi and NFT spaces
                            </p></span>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                            <span className='text-white'><h2 className='defi-text'>Consultancy</h2></span>
                            <span className={styles.text}><p style={{ fontSize: 18 }}>
                                We advise protocols on strategy. marketing. policy, growth,
                                and user education. Each partnership is unique,
                                with a select working group created to provide targeted research and recommendations.
                            </p></span>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                            <span className='text-white'><h2 className='defi-text'>Labs</h2></span>
                            <span className={styles.text}><p style={{ fontSize: 18 }}>
                                We are actively building and focused on experimental ideas.
                                By using our knowledge of DeFi and NFTS to move fast and ship,
                                we take advantage of opportunities that emerge in the market.
                            </p></span>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 service-img' style={{ marginTop: '-50px' }}>
                    <span className='position-inmobile'>
                        <Image
                            src={Bust1}
                            alt='bust1'
                        />
                    </span>
                    <span className='image8'>
                        <Image
                            src={image8}
                            alt="group"
                        />
                    </span>
                </div>
            </div> */}
            <div className='relative'>
                <div className='container'>
                    <div className='row'>
                        <div className='service-body'>
                            <div className='col-sm-4'>
                                {/* <div className='service-body'> */}
                                <span className='text-white'><h2 className='defi-text' style={{fontSize:24}}>Ventures</h2></span><br/>
                                <span className={styles.text}><p style={{ fontSize: 18 }}>
                                    We actively invest in early-stage projects,
                                    looking for talented builders in the Defi and NFT spaces
                                </p></span>
                                {/* </div> */}
                            </div>
                            <div className='col-sm-4'>
                                {/* <div className='service-body'> */}
                                <span className='text-white'><h2 className='defi-text' style={{fontSize:24}}>Consultancy</h2></span><br/>
                                <span className={styles.text}><p style={{ fontSize: 18 }}>
                                    We advise protocols on strategy. marketing. policy, growth,
                                    and user education. Each partnership is unique,
                                    with a select working group created to provide targeted research and recommendations.
                                </p></span>
                                {/* </div> */}
                            </div>
                            <div className='col-sm-4'>
                                {/* <div className='service-body'> */}
                                <span className='text-white'><h2 className='defi-text' style={{fontSize:24}}>Labs</h2></span><br/>
                                <span className={styles.text}><p style={{ fontSize: 18 }}>
                                    We are actively building and focused on experimental ideas.
                                    By using our knowledge of DeFi and NFTS to move fast and ship,
                                    we take advantage of opportunities that emerge in the market.
                                </p></span>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <span className='bust-img'>
                    <Image
                        src={Bust}
                        alt='bust'
                    />
                </span>
                <span className='bust1-img'>
                    <Image
                        src={Bust1}
                        alt='bust1'
                    />
                </span>
                <span className='image8'>
                    <Image
                        src={image8}
                        alt="group"
                    />
                </span>
            </div>
        </div>
    );
}

export default Services;