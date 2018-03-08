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
        "seam_score_ok": false,
        "machine_name": 'A-006',
        "coil_id": 55421342,
        "current_machine_score": 86,
        "date": "2017-12-22 12:05:14",
        "machine_id": 60800001,
        "predict_current": 12.0,
        "predict_lap_compe": 0.5,
        "predict_lap_length": 1.0,
        "predict_pressure": 8.0,
        "predict_speed": 15.0,
        "predict_swaging_pressure": 2.0,
        "sampling_data": [
          {
            "temp": 270.0,
            "voltage": 0.0125
          },
          {
            "temp": 280.0,
            "voltage": 0.0225
          },
          {
            "temp": 290.0,
            "voltage": 0.0325
          },
          {
            "temp": 300.0,
            "voltage": 0.0425
          },
          {
            "temp": 310.0,
            "voltage": 0.0525
          },
          {
            "temp": 320.0,
            "voltage": 0.0625
          },
          {
            "temp": 330.0,
            "voltage": 0.0725
          },
          {
            "temp": 340.0,
            "voltage": 0.0825
          },
          {
            "temp": 350.0,
            "voltage": 0.0925
          },
          {
            "temp": 350.0,
            "voltage": 0.0125
          },
          {
            "temp": 350.0,
            "voltage": 0.0125
          },
          {
            "temp": 350.0,
            "voltage": 0.0125
          },
          {
            "temp": 350.0,
            "voltage": 0.0125
          },
          {
            "temp": 350.0,
            "voltage": 0.0125
          },
          {
            "temp": 350.0,
            "voltage": 0.0125
          },
          {
            "temp": 350.0,
            "voltage": 0.0125
          },
          {
            "temp": 350.0,
            "voltage": 0.0125
          },
          {
            "temp": 350.0,
            "voltage": 0.01375
          },
          {
            "temp": 350.0,
            "voltage": 0.0125
          },
          {
            "temp": 350.0,
            "voltage": 0.0125
          },
          {
            "temp": 350.0,
            "voltage": 0.05875
          },
          {
            "temp": 350.0,
            "voltage": 0.9875
          },
          {
            "temp": 351.25,
            "voltage": 1.07875
          },
          {
            "temp": 886.562,
            "voltage": 1.25875
          },
          {
            "temp": 909.062,
            "voltage": 1.37125
          },
          {
            "temp": 949.062,
            "voltage": 1.41
          },
          {
            "temp": 933.125,
            "voltage": 1.42
          },
          {
            "temp": 933.438,
            "voltage": 1.415
          },
          {
            "temp": 932.812,
            "voltage": 1.40875
          },
          {
            "temp": 929.688,
            "voltage": 1.40375
          },
          {
            "temp": 907.5,
            "voltage": 1.39375
          },
          {
            "temp": 917.5,
            "voltage": 1.39375
          },
          {
            "temp": 907.188,
            "voltage": 1.38625
          },
          {
            "temp": 918.438,
            "voltage": 1.38875
          },
          {
            "temp": 905.312,
            "voltage": 1.39125
          },
          {
            "temp": 910.312,
            "voltage": 1.39625
          },
          {
            "temp": 905.312,
            "voltage": 1.395
          },
          {
            "temp": 903.75,
            "voltage": 1.40375
          },
          {
            "temp": 901.875,
            "voltage": 1.39875
          },
          {
            "temp": 911.875,
            "voltage": 1.37125
          },
          {
            "temp": 908.75,
            "voltage": 1.3625
          },
          {
            "temp": 909.375,
            "voltage": 1.36625
          },
          {
            "temp": 912.812,
            "voltage": 1.3675
          },
          {
            "temp": 919.062,
            "voltage": 1.3725
          },
          {
            "temp": 904.062,
            "voltage": 1.365
          },
          {
            "temp": 915.938,
            "voltage": 1.34625
          },
          {
            "temp": 917.812,
            "voltage": 1.3275
          },
          {
            "temp": 920.312,
            "voltage": 1.325
          },
          {
            "temp": 918.125,
            "voltage": 1.32125
          },
          {
            "temp": 929.062,
            "voltage": 1.32125
          },
          {
            "temp": 919.375,
            "voltage": 1.315
          },
          {
            "temp": 921.562,
            "voltage": 1.31
          },
          {
            "temp": 920.625,
            "voltage": 1.31125
          },
          {
            "temp": 930.312,
            "voltage": 1.30875
          },
          {
            "temp": 919.688,
            "voltage": 1.29375
          },
          {
            "temp": 915.0,
            "voltage": 1.2875
          },
          {
            "temp": 915.625,
            "voltage": 1.285
          },
          {
            "temp": 908.125,
            "voltage": 1.28375
          },
          {
            "temp": 909.688,
            "voltage": 1.2825
          },
          {
            "temp": 914.688,
            "voltage": 1.285
          },
          {
            "temp": 912.812,
            "voltage": 1.29125
          },
          {
            "temp": 910.938,
            "voltage": 1.28125
          },
          {
            "temp": 913.75,
            "voltage": 1.28
          },
          {
            "temp": 904.375,
            "voltage": 1.285
          },
          {
            "temp": 917.812,
            "voltage": 1.29375
          },
          {
            "temp": 911.25,
            "voltage": 1.29375
          },
          {
            "temp": 910.312,
            "voltage": 1.305
          },
          {
            "temp": 910.312,
            "voltage": 1.3125
          },
          {
            "temp": 915.312,
            "voltage": 1.3175
          },
          {
            "temp": 918.125,
            "voltage": 1.30875
          },
          {
            "temp": 921.562,
            "voltage": 1.3
          },
          {
            "temp": 908.125,
            "voltage": 1.29125
          },
          {
            "temp": 906.25,
            "voltage": 1.2925
          },
          {
            "temp": 914.688,
            "voltage": 1.29625
          },
          {
            "temp": 919.688,
            "voltage": 1.2875
          },
          {
            "temp": 915.938,
            "voltage": 1.2775
          },
          {
            "temp": 919.688,
            "voltage": 1.28125
          },
          {
            "temp": 924.062,
            "voltage": 1.28125
          },
          {
            "temp": 916.875,
            "voltage": 1.27625
          },
          {
            "temp": 913.75,
            "voltage": 1.27625
          },
          {
            "temp": 944.688,
            "voltage": 1.19125
          },
          {
            "temp": 827.188,
            "voltage": 0.91625
          },
          {
            "temp": 493.125,
            "voltage": 0.77
          },
          {
            "temp": 393.125,
            "voltage": 0.53125
          },
          {
            "temp": 350.0,
            "voltage": 0.0775
          },
          {
            "temp": 350.0,
            "voltage": 0.0
          },
          {
            "temp": 350.0,
            "voltage": 0.02125
          },
          {
            "temp": 350.0,
            "voltage": 0.02375
          },
          {
            "temp": 350.0,
            "voltage": 0.02375
          },
          {
            "temp": 350.0,
            "voltage": 0.02125
          },
          {
            "temp": 350.0,
            "voltage": 0.02
          },
          {
            "temp": 350.0,
            "voltage": 0.01875
          },
          {
            "temp": 350.0,
            "voltage": 0.0175
          },
          {
            "temp": 350.0,
            "voltage": 0.0175
          },
          {
            "temp": 350.0,
            "voltage": 0.01625
          },
          {
            "temp": 350.0,
            "voltage": 0.01625
          },
          {
            "temp": 350.0,
            "voltage": 0.01625
          },
          {
            "temp": 350.0,
            "voltage": 0.015
          },
          {
            "temp": 350.0,
            "voltage": 0.015
          },
          {
            "temp": 350.0,
            "voltage": 0.0175
          }
        ],
        "seam_score": 84,
        "seam_score_ok": true,
        "session_id": 1513915514000,
        "setting_current": 13.0,
        "setting_lap_compe": 0.5,
        "setting_lap_length": 1.0,
        "setting_pressure": 8.0,
        "setting_speed": 14.0,
        "setting_swaging_pressure": 2.0,
        "t_length_level": 4,
        "t_rationality_level": 5,
        "t_volatility_level": 5,
        "v_length_level": 5,
        "v_rationality_level": 4,
        "v_volatility_level": 5
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
