import Link from 'next/link'

const DonateButton = ({pulse, style}) => {
  return (
      <div>
          <Link href='/' className={`btn ${style ? style : ''}`}>
              Donate
          </Link>
    </div>
  )
}

export default DonateButton