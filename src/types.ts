import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Byte: any;
  DateTime: any;
  Short: any;
  UnsignedInt: any;
  UnsignedLong: any;
};

export type Anomaly = {
  __typename?: 'Anomaly';
  anomalyType: AnomalyType;
  measurementName?: Maybe<Scalars['String']>;
  timestamp: Scalars['DateTime'];
};

export enum AnomalyType {
  Changepoint = 'CHANGEPOINT',
  Spike = 'SPIKE'
}

export type Battery = {
  __typename?: 'Battery';
  batteryCells?: Maybe<BatteryCells>;
  cellAvgVoltage: Scalars['Float'];
  cellNumberWithMaxVoltage: Scalars['UnsignedInt'];
  cellNumberWithMinVoltage: Scalars['UnsignedInt'];
  cellVoltageMax: Scalars['Float'];
  cellVoltageMin: Scalars['Float'];
  chargerEnabled: Scalars['Boolean'];
  deviationOfVoltageInCells: Scalars['UnsignedInt'];
  errors?: Maybe<BatteryErrors>;
  inputOutputState: Scalars['UnsignedInt'];
  lMUNumberWithMaxTemperature: Scalars['UnsignedInt'];
  lMUNumberWithMinTemperature: Scalars['UnsignedInt'];
  numberOfCellsConnected: Scalars['UnsignedInt'];
  packCRate: Scalars['UnsignedInt'];
  packCurrent: Scalars['Float'];
  packTemperatureMax: Scalars['Int'];
  packTemperatureMin: Scalars['Int'];
  packVoltage: Scalars['UnsignedInt'];
  powerBalance: Scalars['Float'];
  remainingChargeTime: Scalars['UnsignedInt'];
  remainingEnergy: Scalars['UnsignedInt'];
  stateOfCharge: Scalars['UnsignedInt'];
  stateOfHealth: Scalars['UnsignedInt'];
  systemState: Scalars['UnsignedInt'];
  usedEnergy: Scalars['Float'];
  warnings?: Maybe<BatteryWarnings>;
};

export type BatteryCells = {
  __typename?: 'BatteryCells';
  bat1?: Maybe<CellsGroup>;
  bat2?: Maybe<CellsGroup>;
  pcb1?: Maybe<CellsGroup>;
  pcb2?: Maybe<CellsGroup>;
};

export type BatteryErrors = {
  __typename?: 'BatteryErrors';
  bMCUSupplyOverVoltage: Scalars['Boolean'];
  bMCUSupplyUnderVoltage: Scalars['Boolean'];
  byte0: Scalars['Byte'];
  byte1: Scalars['Byte'];
  byte2: Scalars['Byte'];
  byte3: Scalars['Byte'];
  cellEndOfLifeVoltage: Scalars['Boolean'];
  cellOverTemperature: Scalars['Boolean'];
  cellOverVoltage: Scalars['Boolean'];
  cellUnderTemperature: Scalars['Boolean'];
  cellUnderVoltage: Scalars['Boolean'];
  cellUnmanaged: Scalars['Boolean'];
  cellVoltageMisRead: Scalars['Boolean'];
  chargerNotResponding: Scalars['Boolean'];
  emergencyStop: Scalars['Boolean'];
  lMUCommunication: Scalars['Boolean'];
  lMUOverTemperature: Scalars['Boolean'];
  lMUUnderTemperature: Scalars['Boolean'];
  leakDetected: Scalars['Boolean'];
  leakDetectionFailed: Scalars['Boolean'];
  mainNegativeContactor: Scalars['Boolean'];
  mainPositiveContactor: Scalars['Boolean'];
  midpackContactor: Scalars['Boolean'];
  overCurrentIn: Scalars['Boolean'];
  overCurrentOut: Scalars['Boolean'];
  prechargeContactor: Scalars['Boolean'];
  prechargeTimeout: Scalars['Boolean'];
  sUBCommunication: Scalars['Boolean'];
  shortCircuit: Scalars['Boolean'];
  temperatureSensorOpenCircuit: Scalars['Boolean'];
  temperatureSensorShortCircuit: Scalars['Boolean'];
  voltageDifference: Scalars['Boolean'];
};

