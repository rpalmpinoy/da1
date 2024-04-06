const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
// const URL = process.env.STRAPI_URL;
const URL = "https://thdoct.onrender.com";

const axiosClient = axios.create({
	baseURL: `${URL}/api`,
	// baseURL: `https://thdoct.onrender.com/api`,
	headers: {
		Authorization: `Bearer ${API_KEY}`,
	},
});

const getCategory = () => axiosClient.get("/categories?populate=*");

const getDoctorList = () => axiosClient.get("/doctors?populate=*");

const getDoctorByCategory = (category) =>
	axiosClient.get(
		"/doctors?filters[categories][Name][$in]=" + category + "&populate=*"
	);
const getDoctorById = (id) => axiosClient.get("/doctors/" + id + "?populate=*");

const bookAppointment = (data) => axiosClient.post("/appointments", data);

const getUserBookingList = (userEmail) =>
	axiosClient.get(
		"/appointments?[filters][Email][$eq]=" +
			userEmail +
			"&populate[doctor][populate][image][populate][0]=url&populate=*"
	);

const deleteBooking = (id) => axiosClient.delete("/appointments/" + id);

const sendEmail = (data) => axios.post("/api/sendEmail", data);
export default {
	getCategory,
	getDoctorList,
	getDoctorByCategory,
	getDoctorById,
	bookAppointment,
	getUserBookingList,
	deleteBooking,
	sendEmail,
};

// const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
// const baseURL = "https://thdoct.onrender.com/api";

// const fetchClient = async (url, options = {}) => {
// 	const response = await fetch(`${baseURL}${url}`, {
// 		headers: {
// 			Authorization: `Bearer ${API_KEY}`,
// 			"Content-Type": "application/json",
// 			...options.headers,
// 		},
// 		...options,
// 	});
// 	return response.json();
// };

// const getCategory = () => fetchClient("/categories?populate=*");

// const getDoctorList = () => fetchClient("/doctors?populate=*");

// const getDoctorByCategory = (category) =>
// 	fetchClient(
// 		`/doctors?filters[categories][Name][$in]=${category}&populate=*`
// 	);

// const getDoctorById = (id) => fetchClient(`/doctors/${id}?populate=*`);

// const bookAppointment = (data) =>
// 	fetchClient("/appointments", {
// 		method: "POST",
// 		body: JSON.stringify(data),
// 	});

// const getUserBookingList = (userEmail) =>
// 	fetchClient(
// 		`/appointments?[filters][Email][$eq]=${userEmail}&populate[doctor][populate][image][populate][0]=url&populate=*`
// 	);

// const deleteBooking = (id) =>
// 	fetchClient(`/appointments/${id}`, { method: "DELETE" });

// const sendEmail = (data) =>
// 	fetch(`/api/sendEmail`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(data),
// 	});

// export default {
// 	getCategory,
// 	getDoctorList,
// 	getDoctorByCategory,
// 	getDoctorById,
// 	bookAppointment,
// 	getUserBookingList,
// 	deleteBooking,
// 	sendEmail,
// };
