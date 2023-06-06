/** image onto base64 */
export default function convertToBase64(fileInput){
    console.log("file ip",fileInput);
    return new Promise((resolve, reject) => {
        if (!fileInput ) {
            reject(new Error("No file selected."));
            return;
        }  
        const fileReader = new FileReader();
        fileReader.readAsDataURL(fileInput);
  
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
  
        fileReader.onerror = (error) => {
            reject(error);
        }
    })
  }
  
  

// /** image onto base64 */
// export default function convertToBase64(file){
//   return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);

//       fileReader.onload = () => {
//           resolve(fileReader.result)
//       }

//       fileReader.onerror = (error) => {
//           reject(error)
//       }
//   })
// }
