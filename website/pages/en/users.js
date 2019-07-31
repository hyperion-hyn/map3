/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
    render() {
        const {config: siteConfig} = this.props;
        if ((siteConfig.users || []).length === 0) {
            return null;
        }
        if ((siteConfig.contents || []).length === 0) {
            return null;
        }

        const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
        const showcase = siteConfig.users.map(user => (
            <a href={user.infoLink} key={user.infoLink}>
                <img src={user.image} alt={user.caption} title={user.caption}/>
            </a>
        ));
        const showcase2 = siteConfig.contents.map(content => (
            <a href={content.infoLink} key={content.infoLink}>
                <img src={content.image} alt={content.caption} title={content.caption}/>
            </a>
        ));

        return (
            <div className="productShowcaseSection">
                <Container>
                    <div
                        style={{
                            display: "flex",
                            flexFlow: "row wrap",
                            justifyContent: "space-evenly"
                        }}
                    >
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div className="prose">
                                <h1>What's on Map3</h1>
                                <p>These content are on Map3 Network</p>
                            </div>
                            <div className="logos">{showcase2}</div>
                            {/*<p>Are you using this project?</p>*/}
                            {/*<a href={editUrl} className="button">*/}
                            {/*Add your company*/}
                            {/*</a>*/}
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div className="prose">
                                <h1>Who's Using Map3?</h1>
                                <p>This project is used by many folks</p>
                            </div>
                            <div className="logos">{showcase}</div>
                            {/*<p>Are you using this project?</p>*/}
                            {/*<a href={editUrl} className="button">*/}
                            {/*Add your company*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

module.exports = Users;
