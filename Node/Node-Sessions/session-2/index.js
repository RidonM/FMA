const fs = require("fs").promises;
const path = require("path");

//READ
// async function main() {
//   try {
//     const data = await fs.readFile("fajlli.txt");
//     console.log(data.toString());
//   } catch (err) {
//     throw err;
//   }
// }

//Write
// async function main() {
//   try {
//     fs.writeFile("teksti.txt", "Write file e kemi krijuar me Node JS");
//   } catch (err) {
//     throw err;
//   }
// }

// Update
// async function main() {
//   try {
//     fs.appendFile("teksti.txt", "Bone Update");
//   } catch (err) {
//     throw err;
//   }
// }

// Delete
async function main() {
  try {
    await fs.unlink("teksti.txt");
  } catch (err) {
    throw err;
  }
}

main();
