
-- DROP FUNCTION IF EXISTS public.get_calls_by_agency(integer);

CREATE OR REPLACE FUNCTION public.get_calls_by_agency(
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
	call_agency as item
	, count(call_agency) as itemcount
from 
	calls
group by 
	call_agency
order by
	itemcount desc
limit 10;
END;
$BODY$;

ALTER FUNCTION public.get_calls_by_agency(integer)
    OWNER TO pi;





-- DROP FUNCTION IF EXISTS public.get_calls_by_type(integer);

CREATE OR REPLACE FUNCTION public.get_calls_by_type(
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
	call_type as item
	, count(call_agency) as itemcount
from 
	calls
group by 
	call_type
order by
	itemcount desc
limit 10;
END;
$BODY$;

ALTER FUNCTION public.get_calls_by_type(integer)
    OWNER TO pi;




-- DROP FUNCTION IF EXISTS public.get_calls_by_day(integer);
CREATE OR REPLACE FUNCTION public.get_calls_by_day(
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
	EXTRACT(DOW from call_date) as item
	, count(call_agency) as itemcount
from 
	calls
group by 
	item
order by
	item asc
limit 10;
END;
$BODY$;

ALTER FUNCTION public.get_calls_by_day(integer)
    OWNER TO pi;





-- DROP FUNCTION IF EXISTS public.get_calls_by_hour(integer);
CREATE OR REPLACE FUNCTION public.get_calls_by_hour(
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
	extract(hour from call_time) as itemname
	, count(call_agency) as itemcount
from 
	calls
group by 
	itemname
order by
	itemname asc
limit 24;
END;
$BODY$;

ALTER FUNCTION public.get_calls_by_hour(integer)
    OWNER TO pi;





