import { useState } from "react";
//import axios from "axios";





// const cookies = Object.fromEntries(
//   document.cookie.split("; ").map(c => {
//     const [key, ...v] = c.split("=");
//     return [key, decodeURIComponent(v.join("="))];
//   })
// );

export  const CommentForm=()=> {
  const [userId, setUserId] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [stars, setStars] = useState("");
    const [comment, setComment] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await fetch("https://star-link-back-end-production.up.railway.app/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, serviceType, stars, comment }),
        });
        alert("Comment submitted successfully!");
      } catch (error) {
        alert(error.message);
      }
  
      setUserId("");
      setServiceType("");
      setStars("");
      setComment("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </label>
        <br />
        <label>
          Service Type:
          <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
            <option value="">Select a type</option>
            <option value="Cloud Server">Cloud Server</option>
            <option value="Dedicated Server">Dedicated Server</option>
            <option value="Domain">Domain</option>
            <option value="Housing">Housing</option>
          </select>
        </label>
        <br />
        <label>
          Stars:
          <select value={stars} onChange={(e) => setStars(e.target.value)}>
            <option value="">Select a rating</option>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
        </label>
        <br />
        <label>
          Comment:
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
  export default CommentForm;