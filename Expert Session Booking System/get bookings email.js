export const getBookingsByEmail = async (req, res) => {

  const bookings = await Booking.find({
    email: req.query.email
  }).populate("expertId");

  res.json(bookings);
};