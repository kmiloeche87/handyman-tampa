import { Star } from 'lucide-react'

const reviews = [
  { name: 'Maria S.', location: 'South Tampa', platform: 'Google', text: 'Carlos showed up on time, gave a fair price before starting, and finished when he said he would. He repaired the drywall in my living room and it looks perfect. I saved his number for anything I need.', service: 'Drywall Repair', date: '2 weeks ago' },
  { name: 'Robert & Linda T.', location: 'Brandon', platform: 'Nextdoor', text: 'He replaced all the mesh on the pool cage and three window screens in one day. Fair price, very clean work and honest. I already recommended him to three neighbors.', service: 'Screen Repair', date: '1 month ago' },
  { name: 'Ana P.', location: 'Riverview', platform: 'Yelp', text: 'I needed two ceiling fans installed and a dripping faucet fixed. He came the next day, did everything in 2 hours and charged exactly what he quoted. 100% recommended.', service: 'Electrical + Plumbing', date: '3 weeks ago' },
  { name: 'James M.', location: 'Clearwater', platform: 'Google', text: 'Excellent pressure washing job on the driveway and fence. Arrived early, worked fast and the result was incredible. Hiring him again to paint the exterior.', service: 'Pressure Washing', date: '5 days ago' },
]

const platformColor: Record<string, string> = {
  Google: 'bg-blue-50 text-blue-700',
  Nextdoor: 'bg-green-50 text-green-700',
  Yelp: 'bg-red-50 text-red-700',
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">What They Say</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Real Customers in Tampa Bay</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-4xl font-black text-gray-900">4.9</p>
              <div className="flex justify-center mb-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-orange-400 text-orange-400" />)}
              </div>
              <p className="text-gray-500 text-xs">214 reviews</p>
            </div>
            <div className="flex flex-col gap-1">
              {[['Google', '★ 4.9'], ['Yelp', '★ 4.8'], ['Nextdoor', 'Fav.']].map(([pl, sc]) => (
                <div key={pl} className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${platformColor[pl]}`}>{pl}</span>
                  <span className="text-gray-700 text-xs font-semibold">{sc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {reviews.map(r => (
            <div key={r.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600 text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-gray-400 text-xs">📍 {r.location}</p>
                  </div>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${platformColor[r.platform]}`}>{r.platform}</span>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-orange-400 text-orange-400" />)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-gray-100 text-gray-600 font-medium px-2.5 py-1 rounded-full">{r.service}</span>
                <span className="text-xs text-gray-400">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="https://g.page/r/example" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-bold text-sm transition-colors">
            See all reviews on Google Maps →
          </a>
        </div>
      </div>
    </section>
  )
}
