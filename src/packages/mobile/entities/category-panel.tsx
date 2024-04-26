import { Link } from "react-router-dom";
import { Category } from "../mobile-pages/soapmaking/soapmaking";
import "./category-panel.css";
export function CategoryPanel(props: { category: Category }) {
  return (
    <Link to={`/categorypage/${props.category.category_id}`}>
      <div className="categorypanel">{props.category.category_name}</div>
    </Link>
  );
}
