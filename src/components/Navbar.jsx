import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { school } from '../data/schoolInfo.js'
// Sepna: add 'Our Schools' (/schools) to this list when her pages are merged.
const links = [{to:'/about',label:'About Us'},{to:'/news',label:'News'},{to:'/compare',label:'Compare'},{to:'/contact',label:'Contact'}]
const apply = 'https://stjohnschoolmussoorie.org/admissions/'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const cls = ({isActive}) => `text-sm px-2 py-1 transition ${isActive ? 'text-gold font-semibold' : 'text-white/90 hover:text-gold'}`
  return (<header className="bg-navy sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/about" className="flex items-center gap-2 text-white font-semibold">
        <img src={school.logo} alt="" className="h-9 w-9 object-contain bg-white rounded-full p-0.5"/>
        <span className="text-sm leading-tight">St. John's School<br/><span className="text-xs font-normal text-white/70">Mussoorie</span></span></Link>
      <nav className="hidden md:flex items-center gap-4">
        {links.map(l => <NavLink key={l.to} to={l.to} className={cls}>{l.label}</NavLink>)}
        <a href={apply} target="_blank" rel="noreferrer" className="bg-gold text-navy text-sm font-semibold px-4 py-1.5 rounded">Apply Now</a></nav>
      <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="md:hidden bg-navy border-t border-white/10 px-4 pb-4 flex flex-col gap-2">
      {links.map(l => <NavLink key={l.to} to={l.to} className={cls} onClick={() => setOpen(false)}>{l.label}</NavLink>)}
      <a href={apply} className="bg-gold text-navy text-center font-semibold py-2 rounded">Apply Now</a></nav>}
  </header>)
}
