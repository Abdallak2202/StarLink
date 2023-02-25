import { useForm } from "hooks/useForm/useForm";
import { setNewCloudService } from "lib/administrator";
import { getRoleFromLocalCookie } from "lib/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "../styles/adminDashboard.module.css";

export const AdminDashboard = () => {
  const router = useRouter();
  const {formState,onInputChange, onResetForm,} = useForm({ name:"",
  description: "",
  price: null,
  processor: null,
  RAM: null,
  SSD: null,
  transfer: null,
slug:""
});

  const {name,description,price,processor,RAM,SSD,transfer} = formState
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formState);
    const data = await setNewCloudService (formState) 
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navBar}>(1) HTML</div>
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
                <input type="text" name="name"  value={name}  onChange={onInputChange}/>
              </div>
              <div className={styles.formElements}>
                <label for="description" className={styles.labelPrueba}>
                  Description:
                </label>
                <input type="text" name="description" value={description}  onChange={onInputChange} />
              </div>
              <div className={styles.formElements}>
                <label for="price" className={styles.labelPrueba}>
                  Price:
                </label>
                <input type="number" name="price" value={price}  onChange={onInputChange}/>
              </div>
              <div className={styles.formElements}>
                <label for="processor" className={styles.labelPrueba}>
                  Processor:
                </label>
                <input type="number" name="processor" value={processor}  onChange={onInputChange} />
              </div>
              <div className={styles.formElements}>
                <label for="RAM" className={styles.labelPrueba} >
                  RAM:
                </label>
                <input type="number" name="RAM" value={RAM}  onChange={onInputChange} />
              </div>
              <div className={styles.formElements}>
                <label for="SSD" className={styles.labelPrueba}>
                  SSD:
                </label>
                <input type="number" name="SSD" value={SSD}  onChange={onInputChange}/>
              </div>
              <div className={styles.formElements}>
                <label for="transfer" className={styles.labelPrueba}>
                  transfer:
                </label>
                <input type="number" name="transfer" value={transfer}  onChange={onInputChange}/>
              </div>
            </div>
            <input type="submit" value="Send Request" />
          </form>
        </div>
      </div>
      <div>(3) HTML</div>
      <div>(4) HTML</div>
    </div>
  );
};

export default AdminDashboard;
