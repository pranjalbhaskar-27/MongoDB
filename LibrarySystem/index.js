const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connect = () => {
    return mongoose.connect("mongodb+srv://pranjal2795:Saridon1@cluster0.e0wvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};


//1.1//SECTION SCHEMA
     //create author schema
const sectionSchema = new mongoose.Schema(
    {
        sectionName: { type:String, required: true},
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
)

//step2 create mode SECTION
const Section = mongoose.model("section",sectionSchema);

//1.2//AUTHOR SCHEMA//
const authorSchema = new mongoose.Schema(
      {
        first_name:{type:String, required:true},
        last_name:{type:String, required:true}
      },
      {
        versionKey: false,
        timestamps: true,
      }
)

const Author = mongoose.model("author",authorSchema);

//1.3// BOOK SCHEMA//
const bookSchema = new mongoose.Schema(
  {
    title : { type: String, require: true },
    body : { type: String, require: true },
    section_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        require: true,
    },
    author_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        require: true,
    }]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
  
const Book = mongoose.model("book",bookSchema);

// AUTHORS CRUD
app.get("/authors", async (req, res) => {
  try {
    const author_data = await User.find().lean().exec();

    return res.status(200).send({ author_data: author_data }); // []
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Something went wrong .. try again later" });
  }
});

app.post("/authors", async (req, res) => {  //not work without middleware
  try {
    const author_data = await User.create(req.body);

    return res.status(201).send(author_data);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// body => req.body
// url => req.params
// query string => req.query

app.get("/authors/:id", async (req, res) => { //find by id
  try {
    const author_data = await User.findById(req.params.id).lean().exec();
    // db.users.findOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(author_data);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/authors/:id", async (req, res) => {  //update
  try {
    const author_data = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,  //creates new object
    })
      .lean()
      .exec();
    // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})

    return res.status(200).send(author_data);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/authors/:id", async (req, res) => {
  try {
    const author_data = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(author_data);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//SECTION CRUD
app.get("/section", async (req, res) => {
  try {
    const section_data = await User.find().lean().exec();

    return res.status(200).send({ section_data: section_data }); // []
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Something went wrong .. try again later" });
  }
});

app.post("/section", async (req, res) => {  //not work without middleware
  try {
    const section_data = await User.create(req.body);

    return res.status(201).send(section_data);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// body => req.body
// url => req.params
// query string => req.query

app.get("/section/:id", async (req, res) => { //find by id
  try {
    const section_data = await User.findById(req.params.id).lean().exec();
    return res.status(200).send(section_data);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/section/:id", async (req, res) => {  //update
  try {
    const author_data = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,  //creates new object
    })
      .lean()
      .exec();
    // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})

    return res.status(200).send(section_data);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/section/:id", async (req, res) => {
  try {
    const author_data = await User.findByIdAndDelete(req.params.id).lean().exec();
    // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(section_data);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//BOOK CRUD//
app.get("/books", async (req, res) => {
  try {
    const books_data = await User.find().lean().exec();

    return res.status(200).send({ books_data: books_data }); // []
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Something went wrong .. try again later" });
  }
});

app.post("/books", async (req, res) => {  //not work without middleware
  try {
    const books_data = await User.create(req.body);

    return res.status(201).send(books_data);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// body => req.body
// url => req.params
// query string => req.query

app.get("/books/:id", async (req, res) => { //find by id
  try {
    const books_data = await User.findById(req.params.id).lean().exec();
    // db.users.findOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(books_data);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/books/:id", async (req, res) => {  //update
  try {
    const books_data = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,  //creates new object
    })
      .lean()
      .exec();
    // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})

    return res.status(200).send(books_data);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const author_data = await User.findByIdAndDelete(req.params.id).lean().exec();
    // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(books_data);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});





//2//async listen function
app.listen(5000, async () => {
    try {
      await connect();
    } catch (err) {
      console.log(err);
    }
  
    console.log("listening on port 5000");
  });