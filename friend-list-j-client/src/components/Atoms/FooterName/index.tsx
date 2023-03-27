import "./style.scss"

type Props = {
    value: string
}

export function FooterName({ value }: Props) {
    return <p className="footer-name">{value}</p>
}