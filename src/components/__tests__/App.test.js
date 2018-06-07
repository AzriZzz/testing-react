import React from 'react';
import ReactDom from 'react-dom';
import App from '../App';

it('it show comment box', () => {
    const div = document.createElement('div');

    ReactDom.render(<App />, div);

    //Looks inside the div
    //and checks to see if the CommentBox is in there
    expect(div.innerHTML).toContain('Comment Box');

    ReactDom.unmountComponentAtNode(div);
});