const express = require("express");
const router = express.Router();
const Character = require("../models/character");
const User = require("../models/user");
const requireLogin = require("../middlewares/requireLogin");
const limit = 40;

/* GET home page. */
router.post("/", requireLogin,  function (req, res, next) {
  const page = req.query.page || 1;
  const query = contructQuery(req);
  let sortType = getSortType(req);

  Character.paginate(query, { page: 1, limit : limit * Number(page), sort : { id : sortType } }, (err, {docs, ...info}) => {
  	const response = { results : docs, info };

  	res.send(response);
  });
});

const getSortType = (req) => {
  let sortType = "";
  if(req.body.sortType){
    sortType = req.body.sortType;
    updateUserSortType(req.user,sortType);
  }else{
    sortType = req.user.sortPreference || "ascending";
  }
  return sortType
}

const updateUserSortType = (user,sortType) => {
  if(user.sortPreference !== sortType){
    User.findByIdAndUpdate(user.id, { sortPreference: sortType }, (err, result) => {
      if(!err) console.log("Sort Updated")
    });
  }
}

const contructQuery = (req) => {
  const query = {};
  const { body : { searchText, selectedFilters } } = req;
  if(searchText) query.name = RegExp(String.raw`^${searchText}`, 'i');
  if(selectedFilters){
      const { species, origin, gender } = selectedFilters;
      if(species.length){
          query.species = { $in:  (species.map(species => species.value)).flat() }  ;
      }
      if(origin.length){
          query["origin.name"] = { $in: (origin.map(origin => origin.value)).flat()};
      }
      if(gender.length){
          query.gender = { $in: (gender.map(gender => gender.value)).flat()};
      }
  }
  return query;
}
module.exports = router;
