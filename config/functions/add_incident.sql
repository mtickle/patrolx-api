-- PROCEDURE: public.add_incident(text, numeric, numeric, text, text, date, time without time zone, text, text, text)

-- DROP PROCEDURE IF EXISTS public.add_incident(text, numeric, numeric, text, text, date, time without time zone, text, text, text);

CREATE OR REPLACE PROCEDURE public.add_incident(
	IN p_incident_casenumber text,
	IN p_incident_longitude numeric,
	IN p_incident_latitude numeric,
	IN p_incident_crimecode text,
	IN p_incident_district text,
	IN p_incident_date date,
	IN p_incident_time time without time zone,
	IN p_incident_type text,
	IN p_incident_city text,
	IN p_incident_address text)
LANGUAGE 'plpgsql'
AS $BODY$
 BEGIN
INSERT INTO
    public.incidents(
        incident_casenumber,
        incident_longitude,
        incident_latitude,
        incident_crimecode,
        incident_district,
        incident_date,
        incident_time,
        incident_type,
        incident_city,
        incident_address
    )
VALUES
    (
        p_incident_casenumber,
        p_incident_longitude,
        p_incident_latitude,
        p_incident_crimecode,
        p_incident_district,
        p_incident_date,
        p_incident_time,
        p_incident_type,
        p_incident_city,
        p_incident_address
        ) ON CONFLICT (
            incident_casenumber,
            incident_longitude,
            incident_latitude,
            incident_crimecode,
            incident_district,
            incident_date,
            incident_time,
            incident_type,
            incident_city,
            incident_address
        ) DO NOTHING;

END;

$BODY$;
ALTER PROCEDURE public.add_incident(text, numeric, numeric, text, text, date, time without time zone, text, text, text)
    OWNER TO pi;
