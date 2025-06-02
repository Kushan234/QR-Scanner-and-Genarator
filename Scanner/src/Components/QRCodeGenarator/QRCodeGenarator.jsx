import React, { useState } from 'react'
import  QRCode  from 'qrcode.react'

const QRCodeGenarator = () => {
    const [text, setText] = useState('');

    const handleInputChange = (e)=>{
        setText(e.target.value);
    }
  return (
    <div className="mt-10">
        <h1 className='text-lg font-medium '>QR Code Genarator</h1>

        <input type="text"
        className="mt-10 h-10 mb-10 border-2 border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:border-blue-500" 
        placeholder='Enter text or url' 
        onChange={handleInputChange}
        />

        <div className="">
            {text && <QRCode value={text} size={256}/>}
        </div>
    </div>
  )
}

export default QRCodeGenarator