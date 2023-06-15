
import Image from 'next/image'
import DemoGenerations from './Components/DemoGenerations'
export default function Home() {
  return (
  <div className='md:w-11/12 m-auto relative'>
      {/* hero section  */}
      <section className='md:flex justify-between items-center'>
        <div>
          <Image src='https://cdn.dribbble.com/userupload/3283529/file/original-5860b3ab95033891c771344ea9e32aea.png?compress=1&resize=752x' width={400} height={400} alt='tree image' />
        </div>
        <div className='my-2 text-center'>
          <h2 className='text-3xl'>Hello, Welcome to Generation-Tree.</h2>
          <h3 className=''>
            Keep track of your Generations and Get to know about them.
          </h3>
          <button className='btn_primary btn my-4 py-2 px-6 rounded-full bg-blue_gradient bg-gradient-to-b from-cyan-500 to-blue-500 my-4'>Browse Zenerations</button>
        </div>
      </section>
      {/* second hero section  */}
      <section className='text-center my-4'>
        <div className='w-full flex justify-center items-center flex-col'>
          {/* <h4 className='my-4'>Two Types of Generation Trees </h4> */}
          <div className='w-full md:flex justify-between my-2 items-center'>
            <div className='md:w-1/2 my-2'>
              <h3 className='text-2xl'>About Locked Generation Tree</h3>
              <p>There are Locked where anyone from outside the Generation cannot enter the Tree and see details of generations. If a user belong to the Protected Generation, the user will be asked for authencation. where the user will have to verify email along with various fields like DOB, Fathers name etc. for email authencation, it is mendatory that user should enter the email while adding data</p>
            </div>
            <DemoGenerations isProt={true} />
          </div>
          
          <div className='w-full md:flex justify-between my-2 items-center'>
            <DemoGenerations isProt={false} />
            <div className='md:w-1/2 my-2'>
              <h3 className='text-2xl'>Not Protected Generation Tree</h3>
              <p>
                in a non Protected Generation Tree, anyone can visit the tree and see the families in this type of Generation tree. This type of tree is usually for generations which are open source and no authencation or authorization is required to see the details of members in the Tree. Although anyone cannot update user details.
              </p>
            </div>
          </div>
        </div>
      </section>
  </div>)
}
