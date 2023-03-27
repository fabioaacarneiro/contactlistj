import { ActualDateYear } from "../../Atoms/ActualDateYear";
import { DevelopedBy } from "../../Atoms/DevelopedBy";
import { FooterName } from "../../Atoms/FooterName";

import "./style.scss"

const devName = "Fabio Carneiro"

export function Footer() {
    return (
        <div className="footer-container">
            <DevelopedBy />
            <FooterName value={devName} />
            <ActualDateYear />
        </div>
    )
}