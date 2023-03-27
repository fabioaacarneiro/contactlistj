import "./style.scss"

type Props = {
    value: string
}

export function Subtitle({ value }: Props) {
    return <h1 className="subtitle">{value}</h1>
}