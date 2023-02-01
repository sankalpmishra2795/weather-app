import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import FutureWeather from '../components/FutureWeather/FutureWeather';
import SearchWeather from "../components/SearchWeather/SearchWeather"

export default function Main() {

  const [query, setQuery] = useState("Bangalore");
  const [weather, setWeatherData] = useState({
    current: {},
    location: {}
    , forecast: {},
  });

  return (
    <Box>
      <Box>
        <Box>
          <SearchWeather setQuery={setQuery} query={query} setWeatherData={setWeatherData}></SearchWeather>
        </Box>
        <Box>
          <CurrentWeather location={weather.location || {}} weather={weather?.current || {}}></CurrentWeather>
        </Box>
        <Box>
          <FutureWeather forcast={weather.forecast}></FutureWeather>
        </Box>
      </Box>
      <Box>
        <Typography color="black" marginTop={"24px"}>
          Powered by API 2.0 Weather API
        </Typography>
      </Box>
    </Box>
  )
}
