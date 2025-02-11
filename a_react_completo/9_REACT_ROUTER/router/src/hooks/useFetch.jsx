/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

// Hook personalizado que faz requisições e guarda dados
export const useFetch = (url) => {
  // Armazena os dados retornados da requisição
  const [data, setData] = useState(null);

  // Configurações para realizar requisições (ex. método, cabeçalhos, body)
  const [config, setConfig] = useState(null);
  // Armazena o método de requisição que será usado (ex. POST)
  const [method, setMethod] = useState(null);
  // Controle para refazer a requisição após mudanças
  const [callFetch, setCallFetch] = useState(null);

  const [loading, setLoading] = useState(false);

  const [erro, setError] = useState(null);

  // Função para configurar a requisição (recebe dados e método)
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: method,       // Método POST
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // Conteúdo em JSON
      });
      setMethod(method);
      
    }
  };

  // Efeito para buscar dados iniciais sempre que a URL ou callFetch mudar
  useEffect(() => {
    const fetchData = async () => {
      try {
      setLoading(true);

      const response = await fetch(url);
      const json = await response.json();
      setData(json);

      
    }catch(err){
      console.log(err.message);
      
      setError("Houve algum erro ao carregar os dados...");
    }
    
    setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);

  // Efeito para enviar dados quando config ou método forem definidos
  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if (method === "POST") {
        // Constrói options para fetch usando desestruturamento
        let fetchOptions = [url, config];
        // Faz a requisição com as opções
        const response = await fetch(...fetchOptions);
        json = await response.json();
      }
      // Atualiza estado para refazer busca
      setCallFetch(json);
    };
    httpRequest();
  }, [config, method, url]);

  // Retorna dados e função de configuração da requisição
  return { data, httpConfig , loading};
};