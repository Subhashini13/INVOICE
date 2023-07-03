
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kanthsubhashini:AKTcf7I41qYNidxz@cluster0.2zgdpec.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    var db = client.db("BMBC");
    const x = await db.collection("orders").findOne({}, function(err, result) {
        if (err) throw err;
    });
    return x.batches_id;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().then((result)=>{
    client.connect();
    var db = client.db("BMBC");
    db.collection("batchs").find({_id : {$in : result}}, function(err, result) {
        if (err) throw err;
        console.log("ok");
    });
})
run().catch(console.dir);