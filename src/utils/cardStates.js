export const cardStates = {
    HIDDEN: 0,
    CANNON: 1,
    PINKIE: 2,
};

export const defaultState = cardStates.HIDDEN;

export const images = {
    [cardStates.HIDDEN]: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png',
    [cardStates.CANNON]: 'https://i.pinimg.com/originals/3f/c4/ed/3fc4ede2202c34836e44a0b763bdc6e9.png',
    [cardStates.PINKIE]: 'https://mlpforums.com/uploads/post_images/img-3657295-1-pinkie_pie_party_vector_by_pikn2-d4phjc7.png',
};

export const getImageSrc = state => images[state];
