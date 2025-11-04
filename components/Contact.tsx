import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='w-full'>
        <div className='p-5'>
            <div className='h-screen w-full border-5 border-bgcolorless rounded-xl'>
                <div className='left-div'>
                    <h1 className='w-fit h-fit'>Contact Me</h1>
                </div>
                <div className='right-div'>
                        <Image
                            src="/images/contact-image.png"
                            alt="Mail Image"
                            width={300}
                            height={300}
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
