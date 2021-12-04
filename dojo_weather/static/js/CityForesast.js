class CityForecast {
    constructor(city_name) {
        this.city_name = city_name;
        this.forecasts = {}
    }

    add_forecast(date, simple_description, temp_high, temp_low) {
        this.forecasts.add(Forecast(date, simple_description, temp_high, temp_low));
    }
}

/*
    @temp_high Highest temperature in deg C.
    @temp_low Lowest temperature in deg C.
*/
class Forecast {
    constructor(date, simple_description, temp_high, temp_low) {
        this.date = date;
        this.simple_description = simple_description;
        this.temp_high = temp_high;
        this.temp_low = temp_low;
    }
}