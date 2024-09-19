const app = require(`${__dirname}/app`)

const port = 5000;

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
