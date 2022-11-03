const router = require("express").Router();

// GET all readers
router.get("/api/travellers", async (req, res) => {
  try {
    const readerData = await Reader.findAll({
      include: [{ model: Location }, { model: Trips }],
      // TODO: Add a sequelize literal to get a count of short books
    });
    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single reader
router.get("/:id", async (req, res) => {
  try {
    const readerData = await Reader.findByPk(req.params.id, {
      include: [{ model: LibraryCard }, { model: Book }],
      // TODO: Add a sequelize literal to get a count of short books
    });

    if (!readerData) {
      res.status(404).json({ message: "No reader found with that id!" });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a reader
router.post("/", async (req, res) => {
  try {
    const readerData = await Reader.create(req.body);
    res.status(200).json(readerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a reader
router.delete("/:id", async (req, res) => {
  try {
    const readerData = await Reader.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!readerData) {
      res.status(404).json({ message: "No reader found with that id!" });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

module.exports = router;
