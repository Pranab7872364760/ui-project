import React from 'react';
import styles from '../../../styles/Expertise.module.css';
import Image from "next/image";
import shell from '../../../assets/shell (1).png';
import image17 from '../../../assets/image 17.png';
import image16 from '../../../assets/image 16.png';
import image18 from '../../../assets/image 18.png';
import image19 from '../../../assets/image 19.png';
import image20 from '../../../assets/image 20.png';

function Expertise() {

const [value,setValue]=React.useState('#1a')

function getId(data){
    setValue(data)
    console.log(data)
}

    return (
        <div id='expertise' className='pb-5'>
            <div className={styles.text}>
                <h1>DeFi & NFT Expertise</h1>
            </div>
            <div id="exTab1" className="container mt-5">
                <ul className={["row", styles.content].join(' ')}>
                    <li className="col-md-2 col-sm-4 col-6" onClick={()=>getId('#1a')}>
                        <a style={{textDecoration: 'none', display:'block'}} id='1a' className={['text-center', value == '#1a' ? styles.tabs : ''].join(' ')}>
                            <Image
                                src={shell}
                                alt='shell'
                                height={70}
                                className="img-fluid"
                            />
                            <p className='text-center'>Strategy</p>
                        </a>
                    </li>
                    <li className="col-md-2 col-sm-4 col-6" onClick={()=>getId('#2a')}>
                        <a href="#2a" style={{textDecoration: 'none', display:'block', color:'black'}} id='2a' className={['text-center', value == '#2a' ? styles.tabs : ''].join(' ')}>
                        <Image
                            src={image16}
                            alt='shell'
                            height={70}
                        />
                        <p className='card-title text-center'>Marketing</p>
                    </a>
                    </li>
                    <li className="col-md-2 col-sm-4 col-6 " onClick={()=>getId('#3a')}>
                        <a href="#3a" style={{textDecoration: 'none', display:'block', color:'black'}} id='3a' className={['text-center', value == '#3a' ? styles.tabs : ''].join(' ')}>
                        <Image
                            src={image17}
                            alt='shell'
                            height={70}
                        />
                        <p className='card-title text-center'>Marketing</p>
                    </a>
                    </li>
                    <li className="col-md-2 col-sm-4 col-6" onClick={()=>getId("#4a")}>
                        <a href="#4a" style={{textDecoration: 'none', display:'block', color:'black'}} id='4a' className={['text-center', value == '#4a' ? styles.tabs : ''].join(' ')}>
                        <Image
                            src={image18}
                            alt='shell'
                            height={70}
                        />
                        <p className='card-title text-center'>Development</p>
                    </a>
                    </li>
                    <li className="col-md-2 col-sm-4 col-6" onClick={()=>getId('#5a')}>
                        <a href="#5a" style={{textDecoration: 'none', display:'block', color:'black'}} id='5a' className={['text-center', value == '#5a' ? styles.tabs : ''].join(' ')}>
                        <Image
                            src={image19}
                            alt='shell'
                            height={70}
                        />
                        <p className='card-title text-center'>Go to Market</p>
                    </a>
                    </li>
                    <li className="col-md-2 col-sm-4 col-6" onClick={()=>getId('#6a')}>
                        <a href="#6a" style={{textDecoration: 'none', display:'block', color:'black'}} id='6a' className={['text-center', value == '#6a' ? styles.tabs : ''].join(' ')}>
                        <Image
                            src={image20}
                            alt='shell'
                            height={70}
                        />
                        <p className='card-title text-center'>Legal</p>
                    </a>
                    </li>
                </ul>
                <div className="tab-content clearfix">
                    <div className="tab-pane active" value="#1a">
                        <h4>ABANDON ALL HOPE YE WHO ENTER HERE is scrawled in blood red lettering
                            on the side of the Chemical Bank near the corner of Eleventh and First and is in print large
                            enough to be seen from the backseat of the cab as it lurches forward in the traffic leaving
                            Wall Street and just as Timothy Price notices the words a bus pulls up. the advertisement for
                            Les Misérables on its side blocking his view, but Price who is with Pierce & Pierce and
                            twenty-six doesn't seem to care because he tells the driver he will give him five dollars
                            to turn up the radio. "Be My Baby" on WYNN. and the driver. black, not American, does so</h4>
                    </div>
                    <div className="tab-pane" value="#2a">
                        <h3>We use the className nav-pills instead of nav-tabs which automatically creates a background color for the tab</h3>
                    </div>
                    <div className="tab-pane" value="#3a">
                        <h3>We applied clearfix to the tab-content to rid of the gap between the tab and the content</h3>
                    </div>
                    <div className="tab-pane" value="#4a">
                        <h3>We use css to change the background color of the content to be equal to the tab</h3>
                    </div>
                    <div className="tab-pane" value="#5a">
                        <h3>We applied clearfix to the tab-content to rid of the gap between the tab and the content</h3>
                    </div>
                    <div className="tab-pane" value="#6a">
                        <h3>We use css to change the background color of the content to be equal to the tab</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;