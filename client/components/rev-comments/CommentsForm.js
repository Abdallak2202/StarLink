import { useState } from "react";
//import axios from "axios";



export  const CommentForm=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("https://star-link-back-end-production.up.railway.app/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, comment }),
      });
      alert("Comment submitted successfully!");
    } catch (error) {
      alert(error.message);
    }

    setName("");
    setEmail("");
    setComment("");
  };

  
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
  
        <div className='container'>
        <h1>Leave a Comment</h1>
  
        <form onSubmit={handleSubmit}>
          {/* <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label> */}
          <div class="mb-6">
      <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name </label>
      <input  value={name}
              onChange={(event) => setName(event.target.value)} type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  
          <div class="mb-6">
      <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email </label>
      <input  type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)} id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  
  
          {/* <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label> */}
          
  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment</label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." value={comment}
              onChange={(event) => setComment(event.target.value)}></textarea>
  
  
          {/* <label>
            Comment:
            <textarea
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </label> */}
  
          <button type="submit">Submit Comment</button>
        </form>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
  export default CommentForm;