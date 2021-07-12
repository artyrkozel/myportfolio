import React from "react";
import styles from './contactInfo.module.scss'
import TelegramIcon from '@material-ui/icons/Telegram';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from "@material-ui/icons/Email";




const ContactInfo = (props: any) => {
    return (
            <div className="col-md-6 col-sm-12">
                <div className={styles.contactInfo}>
                    <div className={styles.contactIcon}>
                        {props.icon === 'telegram' && <span><TelegramIcon/></span>}
                        {props.icon === 'email' && <span><EmailIcon/></span>}
                        {props.icon === 'phone' && <span><PhoneAndroidIcon/></span>}
                    </div>
                    <div className={styles.contactBody}>
                        <h5>{props.title}</h5>
                        <div>{props.email}</div>
                    </div>
                </div>
            </div>
    )
}
export default ContactInfo