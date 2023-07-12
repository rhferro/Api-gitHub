import axios from "axios";
import { langColors } from "./config";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const getUser = async (login) => api.get(`/users/${login}`);

export const getRepos = async (login) => api.get(`/users/${login}/repos`);

export default api;

export const getLanguagesFrom = (repositories) => {
  let stats = repositories
    .map((repos) => repos.language)
    .reduce(
      (count, language) => ({
        ...count,
        [language]: (count[language] || 0) + 1,
      }),
      []
    );

  delete stats.null;

  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);
  return stats;
};
