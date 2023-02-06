import hotelsRepository from "@/repositories/hotels-repository";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getHotels(req:Request, res:Response) {
    try{
        const hotels = await hotelsRepository.findHotels()

        res.status(httpStatus.OK).send(hotels);
    } catch (error){
        console.log("chegou")
        res.status(httpStatus.NO_CONTENT).send("chegou aqui");
    }
    
}