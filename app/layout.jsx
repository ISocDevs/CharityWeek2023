import '@styles/globals.css'
import Nav from '@components/Nav'

export const metadata = {
    title: 'Charity Week | Imperial College London',
    description: 'Welcome to Imperial\'s Charity Week 2023 campaign!'
}

const RootLayout = ({children}) => {
  return (
      <hmtl lang='en'>
          <body>
              <div className='main'>
                  <div className='gradient'/>
              </div>
              <main className='app'>
                  <Nav/>
                  {children}
              </main>
          </body>
    </hmtl>
  )
}

export default RootLayout