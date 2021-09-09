function dumbwaysJos(jmlBelJos) {
  let minBelJos = 50000;

  if (jmlBelJos >= minBelJos) {
    let diskonJos = (jmlBelJos * 21.1) / 100;
    if (diskonJos >= 20000) {
      diskonJos = 20000;
    }
    totByrJos = jmlBelJos - diskonJos;

    console.log("Belanja : " + jmlBelJos);
    console.log("Diskon : " + diskonJos);
    console.log("Total Bayar : " + totByrJos);
  } else {
    totByrJos = jmlBelJos;
    diskonJos = 0;
    console.log("Belanja : " + jmlBelJos);
    console.log("Diskon : " + diskonJos);
    console.log("Total Bayar : " + totByrJos);
  }
}

function dumbwaysMantap(jmlBelMtp) {
  let minBelMtp = 80000;

  if (jmlBelMtp >= minBelMtp) {
    let diskonMtp = (jmlBelMtp * 30) / 100;
    if (diskonMtp >= 40000) {
      diskonMtp = 40000;
    }
    totByrMtp = jmlBelMtp - diskonMtp;

    console.log("Belanja : " + jmlBelMtp);
    console.log("Diskon : " + diskonMtp);
    console.log("Total Bayar : " + totByrMtp);
  } else {
    totByrMtp = jmlBelMtp;
    diskonMtp = 0;
    console.log("Belanja : " + jmlBelMtp);
    console.log("Diskon : " + diskonMtp);
    console.log("Total Bayar : " + totByrMtp);
  }
}

dumbwaysJos(80000);
console.log("-----------------------------");
dumbwaysMantap(65000);
