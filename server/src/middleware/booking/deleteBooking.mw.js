const bookingController = require('../../controllers/post.controller');

module.exports = async (req, res) => {
  const deletedBookingDoc = await bookingController.delete(req.postId);
  if (deletedBookingDoc === null) {
    res.status(400).send('error ocurred while deleting booking');
  }
  if (!deletedPostDoc) {
    res.status(404).send('post not found');
  }
  res.send(deletedBookingDoc);
};
