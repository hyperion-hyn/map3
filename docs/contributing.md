---
id: contributing
title: Contributing to Map3
sidebar_label: Contributing to Map3
custom_edit_url: https://github.com/hyperion-hyn/map3/edit/master/docs/contributing.md
---
From opening a bug report to issuing a pull request, every contribution is
much appreciated and welcomed. If you are planning to implement a new feature or
make changes to certain api, please first create an issue. In that case, we can
ensure that your precious work does not left unnoticed. 

## Code of Conduct
Please read and follow our [Code of Conduct](code-of-conduct.md). 

## Questions and Problems

We try to keep our GitHub issues for bug reports and feature requests only. If you have a general
support question, please instead try [Stack Overflow](https://stackoverflow.com/questions/tagged/map3)
Our team are actively answering questions there. Or you might find your question already being
answered.

## Issues and Bugs

If you find a bug in the source code, please kindly submit a new [GitHub Issue](https://github.com/hyperion-hyn/map3/issues)
using this [Template](https://github.com/hyperion-hyn/map3/issues/new?template=bug_report.md). Or even
better, submit a [Pull Request](https://github.com/hyperion-hyn/map3/pulls) with a fix.

## Feature Requests

You can request a new feature by opening a new [GitHub Issue](https://github.com/hyperion-hyn/map3/issues)
using this [Template](https://github.com/hyperion-hyn/map3/issues/new?template=feature_request.md). 

Check our [Road Map]() and see if we have already planned for the feature. 

If you would like to implement a new feature then consider what kind of change it is:
- **Major Changes**: the changes should first be discussed in a [GitHub Issue](https://github.com/hyperion-hyn/map3/issues)
that clearly outlines the changes and benefits of the feature. 
- **Small Changes**: you can directly submit it to the [GitHub Repository](https://github.com/hyperion-hyn/map3)
as a Pull Request. Please see the section about [Pull Request Submission Guidelines](#submit-pr), and for detailed information,
the [core development document](developers.md).

## Improving Documentation

All documentations of the Map3 project are stored under the [docs](https://github.com/hyperion-hyn/map3/edit/master/docs)
folder under the master branch on GitHub. Help us improve the documentations by submitting a 
[Pull Request](https://github.com/hyperion-hyn/map3/pulls)

<a name="submit-pr"></a>
## Pull Request Submission Guidelines
Before you submit your pull request, first consider the following guideline:
- Search [GitHub](https://github.com/hyperion-hyn/map3/pulls) for an open or closed
Pull Request that relates to your submission. You don't want to duplicate effort.
- Create the [development environment](developers.md)
- Make your change in a new git branch:
    ```bash
    git checkout -b my-fix-branch master
    ```
- Create your patch commit, **including appropriate test cases.**
- If the changes affect public APIs, change or add relevant [documentation](developers.md)
- Run [tests](developers.md), and ensure that all tests pass.
- Commit your changes using a descriptive commit message that follows our 
[commit message conventions](developers.md). Adherence to our conventions are required,
 because release notes are automattically generated from these messages.