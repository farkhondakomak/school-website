import { img } from './schoolInfo.js'
// Only activities listed on the official School Life page. No dates were published, so none are shown.
const L = 'https://stjohnschoolmussoorie.org/school-life/'
export const categories = ['All', 'News', 'Events', 'Achievements']
export const newsItems = [
 { id:1, category:'Events', title:'Annual Day', image:img('dance.jpg'), link:L, text:'Theatre productions, dance dramas and music performances.' },
 { id:2, category:'Events', title:'Hill-Station Inter-School Festivals', image:img('celebration.jpg'), link:L, text:'Children take part in inter-school festivals held across the hill stations.' },
 { id:3, category:'Events', title:'Elocution and Debate Competitions', image:img('writing.jpg'), link:L, text:'Inter-school elocution and debate competitions through the year.' },
 { id:4, category:'Events', title:'Outdoor Expeditions and Picnics', image:img('picnic.jpg'), link:L, text:'Outdoor expeditions, forest picnics and nature walks beyond the classroom.' },
 { id:5, category:'Events', title:'The Annual Marathon', image:img('outdoors.jpg'), link:L, text:'The annual marathon is part of the school’s yearly calendar.' },
 { id:6, category:'Events', title:'Sports and the Arts', image:img('christmas.jpg'), link:L, text:'Foot cricket, karate, dance, music and yoga alongside classroom learning.' },
 { id:7, category:'News', title:'Community and Environment', image:img('nature.jpg'), link:L, text:'Students work with local non-profits such as Waste Warrior on cleanliness drives and eco-conservation projects.' },
 { id:8, category:'News', title:'Admissions Open: February 2027', image:img('group.jpg'), link:'https://stjohnschoolmussoorie.org/admissions/', text:'The official website announces admissions opening in February 2027.' },
 { id:9, category:'Achievements', title:'Students with Certificates', image:img('awards.jpg'), link:L, text:'Students recognised with certificates, as shown in the school gallery.' },
 { id:10, category:'Achievements', title:'Dance Performers with Certificates', image:img('dance.jpg'), link:L, text:'Dance performers honoured with certificates, as shown in the school gallery.' },
]
