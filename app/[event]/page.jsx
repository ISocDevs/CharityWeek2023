
import { notFound } from 'next/navigation'
import { events } from "@components/Events"
import Image from 'next/image'
import InfiniteLooper from '@components/InfiniteLooper'
import { promises as fs } from 'fs'
import path from 'path'

const photogallery = async (folder) => {
    return await fs.readdir(imageDirectory).then(imageFilenames => {
        console.log("hello")
        const thing = imageFilenames.map(image => `/assets/images/photo-galleries/${folder}/${image}`)
        console.log(thing)
        // console.log(imageFilenames)
        return thing
    })

}

const page = async ({ params }) => {
    // params: {event : eventName} === /eventName

    const event = events.filter(event => event.name.toLowerCase() === params.event)[0]
    console.log(event)
    if (!event) {
        return notFound()
    }

    const imageDirectory = path.join(process.cwd(), `/public/assets/images/photo-galleries/${event.name}`);
    const imageFilenames = await fs.readdir(imageDirectory).then(filenames => filenames.map(filename => `/assets/images/photo-galleries/${event.name}/${filename}`))
    console.log(imageFilenames)

    // if (params.event != "trek") {
    //     return notFound()
    // }
    return (<div className='flex flex-center'>
        <div className='min-[800px]:mt-40 mt-10 w-3/5 h-fit min-w-[800px]'>
            <div className="bg-gray-500/20 p-2 rounded">
                <InfiniteLooper speed="10" direction="right">
                    {imageFilenames.length > 0 ? imageFilenames.map(img =>
                        <div className="relative px-1 h-[25vh]">
                            <Image src={img}
                                width={100}
                                height={100}

                                // sizes='100vw'
                                quality={100}
                                style={{ borderRadius: '5%', objectFit: 'contain', width: 'auto', height: '100%' }}
                                alt={event.title}
                            />

                        </div>
                    ) : <p>lmao</p>}

                    {/* <img src="https://i.stack.imgur.com/xckZy.jpg" alt="" /> */}
                    {/* <img src="https://i.stack.imgur.com/CVgbr.jpg" alt="" />
                <img src="https://i.stack.imgur.com/7c4yC.jpg" alt="" />
                <img src="https://i.stack.imgur.com/RTiml.jpg" alt="" />
                <img src="https://i.stack.imgur.com/xckZy.jpg" alt="" />
                <img src="https://i.stack.imgur.com/CVgbr.jpg" alt="" />
                <img src="https://i.stack.imgur.com/7c4yC.jpg" alt="" />
                <img src="https://i.stack.imgur.com/RTiml.jpg" alt="" /> */}
                </InfiniteLooper>
            </div>
            <div className="head_text text-center green_gradient mb-5">{event.title}</div>
            <hr />
            <div className="desc text-center">{event.desc}</div>
        </div>

    </div>
    )
}
// <div className='flex flex-center bg-green-700'>
//     <div className='min-[800px]:mt-40 mt-10 w-3/5 h-fit bg-red-500'>
// <div id="photobanner_container">
//     <div className="photobanner">
//         <img src="https://i.stack.imgur.com/xckZy.jpg" alt="" />
//         <img src="https://i.stack.imgur.com/CVgbr.jpg" alt="" />
//         <img src="https://i.stack.imgur.com/7c4yC.jpg" alt="" />
//         <img src="https://i.stack.imgur.com/RTiml.jpg" alt="" />
//         <img src="https://i.stack.imgur.com/xckZy.jpg" alt="" />
//         <img src="https://i.stack.imgur.com/CVgbr.jpg" alt="" />
//         <img src="https://i.stack.imgur.com/7c4yC.jpg" alt="" />
//         <img src="https://i.stack.imgur.com/RTiml.jpg" alt="" />
//     </div>
{/* </div> */ }
{/* <div id="container">
                    <div class="photobanner">
                        <img src="https://i.stack.imgur.com/xckZy.jpg" alt="">
                        <img src="https://i.stack.imgur.com/CVgbr.jpg" alt="">
                        <img src="https://i.stack.imgur.com/7c4yC.jpg" alt="">
                        <img src="https://i.stack.imgur.com/RTiml.jpg" alt="">
                        <img src="https://i.stack.imgur.com/xckZy.jpg" alt="">
                        <img src="https://i.stack.imgur.com/CVgbr.jpg" alt="">
                        <img src="https://i.stack.imgur.com/7c4yC.jpg" alt="">
                        <img src="https://i.stack.imgur.com/RTiml.jpg" alt="">
                    </div>
                </div> */}
{/* // </div> */ }


{/* <div className='relative aspect-video'>
                    <Image
                        src={event.photo}
                        fill
                        quality={100}
                        style={{ objectFit: 'cover' }}
                        alt={event.title} />
                </div> */}
// </div >

export default page