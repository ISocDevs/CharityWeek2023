import Image from "next/image"

const Sponsors = () => {

    const sponsors = [
        { key: 1, name: "Tariq Halal", image: "/assets/images/cw-pics/tariqhalal-logo.jpg", link: "https://www.tariqhalalmeats.com/" },
        { key: 2, name: "Tariq Halal", image: "/assets/images/cw-pics/tariqhalal-logo.jpg", link: "https://www.tariqhalalmeats.com/" },
        { key: 3, name: "Tariq Halal", image: "/assets/images/cw-pics/tariqhalal-logo.jpg", link: "https://www.tariqhalalmeats.com/" },
        { key: 4, name: "Tariq Halal", image: "/assets/images/cw-pics/tariqhalal-logo.jpg", link: "https://www.tariqhalalmeats.com/" },
        { key: 5, name: "Tariq Halal", image: "/assets/images/cw-pics/tariqhalal-logo.jpg", link: "https://www.tariqhalalmeats.com/" },
        { key: 6, name: "Tariq Halal", image: "/assets/images/cw-pics/tariqhalal-logo.jpg", link: "https://www.tariqhalalmeats.com/" },
        { key: 7, name: "Tariq Halal", image: "/assets/images/cw-pics/tariqhalal-logo.jpg", link: "https://www.tariqhalalmeats.com/" },
    ]

    return (
        <div className="flex flex-row flex-wrap gap-5 mx-10 flex-center">
            {sponsors.map(sponsor => (
                <SponsorCard name={sponsor.name} image={sponsor.image} link={sponsor.link} />
            ))}
        </div>
    )
}

const SponsorCard = ({ name, image, link }) => {
    return (
        <div className=" lg:w-1/5 max-lg:w-[220px] shadow-2xl">
            <a href={link}>
                <div className="relative w-full">
                    <Image src={image}
                        width={100}
                        height={100}
                        style={{ width: "100%", height: "auto" }} />
                </div>
                <div className="text-center desc">
                    {name}
                </div>
            </a>
        </div>
    )
}

export default Sponsors