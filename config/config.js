const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "CHARANS_secret_key",
  mongoUri: process.env.DATABASE_URL || "mongodb+srv://charanzrapeti:Hello@123@expense-tracker.ewj5bze.mongodb.net/?retryWrites=true&w=majority",
};



// const config = {
//   env: process.env.NODE_ENV || 'development',
//   port: process.env.PORT || 3000,
//   jwtSecret: process.env.JWT_SECRET || "CHARANS_secret_key",
//   mongoUri: process.env.MONGODB_URI ||
//     process.env.MONGO_HOST ||
//     'mongodb://' + (process.env.IP || 'localhost') + ':' +
//     (process.env.MONGO_PORT || '27017') +
//     '/mernproject'
// }

export default config
