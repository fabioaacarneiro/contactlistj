import "./style.scss"

type Props = {
    value: string
}

export function ContactName({ value }: Props) {
    return <p className="contact-name">{value}</p>
}