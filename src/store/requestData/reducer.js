const initialState = {
  requestData: [
    {
      name: "Oliver",
      startDate: "10-20-2020",
      endDate: "10-22-2020",
      careType: "Household",
      additionalInfo:
        "My health condition is not good,i wanted someone who can take good care of me",
      status: "open",
    },
    {
      name: "David",
      startDate: "10-20-2020",
      endDate: "10-22-2020",
      careType: "Household",
      additionalInfo:
      "My health condition is not good,i wanted someone who can take good care of me",
      status: "open",
    },
    {
      name: "Luke",
      startDate: "10-20-2020",
      endDate: "10-22-2020",
      careType: "Household",
      additionalInfo:
      "My health condition is not good,i wanted someone who can take good care of me",
      status: "open",
    },
    {
      name: "James",
      startDate: "10-20-2020",
      endDate: "10-22-2020",
      careType: "Household",
      additionalInfo:
      "My health condition is not good,i wanted someone who can take good care of me",
      status: "open",
    },
  ],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADDREQUEST": {
      console.log("from reducer", state, action.payload);
      return { ...state, requestData: [...state.requestData, action.payload] };
    }
    case "UPDATEREQUEST": {
     
      return { ...state ,requestData:[...action.payload]};
    }
    default: {
      return { ...state };
    }
  }
}
