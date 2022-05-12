import Image from "next/image";
import group32 from '../../../assets/Group 32.png';
import LOGO from '../../../assets/bannerlogo.png';
import telecope from '../../../assets/telecope hydra.png';
import styles from '../../../styles/Banner.module.css';
import AngelBook from '../../../assets/AngelBook.png';
import Group35 from '../../../assets/Group 35.png';
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
                                <p className="text-center">
                                    <Image
                                        src={Fly}
                                        alt="fly"
                                    />
                                </p>
                                <p className="banner-text">How much is information worth to you?</p>
                                <p className="text-center banner-image">
                                    <Image src={LOGO}
                                        alt="logo"
                                    />
                                </p>
                                <h4 className="text-center">100 Tokens. 1 Research & Investment DAO.</h4><br className="remove-inmobile" />
                                <h4 className="text-center">We invest in early-stage web3 protocols <br className="remove-inmobile"/> within the DeFi & NFT ecosystems. </h4>
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
                        width={400}
                        height={350}
                    />
                </span>
                <span className="telecop-image">
                    <Image src={telecope}
                        alt="telecop"
                        height={350}
                        width={400}
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
                        width={400}
                        height={300}
                    />
                </span>
            </div>
        </div>
    )
}