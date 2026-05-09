export const getExpertById = async (req, res) => {
  const expert = await Expert.findById(req.params.id);

  if (!expert) {
    return res.status(404).json({
      message: "Expert not found"
    });
  }

  res.json(expert);
};