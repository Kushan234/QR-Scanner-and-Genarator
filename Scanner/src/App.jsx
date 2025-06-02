import React from 'react'
import QRCodeGenarator from './Components/QRCodeGenarator/QRCodeGenarator'
import QRCodeScanner from './Components/QRCodeScanner/QRCodeScanner'

const App = () => {
  return (
    <div className='p-10 h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500'>
      <h1 className="text-4xl font-extrabold -mt-14">QR Dashboard</h1>
      <div className="grid grid-cols-2 gap-40 mt-10 ">
        <QRCodeGenarator />
        <QRCodeScanner />
      </div>
    </div>
  )
}

export default App