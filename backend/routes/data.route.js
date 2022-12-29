const dataController = require('../controllers/data.controller');

module.exports = (app) => {
    app.get('/analytics/api/v1/data', dataController.getData)
}