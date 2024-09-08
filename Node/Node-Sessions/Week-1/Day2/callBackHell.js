async function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id);
    }, 2000);
  });
}

async function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userId + 1);
    }, 2000);
  });
}

async function getComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(postId + 1);
    }, 2000);
  });
}
const userData = await getUser(2);

const userPosts = await getPosts(userData);
console.log(userPosts);

const userComments = await getComments(userPosts);
console.log(userData, ",", userPosts, ", ", userComments);
