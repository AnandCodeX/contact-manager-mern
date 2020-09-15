/** @format */

const mongoose = require("mongoose");
const db =
	"mongodb+srv://admin:i3vxZcDb6u3MeGCq@cluster0.4oavr.mongodb.net/contactCollection?retryWrites=true&w=majority";

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});

		console.log("MongoDB Connected...");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
