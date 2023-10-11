import Link from 'next/link'

const DonateButton = ({ pulse, style }) => {
  return (
    <div>
      <Link href='https://charityweek.islamic-relief.org.uk/london/imperial-college-london'
        target="_blank"
        className={`btn ${style ? style : ''}`}>
        Donate
      </Link>
    </div>
  )
}

export default DonateButton