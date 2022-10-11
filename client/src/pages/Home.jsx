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
          // src="https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg"
          alt=""
          src="https://www.kibrispdr.org/data/620/hd-picture-nature-0.jpg"
          height="100%"
          width="100%"
        />
      </div>

      {/* categaory */}

      <div className={styles.homecategaory}>

         <marquee direction="left" scrollamount="10" >
      Design is Every Things   Top Festival day : 20% off
      </marquee>
        <div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jsfOz6TrkDEKHQ-lsbu60vGDyQy1AdF8I8s_XgYS2GsHiewhnN01xTtCOVAfuP1p6es&usqp=CAU"
              alt=""
            />
            <p>75% off</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jsfOz6TrkDEKHQ-lsbu60vGDyQy1AdF8I8s_XgYS2GsHiewhnN01xTtCOVAfuP1p6es&usqp=CAU"
              alt=""
            />
            <p>10% off</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jsfOz6TrkDEKHQ-lsbu60vGDyQy1AdF8I8s_XgYS2GsHiewhnN01xTtCOVAfuP1p6es&usqp=CAU"
              alt=""
            />
             <p>30% Off</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jsfOz6TrkDEKHQ-lsbu60vGDyQy1AdF8I8s_XgYS2GsHiewhnN01xTtCOVAfuP1p6es&usqp=CAU"
              alt=""
            />
             <p>50% Off</p>
          </div>
        </div>
      </div>
    </div>
  );
};
