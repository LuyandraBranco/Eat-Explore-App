import axios from 'axios';
import { Platform } from 'react-native';
const BASE_URL = 'http://192.168.0.118:3000';

// Função para criar um álbum
export const createAlbumDrive = async (folderName:string, accessToken:string) => {
    try {
      const response = await axios.post(`${BASE_URL}/google-drive/create-folder`, {
        folderName,
        accessToken,
      });
      return response.data;
    } catch (error) {
      console.error('Error creating folder:', error);
      return null;
    }
  };
 
  export const listFiles = async (folderName:string, accessToken:string) => {
    try {
      const response = await axios.get(`${BASE_URL}/google-drive/list-files`, {
        params: { folderName, accessToken },
      });
      return response.data;
    } catch (error) {
      console.error('Error listing files:', error);
      return null;
    }
  };

// Função para fazer upload de um arquivo para o álbum

 export const uploadFiles = async (files:any, accessToken:any, folderName:any) => {
    try {
      const formData = new FormData();
      files.forEach((file:any, index:any) => {
        formData.append('images', {
          uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
          type: file.type,
          name: file.fileName || `file_${index}`,
        });
      });
  
      const response = await axios.post(`${BASE_URL}/google-drive/upload-files`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        params: { accessToken, folderName },  // Include accessToken and folderName as URL parameters
      });
      return response.data;
    } catch (error) {
      console.error('Error uploading files:', error);
      return null;
    }
  };

  //
export const uploadFileToAlbumDrive = async (albumId: string, fileName: string, fileData: string, accessToken: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/google-drive/upload-file`, { albumId, fileName, fileData, accessToken });
    console.log('Arquivo enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar o arquivo para o álbum:', error);
    throw error;
  }
};

// Função para obter todos os arquivos de um álbum
export const getAllFilesFromAlbumDrive = async (albumId: string, accessToken: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/google-drive/get-all-files/${albumId}`, { data: { accessToken } });
    return response.data;
  } catch (error) {
    console.error('Erro na requisição para obter todos os arquivos do álbum:', error);
    return null;
  }
};

export const uploadFile = async (accessToken:string, folderId:string, files:any) => {
  try {
    const formData = new FormData();
    formData.append('accessToken', accessToken);
    formData.append('folderId', folderId);

    files.forEach((file:any, index:any) => {
      formData.append(`images[${index}]`, {
        uri: file.uri,
        type: file.type,
        name: file.fileName,
      });
    });

    const response = await axios.post(`${BASE_URL}/google-drive/upload-files2`, formData);

    console.log(response.data);
    return response.data;
  } catch (error) {
    
    console.error('Error uploading files:', error);
    throw error;
  }
};