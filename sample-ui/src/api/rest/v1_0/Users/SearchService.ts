/* tslint:disable */

/**
 * This file was automatically generated by "Swaxios".
 * It should not be modified by hand.
 */

import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {OrganizationUser} from '../../../interfaces/';

export class SearchService {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  getByQuery = async (query: string): Promise<OrganizationUser> => {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `/v1.0/Users/search/${query}`,
    };
    const response = await this.apiClient.request<OrganizationUser>(config);
    return response.data;
  };
}
