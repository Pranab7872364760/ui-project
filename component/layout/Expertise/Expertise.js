import React from 'react';
import styles from '../../../styles/Expertise.module.css';
import Image from "next/image";
import image1 from '../../../assets/image15.png';
import image2 from '../../../assets/image16.png';
import image3 from '../../../assets/image17.png';
import image4 from '../../../assets/image18.png';
import image5 from '../../../assets/image19.png';
import image6 from '../../../assets/image20.png';
import { Tabs, tabsClasses } from '@mui/material';
import { Box } from '@mui/material';
import { Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { fontSize } from '@mui/system';


function Expertise() {

    const [value, setValue] = React.useState('#1a');

    const [tabValue, setTabValue] = React.useState('1');

    function getId(data) {
        setValue(data)
        console.log(data)
    }

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
        console.log(newValue)
    };

    return (
        <div id='expertise' className={styles.head}>
            <div className={styles.text}>
                <h1 style={{ fontSize: '10ch', textAlign: 'center' }} className="defi-text">DeFi & NFT Expertise</h1>
            </div>
            <div id="exTab1" className="container mt-5">
                <ul className="tab-list">
                    <li onClick={() => getId('#1a')}>
                        <a style={{ textDecoration: 'none', display: 'block', cursor: 'pointer', height: "154px", width: '169px', paddingTop: '23px !important' }} id='1a' className={['text-center', value == '#1a' ? styles.tabs : ''].join(' ')}>
                            <span className="tabImageWrap">
                                <Image
                                    src={image1}
                                    alt='shell'
                                    height={40}
                                />
                            </span>
                            <h3 className='text-center expert-text'>Strategy</h3>

                        </a>
                    </li>
                    <li onClick={() => getId('#2a')}>
                        <a style={{ textDecoration: 'none', display: 'block', color: 'black', height: "154px", width: '169px', paddingTop: '23px !important' }} id='2a' className={['text-center', value == '#2a' ? styles.tabs : ''].join(' ')}>
                            <span className="tabImageWrap">
                                <Image
                                    src={image2}
                                    alt='shell'
                                    height={40}
                                />
                            </span>
                            <h3 className='text-center expert-text'>Tokenomics</h3>

                        </a>
                    </li>
                    <li onClick={() => getId('#3a')}>
                        <a style={{ textDecoration: 'none', display: 'block', color: 'black', height: "154px", width: '169px', paddingTop: '23px !important' }} id='3a' className={['text-center', value == '#3a' ? styles.tabs : ''].join(' ')}>
                            <span className="tabImageWrap">
                                <Image
                                    src={image3}
                                    alt='shell'
                                    height={40}
                                />
                            </span>
                            <h3 className='text-center expert-text'>Marketing</h3>

                        </a>
                    </li>
                    <li onClick={() => getId("#4a")}>
                        <a style={{ textDecoration: 'none', display: 'block', color: 'black', height: "154px", width: '169px', paddingTop: '23px !important' }} id='4a' className={['text-center', value == '#4a' ? styles.tabs : ''].join(' ')}>
                            <span className="tabImageWrap">
                                <Image
                                    src={image4}
                                    alt='shell'
                                    height={40}
                                />
                            </span>
                            <h3 className='text-center expert-text'>Development</h3>

                        </a>
                    </li>
                    <li onClick={() => getId('#5a')}>
                        <a style={{ textDecoration: 'none', display: 'block', color: 'black', height: "154px", width: '169px', paddingTop: '23px !important' }} id='5a' className={['text-center', value == '#5a' ? styles.tabs : ''].join(' ')}>
                            <span className="tabImageWrap">
                                <Image
                                    src={image5}
                                    alt='shell'
                                    height={40}
                                />
                            </span>
                            <h3 className='text-center expert-text'>Go to Market</h3>

                        </a>
                    </li>
                    <li onClick={() => getId('#6a')}>
                        <a style={{ textDecoration: 'none', display: 'block', color: 'black', height: "154px", width: '169px', paddingTop: '23px !important' }} id='6a' className={['text-center', value == '#6a' ? styles.tabs : ''].join(' ')}>
                            <span className="tabImageWrap">
                                <Image
                                    src={image6}
                                    alt='shell'
                                    height={40}
                                />
                            </span>
                            <h3 className='text-center expert-text'>Legal</h3>

                        </a>
                    </li>
                </ul>
                <div className="tab-content tab-text mt-5">
                    <div className="tab-pane active" value="#1a">
                        <h3 className='expert-text mt-5'>ABANDON ALL HOPE YE WHO ENTER HERE is scrawled in blood red lettering
                            on the side of the Chemical Bank near the corner of Eleventh and First and is in print large
                            enough to be seen from the backseat of the cab as it lurches forward in the traffic leaving
                            Wall Street and just as Timothy Price notices the words a bus pulls up. the advertisement for
                            Les Misérables on its side blocking his view, but Price who is with Pierce & Pierce and
                            twenty-six doesn't seem to care because he tells the driver he will give him five dollars
                            to turn up the radio. "Be My Baby" on WYNN. and the driver. black, not American, does so</h3>
                    </div>
                    <div className="tab-pane" value="#2a">
                        <h3>We use css to change the background color of the content to be equal to the tab</h3>
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
            <div className='tabfor-mobile'>
                <Box
                    sx={{
                        flexGrow: 1,
                        maxWidth: { xs: 320, sm: 480 },
                        bgcolor: 'background.paper',
                    }}
                >
                    <TabContext value={tabValue}>
                        <TabList
                            // indicatorColor={{backgroundColor:'black'}}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons
                            aria-label="visible arrows tabs example"
                            sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    '&.Mui-disabled': { opacity: 0.3 },
                                },
                            }}
                        >
                            <Tab icon={<Image src={image1} alt='shell' height={40} />}
                                sx={{ color: "black", textTransform: 'none', fontFamily: 'urbanist', fontSize: 15 }} label="Strategy" value='1' className={tabValue === '1' ? styles.tabs : ''} />
                            <Tab icon={<Image src={image2} alt='image17' height={40} />}
                                sx={{ color: "black", textTransform: 'none', fontFamily: 'urbanist', fontSize: 15 }} label="Tokenomics" value='2' className={tabValue === '2' ? styles.tabs : ''} />
                            <Tab icon={<Image src={image3} alt='image16' height={40} />}
                                sx={{ color: "black", textTransform: 'none', fontFamily: 'urbanist', fontSize: 15 }} label="Marketing" value='3' className={tabValue === '3' ? styles.tabs : ''} />
                            <Tab icon={<Image src={image4} alt='image18' height={40} />}
                                sx={{ color: "black", textTransform: 'none', fontFamily: 'urbanist', fontSize: 15 }} label="Development" value='4' className={tabValue === '4' ? styles.tabs : ''} />
                            <Tab icon={<Image src={image5} alt='image19' height={40} />}
                                sx={{ color: "black", textTransform: 'none', fontFamily: 'urbanist', fontSize: 15 }} label="Go to Market" value='5' className={tabValue === '5' ? styles.tabs : ''} />
                            <Tab icon={<Image src={image6} alt='image20' height={40} />}
                                sx={{ color: "black", textTransform: 'none', fontFamily: 'urbanist', fontSize: 15 }} label="Legal" value='6' className={tabValue === '6' ? styles.tabs : ''} />
                        </TabList>
                        <div className='tab-panel'>
                            <TabPanel value="1"><h3 className='expert-text mt-5'>ABANDON ALL HOPE YE WHO ENTER HERE is scrawled in blood red lettering
                                on the side of the Chemical Bank near the corner of Eleventh and First and is in print large
                                enough to be seen from the backseat of the cab as it lurches forward in the traffic leaving
                                Wall Street and just as Timothy Price notices the words a bus pulls up. the advertisement for
                                Les Misérables on its side blocking his view, but Price who is with Pierce & Pierce and
                                twenty-six doesn't seem to care because he tells the driver he will give him five dollars
                                to turn up the radio. "Be My Baby" on WYNN. and the driver. black, not American, does so</h3></TabPanel>
                            <TabPanel value="2"><h3 className='expert-text'>We use the className nav-pills instead of nav-tabs which automatically creates
                                a background color for the tab</h3></TabPanel>
                            <TabPanel value="3"><h3 className='expert-text'>We applied clearfix to the tab-content to rid of the gap between the tab and the content</h3></TabPanel>
                            <TabPanel value="4"><h3 className='expert-text'>We use css to change the background color of the content to be equal to the tab</h3></TabPanel>
                            <TabPanel value="5"><h3 className='expert-text'>We applied clearfix to the tab-content to rid of the gap between the tab and the content</h3></TabPanel>
                            <TabPanel value="6"><h3 className='expert-text'>We use css to change the background color of the content to be equal to the tab</h3></TabPanel>
                        </div>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
}

export default Expertise;