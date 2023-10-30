import '@styles/globals.scss'
import Nav from '@components/Nav'
import { Providers } from "./providers";

export const metadata = {
    title: 'Charity Week | Imperial College London',
    description: 'Welcome to Imperial\'s Charity Week 2023 campaign!'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' href='/assets/images/CW23_logo_notext_cropped.png' />
            </head>
            <body>
                <Providers>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout