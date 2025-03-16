import { Router } from "express";

const router = Router();

router.get('/', (req, res) => { res.send({ title: 'GET all subscriptions' }) })

router.get('/:id', (req, res) => { res.send({ title: 'GET subscriptions details' }) })

router.post('/', (req, res) => { res.send({ title: 'CREATE subscriptions' }) })

router.put('/:id', (req, res) => { res.send({ title: 'UPDATE subscriptions' }) })

router.delete('/:id', (req, res) => { res.send({ title: 'DELETE subscriptions' }) })

router.get('/user/:id', (req, res) => { res.send({ title: 'GET all users subscriptions' }) })

router.put('/:id/cancel', (req, res) => { res.send({ title: 'CANCEL subscriptions' }) })

router.put('/upcoming-renewals', (req, res) => { res.send({ title: 'GET upcoming renewals subscriptions' }) })

export default router;