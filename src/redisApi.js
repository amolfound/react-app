const redis = require("redis");
var client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);


client.on("error", function (err) {
    console.log("Error " + err);
});

async function getNodeId() {
	return getAsync('nodeId');
}

async function getEthBalance() {
	return getAsync('ethBalance');
}

async function getLinBalance() {
	return getAsync('linBalance');
}

async function getUsedStorage() {
	return getAsync('usedStorage');
}

async function getTotalStorage() {
	return getAsync('totalStorage');
}

async function getUsedBandwidth() {
	return getAsync('usedBandwidth');
}

// TODO: add filtering based on size, time, rate
async function getClaimedOffers(namespace, cid, geo, quantity = 10) {
  return client.scanQuery('offers').limit(quantity).match(`${namespace || '*'}:${cid || '*'}:${geo || '*'}*`).execute().then(data => {
    let fields = data.fields
    let objs = data.objects
    let offers = objs.map(obj => {
      let [namespace, cid, geo] = obj.id.split(':')
      let offer = { namespace, cid, geo }
      fields.map((field, index) => {
        offer[field] = obj.fields[index]
      })
      return offer
    })

    return offers
  })
}

// TODO: add filtering based on size, time, rate
async function getUnclaimedOffers(namespace, cid, geo, quantity = 10) {
  return client.scanQuery('offers').limit(quantity).match(`${namespace || '*'}:${cid || '*'}:${geo || '*'}*`).execute().then(data => {
    let fields = data.fields
    let objs = data.objects
    let offers = objs.map(obj => {
      let [namespace, cid, geo] = obj.id.split(':')
      let offer = { namespace, cid, geo }
      fields.map((field, index) => {
        offer[field] = obj.fields[index]
      })
      return offer
    })

    return offers
  })
}



/*
getNodeId()
.then(console.log);
*/

module.exports = {
	getNodeId,
	getEthBalance,
	getLinBalance,
}