const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const SupplyScheme = require('../models/SupplySchema.js');
const SupplyModel = mongoose.connection.model('Supply', SupplyScheme);

router.get('/', (req, res, next) => {
  SupplyModel.find()
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    });
});

// router.get('/:supplyID', (req, res, next) => {
//   SupplyModel.findById(new mongoose.Types.ObjectId(req.params.supplyID))
//     .exec()
//     .then(doc => {
//       if (doc)
//         res.status(200).json(doc);
//       else
//         throw { status: 400, message: 'not found' };
//     })
//     .catch(err => {
//       if (err.status === 400)
//         res.status(400).json(err);
//       else
//         res.status(500).json(err);
//     });
// });

// router.post('/', (req, res, next) => {
//   const { name, type, info, amount } = req.body;
//
//   new SupplyModel({
//     _id: new mongoose.Types.ObjectId(),
//     name: name,
//     type: type,
//     info: info,
//     amount: amount,
//   }).save()
//     .then(supply => {
//       res.status(200).json(supply);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).end();
//     });
// });

router.put('/', (req, res, next) => {
  const { supplies } = req.body;
  const newSupplies = [];

  SupplyModel.deleteMany({})
    .exec()
    .then(() => {
      supplies.forEach(x => {
        newSupplies.push(new SupplyModel({
          _id: new mongoose.Types.ObjectId(),
          name: x.name,
          type: x.type,
          info: x.info,
          amount: x.amount,
        }));
      });
      SupplyModel.insertMany(newSupplies)
        .then(supplies => {
          res.status(200).json(supplies);
        })
        .catch(err => {
          console.log(`Error during saving:\n ${err}`);
          res.status(500).end();
        });
    })
    .catch(err => {
      console.log(`Error during deleting:\n ${err}`);
      res.status(500).end();
    });

  // SupplyModel.findById(new mongoose.Types.ObjectId(req.params.supplyID))
  //   .exec()
  //   .then(supply => {
  //     supply.name = name;
  //     supply.type = type;
  //     supply.info = info;
  //     supply.amount = amount;
  //     supply.save()
  //       .then(animal => {
  //         console.log(animal);
  //         res.status(200).json(animal);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         res.status(500).end();
  //       });
  //   });
});

// router.put('/:supplyID', (req, res, next) => {
//   const { name, type, info, amount } = req.body;
//
//   SupplyModel.findById(new mongoose.Types.ObjectId(req.params.supplyID))
//     .exec()
//     .then(supply => {
//       supply.name = name;
//       supply.type = type;
//       supply.info = info;
//       supply.amount = amount;
//       supply.save()
//         .then(animal => {
//           console.log(animal);
//           res.status(200).json(animal);
//         })
//         .catch(err => {
//           console.log(err);
//           res.status(500).end();
//         });
//     });
// });

// router.delete('/:supplyID', (req, res, next) => {
//   const supplyID = new mongoose.Types.ObjectId(req.params.supplyID);
//   SupplyModel.deleteOne({ _id: supplyID })
//     .then(() => {
//       res.status(200).end();
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

module.exports = router;