import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Home from '../component/Home';

const mockStore = configureMockStore();
const store = mockStore({
  rocket: {
    rockets: [
      {
        id: '1',
        name: 'Falcon 1',
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
        flickr_images: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        reserved: false,
      },
      {
        id: '2',
        name: 'Falcon 9',
        description: 'Falcon 9 is a partially reusable two-stage-to-orbit medium lift launch vehicle designed and manufactured by SpaceX.',
        flickr_images: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        reserved: true,
      },
    ],
    isLoading: false,
    error: null,
  },
});

describe('Home', () => {
  it('should render the Home component', () => {
    const tree = renderer.create(<Provider store={store}><Home /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render rocket information', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const rocketNameElement = screen.getAllByText(/Falcon 1/i);
    const rocketDescriptionElement = screen.getByText(/The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009/i);
    const rocketImageElement = screen.getAllByAltText('rocket');

    expect(rocketNameElement[0]).toBeInTheDocument();
    expect(rocketDescriptionElement).toBeInTheDocument();
    expect(rocketImageElement[0]).toBeInTheDocument();
  });
});
