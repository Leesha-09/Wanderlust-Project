const mongoose= require("mongoose");
const Schema = mongoose.Schema;
const listingSchema =new Schema({
    title: {
        type:String,
        required: true,
    },
    description: String,
    image: {
        filename:String,
        url:{
            type: String,
            default: "https://images.app.goo.gl/vhT9hGKraQekPM7o7",
            set: (v) =>
                v === ""? "https://images.app.goo.gl/vhT9hGKraQekPM7o7":v,
           },

        },
        price: Number,
    location: String,
    country: String,
});
const Listing  = mongoose.model('Listing', listingSchema);
module.exports= Listing;