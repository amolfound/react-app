/*
import redis from 'redis';
import {promisify} from 'util';

let client = redis.createClient();
const getAsync = promisify(client.get).bind(client);


client.on("error", function (err) {
    console.log("Error " + err);
});
*/

export async function getNodeId() {
	return "abc"
  //return getAsync('nodeId');
}

export async function getEthAddress() {
  return "abc"
  // return getAsync('nodeId');
}

export async function getEthBalance() {
  return "abc"
	// return getAsync('ethBalance');
}

export async function getLinBalance() {
  return "abc"
	// return getAsync('linBalance');
}

export async function getUsedStorage() {
  return "abc"
	// return getAsync('usedStorage');
}

export async function getTotalStorage() {
  return "abc"
	// return getAsync('totalStorage');
}

export async function getUsedBandwidth() {
  return "abc"
	// return getAsync('usedBandwidth');
}


/*
// TODO: add filtering based on size, time, rate
const getOffers = function getOffer(namespace, cid, geo, quantity = 10) {
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
*/


/*
getNodeId()
.then(console.log);
*/
