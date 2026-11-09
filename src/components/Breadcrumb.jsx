import { Link } from 'react-router-dom'
export default function Breadcrumb({ current }) {
  return (<nav aria-label="Breadcrumb" className="text-xs text-slate-500">
    <Link to="/about" className="hover:text-navy">Home</Link> <span className="mx-1">/</span> <span className="text-navy font-medium">{current}</span></nav>)
}
