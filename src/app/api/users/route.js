import fetch from 'node-fetch';

export async function GET() {
  let users = await fetch('https://raw.githubusercontent.com/jonclawson/nextjs-hello-world/refs/heads/main/public/users.json')
    .then(response => response.json())
    .then(data => {
      users = data
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
  return Response.json(users)
}
