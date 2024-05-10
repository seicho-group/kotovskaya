import "./subcategory.css"
import { Link } from "react-router-dom"

type Props = {
  subcategoryId: string
  subcategoryName: string
}

export function Subcategory({ subcategoryName, subcategoryId }: Props) {
  return (
    <div className="subcategory">
      <Link to={`/categorypage/${subcategoryId}`}>{subcategoryName}</Link>
    </div>
  )
}
