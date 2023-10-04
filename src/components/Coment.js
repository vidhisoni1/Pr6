import React, { useState } from 'react';

const Coment = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (author, content) => {
    setComments([...comments, { author, content }]);
  };

  return (
    <div className="comment-section border border-4 border-black col-4 m-auto p-5">
      <center>
      <h2>Comments/review</h2>
    <form
        onSubmit={(e) => {
          e.preventDefault();
          const author = e.target.elements.author.value;
          const content = e.target.elements.content.value;
          handleAddComment(author, content);
          e.target.reset();
        }}
      >
        <br />
        <input type="text" name="author" placeholder="Your Name"   className='mt-3 p-2 text-center' />
        <br />
        <textarea name="content" placeholder="Write any comment"   className='mt-3 p-2 text-center'/>
        <br />
        <button type="submit"  className='mt-3 btn btn-danger'>Add Comment</button>
      </form>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <h4>{comment.author}</h4>
          <p>{comment.content}</p>
        </div>
      ))}
      </center>
    </div>
  );
}

export default Coment;
