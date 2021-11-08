import express from 'express';
// import data from './data.js';
import path from 'path';
import dotenv from 'dotenv';
import  mongoose  from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import process from 'process';
dotenv.config();



const app = express();

//Parsing json data into the body of the request
app.use(express.json());
app.use(express.urlencoded({extended: true})); //Video Create Signin backend

mongoose.connect( process.env.MONGODB_URL || 'mongodb+srv://Victor11:vic11@amazona.tlb1u.mongodb.net/Amazona?retryWrites=true&w=majority',{
    // useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true, 

}).then(() => {
    console.log('our db is connected');
}). catch(err => console.log(err.message)); 

// app.get('/api/products/:id', (req,res) => {
//     // res.send(data.products);
//     const product = data.products.find((x) => x._id === req.params.id);
//     if (product) {
//         res.send(product);
//     } else {
//         res.status(404).send({message: 'Product not Found'});
//     }
// });

// app.get('/api/products', (req,res) => {
//     res.send(data.products);
// })
app.use('/api/uploads', uploadRouter);  
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

const __dirname = path.resolve(); // return current folder
//Contactenate the current folder to the upload folder
app.use('/uploads', express.static(path.join(__dirname, '/uploads'))); 

app.use(express.static(path.join(__dirname, 'frontend','build')));// new

app.get('*', (req, res) => {
    const index = path.join(__dirname, 'frontend', 'build', 'index.html');
    // res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
    res.sendFile(index); 
} ); //new

// app.get('/', (req,res) => {
//     res.send('Server is ready');
// });

// Redirecteed by expressAsyncHandler and shows the error
app.use((err, req, res, next) => {
    res.status(500).send({message:err.message});
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});