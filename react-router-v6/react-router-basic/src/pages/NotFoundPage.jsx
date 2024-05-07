import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div style={{ fontSize: "20px" }}>
      404 Not Found
      <Link to="/">Home from Link</Link>
    </div>
  );
}
