export const getProjects = async () => {
  // Consumimos el JSON público local simulando delay de red para apreciar el estado Loading
  const response = await fetch('/data/projects.json');
  if (!response.ok) {
    throw new Error('No se pudo cargar la base de datos de proyectos.');
  }
  return await response.json();
};