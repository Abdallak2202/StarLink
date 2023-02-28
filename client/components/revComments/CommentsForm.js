import { useState } from "react";
import { FaStar } from "react-icons/fa"; //  icono de estrella 

export const CommentForm = () => {
  const [userId, setUserId] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [stars, setStars] = useState(0); // valor inicial en 0
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
    setStars(0); //  establecer el valor en 0
    setComment("");
  };

  const starIcons = []; //  arreglo vacío para almacenar los iconos de estrella

  // crear los iconos de estrella
  for (let i = 1; i <= 5; i++) {
    starIcons.push(
      <FaStar
        key={i}
        size={30}
        color={i <= stars ? "yellow" : "gray"} // color de estrella seleccionada o no
        onClick={() => setStars(i)} //  evento onClick para actualizar el estado de las estrellas seleccionadas
        style={{ cursor: "pointer" }} //  estilo de cursor para que parezca un botón
      />
    );
  }

  return (
    <form className="w-full max-w-sm mx-auto mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="user-id">
          User:
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="user-id"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <br />
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="service-type">
          Service Type:
        </label>
        <select
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="service-type"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
        >
          <option value="">Select a type</option>
          <option value="Cloud Server">Cloud Server</option>
          <option value="Dedicated Server">Dedicated Server</option>
          <option value="Domain">Domain</option>
          <option value="Housing">Housing</option>
        </select>
      </div>

      <br />
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="stars">
          Stars:
        </label>
        <div style={{ display: 'flex', flexDirection: 'row' }} >{starIcons}</div>
      </div>
      <br />
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
          Comment:
        </label>
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <br />
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
type="submit" >
      <button type="submit">Submit Review</button>
      </div>
    </form>
  );
};
export default CommentForm;