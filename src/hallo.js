const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { fileURLToPath } = require("url");
const path = require("path");

const router = express();

router.use(bodyParser.json()); // to use body object in requests
router.use(morgan("dev"));
router.use(cors());

router.set("view engine", "ejs");

// This was we can keep everything inside our src folder!!

//const __dirname = path.dirname(fileURLToPath(import.meta.url));

router.set("views", path.join(__dirname, "views"));
router.set("view engine", "ejs");

// This is to read csss
router.use(express.static(path.join(__dirname, "views/pages")));

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "views", "pages", "index"));
});

module.exports = router;
