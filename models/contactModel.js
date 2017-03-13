////////////////////////////////    REQUIRE   //////////////////////////////////

var mongoose = require("mongoose");

////////////////////////////////    SCHEMA   //////////////////////////////////

var Schema = mongoose.Schema;

var ContactSchema = new Schema ({
  firstName: String,
  lastName: String,
  email: Schema.Types.Mixed
});

var Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
