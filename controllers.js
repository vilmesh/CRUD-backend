
var Pref = require('./db');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json({content});
};

exports.initPref = (req, res) => {
  Pref.
    create({}, (err, pref) => {
      if (err) {
        sendJSONresponse(res, 400, {error:err.message});  
      } else {
        sendJSONresponse(res, 201, pref);
      }
    });
};

exports.getPref = (req, res) => {
  if (req.params.id) {
    Pref.
      findById(req.params.id).
      exec((err, pref) => {
        if (err) {
          sendJSONresponse(res, 400, {error:err.message});  
        } else {
          sendJSONresponse(res, 200, pref);
        }
      }); 
}};

exports.deletePref = (req, res) => {
  if (req.params.id) {
    Pref.
      findByIdAndRemove(req.params.id).
      exec((err, pref) => {
        if (err) {
          sendJSONresponse(res, 400, {error:err.message});  
        } else {
          sendJSONresponse(res, 200, null);
        }
      }); 
}};

exports.updatePref = (req, res) => {
  if (req.params.id) {
    Pref.
      findById(req.params.id).
      exec((err, pref) => {
        if (err) {
          sendJSONresponse(res, 400, {error:err.message});
        } else {
          pref.timeFormat = req.body.timeFormat;
          pref.dateFormat = req.body.dateFormat;
          pref.languages = req.body.languages;
          pref.save((err, pref) => {
            if (err) {
              sendJSONresponse(res, 404, {error:err.message});
            } else {
              sendJSONresponse(res, 200, pref);
            }
          });
        }
    });
  }
};