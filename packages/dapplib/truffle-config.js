require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note office come hunt option fresh trial'; 
let testAccounts = [
"0xb7fc8a50bc2b658ede64af261316c6df09ee4c2a6588a56ae044e57a5f7feee9",
"0x6f063425f2da87bf8a6df957587dcccefa55f64bedf9ecd465557896735651a3",
"0x6cf29ce79cccd3274841917f810209fd0912fe379db1ffb56e640ad7002b7f5c",
"0xb8f02f424a90e1772f58756ae922a7a3f0004aecc40665ece17e579a6f6e4ca8",
"0xa3df0acb4addc1d579ec2b996eddc3bf31b604acd274443ca1769ea2dceef09f",
"0xf161b2aa2bed6830adbc0a7f1c6552c9336eaf610733d3bac181b80695f7ffa2",
"0x800b69244a770926aa7a303ac740494f59e890080926af9e7e9a127c7c770ce3",
"0xe4355cf5ad8ee21b6d40e87d52e45b5fafdab71df5f343cea7169c42e42e6305",
"0xc1eb6b99df052a5919fef8b21c38d6e1a34b6f3199c7ec4e32e8c38dd2c48823",
"0x05400f903fa419fddb93c202f48115f2cfd7d46a5a2c6f30b427ba290934f002"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

