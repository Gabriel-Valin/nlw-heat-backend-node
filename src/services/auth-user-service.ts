import axios from 'axios'
import 'dotenv/config'

interface IAccessTokenResponse {
    access_token: string
}

interface IUserResponse {
    avatar_url: string
    login: string
    id: number
    name: string
}

export class AuthenticateUserService {
    async execute (code: string) {
        const url = `https://github.com/login/oauth/access_token`

        const { data: githubToken } = await axios.post<IAccessTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_KEY,
                client_secret: process.env.GITHUB_SECRET_KEY,
                code
            },
            headers: {
                "Accept": "application/json"
            }
        })
        
        const response = await axios.get<IUserResponse>(`https://api.github.com/user`, {
            headers: {
                authorization: `Bearer ${githubToken.access_token}`
            }
        })

        return response.data
    }
}