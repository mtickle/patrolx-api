--DROP FUNCTION get_incidents(recordLimit INT);

CREATE
OR REPLACE FUNCTION get_incidents(recordLimit INT) RETURNS TABLE(
    incident_id uuid,
    incident_casenumber character varying,
    incident_longitude numeric,
    incident_latitude numeric,
    incident_crimecode character varying,
    incident_district character varying,
    incident_date date,
    incident_time time without time zone,
    incident_type character varying,
    incident_city character varying,
    incident_address character varying
) LANGUAGE plpgsql AS $$ BEGIN RETURN QUERY
SELECT
    incidents.incident_id,
    incidents.incident_casenumber,
    incidents.incident_longitude,
    incidents.incident_latitude,
    incidents.incident_crimecode,
    incidents.incident_district,
    incidents.incident_date,
    incidents.incident_time,
    incidents.incident_type,
    incidents.incident_city,
    incidents.incident_address
FROM
    public.incidents
LIMIT
    recordLimit;
END;
$$;

SELECT
    *
FROM
    get_incidents(10);