const { createClient } = require("redis");

// const client = await createClient()
//   .on("error", (err) => console.log("Redis Client Error", err))
//   .connect();

// await client.set("key", "value");
// const value = await client.get("key");
// client.destroy();

const redisClient = createClient({
    url: 'redis://localhost:6379'
});

redisClient.on('error', (err) =>{
    console.log('Error : ', err);
});

async function main(){
    await redisClient.connect();
    console.log('connected to redis client on PORT 6379');
}

main();

module.exports = redisClient;