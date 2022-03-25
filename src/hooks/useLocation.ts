import axios from "axios";
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

interface IReturnType {
  listProvince: IProvince[];
  listDistrict: IDistrict[];
  listWard: IWard[];
  handleSelectProvince: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSelectDistrict: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LocationAPI = axios.create({
  baseURL: "https://vietnam-location-api.up.railway.app",
});

const useLocation = (): IReturnType => {
  const [listProvince, setListProvince] = React.useState<IProvince[]>([]);
  const [listDistrict, setListDistrict] = React.useState<IDistrict[]>([]);
  const [listWard, setListWard] = React.useState<IWard[]>([]);

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

  const handleSelectProvince = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    try {
      const { data } = await LocationAPI.get(
        `/district?idProvince=${event.target.selectedOptions[0].getAttribute(
          "data-id"
        )}`
      );
      setListDistrict(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectDistrict = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    try {
      const { data } = await LocationAPI.get(
        `/commune?idDistrict=${event.target.selectedOptions[0].getAttribute(
          "data-id"
        )}`
      );

      setListWard(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    listProvince,
    listDistrict,
    listWard,
    handleSelectProvince,
    handleSelectDistrict,
  };
};

export default useLocation;
