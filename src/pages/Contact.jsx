import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { school } from '../data/schoolInfo.js'
// Owner: Mitra. No backend: the form opens the visitor's mail app addressed to the school's published email.
export default function Contact() {
  const [f, setF] = useState({ name:'', email:'', subject:'', message:'' })
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const submit = e => { e.preventDefault()
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${school.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}` }
  const input = 'w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold'
  return (<>
    <PageHeader title="Contact Us" subtitle="We are here to help you. Get in touch with us for any questions or support." />
    <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-5 gap-6">
      <form onSubmit={submit} className="md:col-span-3 border border-slate-200 rounded-xl p-5 space-y-3">
        <h2 className="font-bold text-lg">Send Us a Message</h2>
        <input className={input} placeholder="Full Name" required value={f.name} onChange={set('name')}/>
        <input className={input} type="email" placeholder="Email" required value={f.email} onChange={set('email')}/>
        <input className={input} placeholder="Subject" required value={f.subject} onChange={set('subject')}/>
        <textarea className={input} rows={5} placeholder="Message" required value={f.message} onChange={set('message')}/>
        <button className="w-full bg-gold text-navy font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:brightness-95 active:scale-[.98] transition">Send Message <Send size={16}/></button>
      </form>
      <aside className="md:col-span-2 border border-slate-200 rounded-xl p-5 space-y-4 text-sm">
        <h2 className="font-bold text-lg">Contact Information</h2>
        <p className="flex gap-3"><MapPin className="text-gold shrink-0"/>{school.address}</p>
        <a href={`tel:${school.phone}`} className="flex gap-3 hover:text-gold"><Phone className="text-gold shrink-0"/>{school.phone}</a>
        <a href={`mailto:${school.email}`} className="flex gap-3 hover:text-gold break-all"><Mail className="text-gold shrink-0"/>{school.email}</a>
        <p className="flex gap-3"><Clock className="text-gold shrink-0"/>Office hours: {school.hours}</p>
      </aside>
      <iframe title="Map" className="md:col-span-5 w-full h-72 rounded-xl border border-slate-200" loading="lazy"
        src={`https://www.google.com/maps?q=${encodeURIComponent(school.address)}&output=embed`}/>
    </div></>)
}
