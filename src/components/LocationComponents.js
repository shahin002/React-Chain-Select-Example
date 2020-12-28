import React, {useEffect} from 'react';
import Select from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {
    getDistrictAction,
    getDivisionAction,
    getUnionaAction,
    getUpazillaAction
} from "../redux/actions/LocationAction";

const LocationComponents = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.location.isLoading);
    const divisionList = useSelector((state) => state.location.divisionList);
    const districtList = useSelector((state) => state.location.districtList);
    const upazillaList = useSelector((state) => state.location.upazillaList);
    const unionList = useSelector((state) => state.location.unionList);

    useEffect(() => {
        dispatch(getDivisionAction())
    }, [])
    const onSelectDivision = (e) => {
        console.log(e)
        dispatch(getDistrictAction(e.value))
    }
    const onSelectDistrict = (e) => {
        console.log(e)
        dispatch(getUpazillaAction(e.value))
    }
    const onSelectUpazilla = (e) => {
        console.log(e)
        dispatch(getUnionaAction(e.value))
    }
    const onSelectUnion = (e) => {
        console.log(e)
    }
    return (
        <>
            {
                isLoading &&
                <div>
                    SSSSSSSSSSSSSSSSSSSSSSSS
                </div>
            }
            <Select placeholder="Select Division" onChange={onSelectDivision} options={divisionList}/>
            <Select placeholder="Select District" onChange={onSelectDistrict} options={districtList}/>
            <Select placeholder="Select Upazilla" onChange={onSelectUpazilla} options={upazillaList}/>
            <Select placeholder="Select Union" onChange={onSelectUnion} options={unionList}/>
        </>
    );
};

export default LocationComponents;