export type BatteryWarnings = {
  __typename?: 'BatteryWarnings';
  byte1: Scalars['Byte'];
  cellResistanceDifference: Scalars['Boolean'];
  highBMCUSupplyVoltage: Scalars['Boolean'];
  highCellResistance: Scalars['Boolean'];
  highCellTemperature: Scalars['Boolean'];
  highCellVoltage: Scalars['Boolean'];
  highCurrentIn: Scalars['Boolean'];
  highCurrentOut: Scalars['Boolean'];
  highLMUTemperature: Scalars['Boolean'];
  highPackResistance: Scalars['Boolean'];
  lMUCommunicationInterfered: Scalars['Boolean'];
  lowBMCUSupplyVoltage: Scalars['Boolean'];
  lowCellTemperature: Scalars['Boolean'];
  lowCellVoltage: Scalars['Boolean'];
  lowLMUTemperature: Scalars['Boolean'];
  lowSOC: Scalars['Boolean'];
  packResistanceDifference: Scalars['Boolean'];
  sUBCommunicationInterfered: Scalars['Boolean'];
};

export type CanStatus = {
  __typename?: 'CanStatus';
  batteryErrorFrameStatus: Scalars['Boolean'];
  batteryMainFrameStatus: Scalars['Boolean'];
  batteryOtherDataFrameStatus: Scalars['Boolean'];
  batteryRemainingEnergyFrameStatus: Scalars['Boolean'];
  batteryTemperatureFrameStatus: Scalars['Boolean'];
  batteryVoltageCellsFrameStatus: Scalars['Boolean'];
  chargeControllerFrameStatus: Scalars['Boolean'];
  chargerFrameStatus: Scalars['Boolean'];
  engineFrameStatus: Scalars['Boolean'];
  errorFrameStatus: Scalars['Boolean'];
  lightsFrameStatus: Scalars['Boolean'];
  mppt1InputFrameStatus: Scalars['Boolean'];
  mppt1OutputFrameStatus: Scalars['Boolean'];
  mppt1TemperatureFrameStatus: Scalars['Boolean'];
  mppt2InputFrameStatus: Scalars['Boolean'];
  mppt2OutputFrameStatus: Scalars['Boolean'];
  mppt2TemperatureFrameStatus: Scalars['Boolean'];
  mppt3InputFrameStatus: Scalars['Boolean'];
  mppt3OutputFrameStatus: Scalars['Boolean'];
  mppt3TemperatureFrameStatus: Scalars['Boolean'];
  mppt4InputFrameStatus: Scalars['Boolean'];
  mppt4OutputFrameStatus: Scalars['Boolean'];
  mppt4TemperatureFrameStatus: Scalars['Boolean'];
  speedFrameStatus: Scalars['Boolean'];
  sunSensorFrameStatus: Scalars['Boolean'];
};

export type Car = {
  __typename?: 'Car';
  battery?: Maybe<Battery>;
  general?: Maybe<General>;
  gps?: Maybe<Gps>;
  id?: Maybe<Scalars['String']>;
  lights?: Maybe<Lights>;
  solar?: Maybe<Solar>;
  tires?: Maybe<Tires>;
};

export type CarEvent = {
  __typename?: 'CarEvent';
  eventType: CarEventType;
  id?: Maybe<Scalars['String']>;
  timestamp: Scalars['DateTime'];
};

export type CarEventFilterInput = {
  and?: InputMaybe<Array<CarEventFilterInput>>;
  eventType?: InputMaybe<CarEventTypeOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CarEventFilterInput>>;
  timestamp?: InputMaybe<ComparableDateTimeOperationFilterInput>;
};

export type CarEventSortInput = {
  eventType?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  timestamp?: InputMaybe<SortEnumType>;
};

export enum CarEventType {
  CarChargeStart = 'CAR_CHARGE_START',
  CarChargeStop = 'CAR_CHARGE_STOP',
  CarDataStreamEnd = 'CAR_DATA_STREAM_END',
  CarDataStreamStart = 'CAR_DATA_STREAM_START'
}

export type CarEventTypeOperationFilterInput = {
  eq?: InputMaybe<CarEventType>;
  in?: InputMaybe<Array<CarEventType>>;
  neq?: InputMaybe<CarEventType>;
  nin?: InputMaybe<Array<CarEventType>>;
};

export type CarFilterInput = {
  and?: InputMaybe<Array<CarFilterInput>>;
  general?: InputMaybe<GeneralFilterInput>;
  or?: InputMaybe<Array<CarFilterInput>>;
};

export enum CarSit {
  Driver = 'DRIVER',
  None = 'NONE',
  PassengerBackLeft = 'PASSENGER_BACK_LEFT',
  PassengerBackMiddle = 'PASSENGER_BACK_MIDDLE',
  PassengerBackRight = 'PASSENGER_BACK_RIGHT',
  PassengerFront = 'PASSENGER_FRONT'
}

export type CarSortInput = {
  general?: InputMaybe<GeneralSortInput>;
};

export type CellsGroup = {
  __typename?: 'CellsGroup';
  temperatures?: Maybe<Array<Scalars['Short']>>;
  voltages?: Maybe<Array<Scalars['Short']>>;
};

