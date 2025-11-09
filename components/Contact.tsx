import React from 'react'
import Image from 'next/image'
import ContactForm from './ui/ContactForm'

const Contact = () => {
  return (
    <div className='w-full'>
        <div className='p-5'>
            <div className='min-h-screen h-fit w-full border-5 border-bgcolorless rounded-xl flex flex-col md:flex-row'>
                <div className='left-div h-fit w-full md-w-[50%] p-5'>
                    <div className='mx-8'>
                        <h1 className='w-fit h-fit text-3xl font-bold mt-12'>Contact Me</h1>
                        <div className='flex flex-wrap gap-1 w-full'>
                            <div className='w-max'>Let&apos;s get in touch —</div>
                            <div className='w-max flex flex-wrap'>Open to opportunities and collaborations.</div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
                <div className='right-div h-screen w-full md-w-[50%] p-5 flex justify-center items-center'>
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
