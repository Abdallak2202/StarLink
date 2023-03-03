import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"; //  icono de estrella 
import s from "components/revComments/reviews.module.css";
import { getIdFromLocalCookie, getTokenFromLocalCookie, getUserFromLocalCookie} from "lib/auth";

export const CommentForm = ({onFormActivation}) => {
  // const [formActive, setFormActive] = useState(false);
  const [id, setId] = useState("Invitado");
  const [service, setService] = useState("");
  const [stars, setStars] = useState(0); // valor inicial en 0
  const [comment, setComment] = useState("");

  useEffect(() => {
    const handleName = async () =>{
      const user = await  getUserFromLocalCookie();
      setId(user)
    }
  handleName()
    
  }, [])




  const handleSubmit = async (event) => {
    event.preventDefault();
   
    console.log('entre');
    const jwt = await getTokenFromLocalCookie();
    const user = await getIdFromLocalCookie();
    // setId(user)
    if(jwt ){
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
           Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({ user, service, stars, comment }),
      });
      alert("Comment submitted successfully!");
      console.log('hecho');
      onFormActivation()
    } catch (error) {
      alert(error.message);
    }
  }
    // setId("");
    setService("");
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
    <div  className={s.container}>
    <form className="w-full max-w-2xl mx-auto mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-100 font-bold mb-2 bg-indigo-500 text-4xl" htmlFor="user-id">
          {id} 
        </label>
        {/* <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-900  text-4xl leading-tight focus:outline-none focus:shadow-outline"
          id="user-id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        /> */}
      </div>
      <br />
      <div className="mb-4 ">
        <label className="block text-gray-100 font-bold mb-2 text-4xl bg-indigo-500" htmlFor="service-type">
          Tipo de Servicio:
        </label>
        <select
          className="appearance-none border rounded w-full text-4xl  py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          id="service-type"
          value={service}
          onChange={(e) => setService(e.target.value)}
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
        <label className="block bg-indigo-500 text-gray-100 font-bold mb-2 text-4xl" htmlFor="stars">
          Stars:
        </label>
        <div style={{ display: 'flex', flexDirection: 'row' }} >{starIcons}</div>
      </div>
      <br />
      <div className="mb-4">
        <label className="block text-gray-100 bg-indigo-500 font-bold mb-2 text-4xl" htmlFor="comment">
          Comentarios:
        </label>
        <textarea
          className="appearance-none border rounded w-full text-4xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <br />
      <div className="text-4xl bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
type="submit" >
      <button type="submit">Subir Comentario</button>
      </div>
    </form>
    </div>
  );
};
export default CommentForm;