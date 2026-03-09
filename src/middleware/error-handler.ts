import { NextFunction , Request ,Response } from "express";
import config from "../config";
import {getErrorMessage} from "../utils/utils" ;
import CustomError from "../error/CustomError";

export default function errorHandler (
        error:unknown,
        req:Request ,
        res:Response ,
        next:NextFunction
){
    // res.headersSent
    // This means:
    // The  headers response had already sent to the client.
    // If an error happens after sending the header response, Express cannot send another response.
    // so pass the error to error handler middleware
    

    console.log(res.headersSent) ; 
    // check if the headers of the response are sent only as a partial of the response  .
    //  if  true : 
    // you can't change it or send a new response that contains the error , 
    // so pass the error to the default error handler 
    
    // config.debug >> to simulate that the rea.headersSent is true 
    // to maker sure the condition  works .
    if(res.headersSent || config.debug){
            next(error) ;  //will  go to the default  express error handler if you don't custom one
            return ;
        }

        
    // if the error is instance of the custom error that are defined .   
    if(error instanceof CustomError) {
        res.status(error.statusCode).json({
            error:{
                message: error.message,
                statusCode: error.statusCode,
                code: error.code, 
            },
        });  
        return ;
    }
    

    // if header is not sent  or all request .
    res.status(500).json({
        error:{
            message:getErrorMessage(error) || "An error occurred . Please view logs for more details"
        }
    })



}