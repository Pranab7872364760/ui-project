import Image from "next/image";
import Group44 from '../../../assets/Group 44.png';
import styles from '../../../styles/Contact.module.css';
import Moshed2 from '../../../assets/moshed2.png';
import Infotoken from '../../../assets/INFOTOKEN.png';


function Contact() {
    return (
        <div className="container">
            <div id="contact" className="row mt-5">
                <div className="col-md-3 col-sm-2 col-2">
                    <span className={styles.content}>
                        <Image
                            src={Group44}
                            alt='group'
                            width={200}
                            height={250}
                        />
                    </span>
                </div>
                <div className="col-md-6 col-sm-8 col-8">
                    <span className={styles.text}><h1>Contact US</h1></span>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="5"></textarea>
                    </div>
                    <div>
                        <button type="submit" className={["btn btn-dark", styles.btn].join(' ')}>Send</button>
                    </div>
                </div>
                <div className="col-md-3 col-sm-2 col-2">
                    <Image
                        src={Moshed2}
                        alt='Moshed2'
                        width={200}
                        height={250}
                    />
                </div>
            </div>
            <div className="text-center mt-5">
                <span>
                    <Image
                        src={Infotoken}
                        alt="infotoken"
                    />
                </span>
                <div className='text-center mt-3'>
                    <span className={styles.footer}>
                        <p>Opensea Discord Twitter Medium Contact</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Contact;