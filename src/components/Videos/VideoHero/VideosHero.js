import React from "react";
import styles from "./ImagesHero.module.css";

import { ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const doughnutOptions = {
  plugins: {
    legend: {
      labels: {
        color: "black",
      },
    },
  },
};

const ImagesHero = ({ storage, bandwidth, profile }) => {

  const formattedStorage = (storage / (1024 * 1024)).toFixed(2);
  const formattedBandwidth = (bandwidth / (1024 * 1024 * (-1))).toFixed(2);
  console.log(formattedStorage, formattedBandwidth);

  const storageData = {
    labels: ["Used Storage (MB)", "Remaining Storage (MB)"],
    datasets: [
      {
        data: [50 - formattedStorage, formattedStorage],
        backgroundColor: ["#E0E0E0", "#FFCE56"],
      },
    ],
  };

  const bandwidthData = {
    labels: ["Used Bandwidth (MB)", "Remaining Bandwidth (MB)"],
    datasets: [
      {
        data: [formattedBandwidth, 100 - formattedBandwidth],
        backgroundColor: ["#E0E0E0", "#36A2EB"],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={`${styles.title} mb-4`}>Welcome {profile.username}, to CloudReel</h1>
        <p className={styles.description}>
          Total Storage: 50 Mb
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Remaining Storage: {formattedStorage} Mb
        </p>
        <p className={styles.description}>
          Total Daily Bandwith: 100 Mb &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Remaining Bandwith: {100 - formattedBandwidth} Mb
        </p>
      </div>

      <div className={styles.imageContainer}>

        <Doughnut data={storageData} options={doughnutOptions} />
        <Doughnut data={bandwidthData} options={doughnutOptions} />
      </div>
    </div>
  );
};

export default ImagesHero;
