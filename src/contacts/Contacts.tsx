import React from 'react';
import styles from './contacts.module.scss'
import Title from "../common/headingTitle/Title";
import ContactInfo from "../common/contactInfo/contactInfo";

const Contacts = () => {
    return (
        <section className={`${styles.contacts} ${styles.section}`} id={'contacts'}>
                <div className="container">
                    <Title title={'Contact Me'} subTitle={'Contacts'}/>
                    <div className="row justify-content-center">
                        <ContactInfo icon={'email'} title={'Email'} email={'artyr_42@mail.ru'}/>
                        <ContactInfo icon={'phone'} title={'Phone'} email={'+375336351957'}/>
                        <ContactInfo icon={'telegram'} title={'Telegram'} email={'@Artur_078'}/>
                    </div>
                </div>
        </section>

    )
}
export default Contacts