import axios from 'axios'

export const login = (username, password) =>
{
	axios(
	{
		method: "POST",
		data:
		{
			username: username,
			password: password
		},
		withCredentials: true,
		url: "http://localhost:5000/login"
	}).then((res) => console.log(res))
}

export const register = (username, password) =>
{
	axios(
	{
		method: "POST",
		data:
		{
			username: username,
			password: password
		},
		withCredentials: true,
		url: "http://localhost:5000/register"
	}).then((res) => console.log(res))
}

export const fetchData = async (data, setData) =>
{
	try
	{
		setData(
		{
			...data,
			isFetching: true
		})
		const res1 = await axios(
		{
			method: "GET",
			withCredentials: true,
			url: "http://localhost:5000/currentUser"
		})

		const res2 = await axios({
			method: "GET",
			withCredentials: true,
			url: "http://localhost:5000/quotes"
		})

		setData(
		{
			quotes: [...res2.data],
			user:
			{
				username: res1.data.username,
				_id: res1.data._id,
				profilePicture: res1.data.profilePicture
			},
			isFetching: false
		})
	}
	catch (err)
	{
		console.log(err)
		setData(
		{
			...data,
			isFetching: false
		})
	}
}

export const changeProfilePicture = (profilePicture) =>
{
	axios(
	{
		method: "PUT",
		data:
		{
			profilePicture: profilePicture
		},
		withCredentials: true,
		url: 'http://localhost:5000/currentUser'
	}).then((res) => console.log(res))
}

export const postQuote = (quoteContent) => {
	const { content, author, username } = quoteContent
	axios({
		method: "POST",
		data: {
			content: content,
			author: author,
			username: username
		},
		withCredentials: true,
		url: 'http://localhost:5000/postQuote'
	}).then((res) => console.log(res))
}
