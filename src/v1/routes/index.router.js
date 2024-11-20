const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/test-github-workflow', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'ci/cd working'
    })
})

module.exports = router;
