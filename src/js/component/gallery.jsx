import React, {
    Component,
    PropTypes,
} from 'react';

import GalleryItem from './dalleryItem';

var GalleryArray = [
    {
        urlImg: [
            'https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg',
            'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg'
        ],
        date: '2017-01-01 04:04',
        author:'губка боб',
        title: 'Hello',
        disc: 'A sample photo with short description. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        favouriteImg: 'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg',
        videosId: [],
        id: 0
    },
    {
        urlImg: [
            'https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg',
            'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg'
        ],
        date: '2017-03-25 04:04',
        author:'губка боб',
        title: 'Hello',
        disc: 'A sample photo with short description. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        favouriteImg: 'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg',
        videosId: ['CdGgqC3iqcE'],
        id: 1
    },
    {
        urlImg: [
            'https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg',
            'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg'
        ],
        date: '2017-01-01 04:04',
        author:'губка боб',
        title: 'Hello',
        disc: 'A sample photo with short description. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        favouriteImg: 'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg',
        videosId: [],
        id: 2
    },
    {
        urlImg: [
        ],
        date: '2017-01-01 04:04',
        author:'губка боб',
        title: 'Hello',
        disc: 'A sample photo with short description. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        favouriteImg: null,
        videosId: ['CdGgqC3iqcE'],
        id: 3
    },
    {
        urlImg: [
            'https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg',
            'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg'
        ],
        date: '2017-01-01 04:04',
        author:'губка боб',
        title: 'Hello',
        disc: 'A sample photo with short description. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        favouriteImg: 'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg',
        videosId: ['CdGgqC3iqcE'],
        id: 4
    }
];

var projectsArray = [
    {
        urlImg: [
            'https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg',
            'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg'
        ],
        title: 'Hello',
        disc: 'A sample photo with short description. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        favouriteImg: 'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg',
        videosId: ['CdGgqC3iqcE'],
        id: 4,
        file: [],
        favouriteProjects: true,
        futureProject: true
    },
    {
        urlImg: [
            'https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg',
            'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg'
        ],
        title: 'Hello',
        disc: 'A sample photo with short description. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        favouriteImg: 'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg',
        videosId: ['CdGgqC3iqcE'],
        id: 4,
        file: [],
        favouriteProjects: true,
        futureProject: true
    }
]

class GalleryBox extends Component {


    render() {
        var componentList;
        // console.log('!!!!!', this.props.mode);
        if (this.props.mode === 'gallery') {
            componentList = GalleryArray.map((prop, id) => {
                return (<GalleryItem mode="gallery" prop={prop} key={id} />)
            })
        }
        else if (this.props.mode === 'projects') {
            componentList = GalleryArray.map((prop, id) => {
                return (<GalleryItem mode="projects" prop={prop} key={id} />)
            })
        }
        return (
            <div className="row-fluid">
                <div className="span12">
                    <h1>Галлерея</h1>
                    <div id="gridArea">
                        <ul id="tiles">
                            {componentList}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

// Gallery.propTypes = {};
// Gallery.defaultProps = {};

export default GalleryBox;