export enum CheckpointStatus {
  Pit = 'PIT',
  Track = 'TRACK',
  Unknown = 'UNKNOWN'
}

export type ComparableDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableDoubleOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  ngt?: InputMaybe<Scalars['Float']>;
  ngte?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<Scalars['Float']>>;
  nlt?: InputMaybe<Scalars['Float']>;
  nlte?: InputMaybe<Scalars['Float']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type General = {
  __typename?: 'General';
  batteryError: Scalars['UnsignedInt'];
  canStatus?: Maybe<CanStatus>;
  cruiseDesiredSpeed: Scalars['UnsignedInt'];
  cruiseEngaged: Scalars['UnsignedInt'];
  cruiseThrottle: Scalars['UnsignedInt'];
  driveMode: Scalars['UnsignedInt'];
  engineError: Scalars['UnsignedInt'];
  handBrake: Scalars['UnsignedInt'];
  horn: Scalars['UnsignedInt'];
  lControllerTemperature: Scalars['Float'];
  lMotorTemperature: Scalars['Float'];
  mainSwitch: Scalars['Boolean'];
  mileage: Scalars['Float'];
  motorController: Scalars['UnsignedInt'];
  motorDirection: Scalars['Boolean'];
  powerEco: Scalars['Boolean'];
  rControllerTemperature: Scalars['Float'];
  rMotorTemperature: Scalars['Float'];
  receivedTime: Scalars['DateTime'];
  regenerationBrake: Scalars['UnsignedInt'];
  rpm: Scalars['UnsignedInt'];
  solarRadiance: Scalars['UnsignedInt'];
  speed: Scalars['Float'];
  throttlePosition: Scalars['UnsignedInt'];
  timestamp: Scalars['DateTime'];
  totalMileage: Scalars['Float'];
  unixTimeMilliSeconds: Scalars['UnsignedLong'];
};

export type GeneralFilterInput = {
  and?: InputMaybe<Array<GeneralFilterInput>>;
  or?: InputMaybe<Array<GeneralFilterInput>>;
  timestamp?: InputMaybe<ComparableDateTimeOperationFilterInput>;
};

export type GeneralSortInput = {
  timestamp?: InputMaybe<SortEnumType>;
};

