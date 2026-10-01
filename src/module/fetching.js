import renderPhoto from "./renderPhotos";
export default async function fetching(BASE_URL, API_KEY, page,list,query) {
  try {
    let response
    if (query) {
       response = await fetch(
         `${BASE_URL}?page=${page}&per_page=12&key=${API_KEY}&q=${query}`,
       );
       
    }
    else{
        response = await fetch(
          `${BASE_URL}?page=${page}&per_page=12&key=${API_KEY}`,
        );
       
    }


if (!response.ok) {
      throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
    }

    const data = await response.json();
    return renderPhoto(data.hits,list);
  } catch (error) {
    console.error("Erreur lors du fetch :", error);
    throw error; 
  }
}
