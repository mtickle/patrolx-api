-- DROP FUNCTION IF EXISTS public.get_traffic_stops_by_type(integer);
CREATE
OR REPLACE FUNCTION public.get_traffic_stops_by_type(recordlimit integer) RETURNS TABLE(itemname character varying, itemcount bigint) LANGUAGE 'plpgsql' COST 100 VOLATILE PARALLEL UNSAFE ROWS 1000 AS $ BODY $ BEGIN RETURN QUERY
select
    traffic_description as itemname,
    count(traffic_description) as itemcount
from
    trafficstops
GROUP BY
    itemname
ORDER BY
    itemcount desc
LIMIT
    recordLimit;

limit
    10;

END;

$ BODY $;

ALTER FUNCTION public.get_traffic_stops_by_agency(integer) OWNER TO pi;

-- DROP FUNCTION IF EXISTS public.get_traffic_stops_by_gender(integer);
CREATE
OR REPLACE FUNCTION public.get_traffic_stops_by_gender(recordlimit integer) RETURNS TABLE(itemname character varying, itemcount bigint) LANGUAGE 'plpgsql' COST 100 VOLATILE PARALLEL UNSAFE ROWS 1000 AS $ BODY $ BEGIN RETURN QUERY
select
    traffic_gender as itemname,
    count(traffic_gender) as itemcount
from
    trafficstops
GROUP BY
    itemname
ORDER BY
    itemcount desc
LIMIT
    recordLimit;

END;

$ BODY $;

ALTER FUNCTION public.get_traffic_stops_by_gender(integer) OWNER TO pi;

-- DROP FUNCTION IF EXISTS public.get_traffic_stops_by_race(integer);
CREATE
OR REPLACE FUNCTION public.get_traffic_stops_by_race(recordlimit integer) RETURNS TABLE(itemname character varying, itemcount bigint) LANGUAGE 'plpgsql' COST 100 VOLATILE PARALLEL UNSAFE ROWS 1000 AS $ BODY $ BEGIN RETURN QUERY
select
    traffic_race as itemname,
    count(traffic_race) as itemcount
from
    trafficstops
GROUP BY
    itemname
ORDER BY
    itemcount desc
LIMIT
    recordLimit;

END;

$ BODY $;

ALTER FUNCTION public.get_traffic_stops_by_race(integer) OWNER TO pi;

-- DROP FUNCTION IF EXISTS public.get_traffic_stops_by_make(integer);
CREATE
OR REPLACE FUNCTION public.get_traffic_stops_by_make(recordlimit integer) RETURNS TABLE(itemname character varying, itemcount bigint) LANGUAGE 'plpgsql' COST 100 VOLATILE PARALLEL UNSAFE ROWS 1000 AS $ BODY $ BEGIN RETURN QUERY
select
    traffic_make as itemname,
    count(traffic_gender) as itemcount
from
    trafficstops
GROUP BY
    itemname
ORDER BY
    itemcount desc
LIMIT
    recordLimit;

END;

$ BODY $;

ALTER FUNCTION public.get_traffic_stops_by_make(integer) OWNER TO pi;

-