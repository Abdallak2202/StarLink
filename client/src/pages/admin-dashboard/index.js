import { useForm } from "hooks/useForm/useForm";
import {
  deleteCloudService,
  deleteDedicatedService,
  deleteDomainService,
  getCloudService,
  getDedicatedService,
  getDomainService,
  setNewCloudService,
  setNewdedicatedService,
  setNewDomainService,
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
    brand: "",
    OS:"",
    serverId: "",
    TLD:"",
    registration:"",
    expiration:""
  });
  const [barSelector, seTbarSelector] = useState("");

  const {
    name,
    description,
    price,
    processor,
    RAM,
    SSD,
    transfer,
    cloudId,
    brand,
    OS,
    serverId,
    TLD,
    registration,
    expiration
  } = formState;

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

  const handleSubmit = async (e,formName) => {
    e.preventDefault();
  if(formName==='form1'){
    const data = await setNewCloudService(formState);
  }
  if(formName==='form2'){
    const data = await setNewdedicatedService(formState);
}
if(formName==='form3'){
  const data = await setNewDomainService(formState);
}
    onResetForm();
  };

  const handleMainDisplay = ({ target }) => {
    seTbarSelector(target.name);
  };

  const handleDelete = async (e,formName) => {
    e.preventDefault();
    if(formName==='form1'){
      const deleteData1 = await deleteCloudService(cloudId);
    }
    if(formName==='form2'){
      const deleteData1 =await deleteDedicatedService(serverId);
    }
    if(formName==='form3'){
      const deleteData1 =await deleteDomainService(serverId);
    }
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

  const mySecondDivRef = useRef(null);
  const [showSever, setShowServer] = useState(true);

  const displayServerTable = async (e) => {
    const data2 = await getDedicatedService();
 console.log(data2);
 setShowServer(!showSever);
    if (showSever) {
      let table = "<table>";
      table += `<tr><th>id</th><th>Brand</th><th>Description</th><th>Fecha Creacion</th></tr>`;
      data2.forEach((line, index) => {
        table = table + `<tr>`;
        table = table + `<td>${line.id}</td>`;
        table = table + `<td>${line.brand}</td>`;
        table = table + `<td>${line.description}</td>`;
        table = table + `<td>${line.created_at.split("T")[0]}</td>`;
        table += `</tr>`;
      });
      table += "</table>";
      mySecondDivRef.current.innerHTML = table;
    } else {
      mySecondDivRef.current.innerHTML = null;
    }
  };

  const myThirdDivRef = useRef(null);
  const [showDomain, setShowDomain] = useState(true);

  const displayDomainTable = async (e) => {
    const data3 = await getDomainService();
 console.log(data3);
 setShowDomain(!showDomain);
    if (showDomain) {
      let table = "<table>";
      table += `<tr><th>id</th><th>TLD</th><th>Description</th><th>Fecha Creacion</th></tr>`;
      data3.forEach((line, index) => {
        table = table + `<tr>`;
        table = table + `<td>${line.id}</td>`;
        table = table + `<td>${line.TLD}</td>`;
        table = table + `<td>${line.description}</td>`;
        table = table + `<td>${line.created_at.split("T")[0]}</td>`;
        table += `</tr>`;
      });
      table += "</table>";
      myThirdDivRef.current.innerHTML = table;
    } else {
      myThirdDivRef.current.innerHTML = null;
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
          <li>
            <button onClick={handleMainDisplay} name="servers">
              Dedicated Servers
            </button>
          </li>
          <li>
            <button onClick={handleMainDisplay} name="Domains">
              Domains
            </button>
          </li>
        </ul>
      </div>
      {barSelector === "general" && (
        <div>
          <q>
            "Bienvenido a su panel de control, donde tiene el poder de marcar la
            diferencia. Cada clic, cada decisión, cada acción que realice aquí
            puede tener un impacto positivo en su organización y en las personas
            a las que sirve. Recuerde que usted es el líder de este mundo
            digital". y un gran poder conlleva una gran responsabilidad. Así que
            acepta el desafío, mantente enfocado y nunca pierdas de vista tus
            objetivos. Tienes las herramientas, el talento y la determinación
            para impulsar el cambio y crear un futuro más brillante. ¡Pongámonos
            a trabajar! ¡y haz que suceda!"
          </q>
        </div>
      )}
      {barSelector === "cloud" && (
        <div>
          <div>
            <div className={styles.addInformation}>
              <header>Adiciona un servicio</header>
              <form onSubmit={(e)=>handleSubmit(e,'form1')}>
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
                <input type="submit" value="Send Request" name="prueba"/>
              </form>
            </div>
          </div>

          <div className={styles.backgroundChange}>
            <h2>Servicios Existentes</h2>
            <div ref={myDivRef}></div>
            <button onClick={displayTable}>Press Here</button>
          </div>
          <div className={styles.bgColor}>
            <form onSubmit={(e)=>handleDelete(e,'form2')}>
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
      {barSelector === "servers" && (
        <div>
          <div>
            <div className={styles.addInformation}>
              <header>Adiciona un servicio</header>
              <form onSubmit={(e)=>handleSubmit(e,'form2')}>
                {/* "processor": 2,
  "RAM": 2,
  "SSD": 2,
  "transfer": 2 */}
                <div className={styles.innerForm}>
                  <div className={styles.formElements}>
                    <label for="brand" className={styles.labelPrueba}>
                      Brand:
                    </label>
                    <input
                      type="text"
                      name="brand"
                      value={brand}
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
                    <label for="OS" className={styles.labelPrueba}>
                      OS:
                    </label>
                    <input
                      type="text"
                      name="OS"
                      value={OS}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="processor" className={styles.labelPrueba}>
                      Processor:
                    </label>
                    <input
                      type="text"
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
                </div>
                <input type="submit" value="Send Request" />
              </form>
            </div>
          </div>

          <div className={styles.backgroundChange}>
            <h2>Servicios Existentes</h2>
            <div ref={mySecondDivRef}></div>
            <button onClick={displayServerTable}>Press Here</button>
          </div>
          <div className={styles.bgColor}>
            <form onSubmit={(e)=>handleDelete(e,'form2')}>
              <div className={`${styles.formElements}`}>
                <label for="serverId" className={styles.labelPrueba}>
                  serverId:
                </label>
                <input
                  type="text"
                  name="serverId"
                  value={serverId}
                  onChange={onInputChange}
                />
              </div>
              <input type="submit" value="Send Request" />
            </form>
          </div>
        </div>
      )}
      {barSelector === "Domains" && (
        <div>
          <div>
            <div className={styles.addInformation}>
              <header>Adiciona un servicio</header>
              <form onSubmit={(e)=>handleSubmit(e,'form3')}>
                {/* "processor": 2,
  "RAM": 2,
  "SSD": 2,
  "transfer": 2 */}
                <div className={styles.innerForm}>
                  <div className={styles.formElements}>
                    <label for="TLD" className={styles.labelPrueba}>
                      TLD:
                    </label>
                    <input
                      type="text"
                      name="TLD"
                      value={TLD}
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
                    <label for="registration" className={styles.labelPrueba}>
                      Registration:
                    </label>
                    <input
                      type="date"
                      name="registration"
                      value={registration}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="expiration" className={styles.labelPrueba}>
                      Expiration:
                    </label>
                    <input
                      type="date"
                      name="expiration"
                      value={expiration}
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
            <div ref={myThirdDivRef}></div>
            <button onClick={displayDomainTable}>Press Here</button>
          </div>
          <div className={styles.bgColor}>
            <form onSubmit={(e)=>handleDelete(e,'form3')}>
              <div className={`${styles.formElements}`}>
                <label for="serverId" className={styles.labelPrueba}>
                  serverId:
                </label>
                <input
                  type="text"
                  name="serverId"
                  value={serverId}
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
