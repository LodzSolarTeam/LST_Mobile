import { useTelemetryQuery } from "../types";
import { useEffect, useState } from "react";

export interface IVehicleTelemetryData {
  tires: {
    pressures: number[];
    temperatures: number[];
  };
  solar: {
    power: number[];
  };
}

const useTelemetryData = () => {
  const { data, loading, error } = useTelemetryQuery();
  const [finalResult, setFinalResult] = useState<IVehicleTelemetryData>();
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled && data != undefined) {
      setFinalResult({
        solar: {
          power: data?.recentCar?.solar?.mpptOutputPower!,
        },
        tires: {
          pressures: data?.recentCar?.tires?.pressures!,
          temperatures: data?.recentCar?.tires?.temperatures!,
        },
      });
    }
    return () => {
      isCancelled = true;
    };
  }, [loading, data]);

  return { finalResult, loading };
};

export default useTelemetryData;
