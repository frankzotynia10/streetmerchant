module.exports = {
    apps: [
      {
        name: "streetmerchant-bestbuy",
        script: "node",
        args: "build/src/index.js",
        env: {
          DOTENV_CONFIG_PATH: ".env.bb"
        }
      },
      {
        name: "streetmerchant-bhphoto",
        script: "node",
        args: "build/src/index.js",
        env: {
          DOTENV_CONFIG_PATH: ".env.bhphoto"
        }
      },
      {
        name: "streetmerchant-newegg",
        script: "node",
        args: "build/src/index.js",
        env: {
          DOTENV_CONFIG_PATH: ".env.newegg"
        }
      }
    ]
  };
  