import "./style.scss"

type Props = {
    value: string
}

export function ContactPhone({ value }: Props) {
    return <p className="contact-phone">{value}</p>
}