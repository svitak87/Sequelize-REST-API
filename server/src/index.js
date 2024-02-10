const server = require("./server");
const sequelize = require("./database/database");
const PORT = 3001;

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    server.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
