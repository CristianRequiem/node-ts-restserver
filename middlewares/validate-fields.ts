import { Request, Response } from "express";
import { validationResult } from "express-validator";

const validateFields = (req: Request, res: Response, next: any) => {

    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).json({result});
    }

    next();

}

export default validateFields;