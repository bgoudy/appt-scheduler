var mongoose = require("mongoose");
var router = express.Router();
var express = require("express");
const Schema = mongoose.Schema,
model = mongoose.model.bind(mongoose),
ObjectID = mongoose.Schema.Types.ObjectID;

const slotSchema = new Schema ({
    slot_time: String,
    slot_date: String,
    created_at: Date
});

const Slot = model("Slot", slotSchema);

const appointmentSchema = new Schema ({
    id: ObjectID,
    name: String,
    email: String,
    phone: Number,
    slots: {type: ObjectID, ref: "Slot"},
    created_at: Date
});

const Appointment = model("Appointment", appointmentSchema);

module.exports = router;