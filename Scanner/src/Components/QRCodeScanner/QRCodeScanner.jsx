import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'

const QRCodeScanner = () => {

    const [scannData, setScanData] = useState('no result');

  return (
    <div className="mt-10">
        <h1 className="text-lg font-medium">QR Code Scanner</h1>

          <p  className='mt-10 h-10 mb-10 font-bold text-xl'>Scanned Result: 
            <span className='font-medium ml-2'>{scannData}</span></p>

        <div className="w-[100%] h-[65%] bg-gray-200 rounded-lg mt-10">

          <QrReader
          constraints={{ facingMode: 'environment' }} // Use back camera
          onResult={(result, error) => {
            if (!!result) {
              setScanData(result?.text);
            }

            if (!!error) {
              console.warn(error);
            }
          }}
          style={{ width: '100%' }}
        />

        </div>
       

    </div>
  )
}

export default QRCodeScanner