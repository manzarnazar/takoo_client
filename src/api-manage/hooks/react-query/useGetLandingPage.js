import MainApi from "../../MainApi";
import {landing_page_api} from "../../ApiRoutes";
import {useQuery} from "react-query";

const getData = async () => {
    const { data } = await MainApi.get(landing_page_api);
    return data;
};

export default function useGetLandingPage(initialData) {
    return useQuery("landing-page-data", getData, {
        enabled: false,
        initialData,
        staleTime: 0,
    });
}