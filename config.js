module.exports = {
	Bot: {
		token: process.env.token,
		prefix: "$getServerVar[prefix]",
		intents: "all",
    database: {
      db: require("aoi.db"),
      type: "aoi.db",
      path: "./database/",
      tables: ["main"],
      extraOptions: {
        dbType: "KeyValue"
      }
    }
  }
}
