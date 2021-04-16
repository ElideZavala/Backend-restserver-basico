const { Router } = require('express');

const router = Router();

router.get('/api', (req, res) => {
     res.json({
          msg: 'get API'
     });
});

router.put('/api', (req, res) => {
     res.status(404).json({
          msg: 'put API'
     });
});

router.post('/api', (req, res) => {
     res.status(500).json({
          msg: 'post API'
     });
});

router.patch('/api', (req, res) => {
     res.json({
          msg: 'patch API'
     });
});



module.exports = router;