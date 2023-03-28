import { Fragment, useContext } from "react";
import { findContactById } from "../../../assets/ts/api";
import { Contact } from "../../../assets/ts/types";
import { ContactContext } from "../../../context/ContactProvider";

import "./style.scss";

type Props = {
    contact: Contact
}

export function UpdateContactButton({contact}: Props) {
    
    const { setEditingContact, editingContact, refreshContacts } = useContext(ContactContext)
    
    const getContactButton = async (contact: Contact) => {
        
        console.log(`contato enviado pelo ContactItem = {\n`, contact, `\n}`)
        
        setEditingContact(contact)

        console.log(editingContact)

        refreshContacts()
    }

    return (
        <Fragment>
            <button className="update-button" onClick={() => getContactButton(contact)}>Editar</button>
        </Fragment>
    )
}