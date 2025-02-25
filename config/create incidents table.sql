------------------------------------------------------------------------------------
-- Table: public.incidents
-- DROP TABLE IF EXISTS public.incidents;

CREATE TABLE IF NOT EXISTS public.incidents
(
incident_id uuid DEFAULT gen_random_uuid(),
incident_caseNumber character varying COLLATE pg_catalog."default",
incident_longitude numeric,
incident_latitude numeric,
incident_crimecode character varying COLLATE pg_catalog."default",
incident_district character varying COLLATE pg_catalog."default",
incident_date date,
incident_time time without time zone,
incident_type character varying COLLATE pg_catalog."default",
incident_city character varying COLLATE pg_catalog."default",
incident_address character varying COLLATE pg_catalog."default",
CONSTRAINT const_incidents UNIQUE (incident_caseNumber,incident_longitude,incident_latitude,incident_crimecode,incident_district,incident_date,incident_time,incident_type,incident_city,incident_address)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.incidents
    OWNER to pi;
------------------------------------------------------------------------------------
