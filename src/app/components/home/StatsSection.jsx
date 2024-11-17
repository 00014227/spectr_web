import React from 'react'

const StatsSection = () => {
  return (
    <div className="flex flex-wrap justify-between items-center  py-6 px-12 bg-black text-white text-center">
      <div className="flex flex-col items-center">
        <span className="text-5xl font-evolventa text-red-500">1000+</span>
        <span className="text-2xl">кейсов</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-evolventa text-red-500">100+</span>
        <span className="text-2xl">клиентов</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-evolventa text-red-500">1МЛН+</span>
        <span className="text-2xl">креатива</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-evolventa text-red-500">100%</span>
        <span className="text-2xl">гарантии и результата</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-evolventa text-red-500">500+</span>
        <span className="text-2xl">проектов</span>
      </div>
    </div>  )
}

export default StatsSection