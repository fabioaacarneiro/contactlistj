import { Subtitle } from "../../Atoms/Subtitle"
import { Title } from "../../Atoms/Ttitle"

import "./style.scss"

export function Header() {
    return (
        <div className="header">
            <Title value={"Friend List J"} />
            <Subtitle value={"A contact list app for your own management"} />
        </div>
    )
}