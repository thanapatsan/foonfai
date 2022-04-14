const FullWidget = () => {
  return (
    <>
      <div><div className="flex flex-row max-w-full border border-gray-400 rounded-md"><div className="flex-1"><div className="m-2"><h1 className="text-xl font-medium my-1"> รพ.เชียงรายประชานุเคราะห์ </h1><h2 className="text-base my-1"> ต.รอบเวียง อ.เมือง จ.เชียงราย </h2><h3 className="text-sm"> 📅 2022-04-14 🕗 20:15 </h3><h4 className="text-sm"> 🌡️: <span>33</span>℃ 💧: <span>83</span>% </h4></div><div className="grid grid-rows-1 grid-cols-5 grid-flow-col justify-items-center text-center mb-1 px-1"><p className="w-11/12 rounded-md text-sm aqi-bg-red"> 155 </p><p className="w-11/12 rounded-md text-sm aqi-bg-red"> 161 </p><p className="w-11/12 rounded-md text-sm aqi-bg-red"> 161 </p><p className="w-11/12 rounded-md text-sm aqi-bg-red"> 162 </p><p className="w-11/12 rounded-md text-sm aqi-bg-red"> 164 </p></div><div className="mx-2 mb-1"><p className="text-xs text-gray-500"> yakkaw.com (006) </p></div></div><div className="flex flex-col justify-center text-center w-1/3 aqi-bg-red"><p className="text-4xl font-bold"> 167 </p><p>US AQI</p><p className="text-sm mt-1"> PM<sub>2.5</sub>: <span className="font-bold">87</span> μg/m<sup>3</sup></p><p className="text-sm mb-1"> PM<sub>10</sub>: <span className="font-bold">95</span> μg/m<sup>3</sup></p><p className="text-sm">Trend: 📈</p></div></div></div>
    </>
  );
}

export default FullWidget;