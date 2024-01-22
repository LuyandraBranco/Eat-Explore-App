import axios from 'axios';
import {CreateFatiaAlbumDto} from '../../screens/Fotos/CreateFatiaAlbumDto';

const BASE_URL = 'http://192.168.0.118:3000';

// Função que recebe o nome do álbum e retorna o seu ID

export const fetchAlbumId = async (albumName: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/album/id/${albumName}`);
    return response.data;
  } catch (error) {
    console.log('proprio')
    console.error('Erro na requisição AlbumId:', error);
    return null;
  }
};

// Função que recebe o idAlbum e retorna o seu IdFolder

export const getIdFolder = async (albumId: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/album/${albumId}/idFolder`);
    return response.data;
  } catch (error) {
    //console.log('proprio')
    console.error('Erro na requisição AlbumId:', error);
    return null;
  }
};

// Função que recebe o ID do álbum e retorna os IDs dos participantes associados a ele

export const fetchParticipantIdsByAlbumId = async (idAlbum: any) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/participant/participants/${idAlbum}`,
    );
    return response.data;
  } catch (error) {
    console.log('part')
    console.error('Erro na requisição partic :', error);
    throw error;
  }
};

// Função que recebe o ID do participante e retorna os IDs das fatias do álbum em que ele participa
export const fetchidFatiaAlbumbyIdParticipant = async (idP: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/fatia-album/idf/${idP}`);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição idF:', error);
    throw error;
  }
};

// Função que recebe o ID do proprietário e retorna os IDs das fatias do álbum em que ele participa
export const fetchidFatiaAlbumbyIdProp = async (idP: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/fatia-album/idprop/${idP}`);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição idF:', error);
    throw error;
  }
};

// Função que recebe o ID da fatia do álbum e retorna as URLs associadas
export const fetchurlFatiaAlbum = async (idF: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/fatia-album/url/${idF}`);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição url2 :', error);
    throw error;
  }
};

// Função que recebe o ID do usuário e o ID do álbum e retorna informações sobre a participação do usuário no álbum
export const fetchParticipant = async (idUser: any, idAlbum: any) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/participant/id/${idUser}/${idAlbum}`,
    );
    return response.data;
  } catch (error) {
    console.error('Erro na requisição Paticipant:', error);
    return 1;
  }
};

// Função que recebe o nome do álbum e retorna o ID do autor do álbum
export const fetchAuthorId = async (albumName: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/album/authorId/${albumName}`);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição authorId:', error);
    return null;
  }
};

// Função que cria uma nova fatia de álbum
export const createFatiaAlbum = async (data: CreateFatiaAlbumDto) => {
  try {
    const response = await axios.post(`${BASE_URL}/fatia-album`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Resposta da criação de FatiaAlbum:', response.data);

    return response.data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

// Função que cria um novo participante

export const createParticipant = async (participantData: any) => {
  try {
    const response = await fetch(`${BASE_URL}/participant`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(participantData),
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error(`Erro ao criar participante: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Erro ao criar participante: ${error}`);
  }
};

// Função que recebe o ID do autor e retorna os álbuns associados a esse autor
export const fetchAlbums = async (authorId: any) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/album/album-authorId/${authorId}`,
    );

    if (response.status !== 200) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    throw new Error(`Erro ao fazer a requisição: ${error}`);
  }
};

// Função que recebe o ID do usuário e retorna os IDs dos álbuns associados a esse usuário
export const fetchAlbumIdsByUser = async (userId: any) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/participant/albums/${userId}`,
    );

    if (response.status !== 200) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    throw new Error(`Erro ao fazer a requisição: ${error}`);
  }
};

// Função que recebe o ID do álbum e retorna o nome do álbum
export const fetchAlbumNameById = async (albumId: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/album/name/${albumId}`);

    if (response.status !== 200) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    throw new Error(`Erro ao fazer a requisição: ${error}`);
  }
};

// Função que recebe o nome de usuário e retorna o ID do usuário
export const getUserIdByUsername = async (username: any) => {
  try {
    const response = await fetch(
      `${BASE_URL}/user/by-username?username=${username}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.ok) {
      const user = await response.json();
      return user.idUser;
    } else {
      throw new Error(`Erro ao encontrar o usuário: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Erro ao encontrar o usuário: ${error}`);
  }
};

// Função que recebe o nome do álbum e retorna o ID do álbum
export const getAlbumIdByName = async (albumName: any) => {
  try {
    const response = await fetch(`${BASE_URL}/album/id/${albumName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Erro ao buscar o ID do álbum: ${error}`);
  }
};

// Função que cria um novo álbum
export const createAlbum = async (
  albumName: any,
  authorId: any,
  catalog: any,
  idFolder: string,
) => {
  try {
    const response = await fetch(`${BASE_URL}/album`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: albumName,
        authorId: authorId,
        catalog: catalog,
        idFolder: idFolder,
      }),
    });

    if (response.ok) {
      console.log('Álbum criado com sucesso!');
    } else {
      console.log('Erro ao criar o álbum:', response.statusText);
    }
  } catch (error) {
    console.error('Erro ao criar o álbum:', error);
  }
};

// Função que recebe o nome de usuário e retorna informações sobre o usuário
export const findUserByUsername = async (username: any) => {
  try {
    const response = await fetch(
      `${BASE_URL}/user/by-username?username=${username}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.ok) {
      const user = await response.json();
      console.log('Usuário encontrado:', user);
      return user;
    } else {
      console.log('Erro ao encontrar o usuário:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Erro ao encontrar o usuário:', error);
    return null;
  }
};
