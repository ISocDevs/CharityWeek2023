import Image from "next/image"

const EventCard = ({ title, desc, photo }) => {
    return (
        <div className='w-3/6 h-full bg-slate-200/40 border-black border-2 rounded flex flex-col justify-items-center shadow-2xl'>
            <div>
                <Image
                    width={600}
                    height={225}
                    src={photo}
                />
            </div>
            <div className="text-4xl text-zinc-50 text-shadow relative mt-[-50px] mb-[40px] pl-[5px]">
                {title}
            </div>
            <div>
                <p className="desc whitespace-normal pl-[5px]">{desc}</p>
            </div>
        </div>
    )
}

export default EventCard