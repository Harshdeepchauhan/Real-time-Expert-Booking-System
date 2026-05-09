export const updateBookingStatus = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  if (!booking) {
    return res.status(404).json({
      message: "Booking not found"
    });
  }

  res.json(booking);
};