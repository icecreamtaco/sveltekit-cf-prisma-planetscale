import { DISCORD_ENDPOINT } from "../../../lib/constants"


export async function get() {
  return {
    headers: { Location: DISCORD_ENDPOINT },
    status: 302
  }
}