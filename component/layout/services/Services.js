import styles from '../../../styles/Services.module.css';
import Image from "next/image";
import image8 from '../../../assets/image8.png';

function Services() {
    return (
        <div id='services' className="service-content">
            <h1 className="text-center text-white mt-5" style={{fontSize:'10ch'}}>Services</h1>
            <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3'></div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6'>
                    <div className={['row', styles.content].join(' ')}>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                            <span className='text-white'><h3>Ventures</h3></span>
                            <span className={styles.text}><p>
                                We actively invest in early-stage projects,
                                looking for talented builders in the Defi and NFT spaces
                            </p></span>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                            <span className='text-white'><h3>Consultancy</h3></span>
                            <span className={styles.text}><p>
                                We advise protocols on strategy. marketing. policy, growth,
                                and user education. Each partnership is unique,
                                with a select working group created to provide targeted research and recommendations.
                            </p></span>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                            <span className='text-white'><h3>Labs</h3></span>
                            <span className={styles.text}><p>
                                We are actively building and focused on experimental ideas.
                                By using our knowledge of DeFi and NFTS to move fast and ship,
                                we take advantage of opportunities that emerge in the market.
                            </p></span>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 service-img' style={{marginTop:'-50px'}}>
                    <span className='position-inmobile'>
                    <Image
                            src={image8}
                            alt="group"
                            width={200}
                            height={300}
                        />
                    </span>
                       
                </div>
            </div>
        </div>
    );
}

export default Services;