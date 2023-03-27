import { Fragment, useContext } from "react";
import { ContactContext } from "../../../context/ContactProvider";
import { deleteContact } from "../../../assets/ts/api";

import "./style.scss"

type Props = {
    id: string
}

export function DeleteContactButton({id}: Props) {
    
    const { refreshContacts } = useContext(ContactContext)
    
    const deleteContactButton = async (id: string) => {
        await deleteContact(id)
        console.log(id)
        refreshContacts()
    }
    return (
        <Fragment>
            <button className="delete-button" onClick={() => deleteContactButton(id)}>Excluir</button>
        </Fragment>
    )
}