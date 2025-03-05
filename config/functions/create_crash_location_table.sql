



CREATE TABLE IF NOT EXISTS public.crashes
(
crash_id  uuid DEFAULT gen_random_uuid()
, crash_key_crash character varying COLLATE pg_catalog."default"
, crash_date date
, crash_time time without time zone
, crash_locationRelationToRoad  character varying COLLATE pg_catalog."default"
, crash_locationInNearIndicator character varying COLLATE pg_catalog."default"
, crash_locationCity character varying COLLATE pg_catalog."default"
, crash_locationRoadName character varying COLLATE pg_catalog."default"
, crash_locationRampIndicator character varying COLLATE pg_catalog."default"
, crash_locationMilesFromRoad character varying COLLATE pg_catalog."default"
, crash_locationFeetFromRoad character varying COLLATE pg_catalog."default"
, crash_locationDirectionFromRoad character varying COLLATE pg_catalog."default"
, crash_locationAtFromIndicator character varying COLLATE pg_catalog."default"
, crash_locationRoadNameAt character varying COLLATE pg_catalog."default"
, crash_locationDirectionToRoad character varying COLLATE pg_catalog."default"
, crash_locationRoadNameTo character varying COLLATE pg_catalog."default"
, crash_firstHarmfulEvent character varying COLLATE pg_catalog."default"
, crash_mostHarmfulEvent character varying COLLATE pg_catalog."default"
, crash_roadClassification character varying COLLATE pg_catalog."default"
, crash_roadFeature character varying COLLATE pg_catalog."default"
, crash_trafficControlType character varying COLLATE pg_catalog."default"
, crash_weatherCondition1 character varying COLLATE pg_catalog."default"
, crash_weatherCondition2 character varying COLLATE pg_catalog."default"
, crash_weatherContributedToCrash character varying COLLATE pg_catalog."default"
, crash_drivers numeric
, crash_passengers numeric
, crash_pedestrians numeric
, crash_pedalCyclists numeric
, crash_otherPersonType numeric
, crash_unknownPersonType numeric
, crash_killed numeric
, crash_typeAInjury numeric
, crash_typeBInjury numeric
, crash_typeCInjury numeric
, crash_noInjury numeric
, crash_injuryUnknown numeric
, crash_latitude numeric
, crash_longitude numeric

)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.crashes
    OWNER to pi;