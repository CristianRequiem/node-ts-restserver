import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {

    const users = await User.findAll({
        where: {status: 1}
    });

    res.json({ users });

}

export const getUserById = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {

        return res.status(404).json({
            msg: `There's no user with the ID ${id}`
        });

    }

    res.json({ user });

}

export const createUser = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const { name, email } = body;

        const emailExists = await User.findOne({
            where: { email }
        });

        if (emailExists) {

            return res.status(400).json({
                msg: 'E-mail already exists in the DB'
            });

        }

        const user = await User.create({ name, email });

        res.json({ user });

    } catch (error) {

        res.status(500).json({
            msg: 'Function unavailable',
        });

    }

}

export const updateUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const user = await User.findByPk(id);

        if (!user) {

            return res.status(400).json({
                msg: `There's no user with the ID ${id}`
            });

        }

        await user.update(body)

        res.json({ user });

    } catch (error) {

        res.status(500).json({
            msg: 'Function unavailable',
        });

    }

}

export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {

        return res.status(400).json({
            msg: `There's no user with the ID ${id}`
        });

    }

    await user.update({ status: 0 });

    res.json({ user });

}