import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactContainer = () => {
    const defaultContact = new Contact('Enrique', 'Gil', 'enriquegq1093@gmail.com', false)

    return (
        <div>
            <ContactComponent contact={defaultContact} />
        </div>
    );
};



export default ContactContainer;
