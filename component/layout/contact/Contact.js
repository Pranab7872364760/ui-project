import React, { useState } from "react";
import Image from "next/image";
import image7 from '../../../assets/moshed6.png';
import image9 from '../../../assets/moshed5.png';
import styles from '../../../styles/Contact.module.css';
import Infotoken from '../../../assets/INFOTOKEN.png';
import { postForm } from '../../../pages/api/Api';
import Group29 from '../../../assets/Group29.png';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


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
            alert('Message has been Send successfully')
            toast.success('Send mail successful',
            { position: toast.POSITION.TOP_RIGHT })
        console.log(data);
    };

    return (
        <div id="contact">
            <div className="contact-content">
                {/* <span className="group29">
                    <Image
                        src={Group29}
                        alt="group"
                    />
                </span> */}
                {/* <span className="Rectangle1-img">
                    <img
                        src='Rectangle1.png'
                        alt='Rectangle1'
                    />
                </span>
                <span className="Rectangle3-img">
                    <Image
                        src={Rectangle2}
                        alt="Rectangle3"
                        height={120}
                    />
                </span>
                <span className="Rectangle-img">
                    <img
                        src='Rectangle.png'
                        alt="Rectangle2"
                        height={50}
                    />
                </span> */}
            </div>
            <div className="container-fluid relative">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contactwrap">
                            <h3 style={{ paddingBottom: '20px', fontSize: 20, paddingTop: '45px' }} className="contact-us" >Contact Us</h3>
                            <form onSubmit={handleSubmit} style={{ height: '100%' }}>
                                <div className="mb-3">
                                    <input type="name" name="name" className="form-control" style={{ border: 'solid', height: '50px', fontSize: '3ch' }} value={formValue.name} onChange={handleChange} placeholder="Name" required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" name="email" className="form-control" style={{ border: 'solid', height: '50px', fontSize: '3ch' }} value={formValue.email} onChange={handleChange} placeholder="Email" required />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" style={{ border: 'solid', height: '200px', fontSize: '3ch' }} name="message" id="message" value={formValue.message} onChange={handleChange} placeholder="Message" rows="5" required ></textarea>
                                </div>
                                <div style={{ paddingTop: '60px' }}>
                                    <button type="submit" className="btn btn-dark" style={{ width: '100%', height: '50px', fontSize: '3ch' }}>Send</button>
                                </div>
                            </form>
                            <p className="text-center" style={{ paddingTop: "130px" }}>
                                <Image
                                    src={Infotoken}
                                    alt="infotoken"
                                />
                            </p>
                            <p className="text-center">
                                <a href="https://opensea.io/collection/information-token" className="text-wrap">Opensea</a>
                                <a href="https://discord.gg/nsMSakxQ" className="text-wrap">Discord</a>
                                <a href="https://twitter.com/InfoTokenDAO" className="text-wrap">Twitter</a>
                                <a href="https://medium.com/@informationtokendao" className="text-wrap">Medium</a>
                            </p>
                        </div>
                    </div>
                </div>
                <span className="image7">
                    <Image
                        src={image7}
                        alt='group'
                    // width={320}
                    // height={284}
                    />
                </span>
                <span className="image9">
                    <Image
                        src={image9}
                        alt="image9"
                    // width={320}
                    // height={284}
                    />
                </span>
            </div>
        </div>
    );
}

export default Contact;