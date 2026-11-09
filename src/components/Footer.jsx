import { Phone, Mail, MapPin } from 'lucide-react'
import { school } from '../data/schoolInfo.js'
export default function Footer() {
  return (<footer className="bg-navy text-white/80 text-sm">
    <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-3">
      <div><p className="font-semibold text-white">{school.name}</p><p className="mt-1 italic">Education for all</p></div>
      <div className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-gold"/>{school.address}</div>
      <div className="space-y-1">
        <a href={`tel:${school.phone}`} className="flex gap-2 hover:text-gold"><Phone size={16} className="text-gold"/>{school.phone}</a>
        <a href={`mailto:${school.email}`} className="flex gap-2 hover:text-gold break-all"><Mail size={16} className="text-gold shrink-0"/>{school.email}</a></div>
    </div>
    <p className="text-center text-xs text-white/50 pb-5 px-4">© 2026 {school.name}. Content sourced from stjohnschoolmussoorie.org.</p>
  </footer>)
}
