require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "UjjwalKumar02",
  "id": 177449946,
  "node_id": "U_kgDOCpOr2g",
  "avatar_url": "https://avatars.githubusercontent.com/u/177449946?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/UjjwalKumar02",
  "html_url": "https://github.com/UjjwalKumar02",
  "followers_url": "https://api.github.com/users/UjjwalKumar02/followers",
  "following_url": "https://api.github.com/users/UjjwalKumar02/following{/other_user}",
  "gists_url": "https://api.github.com/users/UjjwalKumar02/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/UjjwalKumar02/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/UjjwalKumar02/subscriptions",
  "organizations_url": "https://api.github.com/users/UjjwalKumar02/orgs",
  "repos_url": "https://api.github.com/users/UjjwalKumar02/repos",
  "events_url": "https://api.github.com/users/UjjwalKumar02/events{/privacy}",
  "received_events_url": "https://api.github.com/users/UjjwalKumar02/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Ujjwal",
  "company": null,
  "blog": "",
  "location": "Delhi, India",
  "email": null,
  "hireable": null,
  "bio": "Aspiring ML Engineer",
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-08-04T08:18:51Z",
  "updated_at": "2025-05-26T09:57:57Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login", (req, res) => {
  res.send("Login not possible.")
})

app.get('/wallet', (req, res) => {
  res.send('<h1>Empty</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})