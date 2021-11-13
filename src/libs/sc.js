const Web3 = require("web3")
const ABI = require('./ABI')

module.exports = {
    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            window.ethereum.enable()
        }
    },

    async load(contract) {
        await this.loadWeb3()
        window.contract = await this.loadContract(contract)
        return await this.getCurrentAccount()
    },

    async loadContract(contract) {
        return await new window.web3.eth.Contract(ABI, contract)
    },

    async getCurrentAccount() {
        const accounts = await window.web3.eth.getAccounts()
        return accounts[0]
    },

    async register(address) {
        const account = await this.getCurrentAccount()
        await window.contract.methods.registerMember(address).send({ from: account })
    },

    async getInfluencer(account) {
        const influencer = await window.contract.methods.getPartnerForMember(account).call()
        return influencer
    }
}
