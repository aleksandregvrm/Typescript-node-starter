
import express,{Express,Request,Response} from 'express';

import productsRouter from  './routes/productRoutes';

const app:Express = express();
app.get('/',(req:Request,res:Response)=>{
    res.send('dachdddsdisds ylea')
})

const port:number = 5002;

app.use("/api/v1/products", productsRouter);
app.listen(port,()=>{
    console.log(`the app is listening ont the port ${port}`);
})