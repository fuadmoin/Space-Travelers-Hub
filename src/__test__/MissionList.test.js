import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MissionLists from '../component/MissionList';

const mockStore = configureStore([]);

describe('MissionLists', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      mission: {
        missions: [],
      },
    });
  });

  it('should render correctly', () => {
    const mission = {
      mission_id: '1',
      mission_name: 'Mission 1',
      description: 'This is mission 1',
      reserved: false,
    };
    const { getByText } = render(
      <Provider store={store}>
        <MissionLists mission={mission} />
      </Provider>,
    );
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('This is mission 1')).toBeInTheDocument();
    expect(getByText('Not a member')).toBeInTheDocument();
    expect(getByText('Join Mission')).toBeInTheDocument();
  });
});
