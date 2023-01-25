import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import api from '../../services/api';
import { Repo } from './types';

async function getRepositories(context: QueryFunctionContext) {
  const [_, userId] = context.queryKey;

  const { data } = await api.get<Repo[]>(`/users/${userId}/repos`);

  return data;
}

export default function useFetchRepositories(userId: string) {
  return useQuery(['get-repositories', userId], getRepositories);
}
