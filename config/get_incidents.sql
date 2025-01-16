DROP FUNCTION get_incidents(recordLimit INT);

CREATE OR REPLACE FUNCTION get_incidents(recordLimit INT)
RETURNS TABLE(incidentID UUID, 

casenumber character varying,
reportedhour character varying,
longitude character varying,
reportedyear character varying,
reportedmonth character varying,
latitude character varying,
crimecode character varying,
crimetype character varying,
district character varying,
reporteddayofweek character varying,
reporteddate character varying,
reportedtime character varying,
reportedday character varying,
updateddate character varying,
crimedescription character varying,
cityofincident character varying,
reportedblockaddress character varying

)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT 
incidents.incidentID,
incidents.casenumber,
incidents.reportedhour,
incidents.longitude,
incidents.reportedyear,
incidents.reportedmonth,
incidents.latitude,
incidents.crimecode,
incidents.crimetype,
incidents.district,
incidents.reporteddayofweek,
incidents.reporteddate,
incidents.reportedtime,
incidents.reportedday,
incidents.updateddate,
incidents.crimedescription,
incidents.cityofincident,
incidents.reportedblockaddress
    FROM incidents
	LIMIT recordLimit;
END;
$$;


SELECT * FROM get_incidents(10);