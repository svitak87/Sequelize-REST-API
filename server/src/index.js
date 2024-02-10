const server = require("./server");
const { sequelize } = require("./database/database");
const PORT = process.env.PORT || 3001;

const main = async () => {
  try {
    await sequelize.sync({ force: false });
    server.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
