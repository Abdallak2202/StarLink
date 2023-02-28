import { useForm } from "hooks/useForm/useForm";
import {
  deleteCloudService,
  deleteDedicatedService,
  deleteDomainService,
  deleteHosting,
  deleteHostingService,
  deleteUser,
  getCloudService,
  getDedicatedService,
  getDomainService,
  getHostingService,
  getUserTable,
  setNewCloudService,
  setNewdedicatedService,
  setNewDomainService,
  setNewHostingService,
  setNewUser,
  uploadCloudService,
  uploadDedicatedService,
} from "lib/administrator";
import { getRoleFromLocalCookie } from "lib/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/adminDashboard.module.css";

export const AdminDashboard = () => {
  const router = useRouter();
  const { formState, onInputChange, onResetForm, setFormState } = useForm({
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
    OS: "",
    serverId: "",
    TLD: "",
    registration: "",
    expiration: "",
    floorspace: "",
    racks: "",
    consumption: "",
    hostingId: "",
    domainId: "",
    username: "",
    password: "",
    FirstName: "",
    LastName: "",
    Adress: "",
    Phone: "",
    email: "",
    userId: "",
    cloudIdUpload: "",
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
    expiration,
    floorspace,
    racks,
    consumption,
    slug,
    hostingId,
    domainId,
    username,
    password,
    FirstName,
    LastName,
    Adress,
    Phone,
    email,
    userId,
    cloudIdUpload,
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

  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.click();
  }, []);

  const handleSubmit = async (e, formName) => {
    e.preventDefault();
    if (formName === "form1") {
      const data = await setNewCloudService(formState);
    }
    if (formName === "form2") {
      console.log(formState);
      const data = await setNewdedicatedService(formState);
    }
    if (formName === "form3") {
      const data = await setNewDomainService(formState);
    }
    if (formName === "form4") {
      const data = await setNewHostingService(formState);
    }
    if (formName === "form5") {
      const data = await setNewUser(formState);
    }
    onResetForm();
  };

  const handleMainDisplay = ({ target }) => {
    seTbarSelector(target.name);
  };

  const handleDelete = async (e, formName) => {
    e.preventDefault();
    if (formName === "form1") {
      const deleteData1 = await deleteCloudService(cloudId);
    }
    if (formName === "form2") {
      const deleteData1 = await deleteDedicatedService(serverId);
    }
    if (formName === "form3") {
      const deleteData1 = await deleteDomainService(domainId);
    }
    if (formName === "form4") {
      const deleteData1 = await deleteHosting(hostingId);
    }
    if (formName === "form5") {
      const deleteData1 = await deleteUser(userId);
    }

    onResetForm();
  };

  // const [items, setItems] = useState([]);
  const myDivRef = useRef(null);
  const [show, setShow] = useState(false);
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

  const myFourthDivRef = useRef(null);
  const [showHosting, setShowHosting] = useState(true);

  const displayHostingTable = async (e) => {
    const data4 = await getHostingService();
    console.log(data4);
    setShowHosting(!showHosting);
    if (showHosting) {
      let table = "<table>";
      table += `<tr><th>id</th><th>Name</th><th>Description</th><th>Fecha Creacion</th></tr>`;
      data4.forEach((line, index) => {
        table = table + `<tr>`;
        table = table + `<td>${line.id}</td>`;
        table = table + `<td>${line.name}</td>`;
        table = table + `<td>${line.description}</td>`;
        table = table + `<td>${line.created_at.split("T")[0]}</td>`;
        table += `</tr>`;
      });
      table += "</table>";
      myFourthDivRef.current.innerHTML = table;
    } else {
      myFourthDivRef.current.innerHTML = null;
    }
  };

  const myFifthDivRef = useRef(null);
  const [showUser, setShowUser] = useState(true);

  const displayUserTable = async (e) => {
    const data5 = await getUserTable();
    setShowUser(!showHosting);
    if (showUser) {
      let table = "<table>";
      table += `<tr><th>id</th><th>UserName</th><th>Email</th><th>Fecha Creacion</th></tr>`;
      data5.forEach((line, index) => {
        table = table + `<tr>`;
        table = table + `<td>${line.id}</td>`;
        table = table + `<td>${line.username}</td>`;
        table = table + `<td>${line.email}</td>`;
        table = table + `<td>${line.created_at.split("T")[0]}</td>`;
        table += `</tr>`;
      });
      table += "</table>";
      myFifthDivRef.current.innerHTML = table;
    } else {
      myFifthDivRef.current.innerHTML = null;
    }
  };

  // uploades
  const [selectedValue, setSelectedValue] = useState("");
  const [attributeValue, setattributeValue] = useState("");

  function handleSelectChange({ target }) {
    // Set the selected value to the value of the selected option
    setSelectedValue(target.value);
  }

  function handleAttributeChange({ target }) {
    // Set the selected value to the value of the selected option
    setattributeValue(target.value);
  }

  //   const onSelectChange = (e) => {
  //     setFormState({
  //         ...formState,
  //         [ selectedValue]: attributeValue
  //     });
  // }

  const handleModification = async (e, formName) => {
    e.preventDefault();
    const dataJson = { [selectedValue]: attributeValue };
    console.log(selectedValue);
    if (formName === "form1") {
      const uploadData1 = await uploadCloudService(cloudIdUpload, dataJson);
    }
    if (formName === "form2") {
      const uploadData1 = await uploadDedicatedService(cloudIdUpload, dataJson);
    }

    onResetForm();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navBar}>
        <ul>
          <li>
            <button ref={buttonRef} onClick={handleMainDisplay} name="general">
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
          <li>
            <button onClick={handleMainDisplay} name="Hosting">
              Hosting
            </button>
          </li>
          <li>
            <button onClick={handleMainDisplay} name="User">
              Users
            </button>
          </li>
        </ul>
      </div>
      {barSelector === "general" && (
        <div>
          <div className={styles.blockquoteWrapper}>
            <div className={styles.blockquote}>
              <h1>
                "Bienvenido a su panel de control, donde tiene el poder de
                marcar la diferencia. Cada clic, cada decisión, cada acción que
                realice aquí puede tener un impacto positivo en su organización
                y en las personas a las que sirve. Recuerde que usted es el
                líder de este mundo digital". y un gran poder conlleva una gran
                responsabilidad. Así que acepta el desafío, mantente enfocado y
                nunca pierdas de vista tus objetivos. Tienes las herramientas,
                el talento y la determinación para impulsar el cambio y crear un
                futuro más brillante. ¡Pongámonos a trabajar! ¡y haz que
                suceda!"
              </h1>
              <h4>&mdash;StarLink</h4>
            </div>
          </div>
        </div>
      )}
      {barSelector === "cloud" && (
        <div>
          <div>
            <div className={styles.addInformation}>
              <header className={styles.brandTitle}>Adiciona un servicio</header>
              <form onSubmit={(e) => handleSubmit(e, "form1")}>
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
                <input type="submit" value="Adicionar Elemento" />
              </form>
            </div>
          </div>

          <div className={styles.backgroundChange}>
            <h2 className={styles.brandTitle } style={{ color: '#444'}}>Servicios Existentes</h2>
            <div ref={myDivRef}></div>
            <button onClick={displayTable}>ver</button>
          </div>
          <div className={styles.bgColor}>
            <form onSubmit={(e) => handleDelete(e, "form1")}>
              <h2>Borrar Información</h2>
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
              <input type="submit" value="Borrar Elemento" />
            </form>
          </div>
          <div className={styles.bgColor}>
            <form onSubmit={(e) => handleModification(e, "form1")}>
              <h2>Actualizar Información</h2>
              <div className={`${styles.formElements}`}>
                <label for="propiedad" className={styles.labelPrueba}>
                  Propiedad
                </label>
                <select value={selectedValue} onChange={handleSelectChange}>
                  <option value="name">name</option>
                  <option value="description">description</option>
                  <option value="price">price</option>
                  <option value="processor">processor</option>
                  <option value="price">price</option>
                  <option value="RAM">RAM</option>
                  <option value="SSD">SSD</option>
                  <option value="transfer">transfer</option>
                </select>

                <div>
                  <label for="attributeValue" className={styles.labelPrueba}>
                    Atribute
                  </label>
                  <input
                    type="text"
                    name="attributeValue"
                    value={attributeValue}
                    onChange={handleAttributeChange}
                  />
                </div>
                <div>
                  <label for="cloudIdUpload" className={styles.labelPrueba}>
                    cloudId:
                  </label>
                  <input
                    type="text"
                    name="cloudIdUpload"
                    value={cloudIdUpload}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <input type="submit" value="Actualizar Elemento" />
            </form>
          </div>
        </div>
      )}
      {barSelector === "servers" && (
        <div>
          <div>
            <div className={styles.addInformation}>
              <header>Adiciona un servicio</header>
              <form onSubmit={(e) => handleSubmit(e, "form2")}>
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
                <input type="submit" value="Adicionar Elemento" />
              </form>
            </div>
          </div>

          <div className={styles.backgroundChange}>
            <h2>Servicios Existentes</h2>
            <div ref={mySecondDivRef}></div>
            <button onClick={displayServerTable}>ver</button>
          </div>
          <div className={styles.bgColor}>
            <form onSubmit={(e) => handleDelete(e, "form2")}>
              <h2>Borrar Informacion</h2>
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
              <input type="submit" value="Borrar Elemento" />
            </form>
          </div>
          <div className={styles.bgColor}>
            <form onSubmit={(e) => handleModification(e, "form2")}>
              <h2>Actualizar Información</h2>
              <div className={`${styles.formElements}`}>
                <label for="propiedad" className={styles.labelPrueba}>
                  Propiedad
                </label>
                <select value={selectedValue} onChange={handleSelectChange}>
                  <option value="brand">brand</option>
                  <option value="description">description</option>
                  <option value="price">price</option>
                  <option value="OS">OS</option>
                  <option value="processor">processor</option>
                  <option value="RAM">RAM</option>
                  <option value="SSD">SSD</option>
                </select>

                <div>
                  <label for="attributeValue" className={styles.labelPrueba}>
                    Atribute
                  </label>
                  <input
                    type="text"
                    name="attributeValue"
                    value={attributeValue}
                    onChange={handleAttributeChange}
                  />
                </div>
                <div>
                  <label for="cloudIdUpload" className={styles.labelPrueba}>
                    cloudId:
                  </label>
                  <input
                    type="text"
                    name="cloudIdUpload"
                    value={cloudIdUpload}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <input type="submit" value="Actualizar Elemento" />
            </form>
          </div>
        </div>
      )}
      {barSelector === "Domains" && (
        <div>
          <div>
            <div className={styles.addInformation}>
              <header>Adiciona un servicio</header>
              <form onSubmit={(e) => handleSubmit(e, "form3")}>
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
                <input type="submit" value="Adicionar Elemento" />
              </form>
            </div>
          </div>

          <div className={styles.backgroundChange}>
            <h2>Servicios Existentes</h2>
            <div ref={myThirdDivRef}></div>
            <button onClick={displayDomainTable}>ver</button>
          </div>
          <div className={styles.bgColor}>
            <form onSubmit={(e) => handleDelete(e, "form3")}>
              <h2>Borra Información</h2>
              <div className={`${styles.formElements}`}>
                <label for="domainId" className={styles.labelPrueba}>
                  DomainId:
                </label>
                <input
                  type="text"
                  name="domainId"
                  value={domainId}
                  onChange={onInputChange}
                />
              </div>
              <input type="submit" value="Borrar Elemento" />
            </form>
          </div>
        </div>
      )}
      {barSelector === "Hosting" && (
        <div>
          <div>
            <div className={styles.addInformation}>
              <header>Adiciona un servicio</header>
              <form onSubmit={(e) => handleSubmit(e, "form4")}>
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
                    <label for="floorspace" className={styles.labelPrueba}>
                      FloorSpace:
                    </label>
                    <input
                      type="number"
                      name="floorspace"
                      value={floorspace}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="racks" className={styles.labelPrueba}>
                      Racks:
                    </label>
                    <input
                      type="number"
                      name="racks"
                      value={racks}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="consumption" className={styles.labelPrueba}>
                      Consumption:
                    </label>
                    <input
                      type="number"
                      name="consumption"
                      value={consumption}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="slug" className={styles.labelPrueba}>
                      Slug:
                    </label>
                    <input
                      type="text"
                      name="slug"
                      value={slug}
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <input type="submit" value="Adicionar Elemento" />
              </form>
            </div>
          </div>

          <div className={styles.backgroundChange}>
            <h2>Servicios Existentes</h2>
            <div ref={myFourthDivRef}></div>
            <button onClick={displayHostingTable}>ver</button>
          </div>
          <div className={styles.bgColor}>
            <form onSubmit={(e) => handleDelete(e, "form4")}>
              <h2>Borrar información</h2>
              <div className={`${styles.formElements}`}>
                <label for="hostingId" className={styles.labelPrueba}>
                  HostingId:
                </label>
                <input
                  type="text"
                  name="hostingId"
                  value={hostingId}
                  onChange={onInputChange}
                />
              </div>
              <input type="submit" value="Borrar Elemento" />
            </form>
          </div>
        </div>
      )}
      {barSelector === "User" && (
        <div>
          <div>
            <div className={styles.addInformation}>
              <header>Adiciona un Usuario</header>
              <form onSubmit={(e) => handleSubmit(e, "form5")}>
                {/* username: '',
    email: '',
    password: '',
    FirstName: '',
    LastName: '',
    Address: '',
    Phone: '' */}
                <div className={styles.innerForm}>
                  <div className={styles.formElements}>
                    <label for="username" className={styles.labelPrueba}>
                      UserName
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="password" className={styles.labelPrueba}>
                      password:
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="email" className={styles.labelPrueba}>
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="FirstName" className={styles.labelPrueba}>
                      FirstName:
                    </label>
                    <input
                      type="text"
                      name="FirstName"
                      value={FirstName}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="LastName" className={styles.labelPrueba}>
                      LastName:
                    </label>
                    <input
                      type="text"
                      name="LastName"
                      value={LastName}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="Adress" className={styles.labelPrueba}>
                      Address:
                    </label>
                    <input
                      type="text"
                      name="Adress"
                      value={Adress}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label for="Phone" className={styles.labelPrueba}>
                      Phone:
                    </label>
                    <input
                      type="text"
                      name="Phone"
                      value={Phone}
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <input type="submit" value="Adicionar Elemento" />
              </form>
            </div>
          </div>

          <div className={styles.backgroundChange}>
            <h2>Servicios Existentes</h2>
            <div ref={myFifthDivRef}></div>
            <button onClick={displayUserTable}>ver</button>
          </div>
          <div className={styles.bgColor}>
            <form onSubmit={(e) => handleDelete(e, "form5")}>
              <h2>Borrar información</h2>
              <div className={`${styles.formElements}`}>
                <label for="userId" className={styles.labelPrueba}>
                  UserId:
                </label>
                <input
                  type="text"
                  name="userId"
                  value={userId}
                  onChange={onInputChange}
                />
              </div>
              <input type="submit" value="Borrar Elemento" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
