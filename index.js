const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const cors = require('cors')

const productsRouter = require( './routes/products' );
const orderRouter = require('./routes/orders');

const DBconnection = require('./config/db')

dotenv.config({ path: './config/.env' })

DBconnection()

const app = express()

app.use(express.json())

// API routes for admin
app.use('/products', productsRouter)

//API routes for client
app.use('/order', orderRouter)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
  app.use(cors())
}

app.use(express.static(path.join(process.cwd(), 'public')))

// built-in Express middleware
// Set up form data on req.body
app.use( express.urlencoded( { extended: false } ) );


const PORT = process.env.PORT || 3000;


const server = app.listen(PORT, error  => {
  if(error){
    console.error(error.message)
    return
  }

  console.log(
    `We are live on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
})