export const ADDREQUEST = "ADDREQUEST";
export const UPDATEREQUEST = "UPDATEREQUEST";

export const updateRequest = (requestData) => ({
  type: UPDATEREQUEST,
  payload: requestData,
});

export const addRequest = (requestData) => ({
  type: ADDREQUEST,
  payload: requestData,
});

export const setRequest = (
  name,
  careType,
  startDate,
  endDate,
  additionalInfo,
  status
) => {
  return (dispatch) =>
    dispatch(
      addRequest({
        name: name,
        startDate: startDate,
        endDate: endDate,
        careType: careType,
        additionalInfo: additionalInfo,
        status: status,
      })
    );
};

export const filterRequestData = (filteredData) => {
  return (dispatch) => dispatch(updateRequest(filteredData));
};
