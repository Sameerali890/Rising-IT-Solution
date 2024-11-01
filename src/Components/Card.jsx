import { Icon } from "@iconify/react/dist/iconify.js"


function Card({data}) {
  return (
        <div className="e-card  playing">
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop grid  place-items-center gap-6 place-content-center text-center">
            <Icon className="text-6xl" icon={data.icon} />
              <div className="font-bold">{data.title}</div>
            </div>
          </div>
  )
}

export default Card