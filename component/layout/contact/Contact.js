import React, { useState } from "react";
import Image from "next/image";
import Moshed1 from '../../../assets/moshed1.png';
import styles from '../../../styles/Contact.module.css';
import Infotoken from '../../../assets/INFOTOKEN.png';
import { postForm } from '../../../pages/api/Api';


const initialValue = { name: '', email: '', message: '' }


function Contact() {

    const [formValue, setFormValue] = useState(initialValue);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormValue({ ...formValue, [name]: value });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        let data = { ...formValue };
        await postForm(data)
            .then((res) => {

            })
        console.log(data);
    };

    return (
        <div className="container">
            <div id="contact" className="row mt-5">
                <div className="col-md-4 col-sm-4 col-3" style={{textAlign:'end'}}>
                    <Image
                        src={Moshed1}
                        alt='group'
                        width={200}
                        height={250}
                    />
                </div>
                <div className="col-md-4 col-sm-6 col-6">
                    <h1 style={{ paddingBottom: '30px' }} >Contact US</h1>
                    <form onSubmit={handleSubmit} style={{ height: '100%' }}>
                        <div className="mb-3">
                            <input type="name" name="name" className="form-control" value={formValue.name} onChange={handleChange} placeholder="Your Name" required />
                        </div>
                        <div className="mb-3">
                            <input type="email" name="email" className="form-control" value={formValue.email} onChange={handleChange} placeholder="Your Email" required />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" name="message" id="message" value={formValue.message} onChange={handleChange} placeholder="Message" rows="5" required ></textarea>
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="btn btn-dark" style={{ width: '100%', height: '50px' }}>Send</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-4 col-sm-4 col-3">
                   <img 
                    src="moshed2.png"
                    alt="moshed2"
                    height={200}
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