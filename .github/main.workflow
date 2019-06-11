workflow "New workflow" {
  on = "push"
  resolves = ["Publish"]
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "Master" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch master"
  needs = ["Install"]
}

action "Publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Master"]
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
