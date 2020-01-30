const creds = require(__dirname + '/creds.js')
const mongodb = require('mongodb').MongoClient;
const mongoLocation = `mongodb+srv://${creds.mongo.user}:${creds.mongo.password}@${creds.mongo.cluser}-xreps.mongodb.net/test?retryWrites=true&w=majority`;

function mongoquery (operation, dataset, params, callback) {
  let datasets = ['users', 'profiles']
  let operations = ['create', 'readone', 'readmany', 'update']
  if (datasets.indexOf(dataset) === -1) {
    callback("invalid dataset")
  }
  if (operations.indexOf(operation) === -1) {
    callback("invalid operation")
  }
  mongodb.connect(mongoLocation, function (err, client){
    if (err) {
      console.log(err)
      response = "Error: " + err
    }
    else {
      let db = client.db('db')
      let collection = db.collection(dataset) 
      switch (operation) {
        case 'create':
          collection.insertOne("doc", (e, res) => {
            let response = e ? "Error: " + e : "Success"
            callback(response)
          })
        break
        case 'update':
          collection.updateOne("filter", "update", (e) => {
            let response = e ? "Error: " + e : "Success"
            callback(response)
          })
        break
        case 'readmany':
          let many = []
          collection.find("filter").forEach((document) => {
            many.push(document["dataIwant"])
          })
        break
        case 'readone':
          collection.findOne("filter", (document) => {
            callback(document)
          })
        break;
      }
    }
  })
  client.close();
}

module.exports = mongoquery
