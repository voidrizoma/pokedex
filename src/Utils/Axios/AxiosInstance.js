import axiosClient from "./BaseUrl";

export const getRequestPerLimitApi = async (endpointUrl) => {
try{
  const url = "pokemon?limit=10&offset=0"
  const res = await axiosClient.get(endpointUrl || url)
  return res
} catch (err) {console.log(err)}
};

export const getRequestDetailsApi = async (url) => {
  try{
    const res = await axiosClient.get(`${url}`)
    return res
  } catch (err) { console.log(err)}
};
