import { ContactAddress } from "../../Atoms/ContactAddress"
import { ContactName } from "../../Atoms/ContactName"
import { ContactPhone } from "../../Atoms/ContactPhone"

import { Contact } from "../../../assets/ts/types"
import { DeleteContactButton } from "../../Atoms/DeleteContactButton"

import "./style.scss"
import { useState } from "react"
import { UpdateContactForm } from "../UpdateContactForm"

type Props = {
    contact: Contact
}

export function ContactItem({contact}: Props) {

    const [formView, setFormView] = useState("hide")
    
    const toggleView = () => {
        formView == "show" ? setFormView("hide") : setFormView("show")
    }

    return (
        <div>
            <li className="list-itens-content" >
                <ContactName value={contact.name} />
                <ContactPhone value={contact.phone} />
                <ContactAddress value={contact.address} />
                <DeleteContactButton id={contact.id} />
                <button className="update-button" onClick={() => toggleView()}>{formView == "hide" ? "Editar" : "Cancelar"}</button>
                <div className={formView}>
                    <UpdateContactForm contact={contact} />
                </div>
            </li>
        </div>
    )
}