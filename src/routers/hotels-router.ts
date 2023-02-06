import { getHotels } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Request, Response, Router } from "express";

const hotelsRouter  = Router();

hotelsRouter.all("/*", authenticateToken)
            .get("/", getHotels );

export {hotelsRouter};
