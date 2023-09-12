import DonateButton from "@components/DonateButton"

const Home = () => {
  return (<>
    <section id="home" className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        <div className='mt-20'>Welcome to</div>
        <div className='orange_gradient'>ICL Charity Week 2023!</div>
      </h1>
      <div className="-mb-10">
        <p className="desc text-center">Last year we raised £39,504.92 for schools, health centres and orphans around
          the world</p>
        <div className="flex-center mt-5">
          <DonateButton style='pulse large' />
        </div>
        <hr className="mt-7 -mb-7" />
      </div>
    </section>
  )
}

export default Home