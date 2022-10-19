
import {useState } from "react";
const Screen5 = () => {
  const [persentage, setPersentage] = useState(0)
  const scrollHandler = (e) => {
    const element = e.target
    const totalHeight = element.scrollHeight
    const currentHeight = element.scrollTop + element.clientHeight
    setPersentage(Math.floor(currentHeight / totalHeight * 100))
  }
  return (
    <div className="screen5 h-[50vh]  w-full overflow-y-scroll sc" onScroll={scrollHandler}>
      <div className="w-screen h-[200vh] relative">
        <div className="h-[50vh] sticky top-0 overflow-x-hidden w-full flex items-center">
          <div className="" style={{ width: `${persentage}%`, height: '10px', backgroundColor: 'red', justifySelf: 'start' }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Screen5