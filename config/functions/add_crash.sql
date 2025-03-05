-- PROCEDURE: public.add_crash(text, date, time without time zone, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric)

-- DROP PROCEDURE IF EXISTS public.add_crash(text, date, time without time zone, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric);

CREATE OR REPLACE PROCEDURE public.add_crash(
	IN p_crash_key_crash text,
	IN p_crash_date date,
	IN p_crash_time time without time zone,
	IN p_crash_locationrelationtoroad text,
	IN p_crash_locationinnearIndicator text,
	IN p_crash_locationcity text,
	IN p_crash_locationroadname text,
	IN p_crash_locationrampIndicator text,
	IN p_crash_locationmilesfromroad text,
	IN p_crash_locationfeetfromroad text,
	IN p_crash_locationdirectionfromroad text,
	IN p_crash_locationatfromIndicator text,
	IN p_crash_locationroadnameat text,
	IN p_crash_locationdirectiontoroad text,
	IN p_crash_locationroadnameto text,
	IN p_crash_firstharmfulevent text,
	IN p_crash_mostharmfulevent text,
	IN p_crash_roadclassification text,
	IN p_crash_roadfeature text,
	IN p_crash_trafficcontroltype text,
	IN p_crash_weathercondition1 text,
	IN p_crash_weathercondition2 text,
	IN p_crash_weathercontributedtocrash text,
	IN p_crash_drivers numeric,
	IN p_crash_passengers numeric,
	IN p_crash_pedestrians numeric,
	IN p_crash_pedalcyclists numeric,
	IN p_crash_otherpersontype numeric,
	IN p_crash_unknownpersontype numeric,
	IN p_crash_killed numeric,
	IN p_crash_typeainjury numeric,
	IN p_crash_typebinjury numeric,
	IN p_crash_typecinjury numeric,
	IN p_crash_noinjury numeric,
	IN p_crash_injuryunknown numeric,
	IN p_crash_latitude numeric,
	IN p_crash_longitude numeric)
LANGUAGE 'plpgsql'
AS $BODY$
BEGIN

INSERT INTO
    public.crashes(
  crash_key_crash 
,  crash_date 
,  crash_time 
,  crash_locationRelationToRoad  
,  crash_locationNearIndicator 
,  crash_locationCity 
,  crash_locationRoadName 
,  crash_locationRampIndicator 
,  crash_locationMilesFromRoad 
,  crash_locationFeetFromRoad 
,  crash_locationDirectionFromRoad 
,  crash_locationAtFromIndicator 
,  crash_locationRoadNameAt 
,  crash_locationDirectionToRoad 
,  crash_locationRoadNameTo 
,  crash_firstHarmfulEvent 
,  crash_mostHarmfulEvent 
,  crash_roadClassification 
,  crash_roadFeature 
,  crash_trafficControlType 
,  crash_weatherCondition1 
,  crash_weatherCondition2 
,  crash_weatherContributedToCrash 
,  crash_drivers 
,  crash_passengers 
,  crash_pedestrians 
,  crash_pedalCyclists 
,  crash_otherPersonType 
,  crash_unknownPersonType 
,  crash_killed 
,  crash_typeAjury 
,  crash_typeBjury 
,  crash_typeCjury 
,  crash_nojury 
,  crash_juryUnknown 
,  crash_latitude 
,  crash_longitude 
    ) VALUES (
     p_crash_key_crash 
,  p_crash_date 
,  p_crash_time 
,  p_crash_locationRelationToRoad  
,  p_crash_locationNearIndicator 
,  p_crash_locationCity 
,  p_crash_locationRoadName 
,  p_crash_locationRampIndicator 
,  p_crash_locationMilesFromRoad 
,  p_crash_locationFeetFromRoad 
,  p_crash_locationDirectionFromRoad 
,  p_crash_locationAtFromIndicator 
,  p_crash_locationRoadNameAt 
,  p_crash_locationDirectionToRoad 
,  p_crash_locationRoadNameTo 
,  p_crash_firstHarmfulEvent 
,  p_crash_mostHarmfulEvent 
,  p_crash_roadClassification 
,  p_crash_roadFeature 
,  p_crash_trafficControlType 
,  p_crash_weatherCondition1 
,  p_crash_weatherCondition2 
,  p_crash_weatherContributedToCrash 
,  p_crash_drivers 
,  p_crash_passengers 
,  p_crash_pedestrians 
,  p_crash_pedalCyclists 
,  p_crash_otherPersonType 
,  p_crash_unknownPersonType 
,  p_crash_killed 
,  p_crash_typeAjury 
,  p_crash_typeBjury 
,  p_crash_typeCjury 
,  p_crash_nojury 
,  p_crash_juryUnknown 
,  p_crash_latitude 
,  p_crash_longitude 
    ) ON CONFLICT (crash_key_crash) DO NOTHING;

END;
$BODY$;
ALTER PROCEDURE public.add_crash(text, date, time without time zone, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric)
    OWNER TO pi;
