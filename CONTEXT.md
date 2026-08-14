# FoonFai Air Quality

FoonFai helps people quickly understand current air quality across Chiang Rai province, with Yakkaw as its active monitoring source.

## Language

**Monitoring Station**:
A physical Yakkaw device that reports air-quality measurements and is identified by its stable device ID.
_Avoid_: Node, location, sensor record

**Latest Reading**:
The most recent PM2.5 measurement reported by a monitoring station, shown first on the default station card.
_Avoid_: Current AQI, live value

**6-Hour Average**:
Yakkaw's PM2.5 measurement averaged over the preceding six hours; this is the preferred value for station comparison.
_Avoid_: Current PM2.5, six-hour AQI

**Fresh Reading**:
A reading from a source-valid monitoring station whose timestamp is no more than two hours old.
_Avoid_: Active reading, valid reading

**Unavailable Station**:
A monitoring station whose reading is missing, invalid, or older than two hours; unavailable stations are kept behind an explicit disclosure.
_Avoid_: Hidden station, inactive station

**Chiang Rai Province**:
The geographic scope of stations shown by FoonFai.
_Avoid_: Chiang Rai city, Chiang Rai area

**PM2.5 Concentration**:
The measured amount of fine particulate matter, displayed as the primary health-related measurement in micrograms per cubic metre.
_Avoid_: AQI, air-quality score

**Air Quality Index (AQI)**:
A derived interpretation of PM2.5 concentration using a named standard, used for color coding and reference while concentration remains visible.
_Avoid_: PM2.5 value, pollution level

**Historical Window**:
A source-provided PM2.5 average over a named preceding period such as one, three, six, twelve, or twenty-four hours.
_Avoid_: History, trend, chart

**AQI Standard**:
The named calculation convention used to interpret a concentration, currently Thai AQI or US AQI; the standard name is always shown when AQI is displayed.
_Avoid_: AQI mode, color scheme

**Current Snapshot**:
The default view of fresh monitoring stations ordered to help users identify the highest latest PM2.5 reading quickly.
_Avoid_: Live dashboard, realtime view

**Reading Timestamp**:
The single source-authoritative timestamp used to determine the age of a measurement.
_Avoid_: Server time, update time

**Province Membership**:
The source-provided classification that determines whether a monitoring station belongs to Chiang Rai Province.
_Avoid_: Address match, location filter

**Concentration Display**:
The presentation of PM2.5 in whole numbers for summary cards and one decimal place for detail views.
_Avoid_: Source precision, AQI display

**Data Verification Failure**:
A state in which FoonFai cannot verify current readings from Yakkaw and therefore shows no current data, an explanation, and a direct source link.
_Avoid_: API error, network error, empty state

**Yakkaw**:
The active data source for FoonFai's Chiang Rai monitoring stations.
_Avoid_: Yakkaw API, MFU data
