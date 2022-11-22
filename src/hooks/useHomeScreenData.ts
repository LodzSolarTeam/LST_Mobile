import {useHomeScreenQuery} from "../types";
import {useEffect, useState} from "react";
import axios from "axios";

export interface IHomeScreenData {
    interiorTemperature: number;
    ambientTemperature: number;
    estimatedRange: number;
    idealRange: number;
    batterySOC: number;
    CO2saved: number;
    isHighBeamLights: boolean;
}

const useHomeScreenData = () => {
    const {data, loading, error} = useHomeScreenQuery();
    const [finalResult, setFinalResult] = useState<IHomeScreenData>();

    useEffect(() => {
        let isCancelled = true;
        const lat = data?.recentCar?.gps!.latitude!;
        const lon = data?.recentCar?.gps!.longitude!;
        const APIkey = "5a86d693b18204975cc0160f3587e676";
        const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" +
            lon + "&units=metric&appid=" + APIkey;

        axios({
            method: "get",
            url: url,
        }).then((response) => {
            if (isCancelled) {
                setFinalResult({
                    interiorTemperature: Math.floor(response.data.main.temp) + 5,
                    ambientTemperature: Math.floor(response.data.main.temp),
                    estimatedRange: Math.floor(data?.recentCar?.battery!.stateOfCharge! * 4.5 * 0.99),
                    idealRange: Math.floor(data?.recentCar?.battery!.stateOfCharge! * 4.5 * 0.87),
                    batterySOC: data?.recentCar?.battery!.stateOfCharge!,
                    CO2saved: Math.floor(data?.recentCar?.general?.mileage! * 59),
                    isHighBeamLights: data?.recentCar?.lights!.highBeamLights!
                })
            }
        })
        return () => {
            isCancelled = false;
        };
    }, [loading])

    return finalResult;
}

export default useHomeScreenData;