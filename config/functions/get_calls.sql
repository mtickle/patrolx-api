--DROP FUNCTION get_calls(recordLimit INT);

CREATE
OR REPLACE FUNCTION get_calls(recordLimit INT) RETURNS TABLE(
   call_id uuid ,
    call_agency character varying,
    call_latitude numeric,
    call_longitude numeric,
    call_type character varying,
    call_address character,
    call_date date,
    call_time time without time zone
) LANGUAGE plpgsql AS $$ BEGIN RETURN QUERY
SELECT
    calls.call_id uuid ,
    calls.call_agency,
    calls.call_latitude,
    calls.call_longitude,
    calls.call_type,
    calls.call_address,
    calls.call_date,
    calls.call_time
FROM
    public.calls
LIMIT
    recordLimit;
END;
$$;

SELECT
    *
FROM
    get_calls(10);