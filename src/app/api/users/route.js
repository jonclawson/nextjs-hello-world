import fetch from 'node-fetch';

export async function GET() {
  let users = [];
  try {
    const response = await fetch('https://raw.githubusercontent.com/jonclawson/nextjs-hello-world/refs/heads/main/public/users.json')
    users = await response.json()
  } catch (error) {
    console.error('Error fetching users:', error);
    return new Response('Error fetching users', { status: 500 });
  }
  return Response.json(users)
}
