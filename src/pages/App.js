import gitHubLogo from "../assets/github.png";
import { Container } from "./styles";
import ItemRepo from "../components/ItemRepo";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { api } from "../services/api";
function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    try {
      
      const response = await api.get(`repos/${currentRepo}`);

      const data = response.data;

      if (data.id) {
  
        const isExist = repos.find((repo) => repo.id === data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo("");
          return;
        }
        else{
          alert("Repositório ja existe na lista");
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Repositório não encontrado ou ja existe na lista");
      } else {
        console.error("An error occurred:", error);
        alert("Ocorreu um erro ao buscar o repositório");
      }
    }
  };

  const handleRemoveRepo = (id) => {
 
    setRepos(repos.filter((repo) => repo.id !== id));
   
    
  }

  return (
    <Container>
      <img src={gitHubLogo} width={72} height={72} alt="github logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
        placeholderText={"usuário/repositório"}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo}/>
      ))}
    </Container>
  );
}

export default App;
