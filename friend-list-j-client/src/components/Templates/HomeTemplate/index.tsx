import { ContactList } from "../../Organisms/ContactList";
import { Header } from "../../Organisms/Header";
import { Footer } from "../../Organisms/Footer";

import "./style.scss"
import { ContactForm } from "../../Molecules/ContactForm";
import { ContactProvider } from "../../../context/ContactProvider";

export function HomeTemplate() {
    return (
        <div className="contact-list-template">
            <div className="header-container">
                <Header />
            </div>
            <div className="content-container">
                <ContactProvider>
                    <ContactForm />
                    <ContactList />
                </ContactProvider>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}