import axios from 'axios';

const GithubUser = {
  getByUsername(username) {
    return axios.get(`https://api.github.com/users/${username}`);
  }
};

export default GithubUser;
