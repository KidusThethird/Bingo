export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
  //  console.log(`Return form data.js: + ${query}`)
    return query;
   
}