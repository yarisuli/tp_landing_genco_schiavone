import './App.css'
import Header from './components/Header'
import CommentCarousel from './components/CommentCarousel'
import Footer from './components/Footer'
import GlucoseChart from './components/GlucoseChart'

function App() {
  // ADD YOUR COMMENTS HERE - Easy to modify and add new ones
  const comments = [
    {
      text: "Simple to use and reliable — it makes managing my health stress-free."
    },
    {
      text: "Notifications keep me on track and in control."
    },
    {
      text: "My levels stay updated. It's like a doctor in my pocket!"
    },
    {
      text: "Never forget my meds! The app helps me manage diabetes and blood pressure."
    },
    {
      text: "Real-time graphs and reminders keep my health on track!"
    },
    {
      text: "Now I monitor diabetes and blood pressure easily."
    }
  ]

  return (
      <div className="App">
        <div className="header-section">
          <Header />
          <div className="hero-text">
            <h1>Digital convenience</h1>
            <p>you can feel</p>
          </div>
        </div>
        <div id="comment-carousel-section" className="comment-carousel-section">
          <h2 className="carousel-title">Our users say</h2>
          <CommentCarousel comments={comments} />
        </div>
        <div id="new-section" className="new-section">
          <div className="chart-content">
            <GlucoseChart width={800} height={400} />
          </div>
          <div className="track-content">
            <h2 className="track-title">Real time track</h2>
            <p className="track-text">Track your parameters in real time<br />to make sure everything is in order.</p>
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default App
