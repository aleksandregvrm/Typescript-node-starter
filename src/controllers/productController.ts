import {Request,Response} from 'express';

const getAllProducts = (req:Request,res:Response) => {
    res.send('dachi ylea')
}
const getSingleProduct = (req:Request,res:Response) => {
    res.send('dachi ylea yle ylea gasagebia?')
}

export {getAllProducts,getSingleProduct};