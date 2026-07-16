import { useState } from 'react'

const projects = [
  {
    id: 1, title: 'Drywall Repair', location: 'South Tampa', tag: 'Drywall',
    before: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_060012_0107d02d-c6ed-4bdd-9cfb-cac193cf6aa8.png',
    after: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_060015_c5f6906b-4f85-4e31-828c-c3819a5d0a8b.png',
  },
  {
    id: 2, title: 'Pool Cage Screen', location: 'Brandon', tag: 'Screen',
    before: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_050746_f39660c2-cda6-4118-8208-599c7c3b507f.png',
    after: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_050810_f55ea996-f280-4f49-8235-652a5df6e62f.png',
  },
  {
    id: 3, title: 'Ceiling Fan Install', location: 'Riverview', tag: 'Electrical',
    before: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_050751_bc305f4c-4e47-455c-8d87-3d8d9135cb94.png',
    after: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_050814_d4ea96cd-b676-4600-988b-43c2760ff032.png',
  },
  {
    id: 4, title: 'Fence Replacement', location: 'Wesley Chapel', tag: 'Fence',
    before: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_050755_d7ebf610-3e91-4fca-b45d-28a96b24f0fb.png',
    after: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_051415_ac8c3058-db62-4529-896a-c7bd27e19284.png',
  },
  {
    id: 5, title: 'Pressure Washing', location: 'Clearwater', tag: 'Exterior',
    before: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_050759_7e0957cc-7c0a-4a10-9fc7-f13459ed54cb.png',
    after: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_050820_bbf43602-b80e-4dce-a956-f596896432b8.png',
  },
  {
    id: 6, title: 'Interior Painting', location: 'Temple Terrace', tag: 'Painting',
    before: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_050802_1962a4ed-6773-473f-b6c9-69bdd6534479.png',
    after: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_050823_c3a03f47-24b5-4feb-bd7b-b3ad54f05344.png',
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isAfter, setIsAfter] = useState(false)

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      {/* Image — mouseenter/mouseleave for desktop, click for mobile */}
      <div
        className="relative cursor-pointer select-none"
        style={{ aspectRatio: '4/3' }}
        onMouseEnter={() => setIsAfter(true)}
        onMouseLeave={() => setIsAfter(false)}
        onClick={() => setIsAfter(v => !v)}
      >
        {/* BEFORE */}
        <img
          src={project.before}
          alt={`${project.title} in ${project.location}, FL — before photo`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isAfter ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* AFTER */}
        <img
          src={project.after}
          alt={`${project.title} in ${project.location}, FL — after photo`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isAfter ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* State badge */}
        <div className={`absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded-full transition-all duration-300 ${isAfter ? 'bg-orange-500 text-white' : 'bg-gray-900/60 text-white backdrop-blur-sm'}`}>
          {isAfter ? '✓ AFTER' : 'BEFORE'}
        </div>

        {/* Tag */}
        <div className="absolute top-3 right-3 bg-white text-gray-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-gray-200 shadow-sm">
          {project.tag}
        </div>

        {/* Bottom bar */}
        <div className={`absolute bottom-0 inset-x-0 py-2.5 px-3 text-white text-[10px] font-bold text-center transition-all duration-300 ${isAfter ? 'bg-orange-500' : 'bg-black/40'}`}>
          {isAfter ? '✓ Job completed' : 'Hover or tap to see result →'}
        </div>
      </div>

      <div className="px-4 py-3 flex items-center justify-between">
        <div>
          <p className="font-bold text-gray-900 text-sm">{project.title}</p>
          <p className="text-gray-400 text-xs">📍 {project.location}</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-green-400" />
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">Real Results</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Before & After</h2>
          <p className="text-gray-500 mt-3">Hover or tap each photo to see the transformation</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
