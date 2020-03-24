var express = require('express');
var router = express.Router();
const { User } = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', (request, response) => {

  // 회원가입 할때 필요한 정보들을 client에서 가져오면 DB에 넣어준다.
  const user = new User(request.body);

  user.save((err, doc) => {
    if (err) return response.json({ success: false, err })
    return response.status(200).json({
      success: true,
    });
  });

});

module.exports = router;
