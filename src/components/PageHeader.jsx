import { motion } from 'framer-motion'
import Breadcrumb from './Breadcrumb.jsx'
export default function PageHeader({ title, subtitle, crumb }) {
  return (<section className="bg-soft border-b border-slate-200">
    <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.5}}
      className="max-w-6xl mx-auto px-4 pt-10 pb-5 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
      <div className="mt-5 text-left"><Breadcrumb current={crumb || title}/></div>
    </motion.div></section>)
}
