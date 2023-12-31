import Image from "next/image";
import moment from "moment";

// Changes to the length of this list needs to reflect in the $num_events variable in globals.scss file, there is no way to do this automatically currently
export const events = [
    { id: 1, name: "assemble", title: 'Volunteers\' Assemble', desc: 'Whether you\’re a Fresher or a Charity Week Veteran, Volunteers\' Summit is your first stop to find out everything about the campaign and how you can get involved! ', photo: '/assets/images/cw-pics/meeting-2.jpeg', dates: [moment('2023-10-16')], },
    {
        id: 2, name: "collects", title: 'Tube Collects', desc: 'We think of Collects as the true spirit of Charity Week. From chanting the CW vision to rallying the spirits of volunteer collectors, this is an event you should definitely get involved with!', photo: '/assets/images/Collects_preview.jpeg', dates: [moment('2023-10-18')],
    },
    { id: 3, name: "speakers", title: 'Speaker Event', desc: 'From inspiring talks to engaging quizzes, the opportunities to educate and inform students across campus of CW, the History of Islam theme and other important topics are endless. We will be hosting multiple speaker events on important and interesting topics that will stay with you long after you have attended.', photo: '/assets/images/cw-pics/speaker-1.jpg', dates: [moment('2023-10-20')], },
    { id: 4, name: "scavengers", title: 'Sisters Scavenger Hunt', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/scavenger_hunt_preview.png', dates: [moment('2023-10-21')], },
    { id: 5, name: "footy", title: 'Brothers Footy', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/football_preview1.jpg', dates: [moment('2023-10-22')], },
    { id: 6, name: "stalls", title: 'Stalls', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/Stalls_preview.jpeg', dates: [moment('2023-10-23'), moment('2023-10-27')], },
    { id: 7, name: "trek", title: 'Trek', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/Trek_preview.jpg', dates: [moment('2023-10-28')], },
    { id: 8, name: "hype", title: 'Sisters Hype Night', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/hype_night_preview.jpg', dates: [moment('2023-11-01')], },
    { id: 9, name: "fifa", title: 'Brothers FIFA Tourny', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/fifa_preview.png', dates: [moment('2023-11-03')], },
    { id: 10, name: "dinner", title: 'Auction Dinner', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/dinner_preview.png', dates: [moment('2023-11-05')], },
    // { id: 11, name: "festival", title: 'Food Festival', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/Food_Festival_preview.jpg', dates: [moment('2023-11-07')], },
]

const grid_template_columns = "1fr ".repeat(events.length)
let showcase_vars = { "--gtc": grid_template_columns };
events.map((event) => {
    const var_name = "--box" + event.id.toString()
    const gt = "1fr ".repeat(+event.id - 1) + "3fr " + "1fr ".repeat(+events.length - +event.id)
    showcase_vars[var_name] = gt
})


const Events = () => {
    return (
        <>
            <h2 className="text-center text-green-600 text-4xl mb-5 head_text green_gradient">Events</h2>
            <div className="showcase max-[799px]:hidden" style={showcase_vars}>
                {events.map(event => <Showbox event={event} />)}
            </div>
            <div className="test min-[799px]:hidden">
                {events.map(event => <Showbox event={event} />)}
            </div>
        </>
    )
}

const Showbox = ({ event }) => {
    let dates = event.dates[0].format('ddd Do')
    if (event.dates.length > 1) {
        dates += ' - ' + event.dates[1].format('ddd Do')
    }
    const text = event.title + '\n' + dates
    return (
        <div className={`showbox ${'box' + event.id}`} data-text={text}>
            <Image src={event.photo}
                objectFit="cover"
                layout="fill"
                priority
                quality={100}
                alt={event.title}
            />
        </div>)
}

export default Events