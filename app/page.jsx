import DonateButton from "@components/DonateButton"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SearchIcon from '@mui/icons-material/Search';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Events from "@components/Events";
import Contact from "@components/Contact";
import Sponsors from "@components/Sponsors";


const Home = () => {
  return (<>
    <section id="home" className='w-full flex-center flex-col mb-10 pt-40'>
      <h1 className='head_text text-center'>
        <div>Welcome to</div>
        <div className='orange_gradient'>ICL Charity Week 2023!</div>
      </h1>
      <div>
        <p className="desc text-center">Last year we raised £39,504.92 for schools, health centres and orphans around
          the world</p>
        <div className="flex-center my-10">
          <DonateButton style='pulse large' />
        </div>
        <hr />
      </div>
    </section>
    <section className="mb-10 pt-40 -mt-20" id="about">
      <div className="flex justify-center items-start max-lg:flex-col">
        <div className="m6  flex flex-col">
          <div className="icon-block">
            <h1 className="flex-center text-blue-700 text-9xl">
              <SupervisorAccountIcon sx={{ fontSize: 60 }} />
            </h1>
            <h2 className="flex-center text-3xl">What is Charity Week?</h2>
            <p className="light flex-center text-center desc w-4/6 mx-auto">Imperial College Charity Week is an annual campaign that comprises of
              everything
              from activities and challenges to talks and bucket collections. The proceeds raised go towards many
              noble causes around the world.</p>
          </div>
        </div>

        <div className="m6 flex flex-col">
          <div className="icon-block">
            <h1 className="flex-center text-blue-700 text-9xl">
              <SearchIcon sx={{ fontSize: 60 }} />
            </h1>
            <h2 className="flex-center text-3xl">Our vision</h2>
            <p className="light flex-center text-center desc w-4/6 mx-auto">Through CW, we envision a vehicle to spread Dawah across campus and beyond.
              We wish to ensure the true message of CW lives beyond the initial hype of the campaign and the
              efforts of charity continue long into the future. </p>
            <p>&nbsp;</p>
          </div>
        </div>

        <div className="m6 flex flex-col">
          <div className="icon-block">
            <h1 className="flex-center text-blue-700 text-9xl">
              <AccessibilityNewIcon sx={{ fontSize: 60 }} />
            </h1>
            <h2 className="flex-center text-3xl">How you can help</h2>
            <p className="light flex-center text-center desc w-4/6 mx-auto">From tutoring at our admissions days and coming along to our Thames Bridges
              Trek
              to taking part in our online quizzes and virtual auction dinner, your time and dedication will
              make all the difference </p>
          </div>
        </div>
      </div>
      <div className="flex flex-center pt-20 -mb-10">
        <video width="75%" height="75%" controls>
          <source src="/assets/videos/trailer-2021.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
    <section className="w-full pt-24 -mt-20" id="events">
      <Events />
    </section>
    <section className="w-full flex-center flex-col mb-10 -mt-20 pt-20" id="contact">
      <h2 className="text-center text-orange-500 text-4xl mb-5 head_text orange_gradient">Contact Us</h2>
      <div>
        <Contact />
      </div>
    </section>
    <section className="w-full flex-center flex-col mb-10 pt-20 -mt-20" id="sponsors">
      <h2 className="text-center text-orange-500 text-4xl mb-5 head_text orange_gradient">Our Sponsors</h2>
      <div className="w-full">
        <Sponsors />
      </div>
    </section>
  </>
  )
}

export default Home