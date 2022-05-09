import { client, checkError } from './client';

export async function getBeanieBabies(from = 0, to = 30) {
  const response = await client
    .from('beanie_babies')
    .select()
    .range(from, to);

  return checkError(response);
}

export async function getSingleBeanie(id) {
  const response = await client
    .from('beanie_babies')
    .select()
    .match({ id })
    .single();

  return checkError(response);

}