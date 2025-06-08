import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { counterItems } from '../constants'

const AnimatedCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3, // trigger when 30% is visible
  })

  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32' ref={ref}>
      <div className='mx-auto grid-4-cols'>
        {counterItems.map((item, i) => (
          <div key={i} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
            <div className='counter-number text-white text-5xl font-bold mb-2'>
              {inView ? <CountUp end={item.value} suffix={item.suffix} duration={2} /> : '0'}
            </div>
            <div className='text-white-50 text-lg'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter