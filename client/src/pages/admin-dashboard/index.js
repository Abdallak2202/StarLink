import { useForm } from "hooks/useForm/useForm";
import {
  deleteCloudService,
  getCloudService,
  setNewCloudService,
} from "lib/administrator";
import { getRoleFromLocalCookie } from "lib/auth";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/adminDashboard.module.css";

export const AdminDashboard = () => {
  const router = useRouter();
  const { formState, onInputChange, onResetForm } = useForm({
    name: "",
    description: "",
    price: "",
    processor: "",
    RAM: "",
    SSD: "",
    transfer: "",
    slug: "",
    cloudId: "",
  });
  const [barSelector, seTbarSelector] = useState("");

  const { name, description, price, processor, RAM, SSD, transfer, cloudId } =
    formState;
  useEffect(() => {
    async function setRoleState() {
      try {
        const role = await getRoleFromLocalCookie();
        console.log({ role });

        if (role !== "Owner") {
          router.push("/");
        } else {
          return;
        }

        //set coffee stores
      } catch (error) {
        //set error
        console.log("Error", { error });
      }
    }

    setRoleState();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    const data = await setNewCloudService(formState);
    onResetForm();
  };

  const handleMainDisplay = ({ target }) => {
    seTbarSelector(target.name);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const deleteData = await deleteCloudService(cloudId);
    console.log(deleteData);
    onResetForm();
  };

  // const [items, setItems] = useState([]);
  const myDivRef = useRef(null);
  const [show, setShow] = useState(true);
  // const [items, setItems] = useState([])
  const displayTable = async (e) => {
    const data = await getCloudService();
    // setItems(data);
    setShow(!show);
    if (show) {
      let table = "<table>";
      table += `<tr><th>id</th><th>Name</th><th>Description</th><th>Fecha Creacion</th></tr>`;
      data.forEach((line, index) => {
        table = table + `<tr>`;
        table = table + `<td>${line.id}</td>`;
        table = table + `<td>${line.name}</td>`;
        table = table + `<td>${line.description}</td>`;
        table = table + `<td>${line.created_at.split("T")[0]}</td>`;
        table += `</tr>`;
      });
      table += "</table>";
      myDivRef.current.innerHTML = table;
    } else {
      myDivRef.current.innerHTML = null;
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navBar}>
        <ul>
          <li>
            <button onClick={handleMainDisplay} name="general">
              Informacion General
            </button>
          </li>
          <li>
            <button onClick={handleMainDisplay} name="cloud">
              Cloud Services
            </button>
          </li>
        </ul>
      </div>
      {barSelector === "general" && (
        <div>
          <quote>
            "Bienvenido a su panel de control, donde tiene el poder de marcar la
            diferencia. Cada clic, cada decisión, cada acción que realice aquí
            puede tener un impacto positivo en su organización y en las personas
            a las que sirve. Recuerde que usted es el líder de este mundo
            digital". y un gran poder conlleva una gran responsabilidad. Así que
            acepta el desafío, mantente enfocado y nunca pierdas de vista tus
            objetivos. Tienes las herramientas, el talento y la determinación
            para impulsar el cambio y crear un futuro más brillante. ¡Pongámonos
            a trabajar! ¡y haz que suceda!"
          </quote>
        </div>
      )}
      {barSelector === "cloud" && (
        <div>
          <div>
            <div className={styles.addInformation}>
              <header>Adiciona un servicio</header>
              <form onSubmit={handleSubmit}>
                {/* "processor": 2,
  "RAM": 2,
  "SSD": 2,
  "transfer": 2 */}
                <div className={styles.innerForm}>
                  <div className={styles.formElements}>
                    <label for="name" className={styles.labelPrueba}>
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="description" className={styles.labelPrueba}>
                      Description:
                    </label>
                    <input
                      type="text"
                      name="description"
                      value={description}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="price" className={styles.labelPrueba}>
                      Price:
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={price}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="processor" className={styles.labelPrueba}>
                      Processor:
                    </label>
                    <input
                      type="number"
                      name="processor"
                      value={processor}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="RAM" className={styles.labelPrueba}>
                      RAM:
                    </label>
                    <input
                      type="number"
                      name="RAM"
                      value={RAM}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="SSD" className={styles.labelPrueba}>
                      SSD:
                    </label>
                    <input
                      type="number"
                      name="SSD"
                      value={SSD}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="transfer" className={styles.labelPrueba}>
                      transfer:
                    </label>
                    <input
                      type="number"
                      name="transfer"
                      value={transfer}
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <input type="submit" value="Send Request" />
              </form>
            </div>
          </div>

          <div className={styles.backgroundChange}>
            <h2>Servicios Existentes</h2>
            <div ref={myDivRef}></div>
            <button onClick={displayTable}>Press Here</button>
          </div>
          <div className={styles.bgColor}>
            <form onSubmit={handleDelete}>
              <div className={`${styles.formElements}`}>
                <label for="cloudId" className={styles.labelPrueba}>
                  cloudId:
                </label>
                <input
                  type="text"
                  name="cloudId"
                  value={cloudId}
                  onChange={onInputChange}
                />
              </div>
              <input type="submit" value="Send Request" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
