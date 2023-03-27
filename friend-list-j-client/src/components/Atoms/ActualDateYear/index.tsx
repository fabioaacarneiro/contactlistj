import "./style.scss"

const actualYear = new Date().toLocaleDateString().substring(6)

export function ActualDateYear() {
    return <p className="actual-year">{actualYear}</p>
}