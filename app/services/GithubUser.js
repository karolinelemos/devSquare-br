import axios from 'axios';

const GitHubUser = {
  getByUsername(username) {
    return axios.get(`https://api.github.com/users/${username}`);
  }
};

export default GitHubUser;
