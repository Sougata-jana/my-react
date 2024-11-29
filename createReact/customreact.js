function customRender(reactElement, Container){
    // const domElement = document.createElement(reactElement.type)
    // const domElementTwo = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.childern 
    // domElementTwo.innerHTML = reactElement.childernTWO
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // domElementTwo.setAttribute('href',reactElement.props2.href2)
    // domElementTwo.setAttribute('target2',reactElement.props2.target2)
    // Container.appendChild(domElement)
    // Container.appendChild(domElementTwo)
    const domElement = document.createElement(reactElement.type)
    const domElementTwo = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElementTwo.innerHTML = reactElement.childrenTWO
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    for (const prop  in reactElement.props2) {
        if(prop === 'childrenTWO') continue;
        domElementTwo.setAttribute(prop, reactElement.props2[prop])
    }
Container.appendChild(domElement)
Container.appendChild(domElementTwo)
}

const reactElement = {
    type:'a',
    props:{
        href: 'https://google.com',
        target:'_blank',
    },
    props2:{
        href2:'https://www.youtube.com/',
        target2:'_blank',
    },
     children:  'click me to visit google',

     childrenTWO: 'click me and visit on youtube',
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)