import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs({ companyId, productName }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <span>/</span>

      <Link to="/#partners">Partners</Link>
      <span>/</span>

      <Link to={`/products/${companyId}`}>
        {companyId.replaceAll("-", " ")}
      </Link>
      <span>/</span>

      <span className="current">{productName}</span>
    </nav>
  );
}
