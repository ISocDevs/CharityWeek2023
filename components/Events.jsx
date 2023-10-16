import Image from "next/image";

export const events = [
    { id: 1, name: "assemble", title: 'Volunteers\' Assemble', desc: 'Whether you\’re a Fresher or a Charity Week Veteran, Volunteers\' Summit is your first stop to find out everything about the campaign and how you can get involved! ', photo: '/assets/images/cw-pics/meeting-2.jpeg', },
    { id: 2, name: "collects", title: 'Tube Collects', desc: 'We think of Collects as the true spirit of Charity Week. From chanting the CW vision to rallying the spirits of volunteer collectors, this is an event you should definitely get involved with!', photo: '/assets/images/cw-pics/collects-3.jpg', },
    { id: 3, name: "speakers", title: 'Speaker Events', desc: 'From inspiring talks to engaging quizzes, the opportunities to educate and inform students across campus of CW, the History of Islam theme and other important topics are endless. We will be hosting multiple speaker events on important and interesting topics that will stay with you long after you have attended.', photo: '/assets/images/cw-pics/speaker-1.jpg', },
    { id: 4, name: "scavengers", title: 'Sisters Scavenger Hunt', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', },
    { id: 5, name: "footy", title: 'Brothers Footy', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', },
    { id: 6, name: "stalls", title: 'Stalls', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/Stalls_preview.jpeg', },
    { id: 7, name: "trek", title: 'Trek', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/Trek_preview.jpg', },
    { id: 8, name: "hype", title: 'Sisters Hype Night', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', },
    { id: 9, name: "fifa", title: 'Brothers FIFA Tourny', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', },
    { id: 10, name: "dinner", title: 'Auction Dinner', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', },
    { id: 11, name: "festival", title: 'Food Festival', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/Food_Festival_preview.jpg', },
]
const Events = () => {
    return (
        <>
            <h2 className="text-center text-green-600 text-4xl mb-5 head_text green_gradient">Events</h2>
            <div className="showcase">
                {events.map(event => <Showbox event={event} />)}
            </div>
        </>
    )
}

const Showbox = ({ event }) => {
    return (
        <div className={`showbox ${'box' + event.id}`} data-text={event.title}>
            <Image src={event.photo}
                objectFit="cover"
                layout="fill"
                quality={100}
                alt="lmao"
            />
        </div>)
}

export default Events