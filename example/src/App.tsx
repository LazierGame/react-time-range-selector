import React, { useState } from 'react'
import TimeRangeSelector from 'react-time-range-selector'
import 'react-time-range-selector/dist/index.css'
import { TimeRange } from "../../src/interfaces";

const App = () => {
  const [state, setState] = useState([9, 10] as TimeRange)
  const handleChange = (value: any) => {
    setState(value)
  }

  // const [state2, setState2] = useState([9, 10] as TimeRange)
  // const handleChange2 = (value: any) => {
  //   setState2(value)
  // }

  const hour: number = (new Date()).getHours()

  const [scrollLeft, setScrollLeft] = useState(hour * 100)


  return <div>
    <TimeRangeSelector
      isSnapToGrid={true}
      scrollLeft={scrollLeft}
      snap={0.25}
      range='day'
      value={state}
      onChange={handleChange}
    />
    <button onClick={() => setScrollLeft(prevState => prevState + 100)}> +</button>
    {/*<TimeRangeSelector initialScrollIndex={(new Date()).getHours()} isSnapToGrid={false} snap={0.25} range='day' value={state2} onChange={handleChange2}  />*/}
  </div>
}

export default App
