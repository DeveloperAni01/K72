import { Link } from "react-router-dom"


const HomeBottomText = () => {
  return (
      <div className=" font-[lausanne-500] flex items-center justify-center gap-6  ">
        <Link to={"/projects"} className="text-[5vw] leading-[4vw] uppercase border-3 border-zinc-50 rounded-full px-10 pt-5 hover:border-[rgb(211,253,80)] hover:text-[rgb(211,253,80)]">Projects</Link>
        <Link to={"/agence"} className="text-[5vw] leading-[4vw] uppercase border-3 border-zinc-50 rounded-full px-10 pt-5 hover:border-[rgb(211,253,80)] hover:text-[rgb(211,253,80)]">Agency</Link>
      </div>
  )
}

export default HomeBottomText