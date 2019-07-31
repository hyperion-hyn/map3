/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    // const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          {/*<div>*/}
            {/*<h5>Docs</h5>*/}
            {/*<a href={this.docUrl('deploy-docker.html', this.props.language)}>*/}
              {/*Host a Node*/}
            {/*</a>*/}
            {/*<a href={this.docUrl('open-data.html', this.props.language)}>*/}
              {/*Use Map3*/}
            {/*</a>*/}
            {/*<a href={this.docUrl('publish-map.html', this.props.language)}>*/}
              {/*Publish Content*/}
            {/*</a>*/}
          {/*</div>*/}
          {/*<div>*/}
            {/*<h5>Community</h5>*/}
            {/*<a href={this.pageUrl('users.html', this.props.language)}>*/}
              {/*User Showcase*/}
            {/*</a>*/}
            {/*<a*/}
              {/*href="https://stackoverflow.com/questions/tagged/"*/}
              {/*target="_blank"*/}
              {/*rel="noreferrer noopener">*/}
              {/*Stack Overflow*/}
            {/*</a>*/}
            {/*<a href="https://t.me/HyperionOfficialHYN">Telegram</a>*/}
            {/*<a href="https://twitter.com/HyperionHYN">*/}
                {/*@Hyperion on Twitter*/}
            {/*</a>*/}
              {/*<object*/}
                  {/*type="image/svg+xml"*/}
                  {/*data="https://img.shields.io/twitter/follow/HyperionHYN.svg?label=Follow+Hyperion&style=social"*/}
              {/*>*/}
                  {/*<a href="https://twitter.com/intent/follow?screen_name=HyperionHYN">*/}
                      {/*<img*/}
                          {/*alt="Follow Hyperion on Twitter"*/}
                          {/*src="https://img.shields.io/twitter/follow/HyperionHYN.png?label=Follow+Hyperion&style=social"*/}
                      {/*/>*/}
                  {/*</a>*/}
              {/*</object>*/}
          {/*</div>*/}
          <div>
            {/*<h5>More</h5>*/}
            {/*<a href={`${this.props.config.baseUrl}blog`}>Blog</a>*/}
            <a href={this.props.config.repoUrl}>GitHub</a>
            <a href="https://github.com/hyperion-hyn/map3/issues">Issues</a>
            {/*<a*/}
              {/*className="github-button"*/}
              {/*href={this.props.config.repoUrl}*/}
              {/*data-icon="octicon-star"*/}
              {/*data-show-count="true"*/}
              {/*aria-label="Star hyperion-hyn/map3 on GitHub">*/}
              {/*Star*/}
            {/*</a>*/}
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
