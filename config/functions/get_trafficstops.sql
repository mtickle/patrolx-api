DROP FUNCTION get_trafficstops(recordLimit INT);

CREATE OR REPLACE FUNCTION get_trafficstops(recordLimit INT)
RETURNS TABLE(
traffic_id uuid,
traffic_belts character varying,
traffic_location  character varying,
traffic_race character varying,
traffic_arresttype  character varying,
traffic_charge character varying,
traffic_subagency character varying,
traffic_dateofstop date,
traffic_color  character varying,
traffic_vehicletype  character varying,
traffic_accident  character varying,
traffic_driverstate character varying,
traffic_violationtype  character varying,
traffic_latitude numeric, 
traffic_model character varying,
traffic_personalinjury character varying,
traffic_article  character varying,
traffic_description character varying,
traffic_hazmat  character varying,
traffic_fatal character varying,
traffic_year numeric, 
traffic_propertydamage  character varying,
traffic_agency  character varying,
traffic_gender  character varying,
traffic_driverCity  character varying,
traffic_longitude numeric,
traffic_alcohol character varying,
traffic_timeofstop time without time zone,
traffic_commercialvehicle character varying,
traffic_make character varying,
traffic_workzone character varying,
traffic_dlstate character varying,
traffic_contributedtoaccident character varying,
traffic_commerciallicense character varying
)

LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT 
trafficstops.traffic_id,
trafficstops.traffic_belts,
trafficstops.traffic_location,
trafficstops.traffic_race,
trafficstops.traffic_arresttype,
trafficstops.traffic_charge,
trafficstops.traffic_subagency,
trafficstops.traffic_dateofstop,
trafficstops.traffic_color,
trafficstops.traffic_vehicletype,
trafficstops.traffic_accident,
trafficstops.traffic_driverstate,
trafficstops.traffic_violationtype,
trafficstops.traffic_latitude,
trafficstops.traffic_model,
trafficstops.traffic_personalinjury,
trafficstops.traffic_article,
trafficstops.traffic_description,
trafficstops.traffic_hazmat,
trafficstops.traffic_fatal,
trafficstops.traffic_year,
trafficstops.traffic_propertydamage,
trafficstops.traffic_agency,
trafficstops.traffic_gender,
trafficstops.traffic_drivercity,
trafficstops.traffic_longitude,
trafficstops.traffic_alcohol,
trafficstops.traffic_timeofstop,
trafficstops.traffic_commercialvehicle,
trafficstops.traffic_make,
trafficstops.traffic_workzone,
trafficstops.traffic_dlstate,
trafficstops.traffic_contributedtoaccident,
trafficstops.traffic_commerciallicense
FROM
	public.trafficstops;
	LIMIT recordLimit;
END;
$$;



