import { Router } from 'express';
import { check } from 'express-validator';
import validateFields from '../middlewares/validate-fields';
import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser
} from '../controllers/user';

const router = Router();

router.get('/', getUsers);

router.get('/:id', [
    check('id', 'The ID is mandatory').not().isEmpty().isInt(),
    validateFields
], getUserById);

router.post('/', [
    check('name', 'The name is mandatory').not().isEmpty(),
    check('email', 'The e-mail is mandatory').not().isEmpty(),
    validateFields
], createUser);

router.put('/:id', [
    check('id', 'The ID is mandatory').not().isEmpty().isInt(),
    check('name', 'The name is mandatory').not().isEmpty(),
    check('email', 'The e-mail is mandatory').not().isEmpty(),
    validateFields
], updateUser);

router.delete('/:id', [
    check('id', 'The ID is mandatory').not().isEmpty().isInt(),
    validateFields
], deleteUser);

export default router;