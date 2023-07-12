import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import { Loading, Container, SideBar, Main } from "./styles";
import { getUser, getRepos, getLanguagesFrom } from "../../services/api";

export default function RepositoriesPage() {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setLanguages(getLanguagesFrom(repositoriesResponse.data));

      setLoading(false);
    };
    loadData();
  }, []);

  const onFilterClick = (languague) => {
    setCurrentLanguage(languague);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <SideBar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </SideBar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}
