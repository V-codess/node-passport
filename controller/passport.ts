import express, {Response, Request} from "express";
import bcrypt from "bcrypt";
import users from "../model/schema"


export const loginController =async (req:Request, res: Response) => {
    try {
       return res.render('login.ejs');
       
    } catch (error) {
        return res.status(400).json({message: error})
    }
}

export const registerController = async (req:Request, res: Response) => {
    try {
       return res.render('register.ejs')
    } catch (error) {
        return res.status(400).json({message: error})
    }
}

export const registerControllerData = async (req:Request, res: Response) => {
    try {
        const {email, password, firstName, lastName, phone} = req.body;
        const userData = await users.findOne({email: email});
        if(userData){
         throw `Already user exists with email ID: ${email}`
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = await users.create({email: email, password: hashedPassword, firstName: firstName, lastName: lastName, phone: phone});
        res.redirect('/login');        
    } catch (error) {
        return res.status(400).json({message: error})
    }
}

export const loginControllerData =async (req:Request, res: Response) => {
    try {
       
    } catch (error) {
        return res.status(400).json({message: error})
    }
}