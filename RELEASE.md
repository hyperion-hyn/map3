# Map3 Release instructions

## Compare the list of commits between stable and unstable
execute the following command to make sure that good commits (low risk fixes + docs fixes) got cherry-picked into stable branch.
```bash
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative <stable>..<unstable>
```

## Generate release notes

Example Commit: https://github.com/angular/angular.js/commit/7ab5098c14ee4f195dbfe2681e402fe2dfeacd78

1) Run

```bash
git log master..keyless --pretty=format:'[%H]%s' --reverse -v <new version> <base branch> | grep -v Merge > changes.md
```

2) Review the generated file and manually fix typos, group and reorder stuff if needed.
3) Move the content into CHANGELOG.md add release code-names to headers.
4) Push the changes to your private github repo and review.
5) cherry-pick the release notes commit to the appropriate branches.


## Pick a commit to release (for this version)

Usually this will be the commit containing the release notes, but it may also be in the past.


## Update GitHub milestones

1) Create the next milestone if it doesn't exist yet-giving ita due date.
2) Move all open issues and PRs for the current milestone to the next milestone<br>
  You can do this by filtering the current milestone, selecting via checklist, and moving to the next milestone within the GH issues page.

3) Close the current milestone click the milestones tab and close from there.
4) Create a new holding milestone for the release after next-but don't give it a due date otherwise that will mess up the dashboard.


## Announce the release (via official Google accounts)

1) Collect a list of contributors

use: `git log --format='%aN' v1.2.12..v1.2.13 | sort -u`

2) Write a blog post (for minor releases, not patch releases) and publish it with the "release" tag

## Major Release Tasks

1) Update docker images and push to docker.io.
2) Update installation dependency files and push to s3..
3) Write up a migration document.
4) Create a new git branch for the version that has been released (e.g. 1.2.x).
5) Check that node service still work.
6) Write a blog post.