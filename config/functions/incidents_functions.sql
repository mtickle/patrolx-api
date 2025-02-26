
-- DROP FUNCTION IF EXISTS public.get_incidents_by_district(integer);

CREATE OR REPLACE FUNCTION public.get_incidents_by_district(
	recordlimit integer)
    RETURNS TABLE(itemname character varying, itemcount bigint) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
select
	incident_district as itemname
	, count(incident_district) as itemcount
from 
	incidents
group by 
	incident_district
order by
	itemcount desc
limit 10;
END;
$BODY$;

ALTER FUNCTION public.get_incidents_by_district(integer)
    OWNER TO pi;





-- DROP FUNCTION IF EXISTS public.get_incidents_by_type(integer);

CREATE OR REPLACE FUNCTION public.get_incidents_by_type(
	recordlimit integer)
    RETURNS TABLE(item character varying, itemcount bigint) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
select
	incident_type as itemname
	, count(incident_type) as itemcount
from 
	incidents
group by 
	incident_type
order by
	itemcount desc
limit 10;
END;
$BODY$;

ALTER FUNCTION public.get_incidents_by_type(integer)
    OWNER TO pi;




-- DROP FUNCTION IF EXISTS public.get_incidents_by_day(integer);
CREATE OR REPLACE FUNCTION public.get_incidents_by_day(
	recordlimit integer)
    RETURNS TABLE(item character varying, itemcount bigint) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
sselect
	CONCAT(EXTRACT(DOW from incident_date), ' - ', to_char(incident_date, 'DY')) as itemname
	, count(incident_district) as itemcount
from 
	incidents
group by 
	item
order by
	item asc
limit 10;
END;
$BODY$;

ALTER FUNCTION public.get_incidents_by_day(integer)
    OWNER TO pi;





-- DROP FUNCTION IF EXISTS public.get_incidents_by_hour(integer);
CREATE OR REPLACE FUNCTION public.get_incidents_by_hour(
	recordlimit integer)
    RETURNS TABLE(item character varying, itemcount bigint) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
select
	extract(hour from incident_time) as itemname
	, count(incident_district) as itemcount
from 
	incidents
group by 
	itemname
order by
	itemname asc
limit 24;
END;
$BODY$;

ALTER FUNCTION public.get_incidents_by_hour(integer)
    OWNER TO pi;





