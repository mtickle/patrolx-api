-- FUNCTION: public.get_crashes(integer)

-- DROP FUNCTION IF EXISTS public.get_crashes(integer);

CREATE OR REPLACE FUNCTION public.get_crashes(
	recordlimit integer)
    RETURNS TABLE(
		crash_id uuid
		, crash_date date
		, crash_time time without time zone
		, crash_locationroadname character varying
		, crash_locationroadnameat CHARACTER VARYING
		, crash_locationroadnameto CHARACTER VARYING
		, crash_locationCity character varying
		, crash_mostHarmfulEvent character varying
		, crash_drivers NUMERIC
		, crash_passengers NUMERIC
		, crash_killed NUMERIC
		, crash_injuries INTEGER
		, crash_latitude NUMERIC
		, crash_longitude NUMERIC
		 ) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
 BEGIN RETURN QUERY
SELECT
    crashes.crash_id uuid
    , crashes.crash_date
    , crashes.crash_time
	, crashes.crash_locationroadname
	, crashes.crash_locationroadnameat
	, crashes.crash_locationroadnameto
	, crashes.crash_mostHarmfulEvent
	, crashes.crash_locationcity
	, crashes.crash_drivers
	, crashes.crash_passengers
	, crashes.crash_killed
	, 0
	, crashes.crash_latitude
	, crashes.crash_longitude
FROM
    public.crashes
LIMIT
    recordLimit;
END;
$BODY$;

ALTER FUNCTION public.get_crashes(integer)
    OWNER TO pi;
