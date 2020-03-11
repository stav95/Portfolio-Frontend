import axios from "axios";

function sendLog(client, action) {
  const ip =
    process.env.NODE_ENV === "development" ? "localhost" : "64.227.30.86";
  const port = 3001;

  const params = new URLSearchParams();
  params.append("client", JSON.stringify(client));
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