export type GeoCoordinate = {
  __typename?: 'GeoCoordinate';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Gps = {
  __typename?: 'Gps';
  altitude: Scalars['Float'];
  checkpointIndex: Scalars['Int'];
  checkpointStatus: CheckpointStatus;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  quality: Scalars['UnsignedInt'];
  satellitesNumber: Scalars['UnsignedInt'];
  speedKilometers: Scalars['Float'];
  speedKnots: Scalars['Float'];
};

export type Lap = {
  __typename?: 'Lap';
  durationInSeconds: Scalars['Float'];
  end: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  maxSpeed: Scalars['Float'];
  number: Scalars['Int'];
  powerAvg: Scalars['Float'];
  powerMpptAvg: Scalars['Float'];
  powerMpptTotal: Scalars['Float'];
  speedAvg: Scalars['Float'];
  start: Scalars['DateTime'];
  totalEnergy: Scalars['Float'];
};

export type LapFilterInput = {
  and?: InputMaybe<Array<LapFilterInput>>;
  durationInSeconds?: InputMaybe<ComparableDoubleOperationFilterInput>;
  end?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  maxSpeed?: InputMaybe<ComparableDoubleOperationFilterInput>;
  number?: InputMaybe<ComparableInt32OperationFilterInput>;
  or?: InputMaybe<Array<LapFilterInput>>;
  powerAvg?: InputMaybe<ComparableDoubleOperationFilterInput>;
  powerMpptAvg?: InputMaybe<ComparableDoubleOperationFilterInput>;
  powerMpptTotal?: InputMaybe<ComparableDoubleOperationFilterInput>;
  speedAvg?: InputMaybe<ComparableDoubleOperationFilterInput>;
  start?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  totalEnergy?: InputMaybe<ComparableDoubleOperationFilterInput>;
};

export type Lights = {
  __typename?: 'Lights';
  emergencyLights: Scalars['Boolean'];
  highBeamLights: Scalars['Boolean'];
  interiorLights: Scalars['Boolean'];
  leftIndicatorLight: Scalars['Boolean'];
  lowBeamLights: Scalars['Boolean'];
  parkLights: Scalars['Boolean'];
  rightIndicatorLight: Scalars['Boolean'];
  stopLights: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  anomaly?: Maybe<Array<Maybe<Anomaly>>>;
  car?: Maybe<Array<Maybe<Car>>>;
  carEvent?: Maybe<Array<Maybe<CarEvent>>>;
  lap?: Maybe<Array<Maybe<Lap>>>;
  raceTrackEvent?: Maybe<Array<Maybe<RaceTrackEvent>>>;
  recentCar?: Maybe<RecentCar>;
  zolder?: Maybe<Array<Maybe<GeoCoordinate>>>;
};


export type QueryCarArgs = {
  dateFrom?: InputMaybe<Scalars['String']>;
  dateTo?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<CarSortInput>>;
  where?: InputMaybe<CarFilterInput>;
};


export type QueryCarEventArgs = {
  order?: InputMaybe<Array<CarEventSortInput>>;
  where?: InputMaybe<CarEventFilterInput>;
};


export type QueryLapArgs = {
  where?: InputMaybe<LapFilterInput>;
};

export type RaceTrackEvent = {
  __typename?: 'RaceTrackEvent';
  description?: Maybe<Scalars['String']>;
  durationInSeconds: Scalars['Float'];
  endTime: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  maxSpeed: Scalars['Float'];
  passengers?: Maybe<Array<Maybe<RaceTrackPassenger>>>;
  powerAvg: Scalars['Float'];
  powerMpptAvg: Scalars['Float'];
  powerMpptTotal: Scalars['Float'];
  speedAvg: Scalars['Float'];
  startTime: Scalars['DateTime'];
  totalEnergy: Scalars['Float'];
};

export type RaceTrackPassenger = {
  __typename?: 'RaceTrackPassenger';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  sitPosiiton: CarSit;
  weight: Scalars['Float'];
};

export type RecentCar = {
  __typename?: 'RecentCar';
  battery?: Maybe<Battery>;
  general?: Maybe<General>;
  gps?: Maybe<Gps>;
  id?: Maybe<Scalars['String']>;
  lights?: Maybe<Lights>;
  solar?: Maybe<Solar>;
  tires?: Maybe<Tires>;
};

export type RideSummary = {
  __typename?: 'RideSummary';
  checkpointIndex: Scalars['Int'];
  powerBalanceAvg: Scalars['Float'];
  powerBalanceMax: Scalars['Float'];
  powerBalanceMin: Scalars['Float'];
  speedAvg: Scalars['Float'];
  speedMax: Scalars['Float'];
  speedMin: Scalars['Float'];
};

export type Solar = {
  __typename?: 'Solar';
  mpptInputCurrent?: Maybe<Array<Scalars['Float']>>;
  mpptInputVoltage?: Maybe<Array<Scalars['Int']>>;
  mpptMosfetTemperature?: Maybe<Array<Scalars['Float']>>;
  mpptOutputPower?: Maybe<Array<Scalars['Int']>>;
  mpptOutputVoltage?: Maybe<Array<Scalars['Int']>>;
  mpptPcbTemperature?: Maybe<Array<Scalars['Float']>>;
  powerMppt: Scalars['Int'];
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tires = {
  __typename?: 'Tires';
  pressures?: Maybe<Array<Scalars['Float']>>;
  temperatures?: Maybe<Array<Scalars['Int']>>;
};

export type HomeScreenQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeScreenQuery = { __typename?: 'Query', recentCar?: { __typename?: 'RecentCar', battery?: { __typename?: 'Battery', stateOfCharge: any, chargerEnabled: boolean, remainingEnergy: any, stateOfHealth: any } | null, lights?: { __typename?: 'Lights', highBeamLights: boolean } | null, gps?: { __typename?: 'Gps', latitude: number, longitude: number } | null, general?: { __typename?: 'General', mileage: number } | null } | null };


export const HomeScreenDocument = gql`
    query homeScreen {
  recentCar {
    battery {
      stateOfCharge
      chargerEnabled
      remainingEnergy
      stateOfHealth
    }
    lights {
      highBeamLights
    }
    gps {
      latitude
      longitude
    }
    general {
      mileage
    }
  }
}
    `;

/**
 * __useHomeScreenQuery__
 *
 * To run a query within a React component, call `useHomeScreenQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeScreenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeScreenQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeScreenQuery(baseOptions?: Apollo.QueryHookOptions<HomeScreenQuery, HomeScreenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeScreenQuery, HomeScreenQueryVariables>(HomeScreenDocument, options);
      }
export function useHomeScreenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeScreenQuery, HomeScreenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeScreenQuery, HomeScreenQueryVariables>(HomeScreenDocument, options);
        }
export type HomeScreenQueryHookResult = ReturnType<typeof useHomeScreenQuery>;
export type HomeScreenLazyQueryHookResult = ReturnType<typeof useHomeScreenLazyQuery>;
export type HomeScreenQueryResult = Apollo.QueryResult<HomeScreenQuery, HomeScreenQueryVariables>;