import { useState, useEffect } from 'react'
import CommentSquare from './CommentSquare'
import './CommentCarousel.css'

function CommentCarousel({ comments }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => 
  //       prevIndex === comments.length - 1 ? 0 : prevIndex + 1
  //     )
  //   }, 4000) // Change comment every 4 seconds

  //   return () => clearInterval(interval)
  // }, [comments.length])

  const nextComment = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === comments.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevComment = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="comment-carousel">
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevComment}>
          ‹
        </button>
        
        <div className="carousel-content">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {comments.map((comment, index) => (
              <CommentSquare
                key={index}
                comment={comment.text}
              />
            ))}
            {/* Add first comment again if last one is alone */}
            {currentIndex === comments.length - 1 && (
              <CommentSquare
                key="duplicate-first"
                comment={comments[0].text}
              />
            )}
          </div>
        </div>
        
        <button className="carousel-btn next-btn" onClick={nextComment}>
          ›
        </button>
      </div>
      
      {/* <div className="carousel-dots">
        {comments.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  )
}

export default CommentCarousel
