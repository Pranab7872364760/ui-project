import Image from "next/image";
import group32 from '../../../assets/angels.png';
import LOGO from '../../../assets/LOGO2.png';
import telecope from '../../../assets/telecope hydra.png';
import styles from '../../../styles/Banner.module.css';
import AngelBook from '../../../assets/AngelBook.png';
import Group35 from '../../../assets/buddhatank.png';
import FlowerPrayWoman from '../../../assets/FlowerPrayWoman.png';
import Woman from '../../../assets/flowerpraylayer.png';
import Fly from '../../../assets/fly.png';

export default function Home() {
    return (
        <div id="banner">
            <div className="container-fluid relative">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="bannerwrap">
                                <p className="text-center fly-img">
                                    <Image
                                        src={Fly}
                                        alt="fly"
                                        width={100}
                                        height={100}
                                    />
                                </p>
                                <h6 className="banner-text info-text">How much is information worth to you?</h6>
                                <p className="text-center banner-image">
                                    <Image src={LOGO}
                                        alt="logo"
                                    />
                                </p>
                                <h4 className="text-center logo-text">100 Tokens. 1 Research & Investment DAO.</h4><br className="remove-inmobile" />
                                <h4 className="text-center logo-text">We invest in early-stage web3 protocols <br className="remove-inmobile"/> within the DeFi & NFT ecosystems. </h4>
                                <p className="imgWrap">
                                    <span className="pull-left woman-img">
                                        <Image
                                            src={Woman}
                                            alt='Woman'
                                            width={125}
                                            height={125}
                                        />
                                    </span>
                                    <span className="pull-right flowerPrayWoman-img">
                                        <Image
                                            src={FlowerPrayWoman}
                                            alt='flowerPrayWoman'
                                        />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="group-image">
                    <Image
                        src={group32}
                        alt="group"
                        width={450}
                        height={400}
                    />
                </span>
                <span className="telecop-image">
                    <Image src={telecope}
                        alt="telecop"
                        height={400}
                        width={300}
                    />
                </span>
                <span className="image-content">
                    <Image
                        src={AngelBook}
                        alt="angelsBook"
                        width={400}
                        height={300}
                    />
                </span>
                <span className="group35-image">
                    <Image
                        src={Group35}
                        alt="Group35"
                        width={410}
                        height={260}
                    />
                </span>
            </div>
        </div>
    )
}