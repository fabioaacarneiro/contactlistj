import "./style.scss"

type Props = {
    value: string
}

export function ContactAddress({ value }: Props) {
    return <p className="contact-address">{value}</p>
}