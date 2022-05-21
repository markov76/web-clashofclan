const COC_API_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM2NTg1YmRlLWIxYWEtNDhiZS1hYzUxLTVhNzc2NmJiMWYwYyIsImlhdCI6MTY1MzE2MTY1OCwic3ViIjoiZGV2ZWxvcGVyLzBiZTMyOTk5LTg2OWUtZGJkOC1hYjE4LTgwNWVkZjIxMGJmMyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjgwLjIyMS4xNzIuMjIyIl0sInR5cGUiOiJjbGllbnQifV19.3PhBI8AfyaIU9BrGg45uOxswfkf48BpV7DA6qbYLAfwBOJ24f0nX42chrlXBkKbvm5Kn3v3LYnORETdGs1VF_w"; 
const clashApi = require('clash-of-clans-api')

let client = clashApi({
  token: COC_API_TOKEN // Optional, can also use COC_API_TOKEN env variable
});

async function showPlayerInfo(tag) {
  try {
    const playerInfo = await client.playerByTag(tag)
    console.log("this is the player info:", playerInfo)
    document.getElementById('print-here').innerHTML =
    playerInfo.name;
  } catch (error) {
    console.error(error)
  }
}

showPlayerInfo('#2YCUG2QL')
