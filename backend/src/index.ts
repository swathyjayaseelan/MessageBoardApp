import { createApp } from "./app.js";

const port = 8000;

const app = createApp();

app.listen(port, () => {
  console.log("now listening in 8000");
});
