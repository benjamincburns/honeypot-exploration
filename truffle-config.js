module.exports = {
  networks: {
    "local": {
      host: "127.0.0.1",
      port: 8545,
      network_id: "5777"
    },
    "forked": {
      host: "127.0.0.1",
      port: 8545,
      network_id: "5778"
    }
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};
