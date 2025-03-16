import { Router } from "express";

const router = Router();

router.post('/sign-up', (req, res) => {
    res.send({ title: 'Sign up' });
})
router.post('/sign-in', (req, res) => {
    res.send({ title: 'Sign in' });
})
router.post('/sign-out', (req, res) => {
    res.send({ title: 'Sign out' });
})

export default router;