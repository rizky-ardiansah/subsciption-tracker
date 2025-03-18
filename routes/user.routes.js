import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/', authorize, getUsers)

router.get('/:id', authorize, getUser)

router.post('/', (req, res) => { res.send({ title: 'CREATE new user' }) })

router.put('/:id', (req, res) => { res.send({ title: 'UPDATE new user' }) })

router.delete('/:id', (req, res) => { res.send({ title: 'DELETE new user' }) })

export default router;