import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import { categories, newsItems } from '../data/newsData.js'
// Owner: Developer 1
export default function NewsEvents() {
  const [active, setActive] = useState('All')
  const items = active === 'All' ? newsItems : newsItems.filter(n => n.category === active)
  return (<>
    <PageHeader title="News & Events" subtitle="Life at St. John's School: activities, events and achievements" crumb="News"/>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(c => <motion.button key={c} whileTap={{scale:.95}} onClick={() => setActive(c)}
          className={`px-4 py-1.5 rounded-full text-sm border ${active===c ? 'bg-gold text-navy border-gold font-semibold' : 'bg-white text-slate-600 border-slate-200'}`}>{c}</motion.button>)}
      </div>
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {items.map(n => <motion.article layout key={n.id} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0}}
            whileHover={{y:-3}} className="flex flex-col sm:flex-row gap-4 bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
            <img src={n.image} alt={n.title} loading="lazy" className="w-full sm:w-48 h-40 sm:h-32 object-cover rounded-lg"/>
            <div><span className="text-xs text-gold font-semibold">{n.category}</span>
              <h3 className="font-bold">{n.title}</h3><p className="text-sm mt-1">{n.text}</p>
              <a href={n.link} target="_blank" rel="noreferrer" className="inline-block mt-2 text-sm font-semibold text-navy hover:text-gold">Read More →</a></div>
          </motion.article>)}
        </AnimatePresence>
      </div>
    </div></>)
}
