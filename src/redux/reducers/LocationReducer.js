import * as Types from "../Types";

// Initial state
const initialState = {
    isLoading: false,
    divisionList: {},
    districtList: {},
    upazillaList: {},
    unionList: {}
};

const LocationReducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case Types.DIVISION_LIST:
            return {
                ...state,
                divisionList: action.payload.data,
            };
        case Types.DISTRICT_LIST:
            return {
                ...state,
                districtList: action.payload.data,
            };
        case Types.UPAZILLA_LIST:
            return {
                ...state,
                upazillaList: action.payload.data,
            };
        case Types.UNION_LIST:
            return {
                ...state,
                unionList: action.payload.data,
            };
        default:
            break;
    }
    return newState;
};

export default LocationReducer;
