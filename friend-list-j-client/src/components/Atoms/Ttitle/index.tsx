import "./style.scss"

type Props = {
    value: string
}

export function Title({ value }: Props) {
    return <h1 className="title">{value}</h1>
}