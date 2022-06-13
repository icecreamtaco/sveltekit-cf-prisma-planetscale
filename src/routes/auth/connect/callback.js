import { DISCORD_CLIENT_ID } from "../../../lib/constants";
import { DISCORD_CLIENT_SECRET } from "../../../lib/constants";
import { DISCORD_REDIRECT_URI } from "../../../lib/constants";

export async function get({ url }) {
  const returnCode = url.searchParams.get('code')

  const dataObject = {
    client_id: DISCORD_CLIENT_ID,
    client_secret: DISCORD_CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: DISCORD_REDIRECT_URI,
    code: returnCode,
    scope: 'identify'
  };

  // performing a Fetch request to Discord's token endpoint using the return code to generate access token
  const request = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: new URLSearchParams(dataObject),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  const response = await request.json();

  const access_token = await response.access_token


  // Uses AccessToken to get the user id
  const getDiscordUserID = await fetch('https://discordapp.com/api/users/@me', {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${access_token}` }
  });

  const discordUser = await getDiscordUserID.json()

  console.log('discord user id', discordUser.id)

  //Need to add discordUser.id to a row in supabase for a user

  if (response) {

    return {
      headers: { Location: '/' },
      status: 302
    }
  }

}


