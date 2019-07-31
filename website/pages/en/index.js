/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

/* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

/* Map3 Components */
// const Carousel = require(`${process.cwd()}/core/Carousel.js`);

class Index extends React.Component {
    render() {
        const {config: siteConfig, language = ''} = this.props;
        const {baseUrl} = siteConfig;

        const Button = props => (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={props.href} target={props.target}>
                    {props.children}
                </a>
            </div>
        );

        const HomeSplash = props => {
            return (
                <div className="homeContainer">
                    <div className="homeSplashFade">
                        <div className="wrapper homeWrapper">
                            <div className="inner">
                                <img src={`${baseUrl}img/map3logo.png`}
                                     alt="Project Logo"
                                     style={{width: 500}}
                                     resizeMode="contain"/>
                                <h2 className="projectTitle">
                                    {/*{siteConfig.title}*/}
                                    <small>{siteConfig.tagline}</small>
                                </h2>
                                <div className="section promoSection">
                                    <div className="promoRow">
                                        <div className="pluginRowBlock">
                                            <Button href={"https://tile.map3.network"}>
                                                Take a Glimpse
                                            </Button>
                                            <Button href={`${baseUrl}docs/install.html`}>
                                                Get Started
                                            </Button>
                                            <Button href={`${baseUrl}docs/how-it-works.html`}>
                                                How it Works
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const Block = props => (
            <Container
                padding={['top', 'bottom']}
                id={props.id}
                background={props.background}>
                <GridBlock
                    align="left"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const Tldr = ({language}) => (
            <div className="tldrSection productShowcaseSection">
                <Container padding={['top', 'bottom']}>
                    <div
                        style={{
                            display: "flex",
                            flexFlow: "row wrap",
                            justifyContent: "space-evenly"
                        }}
                    >
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <h2>What is Map3?</h2>
                            <ul style={{flex: "1"}}>
                                <li>Decentralized p2p network for maps</li>
                                <li>Hosting rich community map contents</li>
                                <li>Strong privacy and trust protocol</li>
                                <li>Compatible with existing map technologies</li>
                                <li>
                                    <a href={`${baseUrl}docs/what-is.html`}><b>Read More...</b></a>
                                </li>
                            </ul>
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <h2>Why Map3?</h2>
                            <ul style={{flex: "1"}}>
                                <li>10x Robustness: <b>free</b> from control</li>
                                <li>10x Openness: <b>free</b> to participate</li>
                                <li>10x Efficiency: <b>free</b> base map</li>
                                <li>
                                    <a href={`${baseUrl}docs/why-map3.html`}><b>And More...</b></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        );

        const Experience = ({language}) => (
            <div className="experienceSection">
                <Block layout="threeColumn">
                    {[
                        {
                            image: `${baseUrl}img/map.png`,
                            imageAlign: 'left',
                            imageLink: `${baseUrl}docs/data-api.html`,
                            title: 'Use Map3 Service',
                            content: 'Tile service through api and sdk.',
                        },
                        {
                            image: `${baseUrl}img/network.png`,
                            imageAlign: 'left',
                            imageLink: `${baseUrl}docs/deploy-docker.html`,
                            title: 'Host a Node',
                            content: 'Host an edge node of Map3.',
                        },
                        {
                            image: `${baseUrl}img/passion.png`,
                            imageAlign: 'left',
                            imageLink: `${baseUrl}docs/publish-map.html`,
                            title: 'Provide Map Content',
                            content: 'Contribute to Map3 data content.',
                        },
                    ]}
                </Block>
            </div>
        );

        const Showcase = () => {
            if ((siteConfig.users || []).length === 0) {
                return null;
            }

            const showcase = siteConfig.users
                .filter(user => user.pinned)
                .map(user => (
                    <a href={user.infoLink} key={user.infoLink}>
                        <img src={user.image} alt={user.caption} title={user.caption}/>
                    </a>
                ));

            return (
                <div className="productShowcaseSection">
                    <h2>Who's Using This?</h2>
                    <p>This project is used by all these people</p>
                    <div className="logos">{showcase}</div>
                    <div className="more-users">
                        <a className="button" href={`${baseUrl}users.html`}>
                            More {siteConfig.title} Users
                        </a>
                    </div>
                </div>
            );
        };

        return (
            <div>
                <HomeSplash language={language}/>
                <div className="mainContainer">
                    <Tldr/>
                    <Experience/>
                    {/*<Carousel/>*/}
                    <Showcase/>
                </div>
            </div>
        );
    }
}

module.exports = Index;
