import './CommentSquare.css'

function CommentSquare({ comment }) {
  return (
    <div className="comment-square">
      <div className="comment-content">
        <p className="comment-text">"{comment}"</p>
      </div>
    </div>
  )
}

export default CommentSquare
