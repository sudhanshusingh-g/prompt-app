import Nav from '@components/Nav';
import '@styles/global.css';

export const metadata={
    title:"Promptopia",
    description:"Discover and Share AI Prompts"
}

function Layout({children}) {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Layout