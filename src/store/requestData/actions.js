export const ADDREQUEST = "ADDREQUEST";
export const addRequest = (requestData) => ({
  type: ADDREQUEST,
  payload: requestData,
});
export const setRequest = (
  name,
  startDate,
  endDate,
  careType,
  additionalInfo,
  status,
) => {
  console.log("from action",name,
  startDate,
  endDate,
  careType,
  additionalInfo,
  status,)
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
