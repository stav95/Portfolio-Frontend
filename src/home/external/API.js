import axios from "axios";

function sendLog(action) {
  const ip = "64.227.30.86";
  //   const ip = "localhost";
  const port = 3001;

  const params = new URLSearchParams();
  params.append("action", action);

  axios({
    method: "POST",
    url: `http://${ip}:${port}/action`,
    data: params
  })
    .then(res => {
      console.log("res - " + res);
    })
    .catch(err => {
      console.log("error - " + err);
    });
}

export { sendLog };
