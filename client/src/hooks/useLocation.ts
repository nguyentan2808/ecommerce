import axios from "axios";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import React from "react";

interface IProvince {
    idProvince: string;
    name: string;
}

interface IDistrict {
    idProvince: string;
    idDistrict: string;
    name: string;
}

interface IWard {
    idDistrict: string;
    idCommune: string;
    name: string;
}

interface ICurrentLocation {
    idProvince: string;
    idDistrict: string;
}

interface IReturnType {
    listProvince: IProvince[];
    listDistrict: IDistrict[];
    listWard: IWard[];
    currentLocation: ICurrentLocation;
    setCurrentLocation: Dispatch<SetStateAction<ICurrentLocation>>;
}

const LocationAPI = axios.create({
    baseURL: "https://vietnam-location-api.up.railway.app",
});

const useLocation = (): IReturnType => {
    const [listProvince, setListProvince] = React.useState<IProvince[]>([]);
    const [listDistrict, setListDistrict] = React.useState<IDistrict[]>([]);
    const [listWard, setListWard] = React.useState<IWard[]>([]);
    const [currentLocation, setCurrentLocation] =
        React.useState<ICurrentLocation>({
            idProvince: "",
            idDistrict: "",
        });

    React.useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const { data } = await LocationAPI.get("/province");
                setListProvince(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProvinces();
    }, []);

    React.useEffect(() => {
        const fetchDistricts = async () => {
            try {
                const { data } = await LocationAPI.get(
                    `/district?idProvince=${currentLocation.idProvince}`
                );
                setListDistrict(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (currentLocation.idProvince) {
            fetchDistricts();
        }
    }, [currentLocation.idProvince]);

    React.useEffect(() => {
        const fetchWards = async () => {
            try {
                const { data } = await LocationAPI.get(
                    `/commune?idDistrict=${currentLocation.idDistrict}`
                );

                setListWard(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (currentLocation.idDistrict) {
            fetchWards();
        }
    }, [currentLocation.idDistrict]);

    return {
        listProvince,
        listDistrict,
        listWard,
        currentLocation,
        setCurrentLocation,
    };
};

export default useLocation;
