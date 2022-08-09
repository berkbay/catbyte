import api from "../../utils/api";

export const getUser = () => async (dispacth) => {
    dispacth({type: "GET_USER_START"});
    try {
        const response = await api.get("/");
        dispacth({type: "GET_USER_SUCCESS", payload: response.data} );
    } catch {
        dispacth({type: "GET_USER_ERROR"})
    }
}

