import { apiURL, appID } from "./";
import moment from "moment";
import axios from "axios";

export default async function saveData(city) {
  let city_data = {};
  let daily_days = [];
  let daily_data = [];
  city_data["label"] = city.label;
  let res = await axios.get(
    `${apiURL}/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=minutely&units=metric&appid=${appID}`
  );
  city_data["data"] = res.data;
  // get each day from daily api response

  res.data.daily.forEach((daily) => {
    var dt = moment(new Date(daily.dt * 1000), "YYYY-MM-DD HH:mm:ss");
    daily_days.push(dt.format("dddd"));
    // add each day's max temp to data - Math.round(daily.temp.max)
    daily_data.push(Math.round(daily.temp.max));
  });
  // add daily - e.g Monday, Tuesday
  city_data["data"]["daily_days"] = daily_days;
  // add daily temps
  city_data["data"]["daily"] = daily_data;

  return city_data;
}
