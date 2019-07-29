import Web3 = require('web3');
import Config = require('../config/config');

class IdentityRegistry {

  web3: Web3;
  config: Config;
  contract: Contract;

  constructor(web3: Web3, config: Config) {
    this.web3 = web3;
    this.config = config;
    this.contract = new web3.eth.Contract(config.IdentityRegistry.address);
  }

  async add(id: string, metadata: string): Promise<object> {
    //NOTE: Assumption is defaultAccount for now
    return await this.contract.methods.add(id, metadata).send({ from: this.web3.eth.defaultAccount });
  }

  async remove(id: string): Promise<object> {
    return await this.contract.method.remove(id).send({ from: this.web3.eth.defaultAccount });    
  }
  
  async update(id: string, metadata: string): Promise<object> {
    return await this.contract.method.update(id, metadata).send({ from: this.web3.eth.defaultAccount });
  }

  async removeSelf(sender: string=this.web3.eth.defaultAccount): Promise<object> {
    return await this.contract.method.removeSelf().send({ from: sender });

  }

  async isHuman(id: string): Promise<boolean> {
    return await this.contract.methods.isHuman(id).call();
  }
  

}

export = IdentityRegistry;