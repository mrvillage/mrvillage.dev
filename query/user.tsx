export async function isNameTaken(name: string): Promise<boolean> {
  const response = await fetch(`/api/name-taken?name=${name}`);
  const { taken } = await response.json();
  return taken;
}
