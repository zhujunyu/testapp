var express = require('express');
var app = express();
var port = 8080;

var cors = require('cors');
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/*', function (req, res, next) {
  res.header("authentication", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDg0NzMzNzcsIm5hbWUiOiJ6aGFuZ3lvbmdfbmV3IiwidXNlcl9pZCI6MX0.1dc_hmifgwd0kDMdZXiPbO82wlbCwSHBj7dv07mz-xk");
  next();
})

app.get('/machine/:machineId/session/last',function(req,res){
  var result =
    {
      "machine_id": 70800001,
      "session_id": 1513912811000,
      "date": "2017-12-22 11:20:11",
      "setting_current": 11.5,
      "setting_speed": 15,
      "setting_pressure": 6.5,
      "setting_lap_length": 1,
      "setting_swaging_pressure": 2,
      "setting_lap_compe": 0.3,
      "predict_current": 11.5,
      "predict_speed": 15,
      "predict_pressure": 6.5,
      "predict_lap_length": 1,
      "predict_swaging_pressure": 2,
      "predict_lap_compe": 0.3,
      "sampling_data": [
        {
          "voltage": 1.5,
          "temp": 350
        }
      ],
      "current_machine_score": 85,
      "seam_score": 85,
      "seam_score_ok": true,
      "v_length_level": 5,
      "v_volatility_level": 4,
      "v_rationality_level": 5,
      "t_length_level": 3,
      "t_volatility_level": 3,
      "t_rationality_level": 4
    }
    ;
  res.json(result);
});

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  var error = {
    errorCode: "500",
    errorMessage: "call api error"
  }
  res.status(500);
  res.json(error);
}

app.listen(port, function () {
  console.log('server start, listen on port ' + port);
});
