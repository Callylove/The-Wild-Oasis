import supabase, {supabaseUrl} from "./supabase";

export async function getCabins(){
    
let { data, error } = await supabase
.from('cabins')
.select('*')
if(error){
    console.error(error)
    throw new Error('Cabins could not be loaded')
}
return data;
}
export async function createEditCabin(newCabin,id){  
    console.log(newCabin,id);
    
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/','') 
    console.log(imageName);
    
   const imagePath = hasImagePath ? newCabin.image :  `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
   console.log(imagePath);
   // create/edit cabins
   let query = supabase
   .from('cabins')
   // a) create cabin
   if(!id){
    
   query = query
    .insert([
     {...newCabin, image: imagePath}
    ])
    
} 
// b) edit cabin
if (id){
   query = query.update({...newCabin, image: imagePath}).eq('id',id)
}
    const { data, error } = await query.select().single()
    
        if(error){
            console.error(error)
            throw new Error('Cabins could not be loaded')
        }
        if (hasImagePath) return data
        const { error:storageError } = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, newCabin.image)
        if (storageError) {
          // Handle error
          await supabase
.from('cabins')
.delete()
.eq('id', data.id)
console.error(storageError);
throw new Error('Cabin image could not be uploaded and the cabins could not be created')

        }
        return data;
        }
export async function deleteCabin(id){   
const { error,data } = await supabase
.from('cabins')
.delete()
.eq('id', id)

    if(error){
        console.error(error)
        throw new Error('Cabins could not be deleted')
    }
    return data;
    }