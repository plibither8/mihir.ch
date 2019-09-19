workflow "New workflow" {
  on = "schedule(1/30 * * * *)"
  resolves = ["Setup Node.js for use with actions"]
}

action "Clone" {
  uses = "Git"
  runs = "git clone --depth=50 --branch=update-activity https://github.com/plibither8/mihir.ch.git ./"
}

action "Change directory" {
  uses = "Git"
  runs = "cd mihir.ch"
  needs = ["Clone"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Change directory"]
  runs = "npm install"
}

action "Setup Node.js for use with actions" {
  uses = "actions/setup-node@e565252a9dec30354d1b3507ab733e40b9580cc9"
  needs = ["GitHub Action for npm"]
  runs = "node update-activity.js"
  secrets = ["GIST_ID", "GITHUB_TOKEN", "SPOTIFY_CLIENT_ID", "SPOTIFY_CLIENT_SECRET", "LASTFM_KEY", "LASTFM_USER", "WAKATIME_KEY", "WAKATIME_USER"]
}
