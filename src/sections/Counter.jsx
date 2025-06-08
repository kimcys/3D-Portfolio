import React from 'react'
import AnimatedCounter from '../components/AnimatedCounter'

const Counter = () => {
    return (
        <section id='counter' className='relative overflow-hidden mt-10'>
            <AnimatedCounter></AnimatedCounter>
        </section>
    )
}

export default Counter