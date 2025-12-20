import React from 'react'
import Image from 'next/image'
import ContactForm from './ui/ContactForm'

const Contact = () => {
  return (
    <div className='w-full h-fit'>
        <div className='px-[3%] h-full'>
            <div className='h-fit w-full border-5 border-bgcolorless rounded-xl flex flex-col md:flex-row'>
                <div className='left-div h-fit w-full md-w-[50%] p-2 md:p-5'>
                    <div className='bg-bgcolorless p-3 md:p-4 rounded-lg flex flex-col justify-center w-full'>
                        <h1 className='w-fit h-fit text-3xl font-bold'>Contact Me</h1>
                        <div className='flex flex-wrap gap-1 w-full'>Let&apos;s get in touch — Open to opportunities and collaborations.</div>
                    </div>
                    <ContactForm />
                </div>
                <div className='right-div w-full md-w-[50%] p-5 flex justify-center items-center'>
                    <Image
                        src="/images/contact-image.png"
                        alt="Mail Image"
                        width={300}
                        height={300}
                        className="scale-[1.5]"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
