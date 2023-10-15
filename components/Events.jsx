'use client';

import Event from "@components/Event";

import LandscapeIcon from '@mui/icons-material/Landscape';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import EventCard from "@components/EventCard";
import { useState } from "react";
import Image from "next/image";

const Events = () => {
    const [showPreview, setShowPreview] = useState(null);

    const events = [
        { id: 1, title: 'Volunteers\' Assemble', desc: 'Whether you\’re a Fresher or a Charity Week Veteran, Volunteers\' Summit is your first stop to find out everything about the campaign and how you can get involved! ', photo: '/assets/images/cw-pics/meeting-2.jpeg', icon: <LandscapeIcon sx={{ fontSize: 50 }} /> },
        { id: 2, title: 'Tube Collects', desc: 'We think of Collects as the true spirit of Charity Week. From chanting the CW vision to rallying the spirits of volunteer collectors, this is an event you should definitely get involved with!', photo: '/assets/images/cw-pics/collects-3.jpg', icon: <VolunteerActivismIcon sx={{ fontSize: 50 }} /> },
        { id: 3, title: 'Speaker Events', desc: 'From inspiring talks to engaging quizzes, the opportunities to educate and inform students across campus of CW, the History of Islam theme and other important topics are endless. We will be hosting multiple speaker events on important and interesting topics that will stay with you long after you have attended.', photo: '/assets/images/cw-pics/speaker-1.jpg', icon: <RecordVoiceOverIcon sx={{ fontSize: 50 }} /> },
        { id: 4, title: 'Sisters Scavenger Hunt', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', icon: <KebabDiningIcon sx={{ fontSize: 50 }} /> },
        { id: 5, title: 'Brothers Footy', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', icon: <KebabDiningIcon sx={{ fontSize: 50 }} /> },
        { id: 6, title: 'Stalls', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', icon: <KebabDiningIcon sx={{ fontSize: 50 }} /> },
        { id: 7, title: 'Trek', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', icon: <KebabDiningIcon sx={{ fontSize: 50 }} /> },
        { id: 8, title: 'Sisters Hype Night', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', icon: <KebabDiningIcon sx={{ fontSize: 50 }} /> },
        { id: 9, title: 'Brothers FIFA Tourny', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', icon: <KebabDiningIcon sx={{ fontSize: 50 }} /> },
        { id: 10, title: 'Auction Dinner', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', icon: <KebabDiningIcon sx={{ fontSize: 50 }} /> },
        { id: 11, title: 'Food Festival', desc: 'The Auction Dinner perfectly captures the essence of CW! You can expect to enjoy all the much loved exciting auction bidding battles, competitions, prizes, speeches and CW farewells!', photo: '/assets/images/cw-pics/dinner-2.png', icon: <KebabDiningIcon sx={{ fontSize: 50 }} /> },


    ]

    const handleMouseEnter = (id) => {
        setShowPreview(id);
    };

    const handleMouseLeave = () => {
        setShowPreview(null);
    };

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