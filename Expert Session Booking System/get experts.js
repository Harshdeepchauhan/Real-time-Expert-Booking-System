export const getExperts = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    category = ""
  } = req.query;

  const query = {
    name: { $regex: search, $options: "i" }
  };

  if (category) {
    query.category = category;
  }

  const experts = await Expert.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Expert.countDocuments(query);

  res.json({
    experts,
    totalPages: Math.ceil(total / limit),
    currentPage: Number(page)
  });
};