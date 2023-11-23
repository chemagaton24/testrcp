const handler = async (req, res) => {
  res.status(201).send({ success: true, message: "success!" });
};

export default handler;
