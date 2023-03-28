
export interface Contact {
    id: string
    name: string
    phone: string
    address: string
}

export interface IContextContact {
    contacts: Contact[]
    editingContact?: Contact
    setEditingContact: (contact: Contact) => void
    refreshContacts: () => void
}