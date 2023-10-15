import Image from "next/image"

const Sponsors = () => {

    const sponsors = [
        { key: 1, name: "Bubble CiTea", image: "/assets/images/bubble_citea_logo.jpg", link: "https://www.bubblecitea.com/menu/" },
        { key: 2, name: "MooBoo", image: "/assets/images/mooboo_logo.jpg", link: "https://www.mooboo.co", ad: "11% Student Discount!" },
        { key: 3, name: "Love Crafts Crochet", image: "/assets/images/lovecrafts_logo.png", link: "https://www.tariqhalalmeats.com/", ad: "Check out their YouTube channel!", adlink: "https://youtube.com/@lovecraftscom?si=Fnny8prRJPcD01be" },
        { key: 4, name: "Tariq Halal", image: "/assets/images/cw-pics/tariqhalal-logo.jpg", link: "https://www.tariqhalalmeats.com/" },
        { key: 5, name: "Tariq Halal", image: "/assets/images/cw-pics/tariqhalal-logo.jpg", link: "https://www.tariqhalalmeats.com/" },
        { key: 6, name: "Tariq Halal", image: "/assets/images/cw-pics/tariqhalal-logo.jpg", link: "https://www.tariqhalalmeats.com/" },
        { key: 7, name: "Tariq Halal", image: "/assets/images/cw-pics/tariqhalal-logo.jpg", link: "https://www.tariqhalalmeats.com/" },
    ]

    return (
        <div className="flex flex-row flex-wrap gap-5 mx-10 flex-center">
            {sponsors.map(sponsor => (
                <SponsorCard sponsor={sponsor} />
            ))}
        </div>
    )
}

const SponsorCard = ({ sponsor }) => {
    return (
        <div className=" lg:w-1/5 max-lg:w-[220px] shadow-xl hover:shadow-2xl transition-shadow">
            <a href={sponsor.link} target="_blank">
                <div className="relative w-full aspect-square">
                    {sponsor.ad &&
                        (<div className="z-10 absolute w-full text-center ">
                            <div className="bg-pink-300 w-fit flex flex-center mx-auto rounded px-2 animate-bounce">
                                <a href={sponsor.adlink ? sponsor.adlink : sponsor.link} target="_blank">
                                    {sponsor.ad}
                                </a>
                            </div>
                        </div>)}
                    <Image src={sponsor.image}
                        fill
                        quality={100}
                        style={{ objectFit: 'cover' }}
                        alt={sponsor.name} />
                </div>
                <div className="text-center text-lg text-gray-600 sm:text-xl my-1">
                    {sponsor.name}
                </div>
            </a>
        </div>
    )
}

export default Sponsors