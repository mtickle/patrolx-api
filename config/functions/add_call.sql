CREATE OR REPLACE PROCEDURE public.add_call(
	IN p_call_agency text,
	IN p_call_longitude numeric,
	IN p_call_latitude numeric,
	IN p_call_type text,
	IN p_call_address text,
	IN p_call_date date,
	IN p_call_time time without time zone)
LANGUAGE 'plpgsql'
AS $BODY$
 BEGIN
INSERT INTO
    public.calls(
       call_agency, call_latitude, call_longitude, call_type, call_address, call_date, call_time
    )
VALUES
    (
    p_call_agency,
	p_call_longitude,
	p_call_latitude,
	p_call_type,
	p_call_address,
	p_call_date,
	p_call_time
        ) ON CONFLICT (
            call_agency, call_type, call_address, call_date, call_time
        ) DO NOTHING;

END;

$BODY$;

