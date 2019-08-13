# Contributing to Map3

We thank you for contributing to Map3. Here are the guidelines we'd like you to follow:

* [Code of Conduct](#coc)
* [Questions and Problems](#question)
* [Issues and Bugs](#issue)
* [Feature Requests](#feature)
* [Improving Documentation](#docs)
* [Issue Submission Guidelines](#submit)
* [Pull Request Submission Guidelines](#submit-pr)

## <a name="coc"></a> Code of Conduct

Please read and follow our [Code of Conduct][coc] to keep Map3 open and inclusive.

## <a name="requests"></a> Questions, Bugs, Features

### <a name="question"></a> Got a Question or Problem?

Please open issues on Github only for bug reports and feature requests. for general support questions, please post to [Stack Overflow][stackoverflow]. 

### <a name="issue"></a> Found an Issue or Bug?

If you find a bug in the source code, you can help us by submitting an issue to our [GitHub Repository][github]. Even better, you can submit a Pull Request with a fix.

**Please see the [Submission Guidelines](#submit) below.**

### <a name="feature"></a> Missing a Feature?

You can request a new feature by submitting an issue to our [GitHub Repository][github-issues].

If you would like to implement a new feature then consider what kind of change it is:

* **Major Changes** that you wish to contribute to the project should be discussed first in an [GitHub issue][github-issues] that clearly outlines the changes and benefits of the feature.
* **Small Changes** can directly be submitted to the [GitHub Repository][github] as a Pull Request. See the section about [Pull Request Submission Guidelines](#submit-pr), and for detailed information the [development documentation][developers].

### <a name="docs"></a> Want a Doc Fix?

you can open an issue and outline the problem, creating a doc fix yourself is much better!

## <a name="submit"></a> Issue Submission Guidelines
Before you submit your issue, please search keyword at first, maybe your question was already reported or answered. Please do not report duplicate issues.

The "[new issue][github-new-issue]" form contains a number of prompts that you should fill out to make it easier to understand and categorize the issue.

## <a name="submit-pr"></a> Pull Request Submission Guidelines
Before you submit your pull request consider the following guidelines:

* Search for an open or closed Pull Request that relates to your submission. You don't want to duplicate effort.
* Create the [development environment][developers.setup]
* Make your changes in a new git branch:

    ```shell
    git checkout -b my-fix master
    ```

* Create your patch commit, **including appropriate test cases**.
* Follow our [Coding Rules][developers.rules].
* If the changes affect public APIs, change or add relevant [documentation][developers.documentation].
* Run the test suites, and ensure that all tests pass.
* Commit your changes using a descriptive commit message that follows our [commit message conventions][developers.commits]. Adherence to the [commit message conventions][developers.commits] is required, because release notes are automatically generated from these messages.

    ```shell
    git add <FILE>...
    git commit -m <MESSAGE>
    ```

* Before creating the Pull Request, run all tests a last time:

* Push your branch to GitHub:

    ```shell
    git push origin my-fix
    ```

* Create a Pull Request.

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```


[coc]: https://github.com/hyperion-hyn/map3/CODE_OF_CONDUCT.md
[developers]: DEVELOPERS.md
[developers.commits]: DEVELOPERS.md#commits
[developers.documentation]: DEVELOPERS.md#documentation
[developers.rules]: DEVELOPERS.md#rules
[developers.setup]: DEVELOPERS.md#setup
[github]: https://github.com/hyperion-hyn/map3
