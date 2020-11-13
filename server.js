const mongoose = require ("mongoose")
const express = require ("express")
const apps = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
  });


apps.use(express.urlencoded({extended:true}));
apps.use(express.json());
apps.use(express.static("public"));

apps.use(require("./route/htmlRoute"));
apps.use(require("./route/apiRoute"));

apps.listen(PORT, () => {
    console.log(`Application run on port ${PORT}`);
});