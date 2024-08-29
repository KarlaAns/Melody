import redis from 'ioredis';

const client = new redis({
  host: 'localhost',
  port: 6379,
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

export default client;
