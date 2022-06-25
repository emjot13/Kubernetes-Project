import redis from 'redis';


const connectToRedis = () => { 
    try {
        const client = redis.createClient({ url: 'redis://redis-db-cluster:6379' });
        return client
      } catch (err) {
        console.error(err);
    }
};

const client = connectToRedis();

export { client };