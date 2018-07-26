import React from 'react';
import Authors from './Authors';
global.fetch = require('jest-fetch-mock');
import ShallowRenderer from "react-test-renderer/shallow";

it('title is returned when render is called first ',()=>{
    const renderer=new ShallowRenderer();
    renderer.render(<Authors/>);
    const output = renderer.getRenderOutput();
    expect(output).toMatchSnapshot();
});
it('test title and authorlist after component mounted',async ()=>{
    fetch.mockResponseOnce(JSON.stringify([
        {
            name:"Paulo Coelho",
            age:50,
            _id:'cascwdf23213'
        },
        {
            name:"Robin Sharma",
            age:52,
            _id:'cascwdqwwdf23213'
        }
    ]));
    const renderer=new ShallowRenderer();
    renderer.render(<Authors/>);

    const instance=renderer.getMountedInstance();
    await instance.componentDidMount();

    const output = renderer.getRenderOutput();
    expect(output).toMatchSnapshot();
})