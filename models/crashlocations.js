import mongoose, { Schema } from "mongoose";

const crashLocationsSchema = new Schema({
		key_crash: {
    required: true,
    type: String,
  },
		dateofcrashmilli: {
    required: true,
    type: String,
  },
		localuse: {
    required: true,
    type: String,
  },
		locationrelationtoroad: {
    required: true,
    type: String,
  },
		locationinnearindicator: {
    required: true,
    type: String,
  },
		locationcity: {
    required: true,
    type: String,
  },
		locationroadnameon: {
    required: true,
    type: String,
  },
		locationrampindicator: {
    required: true,
    type: String,
  },
		locationfeetfromroad: {
    required: true,
    type: String,
  },
		locationmilesfromroad: {
    required: true,
    type: String,
  },
		locationdirectionfromroad: {
    required: true,
    type: String,
  },
		locationatfromindicator: {
    required: true,
    type: String,
  },
		locationroadnameat: {
    required: true,
    type: String,
  },
		locationdirectiontoroad: {
    required: true,
    type: String,
  },
		locationroadnameto: {
    required: true,
    type: String,
  },
		firstharmfulevent: {
    required: true,
    type: String,
  },
		mostharmfulevent: {
    required: true,
    type: String,
  },
		roadclassification: {
    required: true,
    type: String,
  },
		roadfeature: {
    required: true,
    type: String,
  },
		trafficcontroltype: {
    required: true,
    type: String,
  },
		weathercondition1: {
    required: true,
    type: String,
  },
		weathercondition2: {
    required: true,
    type: String,
  },
		weathercontributedtocrash: {
    required: true,
    type: String,
  },
		updatedate: {
    required: true,
    type: String,
  },
		crash_date_day: {
    required: true,
    type: String,
  },
		crash_date_dow: {
    required: true,
    type: String,
  },
		crash_date_dow_num: {
    required: true,
    type: String,
  },
		crash_date_hour: {
    required: true,
    type: String,
  },
		crash_date_month: {
    required: true,
    type: String,
  },
		crash_date_month_num: {
    required: true,
    type: String,
  },
		crash_date_year: {
    required: true,
    type: String,
  },
		drivers: {
    required: true,
    type: String,
  },
		passengers: {
    required: true,
    type: String,
  },
		pedestrians: {
    required: true,
    type: String,
  },
		pedalcyclists: {
    required: true,
    type: String,
  },
		other_person_type: {
    required: true,
    type: String,
  },
		unknown_person_type: {
    required: true,
    type: String,
  },
		killed: {
    required: true,
    type: String,
  },
		type_a_injury: {
    required: true,
    type: String,
  },
		type_b_injury: {
    required: true,
    type: String,
  },
		type_c_injury: {
    required: true,
    type: String,
  },
		no_injury: {
    required: true,
    type: String,
  },
		injury_unknown: {
    required: true,
    type: String,
  },
		locationlatitude: {
    required: true,
    type: String,
  },
		locationlongitude: {
    required: true,
    type: String,
  }
});

export const crashLocationsModel = mongoose.model("crashLocations", crashLocationsSchema);
