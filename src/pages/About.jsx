import { Target, Eye, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { img } from '../data/schoolInfo.js'
// Owner: Developer 1
const cards = [
 { icon: Target, title:'Our Mission', text:'Education for all: excellent, child-centric education for children from diverse and underprivileged backgrounds, with personal attention from a low teacher-student ratio.' },
 { icon: Eye, title:'Our Vision', text:'Holistic development: nurturing curiosity, building character and encouraging compassion so every child becomes confident and responsible.' },
 { icon: Heart, title:'Our Values', text:'Education for all, care for the hills the students live in, and social responsibility through community and environmental work.' },
]
export default function About() {
  return (<>
    <PageHeader title="About Us" subtitle="A school with a legacy, set among the hills of Mussoorie" />
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <Reveal className="grid md:grid-cols-2 gap-8 items-center">
        <img src={img('group.jpg')} alt="Students and teachers at St. John's School" className="rounded-xl shadow w-full h-72 md:h-80 object-cover"/>
        <div><h2 className="text-2xl font-bold">Who We Are</h2>
          <p className="mt-3 text-sm leading-relaxed">St. John’s School was founded in 1993 by the late Rev. I. B. Dass and his wife, the late Mrs. Beena Dass, to give excellent education to children from diverse and underprivileged backgrounds near the colonial ridge of Landour. It is a co-educational, English-medium school up to Class 8, following the ICSE curriculum.</p>
          <p className="mt-3 text-sm leading-relaxed">Over 3,000 students have studied here in more than 30 years. Our motto: <strong>Education for all.</strong></p></div>
      </Reveal>
      <div className="grid sm:grid-cols-3 gap-5">
        {cards.map(({icon:I,title,text},i) => <Reveal key={title} delay={i*.1}>
          <motion.div whileHover={{y:-6}} className="bg-soft border border-slate-200 rounded-xl p-6 text-center h-full">
            <I className="mx-auto text-gold" size={30}/><h3 className="mt-3 font-bold">{title}</h3><p className="mt-2 text-sm">{text}</p></motion.div></Reveal>)}
      </div>
      <Reveal className="grid sm:grid-cols-2 gap-5">
        <div className="border border-slate-200 rounded-xl p-6"><h3 className="font-bold">Leadership</h3>
          <p className="mt-2 text-sm">Mrs. Bimla Beni Prasad, Principal (joined as a teacher in 1993, Principal since 2005).<br/>Ms. Natasha Prasad, Vice Principal.</p></div>
        <div className="border border-slate-200 rounded-xl p-6"><h3 className="font-bold">Facilities</h3>
          <p className="mt-2 text-sm">Eight classrooms and twelve teachers, a library of over 450 books, computers with computer-aided learning, and two fenced playgrounds.</p></div>
      </Reveal>
    </div></>)
}
