import { ContactAddress } from "../../Atoms/ContactAddress"
import { ContactPhone } from "../../Atoms/ContactPhone"
import { ContactName } from "../../Atoms/ContactName"

import "./style.scss"
import { Contact } from "../../../assets/ts/types"
import { DeleteContactButton } from "../../Atoms/DeleteContactButton"

type Props = {
    contact: Contact
}

export function ContactItem({contact}: Props) {
    return (
        <li className="list-itens-content">
            <ContactName value={contact.name} />
            <ContactPhone value={contact.phone} />
            <ContactAddress value={contact.address} />
            <DeleteContactButton id={contact.id} />
        </li>
    )
}