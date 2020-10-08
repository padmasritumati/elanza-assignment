const initialState = {
  requestData: [
    {
      name: "Jone",
      startDate: "8-10-2020",
      endDate: "9-10-2020",
      careType: "Household",
      additionalInfo:
        "i have some health issues,i wanted who can take good care of me",
      status: "open",
    },
    {
      name: "Max",
      startDate: "8-10-2020",
      endDate: "9-10-2020",
      careType: "Household",
      additionalInfo:
        "i have some health issues,i wanted who can take good care of me",
      status: "open",
    },
    {
      name: "Tom",
      startDate: "8-10-2020",
      endDate: "9-10-2020",
      careType: "Household",
      additionalInfo:
        "i have some health issues,i wanted who can take good care of me",
      status: "open",
    },
    {
      name: "Tommy",
      startDate: "8-10-2020",
      endDate: "9-10-2020",
      careType: "Household",
      additionalInfo:
        "i have some health issues,i wanted who can take good care of me",
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
