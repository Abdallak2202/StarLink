import cls from "classnames";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={cls("container", "grid", styles.gridFooter)}>
        <div className={styles.logoCol}>
          <Link href="/" className={styles.footerLogo}>
            <img class="logo" src="starLinkFondoNegro.jfif" alt="starkLink logo" />
          </Link>
          <ul className={styles.socialLinks}>
            <li>
              <Link className={styles.footerLink} href="#">
                <ion-icon
                  className={styles.socialIcon}
                  name="logo-instagram"
                ></ion-icon>
              </Link>
            </li>
            <li>
              <Link className={styles.footerLink} href="#">
                <ion-icon
                  className={styles.socialIcon}
                  name="logo-facebook"
                ></ion-icon>
              </Link>
            </li>
            <li>
              <Link className={styles.footerLink} href="#">
                <ion-icon
                  className={styles.socialIcon}
                  name="logo-twitter"
                ></ion-icon>
              </Link>
            </li>
          </ul>
          <p className={styles.copyright}>
            copyright &copy; 2027 by starkLink, Inc. All rights reserved.
          </p>
        </div>
        <div>
          <p className={styles.footerHeading}>Contact us</p>
          <address className={styles.contacts}>
            <p className={styles.address}>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <Link className={styles.footerLink} href="tel:415-201-6370">
                415-201-6370{" "}
              </Link>
              <br />
              <Link
                className={styles.footerLink}
                href="mailto:hello@omnifood.com"
              >
                hello@starkLink.com
              </Link>
            </p>
          </address>
        </div>
        {/* <nav>
          <p className={styles.footerHeading}>Account</p>
          <ul className={styles.footerNav}>
            <li>
              <Link className={styles.footerLink} href="#">
                Create account
              </Link>
            </li>
            <li>
              <Link className={styles.footerLink} href="#">
                Sign in
              </Link>
            </li>
            <li>
              <Link className={styles.footerLink} href="#">
                iOS app
              </Link>
            </li>
            <li>
              <Link className={styles.footerLink} href="#">
                Android app
              </Link>
            </li>
          </ul>
        </nav> */}
        <nav>
          <p className={styles.footerHeading}>Company</p>
          <ul className={styles.footerNav}>
            <li>
              <Link className={styles.footerLink} href="/quienes-somos">
                Conoce mas de Nosotros
              </Link>
            </li>
            <li>
              <Link className={styles.footerLink} href="#">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link className={styles.footerLink} href="#">
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <p className={styles.footerHeading}>Ayuda</p>
          <ul className={styles.footerNav}>
            <li>
              <Link className={styles.footerLink} href="#">
              Soporte
              </Link>
            </li>
            {/* <li>
              <Link className={styles.footerLink} href="#">
                Help center
              </Link>
            </li>
            <li>
              <Link className={styles.footerLink} href="#">
                Privacy & terms
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
