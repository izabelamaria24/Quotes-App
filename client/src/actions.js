import axios from 'axios'

export const login = (username, password) => {
  axios({
    method: "POST",
    data: {
      username: username,
      password: password
    },
    withCredentials: true,
    url: "http://localhost:5000/login"
  }).then((res) => console.log(res))
}

export const register = (username, password) => {
  axios({
    method: "POST",
    data: {
      username: username,
      password: password
    },
    withCredentials: true,
    url: "http://localhost:5000/register"
  }).then((res) => console.log(res))
}

export const fetchUser = async (data, setData) => {
  try {
    setData({...data, isFetching: true})
    const res = await axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/currentUser"
    })
    setData({user: {username: res.data.username, _id: res.data._id}, isFetching: false})
  } catch (err) {
    console.log(err)
    setData({...data, isFetching: false})
  }
}
