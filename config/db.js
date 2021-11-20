
const mongoose = require('mongoose')


mongoose.set( 'returnOriginal', false );
mongoose.set( 'runValidators', true );

const { NODE_ENV } = process.env

const CONN_URI = NODE_ENV === 'development' ? 'mongodb://localhost:27017/shop' : `Connection string is not found`


const DBconnection = async () => {
  const conn = await mongoose
    .connect(CONN_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch(err => {
      console.log(`For some reasons we couldn't connect to the DB`.red, err)
    })

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = DBconnection
