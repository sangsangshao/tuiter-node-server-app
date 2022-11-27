// import posts from "./tuits.js";

import * as tuitsDao from '../tuits/tuits-dao.js'
// let tuits = posts


const createTuit = async (req, res) => {
  const newTuit = req.body;
  // newTuit._id = (new Date()).getTime()+'';
  newTuit.topic = "Nasa";
  newTuit.userName = "NASA";
  newTuit.time = "Now";
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.handle = "nasa";
  newTuit.avatarIcon = "nasalogo.png"
  newTuit.comments = 0;
  newTuit.retuits = 0;
  newTuit.avatarIcon = "nasalogo.png",
  newTuit.image = "nasalogo.png",
  newTuit.liked = false;
  // tuits.push(newTuit);
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}

// const findTuits  = (req, res) => {
//   res.json(tuits);
// }
const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}

// const updateTuit = (req, res) => {
//   const tuitdIdToUpdate = req.params.tid;
//   const updates = req.body;
//   const tuitIndex = tuits.findIndex((t) => t._id.toString() === tuitdIdToUpdate);
//   tuits[tuitIndex] =
//       {...tuits[tuitIndex], ...updates};
//   res.sendStatus(200);
// }

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
}

// const deleteTuit = (req, res) => {
//   const tuitdIdToDelete = req.params.tid;
//   tuits = tuits.filter((t) =>
//       t._id.toString() !== tuitdIdToDelete);
//   res.sendStatus(200);
// }

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
}
export default (app) => {
  app.post('/api/tuits',createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}

// import tuitsArray from './tuits.js'
// let tuits = tuitsArray
//
// const TuitsController = (app) => {
//   app.get('/tuits', (req, res) => {res.send(tuits)})
//   app.get('/tuits/:tid', (req, res) => {
//     const tuitId = req.params['tid']
//     const tuit = tuits.find(t => t._id === tuitId)
//     res.send(tuit)
//   })
//   app.post('/tuits', (req, res) => {
//     const newTuit = req.body
//     newTuit._id = (new Date()).getTime()+''
//     tuits.push(newTuit)
//     res.send(200)
//   })
//   app.put('/tuits', (req, res) => {
//     const tuitUpdates = req.body
//     const tid = req.params.tid
//     const tuitIndex = tuits.findIndex(t => t._id === tid)
//     if (tuitIndex >= 0) {
//       tuits[tuitIndex] = {
//         ...tuits[tuitIndex],
//         ...tuitUpdates
//       }
//       res.send(200)
//     } else {
//       res.send(404)
//     }
//   })
//   app.delete('/tuits/:tid', (req, res) => {
//     const tid = req.params.tid
//     tuits = tuits.filter(t => t._id !== tid)
//     res.send(200)
//   })
// }
//
// export default TuitsController;