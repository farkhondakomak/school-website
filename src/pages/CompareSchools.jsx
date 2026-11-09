import PageHeader from '../components/PageHeader.jsx'
import { img } from '../data/schoolInfo.js'
// Owner: Mitra. The official source covers only St. John's, so other columns are intentionally empty.
const rows = [
 ['School type','Co-educational, English-medium'],['Grades','Nursery to Class 8'],['Curriculum','ICSE (CISCE, New Delhi)'],
 ['Teachers','12'],['Classrooms','8'],['Library','450+ books'],['Playgrounds','2, fenced'],['Daily schedule','About 9:00 AM to 2:00 PM'],
 ['Student count','Not published'],
]
export default function CompareSchools() {
  const empty = <span className="text-slate-400 text-xs">Not available</span>
  return (<>
    <PageHeader title="Compare Schools" subtitle="Verified facts about St. John's School. Other schools will be added when verified data exists." />
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[560px] text-sm text-center">
          <thead className="bg-soft"><tr><th className="p-3 text-left">Feature</th>
            <th className="p-3"><img src={img('group.jpg')} alt="" className="h-16 w-24 object-cover rounded mx-auto"/>St. John's School</th>
            <th className="p-3 text-slate-400 font-normal">School B</th><th className="p-3 text-slate-400 font-normal">School C</th></tr></thead>
          <tbody>{rows.map(([f,v]) => <tr key={f} className="border-t border-slate-200">
            <td className="p-3 text-left font-medium">{f}</td><td className="p-3">{v}</td><td className="p-3">{empty}</td><td className="p-3">{empty}</td></tr>)}
            <tr className="border-t border-slate-200"><td className="p-3"></td>
              <td className="p-3"><a href="https://stjohnschoolmussoorie.org/academics/" target="_blank" rel="noreferrer" className="bg-gold text-navy font-semibold px-3 py-1.5 rounded text-xs">View Details</a></td><td/><td/></tr></tbody>
        </table></div>
    </div></>)
}
