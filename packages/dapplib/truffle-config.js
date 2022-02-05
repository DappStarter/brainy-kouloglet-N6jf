require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name remember saddle pulse hunt derive bone true'; 
let testAccounts = [
"0x275f08fd1a058aec19f6f356f393ab0e4325e1fcd9edf90a9dba94ceabc4f319",
"0x4f5ce015e8687a636376f18b32e99a7d7be20da889acd5fdc01ba2c2fb61932c",
"0x22857cff1bfeceef398c5485afe729dd5ba22f7488109d01d1641183c7243c9c",
"0xfab2911e6671c3ebfbd24d7d2d2e91bcf40ad120b69602f1ce92774573bbe5fa",
"0xb83f66d8bc3d49fcdf94146c46b06375a676fb0ecaba633118e9d5b9470e2294",
"0xe68b69d30f38ea6a575807365e7db7ede4d5ad9fc3583245125811791e7bc334",
"0x8099e822110983569fb05c79670b73da3e36db69d187317d27fd7f3a9c884491",
"0xe0d1796f55aab2ac893e681de5e91d99d15e8e9b3347086269cb1c6d4a689511",
"0x6408622d19138ed55e3734fb19ca69126f8981e316c6d1f65bf98dd1581fc7c5",
"0x513963a28794bd76c3b1d7cac24396dd35b6fbefa7e19d574567a90480bd4b6c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

