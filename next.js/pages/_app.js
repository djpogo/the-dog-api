import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
      <header className="App-header">
        <h1>The Dog Api</h1>
      </header>
      <Component {...pageProps} />
  </div> 
}

export default MyApp
