import React from "react";
import styles from "./css/Main.module.css";

export const Home = () => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Design is Every Things</h4>
      {/* <marquee direction="left" >
      Design is Every Things
      </marquee> */}

      {/* //main Poster */}
      <div className={styles.homefirst}>
        {/* //poster */}

        <img
          src="https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg"
          alt=""
          height="100%"
          width="100%"
        />
      </div>

      {/* categaory */}


  <div className={styles.homecategaory}>

    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>









    </div>
  );
};
