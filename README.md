# St. John's School, Mussoorie: team website

React + Vite + Tailwind + React Router + Framer Motion + Lucide.

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Structure
- `src/components/` shared: Navbar, Footer, PageHeader, Breadcrumb, Reveal
- `src/pages/` About, NewsEvents (Developer 1), CompareSchools, Contact (Mitra)
- `src/data/` schoolInfo.js (verified facts, phone), newsData.js

## Page ownership
- Developer 1: About Us, News & Events (`About.jsx`, `NewsEvents.jsx`, `newsData.js`)
- Mitra: Compare Schools, Contact Us (`CompareSchools.jsx`, `Contact.jsx`)
- Sepna: Our Schools, School Details (developed separately, not in this repo yet)
- Shared files: change only via pull request with a teammate's review.

## GitHub workflow
One branch per person: `git checkout -b feature/about-news`, commit, `git push -u origin <branch>`, open a pull request to `main`. Never force-push `main`.

## Integrating Sepna's pages
1. Add `src/pages/OurSchools.jsx` and `SchoolDetails.jsx`.
2. In `App.jsx` add `<Route path="/schools" .../>` and `<Route path="/schools/:id" .../>`.
3. In `Navbar.jsx` add `{to:'/schools',label:'Schools'}` to `links`.

## Notes
Photos hotlink the official site (`img()` in schoolInfo.js). Download them into `public/images/` before final delivery. Brand colours (navy/gold) follow the reference design; confirm against the logo.

# (README continues below)
