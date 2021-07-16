import styles from "../styles/pages/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about_container}>
        <div className={styles.about_imageC}>
          <img
            className={styles.about_image}
            src="img/logo.png"
            height="350px"
          ></img>
        </div>
        <div className={styles.about_right}>
          <h1 className={styles.about_heading}>About Eagles Club</h1>
          <p className={styles.about_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            gravida sodales urna at rutrum. Fusce pharetra ipsum sed tempor
            malesuada. Duis accumsan congue elit, eu gravida leo. Nulla accumsan
            sapien leo, tempor mattis elit sollicitudin at. Ut vestibulum
            iaculis blandit. Fusce auctor eros quis luctus dictum. In faucibus
            dui lectus, ac dapibus sem ullamcorper sed. Etiam in urna ex. Sed
            semper vehicula quam non convallis. Sed malesuada eget est sit amet
            egestas. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Quisque convallis est justo, eu placerat metus mollis non.
            Duis quis sem ante.
          </p>
        </div>
      </div>

      <div className={styles.founders_container}>
        <h2 className={styles.founders_heading}>About The Founders</h2>
        <div className={styles.founders_flex}>
          <div className={styles.about_imageC}>
            <img
              className={styles.about_image}
              src="img/founders.png"
              height="350px"
            ></img>
          </div>
          <div className={styles.about_right}>
            <p className={styles.about_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              gravida sodales urna at rutrum. Fusce pharetra ipsum sed tempor
              malesuada. Duis accumsan congue elit, eu gravida leo. Nulla
              accumsan sapien leo, tempor mattis elit sollicitudin at. Ut
              vestibulum iaculis blandit. Fusce auctor eros quis luctus dictum.
              In faucibus dui lectus, ac dapibus sem ullamcorper sed. Etiam in
              urna ex. Sed semper vehicula quam non convallis. Sed malesuada
              eget est sit amet egestas. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Quisque convallis est justo, eu placerat
              metus mollis non. Duis quis sem ante.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.visionC}>
        <div>
          <h2 className={styles.vision_heading}>Our Vision</h2>
        </div>
        <div>
          <p className={styles.vision_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            gravida sodales urna at rutrum. Fusce pharetra ipsum sed tempor
            malesuada. Duis accumsan congue elit, eu gravida leo. Nulla accumsan
            sapien leo, tempor mattis elit sollicitudin at. Ut vestibulum
            iaculis blandit. Fusce auctor eros quis luctus dictum. In faucibus
            dui lectus, ac dapibus sem ullamcorper sed. Etiam in urna ex. Sed
            semper vehicula quam non convallis. Sed malesuada eget est sit amet
            egestas. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Quisque convallis est justo, eu placerat metus mollis non.
            Duis quis sem ante.
          </p>
        </div>
      </div>

      <div className={styles.images}>
        <img src="img/img1.png"></img>
        <img src="img/img2.png"></img>
        <img src="img/img3.png"></img>
      </div>

      <div className={styles.visionC}>
        <div>
          <h2 className={styles.vision_heading}>Our Mission</h2>
        </div>
        <div>
          <p className={styles.vision_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            gravida sodales urna at rutrum. Fusce pharetra ipsum sed tempor
            malesuada. Duis accumsan congue elit, eu gravida leo. Nulla accumsan
            sapien leo, tempor mattis elit sollicitudin at. Ut vestibulum
            iaculis blandit. Fusce auctor eros quis luctus dictum. In faucibus
            dui lectus, ac dapibus sem ullamcorper sed. Etiam in urna ex. Sed
            semper vehicula quam non convallis. Sed malesuada eget est sit amet
            egestas. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Quisque convallis est justo, eu placerat metus mollis non.
            Duis quis sem ante.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
